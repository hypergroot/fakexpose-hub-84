
import { Button } from "../ui/Button";
import { SearchBar } from "../ui/SearchBar";
import { FadeIn } from "../animations/FadeIn";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center pt-24">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, rgba(2, 6, 23, 0) 70%)",
        }}
      ></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          <div className="max-w-2xl text-center lg:text-left">
            <FadeIn className="mb-4 inline-block rounded-full bg-fakexpose-blue/10 px-4 py-1 text-sm font-medium text-fakexpose-blue">
              India's Premier Fact-Checking Platform
            </FadeIn>
            
            <FadeIn delay={150}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
                Uncover the Truth Behind{" "}
                <span className="text-fakexpose-blue">Indian News</span>{" "}
                and Widespread Scams
              </h1>
            </FadeIn>
            
            <FadeIn delay={250} className="mb-8 text-lg text-muted-foreground">
              FakeXpose is your reliable resource for verifying news, debunking misinformation,
              and protecting yourself from scams circulating in India.
            </FadeIn>
            
            <FadeIn delay={350} className="mb-8 hidden md:block">
              <SearchBar className="mx-auto max-w-xl lg:mx-0" placeholder="Search news or claims to verify..." />
            </FadeIn>
            
            <FadeIn delay={450} className="flex flex-col gap-4 sm:flex-row md:hidden">
              <Button variant="gradient" size="lg" className="w-full sm:w-auto">
                Fact Check Now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Take a Quiz
              </Button>
            </FadeIn>
            
            <FadeIn delay={450} className="hidden md:flex md:gap-4">
              <Button variant="gradient" size="lg">
                Fact Check Now
              </Button>
              <Button variant="outline" size="lg">
                Take a Quiz
              </Button>
            </FadeIn>
          </div>
          
          <FadeIn delay={350} className="relative aspect-square w-full max-w-md">
            <div className="absolute -inset-0.5 animate-pulse rounded-full bg-fakexpose-blue/20 blur-xl"></div>
            <div className="glass-panel relative h-full w-full overflow-hidden rounded-2xl border-white/10">
              <img
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fact checking illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
        
        <FadeIn delay={550} className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { number: "10K+", text: "Facts Verified" },
            { number: "5K+", text: "Scams Exposed" },
            { number: "100K+", text: "Monthly Users" },
            { number: "99%", text: "Accuracy Rate" },
          ].map((stat, index) => (
            <div key={index} className="glass-panel rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-fakexpose-blue">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.text}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
