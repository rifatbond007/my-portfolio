import { ArrowUpRight, Newspaper, Terminal, Laptop } from "lucide-react";

interface BlogPost {
  title: string;
  platform: "Medium" | "Dev.to" | "Hashnode";
  readTime: string;
  description: string;
  url: string;
  category: string;
}

interface ArticleCardProps {
  article: BlogPost;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 border-2 border-black hover:border-neon"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="px-2 py-0.5 bg-neon text-black text-[10px] font-bold uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-xs flex items-center gap-1">
              <Newspaper size={12} /> {article.platform}
            </span>
            <span className="text-xs">|</span>
            <span className="text-xs">{article.readTime}</span>
          </div>

          <h3 className="text-lg md:text-xl font-bold flex items-center gap-2 group-hover:text-neon">
            {article.title}
            <ArrowUpRight size={18} />
          </h3>

          <p className="mt-2 text-sm">
            {article.description}
          </p>
        </div>

        <div className="hidden md:flex items-center justify-center w-12 h-12 border-2 border-black group-hover:bg-neon group-hover:text-black">
          {article.category === "Architecture" ? <Laptop size={20} /> :
           article.category === "DevOps/SRE" ? <Terminal size={20} /> : <Newspaper size={20} />}
        </div>
      </div>
    </a>
  );
}
