interface AwardCardProps {
  title: string;
  event: string;
  year: string;
  location: string;
}

export function AwardCard({ title, event, year, location }: AwardCardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-gray-300 pb-4">
      <div>
        <h3 className="font-semibold text-sm md:text-base">{title}</h3>
        <p className="text-gray-600 text-xs md:text-sm">{event}</p>
      </div>
      <div className="sm:text-right">
        <p className="font-semibold text-sm md:text-base">{year}</p>
        <p className="text-gray-600 text-xs md:text-sm">{location}</p>
      </div>
    </div>
  );
}
