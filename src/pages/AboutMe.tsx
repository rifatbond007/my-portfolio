import { HeroSection } from "../components/HeroSection";
import { SkillList } from "../components/SkillList";

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
    I'm a <span className="font-bold text-neon">Software Engineer</span> designing distributed infrastructure. I build resilient services, observability pipelines, and APIs that scale.
  </>,
  "Currently, I primarily work with JavaScript/TypeScript and Python, with C/C++ for performance-critical components. I care about clean architecture, measurable reliability, and shipping work that holds up in production.",
];

export default function AboutMe() {
  return (
    <>
      <HeroSection
        name="Rifat Hossain"
        title="Software Engineer building resilient backend systems."
        description={description}
      />

      <SkillList title="Skills" skills={skillCategories} />

      <section className="mt-8 pt-6 border-t border-black/15">
        <div className="flex items-baseline mb-4">
          <h2 className="text-4xl uppercase font-bold tracking-wide">Awards</h2>
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
