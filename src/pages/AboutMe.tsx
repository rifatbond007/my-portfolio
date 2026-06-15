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
    I'm a <span className="font-semibold">Software Engineer</span> with experience across various technologies. My journey began in Game Development, and now I'm exploring the fascinating world of Backend and Distributed Systems.
  </>,
  "Currently, I primarily work with JavaScript/TypeScript, while maintaining proficiency in C/C++ and Python for academic pursuits. When not coding, you'll find me gaming with friends, reading books, or playing acoustic guitar.",
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
