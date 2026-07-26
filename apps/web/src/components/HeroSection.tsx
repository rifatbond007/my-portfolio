import type { ReactNode } from "react";

interface SocialLink {
  href: string;
  icon: ReactNode;
  label: string;
  primary?: boolean;
}

interface HeroSectionProps {
  description: ReactNode[];
  socialLinks: SocialLink[];
}

export function HeroSection({ description, socialLinks }: HeroSectionProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-3 text-sm md:text-base leading-relaxed">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors ${
              link.primary
                ? "bg-[#18181b] text-white border-[#18181b] hover:bg-[#27272a]"
                : "bg-[#f4f4f5] text-[#18181b] border-[#e4e4e7] hover:bg-[#e4e4e7]"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
