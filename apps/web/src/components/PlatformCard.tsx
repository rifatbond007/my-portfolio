interface PlatformCardProps {
  platform: string;
  details: string;
  solved: string;
  label: string;
}

export function PlatformCard({ platform, details, solved, label }: PlatformCardProps) {
  return (
    <li className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black text-sm font-bold">
        {platform[0]}
      </div>
      <div className="min-w-0 flex-1 leading-tight">
        <h3 className="text-[15px] font-semibold">{platform}</h3>
        <p className="text-sm text-muted">{details}</p>
      </div>
      <div className="text-right leading-tight">
        <p className="text-xl font-bold">{solved}</p>
        <p className="text-xs text-muted">{label}</p>
      </div>
    </li>
  );
}
