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
    <div className="border-t border-black/15 pt-6 mt-8">
      <h2 className="text-4xl uppercase font-bold mb-4">{title}</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div
            key={skill.label}
            className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 md:gap-4"
          >
            <div className="font-bold uppercase text-sm">{skill.label}</div>
            <div className="text-sm">{skill.skills}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
