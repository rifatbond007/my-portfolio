import { useState } from "react";
import { MoreVertical, X } from "lucide-react";

const profilePic = new URL("../assets/images/profile.png", import.meta.url).href;
const coverPic = new URL("../assets/images/cover.png", import.meta.url).href;
const rifat = new URL("../assets/images/profile.png", import.meta.url).href;

type Section = "about" | "projects" | "honors" | "article" | "problemSolving";

interface SidebarProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  onContactClick: () => void;
  onResumeDownload: () => void;
}

export default function Sidebar({
  activeSection,
  onSectionChange,
  onContactClick,
  onResumeDownload,
}: SidebarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleNavClick = (section: Section) => {
    onSectionChange(section);
    setIsDrawerOpen(false);
  };

  return (
    <div className="space-y-6 w-full max-w-[360px] mx-auto md:mx-0 md:max-w-none">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button 
          onClick={() => setIsDrawerOpen(true)}
          className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
        >
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-gray-100 rounded-2xl overflow-hidden">
        {/* Cover Photo */}
        <div className="relative h-24 bg-linear-to-r from-teal-400 to-teal-500">
          <img
            src={coverPic}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Picture positioned over cover */}
        <div className="relative px-6 pb-6">
          <div className="relative -mt-16 mx-auto w-32 h-32 mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-lg flex items-center justify-center">
              <img
                src={rifat}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-2xl">rifat hossain</h3>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">4X</span> Hackathon Winner | Software Engineer
            </p>
            <p className="text-sm text-gray-600">Cumilla, Bangladesh</p>
          </div>

          {/* Redesigned Button Section */}
          <div className="flex flex-row gap-2 mt-8">
            <button
              onClick={onResumeDownload}
              className="group flex flex-1 items-center justify-center gap-2 border border-gray-200 bg-white text-gray-700 rounded-xl px-3 py-2.5 text-sm font-bold shadow-sm hover:border-teal-500 hover:text-black transition-all duration-200 active:scale-95"
            >
              <svg 
                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>
            
            <button
              onClick={onContactClick}
              className="flex flex-1 items-center justify-center gap-2 bg-black text-white rounded-xl px-3 py-2.5 text-sm font-bold shadow-lg shadow-gray-200 hover:bg-zinc-800 transition-all duration-200 active:scale-95"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Desktop only */}
      <div className="hidden md:block bg-gray-100 rounded-2xl p-6">
        <nav className="space-y-2">
          <button
            onClick={() => onSectionChange("about")}
            className={`w-full text-left text-lg hover:font-semibold transition-all ${
              activeSection === "about" ? "font-semibold" : ""
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => onSectionChange("projects")}
            className={`w-full text-left text-lg hover:font-semibold transition-all ${
              activeSection === "projects" ? "font-semibold" : ""
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => onSectionChange("honors")}
            className={`w-full text-left text-lg hover:font-semibold transition-all ${
              activeSection === "honors" ? "font-semibold" : ""
            }`}
          >
            Awards
          </button>
            <button
            onClick={() => onSectionChange("problemSolving")}
            className={`w-full text-left text-lg hover:font-semibold transition-all ${
              activeSection === "problemSolving" ? "font-semibold" : ""
            }`}
          >
            Competitive
          </button>

          <button
            onClick={() => onSectionChange("article")}
            className={`w-full text-left text-lg hover:font-semibold transition-all ${
              activeSection === "article" ? "font-semibold" : ""
            }`}
          >
            Article
          </button>
        </nav>
      </div>

{/* Working Experience */}
<div className="bg-gray-100 rounded-2xl p-6">
  <div className="flex items-center gap-2 mb-6">
    <h3 className="text-xl text-black">Working Experience</h3>
  </div>

  <div className="space-y-6 relative">
    {/* Vertical Timeline Thread Line */}
    <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-gray-300"></div>

    {/* Senior Role (Highlighted) */}
    <div className="relative pl-8">
      {/* Active Dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-gray-100 bg-teal-500 z-10 shadow-sm"></div>
      <div>
        <h4 className="font-bold text-sm text-gray-900 leading-tight">Software Engineer</h4>
        <p className="text-xs font-semibold text-teal-600 mt-0.5">BCC Internship</p>
        <p className="text-[10px] font-bold text-gray-400 mt-1 tracking-tighter uppercase">2025 — Present</p>
      </div>
    </div>

    {/* Previous Role */}
    <div className="relative pl-8">
      {/* Dimmed Dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-gray-100 bg-gray-400 z-10"></div>
      <div>
        <h4 className="font-bold text-sm text-gray-800 leading-tight">Problem Solver</h4>
        <p className="text-xs font-semibold text-gray-600 mt-0.5">Codeforces/Leetcode</p>
        <p className="text-[10px] font-bold text-gray-400 mt-1 tracking-tighter uppercase">2023 — 2025</p>
      </div>
    </div>

        <div className="relative pl-8">
      {/* Dimmed Dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-gray-100 bg-gray-400 z-10"></div>
      <div>
        <h4 className="font-bold text-sm text-gray-800 leading-tight">Frontend Developer</h4>
        <p className="text-xs font-semibold text-gray-600 mt-0.5">Client Based</p>
        <p className="text-[10px] font-bold text-gray-400 mt-1 tracking-tighter uppercase">2022 — 2023</p>
      </div>
    </div>

    {/* University Role */}
    <div className="relative pl-8">
      {/* Dimmed Dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-gray-100 bg-gray-400 z-10"></div>
      <div>
        <h4 className="font-bold text-sm text-gray-800 leading-tight">Wordpress Designer</h4>
        <p className="text-xs font-semibold text-gray-600 mt-0.5">Fiver</p>
        <p className="text-[10px] font-bold text-gray-400 mt-1 tracking-tighter uppercase">2021 — 2022</p>
      </div>
    </div>
  </div>
</div>

      {/* Meeting Bar Section */}
      <div className="bg-gray-100 rounded-2xl p-6">
        <h3 className="font-semibold mb-3 text-center">
          Schedule a Meeting
        </h3>
        <p className="text-center text-gray-600 text-sm mb-4">
          Let's discuss your project!
        </p>
        <button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
          Book a Meeting
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-72 bg-gray-100 z-50 md:hidden overflow-y-auto transform transition-transform duration-300 ease-in-out">
            <div className="p-4 flex justify-end">
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="px-4 pb-6">
              <nav className="space-y-2">
                <button
                  onClick={() => handleNavClick("about")}
                  className={`w-full text-left text-lg hover:font-semibold transition-all py-2 ${
                    activeSection === "about" ? "font-semibold" : ""
                  }`}
                >
                  About Me
                </button>
                <button
                  onClick={() => handleNavClick("projects")}
                  className={`w-full text-left text-lg hover:font-semibold transition-all py-2 ${
                    activeSection === "projects" ? "font-semibold" : ""
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => handleNavClick("honors")}
                  className={`w-full text-left text-lg hover:font-semibold transition-all py-2 ${
                    activeSection === "honors" ? "font-semibold" : ""
                  }`}
                >
                  Awards
                </button>
                <button
                  onClick={() => handleNavClick("problemSolving")}
                  className={`w-full text-left text-lg hover:font-semibold transition-all py-2 ${
                    activeSection === "problemSolving" ? "font-semibold" : ""
                  }`}
                >
                  Competitive
                </button>
                <button
                  onClick={() => handleNavClick("article")}
                  className={`w-full text-left text-lg hover:font-semibold transition-all py-2 ${
                    activeSection === "article" ? "font-semibold" : ""
                  }`}
                >
                  Article
                </button>
              </nav>

            </div>
          </div>
        </>
      )}
    </div>
  );
}
