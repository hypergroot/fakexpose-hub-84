
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Newspaper, Filter } from "lucide-react";

const NewsPage = () => {
  // Sample news fact-check articles data
  const newsArticles = [
    {
      title: "Fact-checking the controversial statements from recent press conference",
      description: "We analyze the key claims made during yesterday's major press conference that sparked widespread debate online.",
      image: "https://images.unsplash.com/photo-1557999771-b5fbe90d495f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      category: "Breaking News",
      date: "Yesterday",
      slug: "/news/press-conference-claims",
    },
    {
      title: "Did mainstream media misreport the economic data?",
      description: "Examining the accuracy of recent economic reporting by major news outlets and clarifying the actual statistics.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Economy",
      date: "2 days ago",
      slug: "/news/economic-data-reporting",
    },
    {
      title: "Investigation into claims about the national education report",
      description: "Separating facts from sensationalism in the coverage of the recently released education performance statistics.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
      category: "Education",
      date: "3 days ago",
      slug: "/news/education-report-claims",
    },
    {
      title: "Debunking misinformation about the international summit outcome",
      description: "False narratives are circulating about what was agreed at the recent international summit. Here's what really happened.",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      category: "International",
      date: "4 days ago",
      slug: "/news/summit-agreement-facts",
    },
    {
      title: "Analysis: What the new healthcare legislation actually contains",
      description: "Cutting through the noise to explain the key provisions of the healthcare bill that has dominated headlines.",
      image: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      category: "Health",
      date: "5 days ago",
      slug: "/news/healthcare-bill-explained",
    },
    {
      title: "Examining the accuracy of viral news about tech company layoffs",
      description: "Reports about massive tech sector layoffs have caused market concern. We verify the actual scope and context.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      category: "Technology",
      date: "1 week ago",
      slug: "/news/tech-layoffs-reality",
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
                <Newspaper className="h-8 w-8 text-fakexpose-blue" />
              </div>
              
              <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                News Fact Checks
              </h1>
              
              <p className="max-w-2xl text-muted-foreground">
                Verified information about current events and news stories. We examine the accuracy
                of media reporting and clarify misleading headlines and narratives.
              </p>
            </FadeIn>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8">
          <div className="container">
            <FadeIn className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-xl font-semibold">News Fact Checks</h2>
              <Button variant="outline" size="sm" className="group">
                <Filter className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Filter Results
              </Button>
            </FadeIn>
          </div>
        </section>
        
        <ArticleGrid 
          title="Major News Story Fact Checks" 
          articles={newsArticles}
          className="pt-0" 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default NewsPage;
