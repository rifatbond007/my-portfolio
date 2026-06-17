interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <div className="border-2 border-black p-6 hover:border-neon">
      <h3 className="font-bold text-xl uppercase mb-2">{title}</h3>
      <p className="mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <span key={tech} className={`px-3 py-1 border-2 border-black text-sm font-bold ${i === 0 ? 'bg-neon text-black' : 'bg-black text-white'}`}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
