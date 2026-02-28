interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 md:p-6">
      <h3 className="font-semibold text-lg md:text-xl mb-2">{title}</h3>
      <p className="text-gray-700 mb-3 text-sm md:text-base">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-black text-white rounded text-xs md:text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
