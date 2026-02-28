import { AwardCard } from "../components/AwardCard";

const awards = [
  { title: "2nd RUNNERS UP", event: "BAIUST Fall Fest X Prompt Engineering", year: "2025", location: "Cumilla, BD" },
  { title: "1st RUNNERS UP", event: "BAIUST Fall Fest X Hackathon", year: "2025", location: "Cumilla, BD" },
  { title: "CHAMPION", event: "CSE Fest Hackathon", year: "2025", location: "Cumilla, BD" },
  { title: "2nd RUNNERS UP", event: "Devfest AI Hackathon", year: "2023", location: "Cumilla, BD" },
];

export default function HonorsAwards() {
  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl lg:text-3xl">Honors & Awards</h2>
      <div className="space-y-4 md:space-y-6">
        {awards.map((award) => (
          <AwardCard
            key={`${award.title}-${award.event}`}
            title={award.title}
            event={award.event}
            year={award.year}
            location={award.location}
          />
        ))}
      </div>
    </div>
  );
}
