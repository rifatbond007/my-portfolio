interface PlatformCardProps {
  platform: string;
  details: string;
  solved: string;
  label: string;
}

export function PlatformCard({ platform, details, solved, label }: PlatformCardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 border-b-2 border-black pb-4">
      <div>
        <h3 className="font-bold uppercase text-sm">{platform}</h3>
        <p className="text-xs">{details}</p>
      </div>
      <div className="sm:text-right">
        <p className="font-bold text-2xl">{solved}</p>
        <p className="text-xs uppercase">{label}</p>
      </div>
    </div>
  );
}
