import { ProjectCard } from "../components/ProjectCard";

const projects = [
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
    <div className="space-y-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl">Projects</h2>
      <div className="space-y-4 md:space-y-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
