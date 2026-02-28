export default function ProblemSolving() {
  return (
    <div className="max-w-4xl mx-auto py-4 md:py-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 md:mb-8">Problem Solving</h2>
      
      <div className="space-y-4 md:space-y-6">
        {/* Codeforces */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold uppercase text-sm md:text-base">Codeforces</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Pupil • 40+ Contests • Data Structures & Algorithms
            </p>
          </div>
          <div className="sm:text-right">
            <p className="font-semibold text-lg md:text-xl">500+</p>
            <p className="text-gray-500 text-xs uppercase">Solved</p>
          </div>
        </div>

        {/* LeetCode */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold uppercase text-sm md:text-base">LeetCode</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Interview Preparation • Problem Patterns • Daily Practice
            </p>
          </div>
          <div className="sm:text-right">
            <p className="font-semibold text-lg md:text-xl">300+</p>
            <p className="text-gray-500 text-xs uppercase">Solved</p>
          </div>
        </div>

        {/* CodeChef */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 border-b border-gray-300 pb-4">
          <div>
            <h3 className="font-semibold uppercase text-sm md:text-base">CodeChef</h3>
            <p className="text-gray-600 text-xs md:text-sm">
              Competitive Programming • 2★ (Two Star) Rated
            </p>
          </div>
          <div className="sm:text-right">
            <p className="font-semibold text-lg md:text-xl">100+</p>
            <p className="text-gray-500 text-xs uppercase">Solved</p>
          </div>
        </div>
      </div>

      {/* Footer summary - optional, keep if you want the extra detail */}
      <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-6 text-xs font-medium text-gray-500 uppercase tracking-wider">
        <span>Top 30% Active</span>
        <span>C++ / Python / DSA / Algo</span>
      </div>
    </div>
  );
}