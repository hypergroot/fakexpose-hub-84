
import { TrendingUp } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";

export function TrendingHero() {
  return (
    <section className="bg-gradient-to-b from-fakexpose-charcoal to-background pt-24 pb-12">
      <div className="container">
        <FadeIn className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fakexpose-blue/10">
            <TrendingUp className="h-8 w-8 text-fakexpose-blue" />
          </div>
          
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Trending Fact Checks
          </h1>
          
          <p className="max-w-2xl text-muted-foreground">
            Stay informed with our most popular fact checks and analyses of viral content,
            trending stories, and widely shared claims circulating online.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
