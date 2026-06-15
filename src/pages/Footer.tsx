import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/rifatbond007", Icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/rifat-hossain-6b21741b3/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/mohammad.rifat.800703", Icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/rifatbroh_39/", Icon: Instagram, label: "Instagram" },
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
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm md:text-base"
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>
        <div>
          <p className="text-gray-600 text-sm">Made by rifatbroh | {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}