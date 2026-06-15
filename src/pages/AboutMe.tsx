import { HeroSection } from "../components/HeroSection";
import { SkillList } from "../components/SkillList";

const skillCategories = [
  { label: "Programming", skills: "Nodejs, DotNet Standard, Python, C/C++, SQL" },
  { label: "Server", skills: "Express.js, Flask, Elastic Stack, RabbitMQ, BullMQ, Docker, Kubernetes" },
  { label: "Database", skills: "PostgreSQL, MySQL, NoSQL, Redis, KeyDB, Dragonfly, Firebase, MongoDB" },
  { label: "Telemetry", skills: "Open Telemetry, Prometheus, Grafana, Loki, Vector" },
  { label: "Cloud", skills: "CPanel, CloudPanel, DigitalOcean, Bunny, Cloudflare" },
  { label: "CI/CD", skills: "GitHub Actions, Jest, Supertest, Selenium, Cypress" },
  { label: "Web/Media", skills: "Unity3D, HTML/CSS, TailwindCSS, ReactJS, Photoshop, Wondershare Filmora" },
  { label: "Others", skills: "Prompt Engineering, Product Management" },
];

const description = [
  <>
    I'm <span className="font-semibold">Rifat Hossain (rifatbroh)</span>, a <span className="font-semibold">Software Engineer</span> from Cumilla, Bangladesh with a proven track record as a <span className="font-semibold">4x hackathon winner</span>. My journey began in Game Development, and now I specialize in Backend and Distributed Systems engineering.
  </>,
  "I primarily work with JavaScript/TypeScript and Node.js for backend services, while maintaining strong proficiency in C/C++ and Python. My expertise spans database systems (PostgreSQL, Redis, MongoDB), containerization (Docker, Kubernetes), and observability (OpenTelemetry, Prometheus, Grafana). Outside of engineering, I enjoy gaming, reading, and playing acoustic guitar.",
];

export default function AboutMe() {
  return (
    <>
      <HeroSection
        name="Rifat Hossain"
        title="Software Engineer specializing in Backend Systems."
        description={description}
      />
      <SkillList title="Skills" skills={skillCategories} />
    </>
  );
}
