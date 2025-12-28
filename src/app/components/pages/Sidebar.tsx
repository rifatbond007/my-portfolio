const profilePic = new URL("../../../assets/profile.png", import.meta.url).href;
const coverPic = new URL("../../../assets/cover.png", import.meta.url).href;

type Section = "about" | "projects" | "honors" | "article";

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
  return (
    <div className="space-y-6">
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
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-semibold text-2xl">rifat hossain</h3>
            <p className="text-sm text-gray-600">
              4X Hackathon Winner | Software Engineer
            </p>
            <p className="text-sm text-gray-600">Cumilla, Bangladesh</p>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={onResumeDownload}
              className="flex-1 border border-black rounded-lg px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
            >
              📄 View Resume
            </button>
            <button
              onClick={onContactClick}
              className="flex-1 bg-black text-white rounded-lg px-4 py-2 text-sm hover:bg-gray-800 transition-colors"
            >
              contact me
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-gray-100 rounded-2xl p-6">
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
            Honor & Awards
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
    </div>
  );
}