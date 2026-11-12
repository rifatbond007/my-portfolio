import { Card } from "../components/Card";

const awards = [
  { title: "CHAMPION", event: "Spring Fest Hackathon", year: "2026", location: "Cumilla, BD" },
  { title: "2nd RUNNERS UP", event: "BAIUST Fall Fest X Prompt Engineering", year: "2025", location: "Cumilla, BD" },
  { title: "1st RUNNERS UP", event: "BAIUST Fall Fest X Hackathon", year: "2025", location: "Cumilla, BD" },
  { title: "CHAMPION", event: "CSE Fest Hackathon", year: "2025", location: "Cumilla, BD" },
  { title: "2nd RUNNERS UP", event: "Devfest AI Hackathon", year: "2023", location: "Cumilla, BD" },
];

const skillCategories = [
  { label: "Languages", skills: "TypeScript, JavaScript, Python, C/C++, SQL" },
  { label: "Backend", skills: "Node.js, Express.js, Flask, REST APIs" },
  { label: "Messaging", skills: "RabbitMQ, BullMQ" },
  { label: "Database", skills: "PostgreSQL, MySQL, MongoDB, Redis, Firebase" },
  { label: "DevOps", skills: "Docker, Kubernetes, GitHub Actions" },
  { label: "Cloud", skills: "AWS, Cloudflare, Bunny.net, cPanel" },
  { label: "Observability", skills: "OpenTelemetry, Prometheus, Grafana, Loki" },
  { label: "Testing", skills: "Jest, Cypress" },
  { label: "Frontend", skills: "React, Next.js, Tailwind CSS, HTML/CSS" },
  { label: "Others", skills: "Prompt Engineering" },
  { label: "Soft Skills", skills: "Product Management, HR Management" },
];

export default function AboutMe() {
  return (
    <>
      <Card title="About">
        <p className="text-justify hyphens-auto text-[15px] leading-relaxed">
          Software Engineer who refactors first, ships second. I build backend services, wire up
          observability, and break codebases apart to see how they hold up. Whatever I'm working
          on, the question I keep asking is: <strong><em>can this survive production?</em></strong>
        </p>
      </Card>

      <Card title="Skills">
        <div className="space-y-4">
          {skillCategories.map((skill) => (
            <div key={skill.label} className="grid grid-cols-1 gap-2 sm:grid-cols-[150px_1fr] md:gap-4">
              <div className="text-sm font-bold uppercase">{skill.label}</div>
              <div className="text-sm">{skill.skills}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Awards">
        <ul>
          {awards.map((award) => (
            <li
              key={`${award.title}-${award.event}-${award.year}`}
              className="flex flex-col gap-1 border-t py-2 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <div>
                <p className="text-sm font-bold uppercase">{award.title}</p>
                <p className="text-sm text-muted">{award.event}</p>
              </div>
              <p className="font-mono text-xs text-muted">
                <span className="font-medium text-accent">{award.year}</span>
                {" · "}
                {award.location}
              </p>
            </li>
          ))}
        </ul>
      </Card>
    </>
  );
}
