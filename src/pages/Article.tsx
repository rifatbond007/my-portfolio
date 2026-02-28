import { BookOpen } from "lucide-react";
import { ArticleCard } from "../components/ArticleCard";

const ARTICLES = [
  {
    title: "Building Scalable Backend Systems",
    platform: "Medium" as const,
    readTime: "15 min read",
    category: "Architecture",
    description: "A deep dive into microservices architecture and best practices for building distributed systems that handle high-throughput traffic.",
    url: "#",
  },
  {
    title: "From Game Dev to Backend Engineering",
    platform: "Dev.to" as const,
    readTime: "10 min read",
    category: "Career Transformation",
    description: "Technical reflections on transitioning from low-latency Game Dev (Unity/C#) to the world of scalable backend infrastructure.",
    url: "#",
  },
  {
    title: "Implementing Observability in Node.js",
    platform: "Hashnode" as const,
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
          <ArticleCard key={idx} article={article} />
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
