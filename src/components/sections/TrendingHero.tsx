
import { TrendingUp, Search, AlertTriangle } from "lucide-react";
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
          
          <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="glass-panel flex flex-col items-center p-5 rounded-lg">
              <Search className="mb-2 h-6 w-6 text-fakexpose-blue" />
              <h3 className="mb-1 font-semibold">Research</h3>
              <p className="text-xs text-center text-muted-foreground">
                We investigate trending claims using primary sources and expert consultation
              </p>
            </div>
            
            <div className="glass-panel flex flex-col items-center p-5 rounded-lg">
              <AlertTriangle className="mb-2 h-6 w-6 text-fakexpose-blue" />
              <h3 className="mb-1 font-semibold">Verification</h3>
              <p className="text-xs text-center text-muted-foreground">
                Our fact-checkers verify each claim using a rigorous methodology
              </p>
            </div>
            
            <div className="glass-panel flex flex-col items-center p-5 rounded-lg">
              <TrendingUp className="mb-2 h-6 w-6 text-fakexpose-blue" />
              <h3 className="mb-1 font-semibold">Real-time</h3>
              <p className="text-xs text-center text-muted-foreground">
                We monitor trending topics 24/7 to provide timely fact checks
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
