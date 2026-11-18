import { useCallback, useEffect, useRef, useState } from "react";
import { PartyPopper, X } from "lucide-react";

const TOAST_MS = 3000;
const TOAST_EXIT_MS = 300;

// The milestone being celebrated. Matches the current role in IntroCards.
const NEW_ROLE = { role: "Software Engineer L1", company: "Cashless AI" };

const COLORS = ["#047857", "#10b981", "#1c1917", "#f59e0b", "#f43f5e", "#0ea5e9"];

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

interface Piece {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  spin: number;
}

// Dependency-free confetti: two bursts from the bottom corners, drawn on a full-screen canvas.
function fireConfetti(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  const dpr = window.devicePixelRatio || 1;
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  ctx.scale(dpr, dpr);

  const pieces: Piece[] = [];
  for (const side of [0, 1]) {
    for (let i = 0; i < 90; i++) {
      const angle = (side === 0 ? -60 : -120) + (Math.random() - 0.5) * 50;
      const speed = 9 + Math.random() * 9;
      pieces.push({
        x: side === 0 ? 0 : w,
        y: h,
        vx: Math.cos((angle * Math.PI) / 180) * speed,
        vy: Math.sin((angle * Math.PI) / 180) * speed * 1.3,
        size: 6 + Math.random() * 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * Math.PI,
        spin: (Math.random() - 0.5) * 0.3,
      });
    }
  }

  let frame = 0;
  const start = performance.now();
  const tick = (now: number) => {
    const elapsed = now - start;
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = elapsed > 3000 ? Math.max(0, 1 - (elapsed - 3000) / 1000) : 1;
    for (const p of pieces) {
      p.vy += 0.25;
      p.vx *= 0.99;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.spin;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
      ctx.restore();
    }
    if (elapsed < 4000) frame = requestAnimationFrame(tick);
    else ctx.clearRect(0, 0, w, h);
  };
  frame = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frame);
}

export default function Celebration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stopRef = useRef<() => void>(() => {});
  // Toast lifecycle: shown -> leaving (exit animation) -> hidden.
  const [toast, setToast] = useState<"shown" | "leaving" | "hidden">("shown");

  const celebrate = useCallback(() => {
    if (!canvasRef.current || prefersReducedMotion()) return;
    stopRef.current();
    stopRef.current = fireConfetti(canvasRef.current);
  }, []);

  // Confetti on every page load.
  useEffect(() => {
    const t = window.setTimeout(celebrate, 400);
    return () => {
      window.clearTimeout(t);
      stopRef.current();
    };
  }, [celebrate]);

  // Toast stays visible for 3s, then slides out.
  useEffect(() => {
    if (toast === "hidden") return;
    const t = window.setTimeout(
      () => setToast(toast === "shown" ? "leaving" : "hidden"),
      toast === "shown" ? TOAST_MS : TOAST_EXIT_MS,
    );
    return () => window.clearTimeout(t);
  }, [toast]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[60] h-full w-full"
      />

      {toast !== "hidden" && (
        <div
          role="status"
          className={
            "fixed inset-x-4 top-4 z-50 flex items-center gap-3 overflow-hidden border-2 border-black bg-card p-3 sm:inset-x-auto sm:right-6 sm:top-6 sm:max-w-sm " +
            (toast === "leaving" ? "motion-safe:animate-toast-out" : "motion-safe:animate-toast-in")
          }
        >
          <button
            onClick={celebrate}
            aria-label="Celebrate again"
            title="Celebrate again"
            className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent text-white hover:bg-accent-strong"
          >
            <PartyPopper className="h-5 w-5 motion-safe:animate-wiggle" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold uppercase tracking-wide text-accent">New role!</p>
            <p className="text-sm leading-snug">
              Just joined <span className="font-bold">{NEW_ROLE.company}</span> as{" "}
              {NEW_ROLE.role}.
            </p>
          </div>
          <button
            onClick={() => setToast("leaving")}
            aria-label="Dismiss"
            className="shrink-0 self-start p-1 text-muted hover:text-fg"
          >
            <X className="h-4 w-4" />
          </button>
          {/* Shrinks over the 3s the toast is visible. */}
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1 origin-left bg-accent motion-safe:animate-toast-timer"
          />
        </div>
      )}
    </>
  );
}
