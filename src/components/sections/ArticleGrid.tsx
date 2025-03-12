
import { cn } from "@/lib/utils";
import { ArticleCard, ArticleCardProps } from "../ui/ArticleCard";
import { FadeIn } from "../animations/FadeIn";

interface ArticleGridProps {
  title: string;
  articles: ArticleCardProps[];
  className?: string;
}

export function ArticleGrid({ title, articles, className }: ArticleGridProps) {
  return (
    <section className={cn("section-padding", className)}>
      <div className="container">
        <FadeIn className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
          <a href="#" className="text-sm text-primary transition-colors hover:text-primary/80">
            View all
          </a>
        </FadeIn>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
