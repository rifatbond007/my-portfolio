import { BookOpen, ArrowUpRight, Newspaper, Terminal, Laptop } from "lucide-react";

interface BlogPost {
  title: string;
  platform: "Medium" | "Dev.to" | "Hashnode";
  readTime: string;
  description: string;
  url: string;
  category: string;
}

const ARTICLES: BlogPost[] = [
  {
    title: "Building Scalable Backend Systems",
    platform: "Medium",
    readTime: "15 min read",
    category: "Architecture",
    description: "A deep dive into microservices architecture and best practices for building distributed systems that handle high-throughput traffic.",
    url: "#",
  },
  {
    title: "From Game Dev to Backend Engineering",
    platform: "Dev.to",
    readTime: "10 min read",
    category: "Career Transformation",
    description: "Technical reflections on transitioning from low-latency Game Dev (Unity/C#) to the world of scalable backend infrastructure.",
    url: "#",
  },
  {
    title: "Implementing Observability in Node.js",
    platform: "Hashnode",
    readTime: "12 min read",
    category: "DevOps/SRE",
    description: "A practical guide to implementing OpenTelemetry, logging pipelines, and real-time monitoring in production environments.",
    url: "#",
  },
];

export default function Article() {
  return (
    <section className="py-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 md:mb-8">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">Technical Writing</h2>
          <p className="text-gray-500 mt-1 text-sm md:text-base">Sharing insights on distributed systems and engineering culture.</p>
        </div>
        <BookOpen className="text-gray-300 hidden sm:block" size={32} />
      </div>

      <div className="grid gap-4 md:gap-6">
        {ARTICLES.map((article, idx) => (
          <a
            key={idx}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 md:p-6 bg-white border border-gray-100 rounded-2xl transition-all duration-300 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                  <span className="px-2 py-0.5 rounded bg-teal-50 text-teal-600 text-[10px] font-bold uppercase tracking-widest">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <Newspaper size={12} /> {article.platform}
                  </span>
                  <span className="text-gray-300 text-xs hidden sm:inline">•</span>
                  <span className="text-gray-400 text-xs">{article.readTime}</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors flex items-center gap-2">
                  {article.title}
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                </h3>
                
                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {article.description}
                </p>
              </div>

              {/* Decorative Platform Icon */}
              <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-teal-50 text-gray-400 group-hover:text-teal-500 transition-colors">
                {article.category === "Architecture" ? <Laptop size={20} /> : 
                 article.category === "DevOps/SRE" ? <Terminal size={20} /> : <Newspaper size={20} />}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 md:mt-10 text-center">
        <button className="text-sm font-bold text-gray-500 hover:text-teal-600 transition-colors border-b-2 border-transparent hover:border-teal-600 pb-1">
          View all publications on Medium →
        </button>
      </div>
    </section>
  );
}