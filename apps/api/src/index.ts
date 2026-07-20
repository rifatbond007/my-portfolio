import { Hono } from "hono";
import { cors } from "hono/cors";
import {
  ContactSchema,
  RATE_LIMIT_PER_WINDOW,
  RATE_LIMIT_WINDOW_SECONDS,
} from "@portfolio/shared/contact";

type Bindings = {
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
  ALLOWED_ORIGINS: string;
  SUBMISSIONS: KVNamespace;
};

const app = new Hono<{ Bindings: Bindings }>();

// ─── helpers ──────────────────────────────────────────────────────────────

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const clientIp = (req: Request): string =>
  req.headers.get("cf-connecting-ip") ??
  req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
  "unknown";

const allowedOrigins = (raw: string) =>
  raw.split(",").map((s) => s.trim()).filter(Boolean);

// Verify Cloudflare Turnstile token server-side.
async function verifyTurnstile(token: string, ip: string, secret: string) {
  const form = new URLSearchParams({ secret, response: token, remoteip: ip });
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: form },
  );
  if (!res.ok) return false;
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

// Increment a per-IP counter and return the new value. TTL = window seconds.
async function incrementRateLimit(kv: KVNamespace, key: string, ttl: number) {
  const current = await kv.get(key);
  const count = current ? parseInt(current, 10) : 0;
  const next = count + 1;
  // Reset TTL each write so a steady drip doesn't accumulate beyond window.
  await kv.put(key, String(next), { expirationTtl: ttl });
  return next;
}

// Send the actual email via Resend.
async function sendEmail(env: Bindings, payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: payload.email,
      subject: `[Portfolio] ${payload.subject}`,
      text: `From: ${payload.name} <${payload.email}>\n\n${payload.message}\n\n— sent from portfolio contact form`,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend failed: ${res.status} ${body}`);
  }
}

const SUBMISSION_TTL_SECONDS = 90 * 24 * 60 * 60; // 90 days

async function persistSubmission(
  kv: KVNamespace,
  data: Record<string, unknown>,
) {
  const key = `submission:${crypto.randomUUID()}`;
  await kv.put(key, JSON.stringify(data), {
    expirationTtl: SUBMISSION_TTL_SECONDS,
  });
}

// ─── routes ───────────────────────────────────────────────────────────────

app.get("/health", (c) => c.json({ ok: true, service: "portfolio-api" }));

app.use(
  "*",
  cors({
    origin: (origin, c) => {
      const allowed = allowedOrigins(c.env.ALLOWED_ORIGINS);
      // Same-origin (no Origin header) or matching origin is allowed.
      if (!origin) return origin;
      return allowed.includes(origin) ? origin : null;
    },
    allowMethods: ["POST", "GET", "OPTIONS"],
    allowHeaders: ["Content-Type"],
    maxAge: 600,
  }),
);

app.post("/contact", async (c) => {
  let body: unknown;
  try {
    body = await c.req.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      400,
    );
  }
  const input = parsed.data;

  // Honeypot check — bots fill the hidden field; humans don't.
  if (input.company && input.company.length > 0) {
    // Pretend success to avoid tipping off the bot.
    return json({ ok: true });
  }

  const ip = clientIp(c.req.raw);
  const env = c.env;

  // Rate limit per IP.
  const rlKey = `rl:${ip}`;
  const count = await incrementRateLimit(
    env.SUBMISSIONS,
    rlKey,
    RATE_LIMIT_WINDOW_SECONDS,
  );
  if (count > RATE_LIMIT_PER_WINDOW) {
    return json({ error: "Too many requests. Try again later." }, 429);
  }

  // Verify CAPTCHA.
  const captchaOk = await verifyTurnstile(
    input.turnstileToken,
    ip,
    env.TURNSTILE_SECRET_KEY,
  );
  if (!captchaOk) {
    return json({ error: "CAPTCHA verification failed" }, 400);
  }

  // Send email.
  try {
    await sendEmail(env, {
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
    });
  } catch (err) {
    console.error("email send failed:", err);
    return json({ error: "Failed to send email" }, 502);
  }

  // Persist submission (best-effort; don't fail the user if storage errors).
  try {
    await persistSubmission(env.SUBMISSIONS, {
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
      ip,
      userAgent: c.req.header("user-agent") ?? null,
      receivedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error("kv persist failed:", err);
  }

  return json({ ok: true });
});

app.notFound((c) => json({ error: "Not found" }, 404));

app.onError((err, c) => {
  console.error("unhandled:", err);
  return json({ error: "Internal server error" }, 500);
});

export default app;
