interface AwardCardProps {
  title: string;
  event: string;
  year: string;
  location: string;
}

export function AwardCard({ title, event, year, location }: AwardCardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 border-b-2 border-black pb-4">
      <div>
        <h3 className="font-bold uppercase text-sm">{title}</h3>
        <p className="text-sm">{event}</p>
      </div>
      <div className="sm:text-right">
        <p className="font-bold text-lg">{year}</p>
        <p className="text-sm">{location}</p>
      </div>
    </div>
  );
}
