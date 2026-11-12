import { useEffect, useState } from "react";

import ProfileHeader from "./components/ProfileHeader";
import { ExperienceCard } from "./components/IntroCards";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Article from "./pages/Article";
import ProblemSolving from "./pages/ProblemSolving";
import type { Section } from "./types/section";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");

  // Scroll to top on mobile when navigating between sections.
  useEffect(() => {
    if (window.innerWidth < 768) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1d_tVB-P8XOh29AibCe844DJ5PDOOnI2q/view?usp=sharing",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const renderPage = () => {
    switch (activeSection) {
      case "about": return <AboutMe />;
      case "projects": return <Projects />;
      case "article": return <Article />;
      case "problemSolving": return <ProblemSolving />;
    }
  };

  return (
    // Desktop: the page is exactly one screen tall; header + experience stay put and
    // only the tab content column scrolls. Mobile keeps normal page scrolling.
    <div className="min-h-screen bg-page text-fg lg:flex lg:h-screen lg:flex-col lg:overflow-hidden">
      <ProfileHeader
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        onResumeDownload={handleDownloadResume}
      />

      <main className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-4 py-6 lg:min-h-0 lg:flex-1 lg:grid-cols-[270px_minmax(0,1fr)] lg:grid-rows-[minmax(0,1fr)] lg:gap-10 lg:px-8 lg:pb-0">
        <aside className="no-scrollbar lg:overflow-y-auto">
          <ExperienceCard />
        </aside>
        <div className="no-scrollbar min-w-0 lg:overflow-y-auto">
          <div className="space-y-8">{renderPage()}</div>
          <Footer />
        </div>
      </main>
    </div>
  );
}
