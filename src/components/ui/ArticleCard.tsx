
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { FadeIn } from "../animations/FadeIn";

export interface ArticleCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  date?: string;
  slug?: string;
  className?: string;
}

export function ArticleCard({
  title,
  description,
  image,
  category = "News",
  date = "Today",
  slug = "#",
  className,
}: ArticleCardProps) {
  return (
    <FadeIn className={cn("group h-full", className)}>
      <div className="glass-panel h-full overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-fakexpose-blue/5 hover:translate-y-[-4px]">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        
        <div className="flex flex-col p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-full bg-fakexpose-blue/10 px-3 py-1 text-xs font-medium text-fakexpose-blue">
              {category}
            </span>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold leading-tight text-balance">
            {title}
          </h3>
          
          <p className="mb-4 line-clamp-2 flex-grow text-sm text-muted-foreground">
            {description}
          </p>
          
          <Button variant="glassmorphic" size="sm" className="self-start" asChild>
            <a href={slug}>Read More</a>
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
