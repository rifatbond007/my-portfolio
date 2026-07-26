import { PlatformCard } from "../components/PlatformCard";

const platforms = [
  { platform: "Codeforces", details: "Pupil • 40+ Contests • Data Structures & Algorithms", solved: "500+", label: "Solved" },
  { platform: "LeetCode", details: "Interview Preparation • Problem Patterns • Daily Practice", solved: "300+", label: "Solved" },
  { platform: "CodeChef", details: "Competitive Programming • 2★ (Two Star) Rated", solved: "100+", label: "Solved" },
];

export default function ProblemSolving() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl uppercase font-bold tracking-wide mb-8"><span className="text-neon">//</span> Problem Solving</h2>
      
      <div className="space-y-6">
        {platforms.map((p) => (
          <PlatformCard
            key={p.platform}
            platform={p.platform}
            details={p.details}
            solved={p.solved}
            label={p.label}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-xs font-bold uppercase">
        <span className="border-2 border-black px-3 py-1 hover:border-neon">Top 30% Active</span>
        <span className="border-2 border-black px-3 py-1 hover:border-neon">C++ / Python / DSA / Algo</span>
      </div>
    </div>
  );
}
