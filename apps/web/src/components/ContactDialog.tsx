import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./Dialog";
import { ContactSchema } from "@portfolio/shared/contact";
import { Turnstile } from "./Turnstile";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Status = "idle" | "submitting" | "success" | "error";

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [token, setToken] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Reset form whenever dialog closes.
  useEffect(() => {
    if (!open) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setCompany("");
      setToken("");
      setStatus("idle");
      setErrorMsg(null);
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const parsed = ContactSchema.safeParse({
      name,
      email,
      subject,
      message,
      company,
      turnstileToken: token,
    });

    if (!parsed.success) {
      const issues = parsed.error.flatten().fieldErrors;
      const first = Object.values(issues).flat()[0];
      setErrorMsg(typeof first === "string" ? first : "Please check your inputs.");
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(parsed.data),
        },
      );

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? `Request failed (${res.status})`);
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  const submitting = status === "submitting";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white max-w-lg">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Send a message and I'll get back to you. Or book a 30-min meeting instead.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="space-y-4 py-2">
            <p className="font-bold uppercase text-sm" style={{ color: "var(--color-accent)" }}>
              ✓ Message sent
            </p>
            <p className="text-sm text-[var(--color-muted)]">
              Thanks — I'll reply within a couple of days.
            </p>
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              className="w-full border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {/* Honeypot — visually & screen-reader hidden */}
            <div
              className="absolute h-0 w-0 overflow-hidden"
              style={{ left: -9999 }}
              aria-hidden
            >
              <label>
                Company (leave blank)
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>
            </div>

            <Field label="Name">
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-black bg-white px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-accent)]"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-black bg-white px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-accent)]"
              />
            </Field>
            <Field label="Subject">
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full border-2 border-black bg-white px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-accent)]"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-2 border-black bg-white px-3 py-2 text-sm focus:outline-none focus:border-[var(--color-accent)] resize-y"
              />
            </Field>

            <Turnstile onVerify={setToken} />

            {errorMsg && (
              <p className="text-xs font-bold uppercase text-red-600">
                {errorMsg}
              </p>
            )}

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="flex-1 border-2 border-black px-4 py-2 text-sm font-bold hover:bg-black hover:text-white"
                disabled={submitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting || !token}
                className="flex-1 bg-[var(--color-neon)] text-black px-4 py-2 text-sm font-bold hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending…" : "Send"}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase mb-1 tracking-wide">
        {label}
      </label>
      {children}
    </div>
  );
}
