interface PlatformCardProps {
  platform: string;
  details: string;
  solved: string;
  label: string;
}

export function PlatformCard({ platform, details, solved, label }: PlatformCardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-gray-300 pb-4">
      <div>
        <h3 className="font-semibold uppercase text-sm md:text-base">{platform}</h3>
        <p className="text-gray-600 text-xs md:text-sm">{details}</p>
      </div>
      <div className="sm:text-right">
        <p className="font-semibold text-lg md:text-xl">{solved}</p>
        <p className="text-gray-500 text-xs uppercase">{label}</p>
      </div>
    </div>
  );
}
