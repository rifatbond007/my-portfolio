import { Card, Chip } from "../components/Card";
import { PlatformCard } from "../components/PlatformCard";

const platforms = [
  { platform: "Codeforces", details: "Pupil • 40+ Contests • Data Structures & Algorithms", solved: "500+", label: "Solved" },
  { platform: "LeetCode", details: "Interview Preparation • Problem Patterns • Daily Practice", solved: "300+", label: "Solved" },
  { platform: "CodeChef", details: "Competitive Programming • 2★ (Two Star) Rated", solved: "100+", label: "Solved" },
];

export default function ProblemSolving() {
  return (
    <Card title="Problem Solving">
      <ul className="divide-y">
        {platforms.map((p) => (
          <PlatformCard
            key={p.platform}
            platform={p.platform}
            details={p.details}
            solved={p.solved}
            label={p.label}
          />
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2 border-t pt-4">
        <Chip>Top 30% Active</Chip>
        <Chip>C++ / Python / DSA / Algo</Chip>
      </div>
    </Card>
  );
}
