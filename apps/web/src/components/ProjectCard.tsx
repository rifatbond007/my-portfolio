import { ArrowUpRight } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  /** Optional links — a button is shown only when the URL is set. */
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  index: number;
  project: Project;
}

export function ProjectCard({ index, project }: ProjectCardProps) {
  const links = [
    { href: project.github, label: "Code" },
    { href: project.live, label: "Live" },
  ].filter((l): l is { href: string; label: string } => Boolean(l.href));

  return (
    <li className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-b py-6 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-4">
      <span className="text-2xl font-bold leading-none text-muted group-hover:text-accent sm:text-3xl">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div>
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <h3 className="text-lg font-bold uppercase leading-tight">{project.title}</h3>
          {links.length > 0 && (
            <div className="flex gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 border-2 border-black px-2 py-0.5 text-xs font-bold uppercase hover:bg-black hover:text-white"
                >
                  {link.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          )}
        </div>

        <p className="mt-2 text-sm leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="border-2 border-black px-2 py-0.5 text-xs font-bold">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
