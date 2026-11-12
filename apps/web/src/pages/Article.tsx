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
    <>
      <div>
        <h2 className="text-2xl font-bold uppercase tracking-wide">Technical Writing</h2>
        <p className="mt-1 text-sm text-muted">Sharing insights on distributed systems and engineering culture.</p>
      </div>
      {ARTICLES.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
      <button className="border-2 border-black px-4 py-2 text-sm font-bold hover:bg-black hover:text-white">
        View all publications on Medium →
      </button>
    </>
  );
}
