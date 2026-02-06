export default function ProblemSolving() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl mb-8">Problem Solving</h2>
      
      <div className="space-y-6">
        {/* Codeforces */}
        <div className="flex justify-between items-start border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold uppercase">Codeforces</h3>
            <p className="text-gray-600 text-sm">
              Pupil • 40+ Contests • Data Structures & Algorithms
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-xl">500+</p>
            <p className="text-gray-500 text-xs uppercase">Solved</p>
          </div>
        </div>

        {/* LeetCode */}
        <div className="flex justify-between items-start border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold uppercase">LeetCode</h3>
            <p className="text-gray-600 text-sm">
              Interview Preparation • Problem Patterns • Daily Practice
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-xl">300+</p>
            <p className="text-gray-500 text-xs uppercase">Solved</p>
          </div>
        </div>

        {/* CodeChef */}
        <div className="flex justify-between items-start border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold uppercase">CodeChef</h3>
            <p className="text-gray-600 text-sm">
              Competitive Programming • 2★ (Two Star) Rated
            </p>
          </div>
          <div className="text-right">
            <p className="font-semibold text-xl">100+</p>
            <p className="text-gray-500 text-xs uppercase">Solved</p>
          </div>
        </div>
      </div>

      {/* Footer summary - optional, keep if you want the extra detail */}
      <div className="mt-8 flex gap-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
        <span>Top 30% Active</span>
        <span>C++ / Python / DSA / Algo</span>
      </div>
    </div>
  );
}