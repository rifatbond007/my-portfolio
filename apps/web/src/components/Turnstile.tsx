import { useEffect, useRef, useState } from "react";

const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";

interface TurnstileProps {
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    onloadTurnstileCallback?: () => void;
  }
}

let scriptLoaded = false;
let scriptLoading = false;
const scriptLoaders: Array<() => void> = [];

function loadTurnstileScript(): Promise<void> {
  return new Promise((resolve) => {
    if (scriptLoaded) return resolve();
    if (scriptLoading) {
      scriptLoaders.push(resolve);
      return;
    }
    scriptLoading = true;
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      resolve();
      scriptLoaders.splice(0).forEach((cb) => cb());
    };
    s.onerror = () => {
      scriptLoading = false;
      resolve(); // resolve anyway; we'll show an error in the widget
    };
    document.head.appendChild(s);
  });
}

export function Turnstile({ onVerify }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!siteKey) {
      setError("Missing VITE_TURNSTILE_SITE_KEY");
      return;
    }

    let cancelled = false;
    let widgetId: string | null = null;

    loadTurnstileScript().then(() => {
      if (cancelled || !containerRef.current || !window.turnstile) return;
      try {
        widgetId = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => onVerify(token),
          "expired-callback": () => onVerify(""),
          "error-callback": () => {
            onVerify("");
            setError("CAPTCHA failed to load");
          },
          theme: "light",
        });
        widgetIdRef.current = widgetId;
      } catch (err) {
        setError(err instanceof Error ? err.message : "CAPTCHA error");
      }
    });

    return () => {
      cancelled = true;
      if (widgetIdRef.current && window.turnstile?.remove) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          /* noop */
        }
      }
    };
  }, [siteKey, onVerify]);

  if (!siteKey) {
    return (
      <p className="text-xs font-bold uppercase text-red-600">
        CAPTCHA not configured
      </p>
    );
  }

  return (
    <div className="space-y-1">
      <div ref={containerRef} />
      {error && (
        <p className="text-xs font-bold uppercase text-red-600">{error}</p>
      )}
    </div>
  );
}
