import { ArrowUpRight } from "lucide-react";
import { Chip } from "./Card";

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
      className="group block border-t pt-6"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
        <Chip>{article.category}</Chip>
        <span>{article.platform}</span>
        <span aria-hidden>·</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="mt-3 flex items-center gap-1.5 text-lg font-bold group-hover:text-accent">
        {article.title}
        <ArrowUpRight className="h-4 w-4 shrink-0" />
      </h3>
      <p className="mt-1 text-[15px] leading-relaxed text-muted">{article.description}</p>
    </a>
  );
}
