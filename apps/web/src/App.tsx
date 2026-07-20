import { useEffect, useState } from "react";

import { ContactDialog } from "./components/ContactDialog";
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Article from "./pages/Article";
import ProblemSolving from "./pages/ProblemSolving";

type Section = "about" | "projects" | "article" | "problemSolving";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Scroll to top on mobile when navigating between sections.
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/12NrKCTrThRDmJ47e97mH9KIG1W1xRVo_/view?usp=sharing",
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
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 xl:p-12 min-h-[90vh]">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] xl:grid-cols-[350px_1fr] gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          <Sidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            onContactClick={() => setIsContactOpen(true)}
            onResumeDownload={handleDownloadResume}
          />
          <div className="p-4 md:p-6 lg:p-8 bg-white">{renderPage()}</div>
        </div>
        <Footer />
      </div>
      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </div>
  );
}
