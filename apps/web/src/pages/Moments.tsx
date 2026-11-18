import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Images, MapPin, X } from "lucide-react";
import { cn } from "../lib/cn";

const img = (name: string) =>
  new URL(`../assets/images/moments/${name}`, import.meta.url).href;

interface Photo {
  src: string;
  alt: string;
  /** CSS object-position for the cropped grid cover (e.g. portraits). */
  focus?: string;
}

interface Moment {
  placement: string;
  event: string;
  caption: string;
  date: string;
  location: string;
  url: string;
  /** Champion moments get the accent badge. */
  win?: boolean;
  photos: Photo[];
}

// Newest first. The first moment is featured full width; each moment's first photo is its cover.
const MOMENTS: Moment[] = [
  {
    placement: "1st Runners Up",
    event: "BAIUST Fall Fest Hackathon",
    caption: "Receiving the hackathon trophy with the team.",
    date: "2025",
    location: "Cumilla, BD",
    url: "https://lnkd.in/p/geb5wnBb",
    photos: [{ src: img("fall-fest-hackathon.jpg"), alt: "Team receiving the Fall Fest hackathon trophy" }],
  },
  {
    placement: "2nd Runners Up",
    event: "BAIUST Fall Fest Prompt Engineering",
    caption: "Two trophies from one fest.",
    date: "2025",
    location: "Cumilla, BD",
    url: "https://lnkd.in/p/geb5wnBb",
    photos: [{ src: img("fall-fest-solo.jpg"), alt: "Holding the BAIUST Fall Fest trophies", focus: "50% 35%" }],
  },
  {
    placement: "Champion",
    event: "BAIUST CSE Fest Hackathon",
    caption: "Senior Category Hackathon winner.",
    date: "2025",
    location: "Cumilla, BD",
    url: "https://lnkd.in/p/g9g42r6i",
    win: true,
    photos: [
      { src: img("cse-fest-team.jpg"), alt: "Team holding the CSE Fest 2025 hackathon winner banner" },
      { src: img("cse-fest-award.jpg"), alt: "Receiving the winner banner at the award ceremony" },
      { src: img("cse-fest-hacking.jpg"), alt: "Team working on laptops during the hackathon" },
      { src: img("cse-fest-solo.jpg"), alt: "Holding the hackathon winner banner" },
    ],
  },
  {
    placement: "2nd Runners Up",
    event: "Devfest AI Hackathon",
    caption: "Google Developer Groups Devfest.",
    date: "2023",
    location: "Cumilla, BD",
    url: "https://lnkd.in/p/ghSGc4GC",
    photos: [{ src: img("devfest-hackathon.jpg"), alt: "Team holding the Devfest Second Runner Up board" }],
  },
];

function Badge({ moment }: { moment: Moment }) {
  return (
    <span
      className={cn(
        "border px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider",
        moment.win ? "border-accent bg-accent text-white" : "bg-card text-fg",
      )}
    >
      {moment.placement}
    </span>
  );
}

function MomentTile({
  moment,
  featured,
  onOpen,
}: {
  moment: Moment;
  featured?: boolean;
  onOpen: () => void;
}) {
  const cover = moment.photos[0];
  return (
    <article className={cn("group flex flex-col rounded-md border bg-card overflow-hidden transition-colors hover:border-muted", featured && "sm:col-span-2")}>
      <button
        onClick={onOpen}
        aria-label={`Open photos: ${moment.event}`}
        className="relative block overflow-hidden border-b text-left"
      >
        <img
          src={cover.src}
          alt={cover.alt}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: cover.focus }}
          className={cn(
            "w-full bg-hover object-cover transition-transform duration-500 motion-safe:group-hover:scale-105",
            featured ? "aspect-video" : "aspect-[4/3]",
          )}
        />
        <div className="absolute left-3 top-3">
          <Badge moment={moment} />
        </div>
        {moment.photos.length > 1 && (
          <span className="absolute right-3 top-3 flex items-center gap-1 border bg-card px-1.5 py-0.5 text-[11px] font-bold">
            <Images className="h-3.5 w-3.5" aria-hidden />
            {moment.photos.length}
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-4">
        <h3 className={cn("font-bold uppercase leading-snug", featured ? "text-lg" : "text-sm")}>
          {moment.event}
        </h3>
        <p className="mt-1 text-sm text-muted">{moment.caption}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            {moment.location} · {moment.date}
          </span>
          <a
            href={moment.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${moment.event} on LinkedIn`}
            className="inline-flex items-center gap-1 font-bold text-fg hover:text-accent"
          >
            Post <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}

function Lightbox({ moment, onClose }: { moment: Moment; onClose: () => void }) {
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = moment.photos.length;
  const photo = moment.photos[index];

  const step = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, step]);

  const navBtn =
    "flex h-10 w-10 shrink-0 items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black";
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={moment.event}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex flex-col overflow-y-auto overscroll-contain bg-black/95 p-4 text-white sm:p-6"
    >
      <div className="flex items-start justify-between gap-4" onClick={stop}>
        <div className="min-w-0">
          <Badge moment={moment} />
          <h3 className="mt-2 font-bold uppercase">{moment.event}</h3>
          <p className="text-xs text-white/60">
            {moment.location} · {moment.date}
            {count > 1 && ` · ${index + 1}/${count}`}
          </p>
        </div>
        <button ref={closeRef} onClick={onClose} aria-label="Close" className={navBtn}>
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center gap-3 py-4">
        {count > 1 && (
          <button
            onClick={(e) => {
              stop(e);
              step(-1);
            }}
            aria-label="Previous photo"
            className={cn(navBtn, "hidden sm:flex")}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}
        <img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          onClick={stop}
          className="max-h-full min-w-0 max-w-full border border-white/20 object-contain motion-safe:animate-fade-in"
        />
        {count > 1 && (
          <button
            onClick={(e) => {
              stop(e);
              step(1);
            }}
            aria-label="Next photo"
            className={cn(navBtn, "hidden sm:flex")}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {count > 1 && (
        <div className="flex items-center justify-center gap-3" onClick={stop}>
          <button onClick={() => step(-1)} aria-label="Previous photo" className={cn(navBtn, "sm:hidden")}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2 overflow-x-auto">
            {moment.photos.map((p, i) => (
              <button
                key={p.src}
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1} of ${count}`}
                aria-current={i === index ? "true" : undefined}
                className={cn(
                  "h-12 w-16 shrink-0 overflow-hidden border-2",
                  i === index ? "border-white" : "border-transparent opacity-50 hover:opacity-100",
                )}
              >
                <img src={p.src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <button onClick={() => step(1)} aria-label="Next photo" className={cn(navBtn, "sm:hidden")}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function Moments() {
  const [open, setOpen] = useState<Moment | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const photoCount = MOMENTS.reduce((n, m) => n + m.photos.length, 0);

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wide">Moments</h2>
          <p className="mt-1 text-sm text-muted">Snapshots from hackathons, work and life.</p>
        </div>
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          {String(MOMENTS.length).padStart(2, "0")} moments · {String(photoCount).padStart(2, "0")} photos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {MOMENTS.map((moment, i) => (
          <MomentTile key={moment.event} moment={moment} featured={i === 0} onOpen={() => setOpen(moment)} />
        ))}
      </div>

      {open && <Lightbox moment={open} onClose={close} />}
    </>
  );
}
