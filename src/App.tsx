import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

// Import page components
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import HonorsAwards from "./pages/HonorsAwards";
import Article from "./pages/Article";
import ProblemSolving from "./pages/ProblemSolving";

type Section = "about" | "projects" | "honors" | "article" | "problemSolving";

// --- Terminal Loader Component ---
const TerminalLoader = () => {
  const [line, setLine] = useState("");
  const fullText = "> Initializing portfolio_v2.0... [OK]";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setLine(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#0a0a0a] font-mono text-sm md:text-base">
      <div className="w-full max-w-md px-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-2 text-gray-300">
          <p className="text-blue-400">system_user@rifatbond1:~$ <span className="text-white">{line}</span></p>
          {line.length >= fullText.length && (
            <>
              <p className="animate-pulse text-green-500">√ Build successful</p>
              <p className="text-gray-500 text-xs mt-4">Starting development server...</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSection]);

  const handleDownloadResume = () => {
    const url = "https://drive.google.com/file/d/12NrKCTrThRDmJ47e97mH9KIG1W1xRVo_/view?usp=sharing";
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const renderPage = () => {
    switch (activeSection) {
      case "about": return <AboutMe />;
      case "projects": return <Projects />;
      case "honors": return <HonorsAwards />;
      case "article": return <Article />;
      case "problemSolving": return <ProblemSolving />;
      default: return <AboutMe />;
    }
  };

  return (
    <>
      {/* Conditional Loader */}
      {isLoading && <TerminalLoader />}

      {/* Main Content: We use opacity and transition for a smooth reveal */}
      <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 xl:p-12 min-h-[90vh]">
          <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] xl:grid-cols-[350px_1fr] gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            <Sidebar
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              onContactClick={() => setIsContactOpen(true)}
              onResumeDownload={handleDownloadResume}
            />

            <div className="p-4 md:p-6 lg:p-8 bg-gray-50 rounded-2xl">
              {renderPage()}
            </div>
          </div>
          <Footer />
        </div>

        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogContent className="bg-white">
            <DialogHeader>
              <DialogTitle>Contact Me</DialogTitle>
              <DialogDescription>
                Send me a message and I'll get back to you as soon as possible.
              </DialogDescription>
            </DialogHeader>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent! (This is a demo)");
                setIsContactOpen(false);
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="What's this about?" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea placeholder="Your message..." rows={5} required />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  className="flex-1 border border-black rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
