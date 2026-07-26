import { HeroSection } from "../components/HeroSection";
import { SkillList } from "../components/SkillList";
import { Github, Linkedin, Mail } from "lucide-react";

const awards = [
  { title: "CHAMPION", event: "Spring Fest Hackathon", year: "2026", location: "Cumilla, BD" },
  { title: "2nd RUNNERS UP", event: "BAIUST Fall Fest X Prompt Engineering", year: "2025", location: "Cumilla, BD" },
  { title: "1st RUNNERS UP", event: "BAIUST Fall Fest X Hackathon", year: "2025", location: "Cumilla, BD" },
  { title: "CHAMPION", event: "CSE Fest Hackathon", year: "2025", location: "Cumilla, BD" },
  { title: "2nd RUNNERS UP", event: "Devfest AI Hackathon", year: "2023", location: "Cumilla, BD" },
];

const skillCategories = [
  { label: "Programming", skills: "Node.js, Python, C/C++, TypeScript, SQL" },
  { label: "Backend", skills: "Express.js, Flask, RabbitMQ, BullMQ, REST APIs" },
  { label: "Database", skills: "PostgreSQL, MySQL, MongoDB, Redis, Firebase" },
  { label: "DevOps", skills: "Docker, Kubernetes, GitHub Actions, Jest, Cypress" },
  { label: "Telemetry", skills: "OpenTelemetry, Prometheus, Grafana, Loki" },
  { label: "Cloud", skills: "AWS, Cloudflare, CPanel, Bunny" },
  { label: "Frontend", skills: "Next.js, HTML/CSS, TailwindCSS, React" },
  { label: "Others", skills: "Prompt Engineering" },
  { label: "Soft Skills", skills: "Product Management, HR Management" },
];

const description = [
  <>
    Software Engineer who refactors first, ships second. I build backend services, wire up observability, and break codebases apart to see how they hold up. Whatever I'm working on, the question I keep asking is: <strong><em>can this survive production?</em></strong>
  </>,
];

const socialLinks = [
  {
    href: "https://github.com/rifatbond007",
    icon: <Github className="w-4 h-4" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rifat-hossain-6b21741b3/",
    icon: <Linkedin className="w-4 h-4" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:rifat164440@gmail.com",
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
  },
  {
    href: "https://www.tiktok.com/@rifatbroh",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.19 8.19 0 004.78 1.53V11.3a4.85 4.85 0 01-.2-.61z"/>
      </svg>
    ),
    label: "TikTok",
    primary: true,
  },
];

export default function AboutMe() {
  return (
    <>
      <HeroSection
        description={description}
        socialLinks={socialLinks}
      />

      <SkillList title="Skills" skills={skillCategories} />

      <section className="mt-8 pt-6 border-t border-black/15">
        <div className="flex items-baseline mb-4">
          <h2 className="text-2xl uppercase font-bold tracking-wide">Awards</h2>
        </div>
        <ul>
          {awards.map((award) => (
            <li
              key={`${award.title}-${award.event}-${award.year}`}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 py-2 border-t border-black/15"
            >
              <div>
                <p className="font-bold uppercase text-sm">{award.title}</p>
                <p className="text-sm text-[var(--color-muted)]">{award.event}</p>
              </div>
              <p className="font-mono text-xs text-[var(--color-muted)]">
                <span className="text-[var(--color-accent)] font-medium">{award.year}</span>
                {" · "}
                {award.location}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
