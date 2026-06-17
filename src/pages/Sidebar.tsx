import { useState } from "react";
import { MoreVertical, X } from "lucide-react";

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });

const GAO_TEK_START = new Date(2026, 5, 15);

const NAV_ITEMS: { id: Section; label: string }[] = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "honors", label: "Awards" },
  { id: "problemSolving", label: "Competitive" },
  { id: "article", label: "Article" },
];

const coverPic = new URL("../assets/images/cover.png", import.meta.url).href;
const profilePic = new URL("../assets/images/profile.png", import.meta.url).href;

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
          className="p-2 border-2 border-black hover:bg-neon hover:text-black"
        >
          <MoreVertical className="w-6 h-6" />
        </button>
      </div>

      {/* Profile Card */}
      <div className="border-2 border-black">
        {/* Cover Photo */}
        <div className="relative h-24 bg-neon">
          <img
            src={coverPic}
            alt="Rifat Hossain rifatbroh — Cover photo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Picture positioned over cover */}
        <div className="relative px-6 pb-6">
          <div className="relative -mt-16 mx-auto w-32 h-32 mb-6">
            <div className="w-32 h-32 border-4 border-black bg-white flex items-center justify-center">
              <img
                src={profilePic}
                alt="Rifat Hossain rifatbroh — Software Engineer and 4x Hackathon Winner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-2xl uppercase">rifat hossain</h3>
            <p className="text-sm font-bold">
              4X Hackathon Winner | Software Engineer
            </p>
            <p className="text-sm">Cumilla, Bangladesh</p>
          </div>

          {/* Button Section */}
          <div className="flex flex-row gap-2 mt-8">
            <button
              onClick={onResumeDownload}
              className="group flex flex-1 items-center justify-center gap-2 border-2 border-black px-3 py-2.5 text-sm font-bold hover:bg-neon hover:text-black"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </button>
            
            <button
              onClick={onContactClick}
              className="flex flex-1 items-center justify-center gap-2 bg-neon text-black px-3 py-2.5 text-sm font-bold hover:bg-black hover:text-white"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu - Desktop only */}
      <div className="hidden md:block border-2 border-black p-6">
        <nav className="space-y-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full text-left text-lg uppercase px-2 py-1 -mx-2 ${
                activeSection === item.id ? "font-bold text-neon" : "hover:bg-neon hover:text-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

{/* Working Experience */}
<div className="border-2 border-black p-6">
  <div className="flex items-center gap-2 mb-6">
    <h3 className="text-xl font-bold uppercase">Working Experience</h3>
  </div>

  <div className="space-y-6 relative">
    {/* Vertical Timeline Thread Line */}
    <div className="absolute left-1.75 top-2 bottom-2 w-0.5 bg-black"></div>

    {/* Gao Tek Inc (Active) */}
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-4 h-4 border-2 border-black bg-neon z-10"></div>
      <div>
        <h4 className="font-bold text-sm leading-tight uppercase">HR Intern (Remote)</h4>
        <p className="text-xs font-bold mt-0.5">Gao Tek Inc</p>
        <p className="text-[10px] font-bold mt-1 tracking-tighter uppercase">{formatDate(GAO_TEK_START)} — Present</p>
      </div>
    </div>

    {/* BCC Internship */}
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-4 h-4 border-2 border-black z-10"></div>
      <div>
        <h4 className="font-bold text-sm leading-tight uppercase">Software Engineer</h4>
        <p className="text-xs font-bold mt-0.5">BCC Internship</p>
        <p className="text-[10px] font-bold mt-1 tracking-tighter uppercase">2025 — 2026</p>
      </div>
    </div>

    {/* Previous Role */}
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-4 h-4 border-2 border-black z-10"></div>
      <div>
        <h4 className="font-bold text-sm leading-tight uppercase">Problem Solver</h4>
        <p className="text-xs font-bold mt-0.5">Codeforces/Leetcode</p>
        <p className="text-[10px] font-bold mt-1 tracking-tighter uppercase">2023 — 2025</p>
      </div>
    </div>

    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-4 h-4 border-2 border-black z-10"></div>
      <div>
        <h4 className="font-bold text-sm leading-tight uppercase">Frontend Developer</h4>
        <p className="text-xs font-bold mt-0.5">Client Based</p>
        <p className="text-[10px] font-bold mt-1 tracking-tighter uppercase">2022 — 2023</p>
      </div>
    </div>

    {/* University Role */}
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-4 h-4 border-2 border-black z-10"></div>
      <div>
        <h4 className="font-bold text-sm leading-tight uppercase">Wordpress Designer</h4>
        <p className="text-xs font-bold mt-0.5">Fiver</p>
        <p className="text-[10px] font-bold mt-1 tracking-tighter uppercase">2021 — 2022</p>
      </div>
    </div>
  </div>
</div>

      {/* Meeting Bar Section */}
      <div className="border-2 border-black p-6">
        <h3 className="font-bold mb-3 text-center uppercase">
          Schedule a Meeting
        </h3>
        <p className="text-center text-sm mb-4">
          Let's discuss your project!
        </p>
        <button className="w-full bg-neon text-black px-4 py-2 font-bold hover:bg-black hover:text-white">
          Book a Meeting
        </button>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 z-40 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-72 bg-white z-50 md:hidden overflow-y-auto border-l-2 border-black">
            <div className="p-4 flex justify-end">
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 border-2 border-black hover:bg-neon hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="px-4 pb-6">
              <nav className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left text-lg uppercase py-2 px-2 -mx-2 ${
                      activeSection === item.id ? "font-bold text-neon" : "hover:bg-neon hover:text-black"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
