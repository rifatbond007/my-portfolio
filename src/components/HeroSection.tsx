interface HeroSectionProps {
  name: string;
  title: string;
  description: string[];
}

export function HeroSection({ name, title, description }: HeroSectionProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl">
        Hello! I'm {name}
      </h1>
      <p className="text-gray-600 text-sm md:text-base">{title}</p>
      <div className="space-y-4 text-gray-700 text-sm md:text-base">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
}
