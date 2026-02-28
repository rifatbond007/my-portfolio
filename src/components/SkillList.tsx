export interface SkillCategory {
  label: string;
  skills: string;
}

interface SkillListProps {
  title: string;
  skills: SkillCategory[];
}

export function SkillList({ title, skills }: SkillListProps) {
  return (
    <div className="border-t border-gray-300 pt-6 md:pt-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 md:mb-6">{title}</h2>
      <div className="space-y-3 md:space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="grid grid-cols-1 sm:grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-2 md:gap-4"
          >
            <div className="font-semibold text-sm md:text-base">{skill.label}</div>
            <div className="text-gray-700 text-sm md:text-base">{skill.skills}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
