import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Side - Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm md:text-base"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm md:text-base"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm md:text-base"
          >
            <Mail className="w-5 h-5" />
            <span className="hidden sm:inline">Email</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm md:text-base"
          >
            <Facebook className="w-5 h-5" />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors text-sm md:text-base"
          >
            <Instagram className="w-5 h-5" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>

        {/* Right Side - Made by */}
        <div>
          <p className="text-gray-600 text-sm">Made by rifatbroh | 2025</p>
        </div>
      </div>
    </div>
  );
}