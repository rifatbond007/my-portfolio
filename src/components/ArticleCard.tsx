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

        <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-teal-50 text-gray-400 group-hover:text-teal-500 transition-colors">
          {article.category === "Architecture" ? <Laptop size={20} /> : 
           article.category === "DevOps/SRE" ? <Terminal size={20} /> : <Newspaper size={20} />}
        </div>
      </div>
    </a>
  );
}
