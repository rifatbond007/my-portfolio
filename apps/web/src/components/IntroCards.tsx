// Periods use one short, consistent format.
const EXPERIENCE = [
  { role: "Software Engineer L1", company: "Cashless AI", period: "Sep 2026 – Present", current: true },
  { role: "HR Intern", company: "Gao Tek Inc", period: "Jun 2026 – Aug 2026" },
  { role: "Software Engineer", company: "BCC Internship", period: "2025 – 2026" },
  { role: "Problem Solver", company: "Codeforces / LeetCode", period: "2023 – 2025" },
  { role: "WordPress Designer", company: "Fiverr", period: "2021 – 2022" },
];

export function ExperienceCard() {
  return (
    <section className="border-2 border-black p-5">
      <h3 className="mb-6 text-xl font-bold uppercase">Working Experience</h3>
      <div className="relative space-y-6">
        {/* Vertical timeline line */}
        <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-black" />

        {EXPERIENCE.map((job) => (
          <div key={`${job.role}-${job.company}`} className="relative pl-8">
            <div
              className={
                "absolute left-0 top-0.5 z-10 h-4 w-4 border-2 border-black " +
                (job.current ? "bg-accent" : "bg-card")
              }
            />
            <h4 className="text-sm font-bold uppercase leading-5">{job.role}</h4>
            <p className="text-sm leading-5">{job.company}</p>
            <p className="mt-0.5 text-xs leading-5 text-muted">
              {job.current ? (
                <>
                  {job.period.replace("Present", "")}
                  <span className="font-bold text-accent motion-safe:animate-blink">Present</span>
                </>
              ) : (
                job.period
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
