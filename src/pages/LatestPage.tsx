
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ClockIcon, Filter } from "lucide-react";

const LatestPage = () => {
  // Sample latest fact-check articles data
  const latestArticles = [
    {
      title: "Examining claims about the new climate policy proposal",
      description: "A comprehensive analysis of the recent climate policy announced by the government and the claims surrounding it.",
      image: "https://images.unsplash.com/photo-1561049501-e1f96bdd98fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Environment",
      date: "1 hour ago",
      slug: "/latest/climate-policy-claims",
    },
    {
      title: "Is the viral video of bizarre cloud formation real?",
      description: "Social media users are sharing footage of unusual cloud patterns claiming it to be evidence of weather manipulation.",
      image: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      category: "Science",
      date: "3 hours ago",
      slug: "/latest/cloud-formation-video",
    },
    {
      title: "Fact-checking: Did the health minister make these statements?",
      description: "Analyzing the accuracy of quotes attributed to the health minister regarding public healthcare reforms.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "5 hours ago",
      slug: "/latest/health-minister-quotes",
    },
    {
      title: "New study on vitamin supplements: What's true and what's exaggerated",
      description: "Separating facts from fiction in reports about a recent scientific study on vitamin supplements.",
      image: "https://images.unsplash.com/photo-1577196496383-1d1bb6b6b6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Health",
      date: "8 hours ago",
      slug: "/latest/vitamin-study-facts",
    },
    {
      title: "Examining the authenticity of viral space photo",
      description: "A stunning image claiming to show a rare cosmic event has gone viral. We consult with astronomers to verify its authenticity.",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
      category: "Science",
      date: "12 hours ago",
      slug: "/latest/space-photo-verification",
    },
    {
      title: "Investigation: Is this phone scam warning legitimate?",
      description: "A message warning about a sophisticated phone scam is being forwarded widely. We investigate if the threat is real.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Scam Alert",
      date: "14 hours ago",
      slug: "/latest/phone-scam-warning",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-fakexpose-charcoal to-background pt-24 pb-12">
          <div className="container">
            <FadeIn className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-fakexpose-blue/10">
                <ClockIcon className="h-8 w-8 text-fakexpose-blue" />
              </div>
              
              <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Latest Fact Checks
              </h1>
              
              <p className="max-w-2xl text-muted-foreground">
                Our most recent fact checks and investigations, providing you with up-to-date
                verification of trending claims and viral content.
              </p>
            </FadeIn>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8">
          <div className="container">
            <FadeIn className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-xl font-semibold">Latest Fact Checks</h2>
              <Button variant="outline" size="sm" className="group">
                <Filter className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Filter Results
              </Button>
            </FadeIn>
          </div>
        </section>
        
        <ArticleGrid 
          title="Today's Latest Fact Checks" 
          articles={latestArticles}
          className="pt-0" 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LatestPage;
