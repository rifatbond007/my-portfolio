import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./app/components/ui/dialog";
import { Input } from "./app/components/ui/input";
import { Textarea } from "./app/components/ui/textarea";

// Import page components
import Sidebar from "./app/components/pages/Sidebar";
import Footer from "./app/components/pages/Footer";
import AboutMe from "./app/components/pages/AboutMe";
import Projects from "./app/components/pages/Projects";
import HonorsAwards from "./app/components/pages/HonorsAwards";
import Article from "./app/components/pages/Article";

type Section = "about" | "projects" | "honors" | "article";

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>("about");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleDownloadResume = () => {
    const url = "https://drive.google.com/file/d/12NrKCTrThRDmJ47e97mH9KIG1W1xRVo_/view?usp=sharing";
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    // Fallback for non-window environments
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
      case "about":
        return <AboutMe />;
      case "projects":
        return <Projects />;
      case "honors":
        return <HonorsAwards />;
      case "article":
        return <Article />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-12 min-h-[90vh]">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12">
          {/* Left Sidebar */}
          <Sidebar
            activeSection={activeSection}
            onSectionChange={setActiveSection}
            onContactClick={() => setIsContactOpen(true)}
            onResumeDownload={handleDownloadResume}
          />

          {/* Right Content Area */}
          <div className="p-8 bg-gray-50 rounded-2xl">
            {renderPage()}
          </div>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>

      {/* Contact Form Dialog */}
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
              <Input
                type="email"
                placeholder="your.email@example.com"
                required
              />
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
  );
}