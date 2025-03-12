
import { SearchBar } from "../ui/SearchBar";
import { FadeIn } from "../animations/FadeIn";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[60vh] items-center pt-24">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, rgba(2, 6, 23, 0) 70%)",
        }}
      ></div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
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
            <SearchBar className="mx-auto max-w-xl" placeholder="Search news or claims to verify..." />
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
