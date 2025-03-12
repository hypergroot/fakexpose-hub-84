
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrendingHero } from "@/components/sections/TrendingHero";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Filter } from "lucide-react";

const TrendingPage = () => {
  // Sample trending article data
  const trendingArticles = [
    {
      title: "Viral message claiming new Aadhaar phone verification scam",
      description: "A viral WhatsApp message warns about scammers posing as UIDAI officials. Here's what's real and what's not.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Scam Alert",
      date: "2 hours ago",
      slug: "/trending/aadhaar-scam",
    },
    {
      title: "Did the Union Budget really allocate ₹500 crore for cow protection?",
      description: "Social media posts claiming massive budget allocation for cow protection programs need context.",
      image: "https://images.unsplash.com/photo-1533228100935-f9ab9882886e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "5 hours ago",
      slug: "/trending/budget-allocation",
    },
    {
      title: "No, this video does not show a real AI robot revolt",
      description: "A deepfake video showing robots attacking humans has gone viral with false claims about AI uprising.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
      category: "Technology",
      date: "1 day ago",
      slug: "/trending/ai-robot-revolt",
    },
    {
      title: "Is this viral image of a giant moon over a city real?",
      description: "A spectacular image showing an enormous moon rising over a cityscape has been widely shared on social media.",
      image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      category: "Viral Content",
      date: "3 days ago",
      slug: "/trending/giant-moon-image",
    },
    {
      title: "Fact-checking claims about the new health policy implementation",
      description: "Several claims about the recently announced health policy changes have gone viral. We analyze the facts.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Health",
      date: "4 days ago",
      slug: "/trending/health-policy-claims",
    },
    {
      title: "Did a minister really make these statements about education reforms?",
      description: "An alleged statement by a cabinet minister about controversial education reforms has sparked debate online.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
      category: "Politics",
      date: "1 week ago",
      slug: "/trending/minister-education-statement",
    },
  ];

  // Additional trending articles
  const moreTrendingArticles = [
    {
      title: "Did this celebrity really endorse cryptocurrency investment scheme?",
      description: "Social media is flooded with ads showing a famous actor promoting a cryptocurrency platform. We investigate if it's legitimate.",
      image: "https://images.unsplash.com/photo-1560732488-7b5f4d54f4c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Scam Alert",
      date: "2 days ago",
      slug: "/trending/celebrity-crypto-scam",
    },
    {
      title: "Fact-checking viral post about new COVID-19 variant",
      description: "A widely shared post claims a new COVID variant is causing severe symptoms. Medical experts weigh in on what's true.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Health",
      date: "3 days ago",
      slug: "/trending/covid-variant-claims",
    },
    {
      title: "Is this viral video of politician made using AI?",
      description: "A controversial video showing a politician making inflammatory remarks is circulating online. We analyze if it's authentic or AI-generated.",
      image: "https://images.unsplash.com/photo-1485163819542-13adeb5e0068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Deepfake",
      date: "4 days ago",
      slug: "/trending/politician-ai-video",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <TrendingHero />
        
        {/* Explanation section */}
        <section className="border-y border-border bg-accent/10 py-10">
          <div className="container">
            <FadeIn className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h2 className="mb-4 text-2xl font-bold">Why Trending Topics Matter</h2>
                <p className="text-muted-foreground">
                  Misinformation spreads quickly in today's fast-paced digital ecosystem. At FakeXpose, we monitor viral content in real-time, analyzing trending topics and claims that reach widespread audiences across social media platforms, messaging apps, and news outlets.
                </p>
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-bold">Our Fact-Checking Approach</h2>
                <p className="text-muted-foreground">
                  Our team of journalists and fact-checkers investigate trending claims using a rigorous methodology. We trace claims to their source, consult experts, examine visual content for manipulation, and provide a verdict based on available evidence.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
        
        {/* Filter section */}
        <section className="py-8">
          <div className="container">
            <FadeIn className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-xl font-semibold">Top Trending Fact Checks</h2>
              <Button variant="outline" size="sm" className="group">
                <Filter className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Filter Results
              </Button>
            </FadeIn>
          </div>
        </section>
        
        <ArticleGrid 
          title="This Week's Trending Fact Checks" 
          articles={trendingArticles} 
          className="pt-0"
        />
        
        <section className="section-padding bg-fakexpose-charcoal/10">
          <div className="container">
            <FadeIn className="mb-8">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">More Trending Topics</h2>
              <p className="mt-2 text-muted-foreground">
                Additional trending fact checks from our verification team
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {moreTrendingArticles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
            
            <FadeIn className="mt-10 flex justify-center">
              <Button className="group">
                View All Trending Topics
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TrendingPage;
