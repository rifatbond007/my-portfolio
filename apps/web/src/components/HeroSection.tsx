import type { ReactNode } from "react";

interface HeroSectionProps {
  name: string;
  title: string;
  description: ReactNode[];
}

export function HeroSection({ name, title, description }: HeroSectionProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl md:text-5xl uppercase font-bold tracking-wide">
        Hello! I'm <span className="text-neon">{name}</span>
      </h1>
      <p className="text-base md:text-lg font-bold">{title}</p>
      <div className="space-y-4 text-sm md:text-base">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}
