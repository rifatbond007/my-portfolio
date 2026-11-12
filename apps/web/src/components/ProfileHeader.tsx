import { useState } from "react";
import {
  CalendarDays,
  FileText,
  FolderGit2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MoreVertical,
  Newspaper,
  Trophy,
  User,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "../lib/cn";
import { PROFILE_NAME, coverPic, profilePic } from "../lib/profile";
import type { Section } from "../types/section";

const TABS: { id: Section; label: string; icon: LucideIcon }[] = [
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "problemSolving", label: "Competitive", icon: Trophy },
  { id: "article", label: "Articles", icon: Newspaper },
];

// Labels used in the mobile drawer (same as the previous sidebar menu).
const DRAWER_ITEMS: { id: Section; label: string }[] = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "problemSolving", label: "Competitive" },
  { id: "article", label: "Article" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/rifatbond007", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/rifat-hossain-6b21741b3/", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:rifat164440@gmail.com", icon: Mail, label: "Email" },
];

interface ProfileHeaderProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  onResumeDownload: () => void;
}

export default function ProfileHeader({
  activeSection,
  onSectionChange,
  onResumeDownload,
}: ProfileHeaderProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerNav = (section: Section) => {
    onSectionChange(section);
    setIsDrawerOpen(false);
  };

  return (
    <header className="mx-auto w-full max-w-5xl shrink-0 px-4 pt-4 lg:px-8">
      {/* Mobile menu button */}
      <div className="mb-4 flex justify-end md:hidden">
        <button
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
          className="border-2 border-black p-2 hover:bg-black hover:text-white"
        >
          <MoreVertical className="h-6 w-6" />
        </button>
      </div>

      {/* Profile: cover + identity */}
      <section className="mb-4">
        <div className="h-28 overflow-hidden rounded-md bg-hover sm:h-36 lg:h-44">
          <img
            src={coverPic}
            alt={`${PROFILE_NAME} — cover photo`}
            width="1024"
            height="176"
            className="h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <div className="flex flex-col items-center gap-4 px-5 pb-5 sm:flex-row sm:items-start sm:gap-6 sm:px-6 sm:pb-6">
          <img
            src={profilePic}
            alt={`${PROFILE_NAME} — Software Engineer and 5x Hackathon Winner`}
            width="128"
            height="128"
            className="-mt-14 h-28 w-28 shrink-0 rounded-full border-4 border-page bg-hover object-cover sm:-mt-16 sm:h-32 sm:w-32"
            decoding="async"
          />

          <div className="min-w-0 flex-1 text-center sm:pt-4 sm:text-left">
            <h1 className="text-2xl font-bold leading-tight sm:text-3xl">{PROFILE_NAME}</h1>
            <p className="mt-1 text-sm font-bold">5X Hackathon Winner | Software Engineer</p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <p className="inline-flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="h-4 w-4" />
                Cumilla, Bangladesh
              </p>
              <span className="hidden h-4 w-px bg-black/20 sm:block" aria-hidden />
              <ul className="flex gap-2">
                {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                      aria-label={label}
                      title={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 hover:bg-black hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex w-full gap-2 sm:w-auto sm:flex-col sm:pt-4">
            <button
              onClick={() => import("../lib/cal").then((m) => m.scheduleMeeting())}
              className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap border border-accent bg-accent px-4 py-2 text-sm font-bold text-white hover:bg-accent-strong"
            >
              <CalendarDays className="h-4 w-4" />
              Book Meeting
            </button>
            <button
              onClick={onResumeDownload}
              className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap border bg-card px-4 py-2 text-sm font-bold hover:bg-hover"
            >
              <FileText className="h-4 w-4" />
              Resume
            </button>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <nav
        className="hidden gap-1 rounded-full border bg-card p-1 md:inline-flex"
        aria-label="Sections"
      >
        {TABS.map(({ id, label, icon: Icon }) => {
          const active = id === activeSection;
          return (
            <button
              key={id}
              onClick={() => onSectionChange(id)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide",
                active ? "bg-black text-white" : "text-muted hover:bg-hover hover:text-fg",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Mobile drawer */}
      {isDrawerOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/80 md:hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
          <div className="fixed right-0 top-0 z-50 h-full w-72 overflow-y-auto border-l-2 border-black bg-white md:hidden">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close menu"
                className="border-2 border-black p-2 hover:bg-black hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="space-y-2 px-4 pb-6">
              {DRAWER_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleDrawerNav(item.id)}
                  className={cn(
                    "-mx-2 w-full px-2 py-2 text-left text-lg uppercase",
                    activeSection === item.id
                      ? "bg-black font-bold text-white"
                      : "hover:bg-black hover:text-white",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
