import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  { href: "#", Icon: Github, label: "GitHub" },
  { href: "#", Icon: Linkedin, label: "LinkedIn" },
  { href: "#", Icon: Mail, label: "Email" },
  { href: "#", Icon: Facebook, label: "Facebook" },
  { href: "#", Icon: Instagram, label: "Instagram" },
] as const;

export default function Footer() {
  return (
    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm md:text-base"
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
        <div>
          <p className="text-gray-600 text-sm">Made by rifatbroh | 2025</p>
        </div>
      </div>
    </div>
  );
}