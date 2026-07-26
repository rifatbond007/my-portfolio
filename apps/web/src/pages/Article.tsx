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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-wide"><span className="text-neon">//</span> Technical Writing</h2>
          <p className="mt-1 text-sm">Sharing insights on distributed systems and engineering culture.</p>
        </div>
        <div className="border-2 border-black p-2"><BookOpen size={24} /></div>
      </div>

      <div className="grid gap-6">
        {ARTICLES.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="text-sm font-bold border-2 border-black px-4 py-2 hover:bg-neon hover:text-black">
          View all publications on Medium →
        </button>
      </div>
    </section>
  );
}
