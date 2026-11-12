import { ProjectCard, type Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory management and payment integration.",
    technologies: ["Node.js", "React", "PostgreSQL"],
  },
  {
    title: "Distributed Task Queue",
    description:
      "Scalable task processing system using RabbitMQ and microservices architecture.",
    technologies: ["RabbitMQ", "Docker", "Redis"],
  },
  {
    title: "Game Analytics Dashboard",
    description:
      "Real-time analytics platform for game metrics using Grafana and Prometheus.",
    technologies: ["Unity3D", "Grafana", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section>
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-wide">Projects</h2>
        <span className="text-xs font-bold uppercase text-muted">
          {String(projects.length).padStart(2, "0")} Projects
        </span>
      </div>

      <ol className="mt-4 border-t-2 border-black">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} index={i} project={project} />
        ))}
      </ol>
    </section>
  );
}
