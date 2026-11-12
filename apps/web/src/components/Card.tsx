import type { ReactNode } from "react";
import { cn } from "../lib/cn";

interface CardProps {
  title?: string;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
}

/** Plain content section separated from the previous one by a divider line. */
export function Card({ title, action, className, children }: CardProps) {
  return (
    <section className={cn("border-t pt-6 first:border-t-0 first:pt-0", className)}>
      {title && (
        <div className="mb-4 flex items-center justify-between gap-2">
          <h2 className="text-2xl font-bold uppercase tracking-wide">{title}</h2>
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="border px-2.5 py-1 text-xs font-bold text-fg">{children}</span>
  );
}
