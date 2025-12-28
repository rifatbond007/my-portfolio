import { Github, Linkedin, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center flex-wrap gap-4">
        {/* Left Side - Social Icons */}
        <div className="flex gap-6">
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-700 hover:text-black transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
        </div>

        {/* Right Side - Made by */}
        <div>
          <p className="text-gray-600">Made by rifatbroh | 2025</p>
        </div>
      </div>
    </div>
  );
}