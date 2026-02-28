import { PlatformCard } from "../components/PlatformCard";

const platforms = [
  { platform: "Codeforces", details: "Pupil • 40+ Contests • Data Structures & Algorithms", solved: "500+", label: "Solved" },
  { platform: "LeetCode", details: "Interview Preparation • Problem Patterns • Daily Practice", solved: "300+", label: "Solved" },
  { platform: "CodeChef", details: "Competitive Programming • 2★ (Two Star) Rated", solved: "100+", label: "Solved" },
];

export default function ProblemSolving() {
  return (
    <div className="max-w-4xl mx-auto py-4 md:py-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">Problem Solving</h2>
      
      <div className="space-y-4 md:space-y-6">
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

      <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
        <span>Top 30% Active</span>
        <span>C++ / Python / DSA / Algo</span>
      </div>
    </div>
  );
}
