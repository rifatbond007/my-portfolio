import { Hono } from "hono";

const app = new Hono();

// ─── helpers ──────────────────────────────────────────────────────────────

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// ─── routes ───────────────────────────────────────────────────────────────

app.get("/health", (c) => c.json({ ok: true, service: "portfolio-api" }));

app.notFound((c) => json({ error: "Not found" }, 404));

app.onError((err, c) => {
  console.error("unhandled:", err);
  return json({ error: "Internal server error" }, 500);
});

export default app;
