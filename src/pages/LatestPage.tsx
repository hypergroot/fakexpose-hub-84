
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { ClockIcon, Filter, Globe } from "lucide-react";

const LatestPage = () => {
  // Sample latest fact-check articles data - focused on world news
  const latestArticles = [
    {
      title: "European Parliament votes on new climate legislation: Fact vs Fiction",
      description: "A comprehensive analysis of claims surrounding the European Parliament's most recent climate bill and what it really means for global policy.",
      image: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Global Policy",
      date: "Just now",
      slug: "/latest/european-climate-legislation",
    },
    {
      title: "Investigation: Is the viral footage from the Amazon rainfire manipulated?",
      description: "Our team of experts examines viral footage claiming to show the recent Amazon fires, analyzing whether the images have been digitally altered.",
      image: "https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Environment",
      date: "1 hour ago",
      slug: "/latest/amazon-footage-analysis",
    },
    {
      title: "Debunking claims about the new international trade agreement",
      description: "Analysis of the most controversial statements made about the international trade agreement signed yesterday between major economic powers.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Economics",
      date: "2 hours ago",
      slug: "/latest/trade-agreement-facts",
    },
    {
      title: "Verifying reports of humanitarian aid distribution in conflict zones",
      description: "Our international correspondents fact-check claims about the distribution of humanitarian aid in major conflict zones around the world.",
      image: "https://images.unsplash.com/photo-1631818127810-e0bcf5913add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      category: "Humanitarian",
      date: "3 hours ago",
      slug: "/latest/humanitarian-aid-verification",
    },
    {
      title: "Fact check: Global vaccination statistics and misinformation",
      description: "An in-depth look at recent viral claims about global vaccination rates and effectiveness, compared with official WHO data.",
      image: "https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      category: "Health",
      date: "5 hours ago",
      slug: "/latest/global-vaccination-facts",
    },
    {
      title: "Analysis: The truth behind the viral G20 Summit photograph",
      description: "A viral image claiming to show world leaders in a tense moment at the G20 Summit has been circulating online. We verify its authenticity.",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "International Relations",
      date: "6 hours ago",
      slug: "/latest/g20-summit-photograph",
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
                <Globe className="h-8 w-8 text-fakexpose-blue" />
              </div>
              
              <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Latest World News Fact Checks
              </h1>
              
              <p className="max-w-2xl text-muted-foreground">
                Our most recent fact checks on global news, international politics, and 
                worldwide events that matter. Get verified information from across the globe.
              </p>
            </FadeIn>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8">
          <div className="container">
            <FadeIn className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-xl font-semibold">Global Fact Checks</h2>
              <Button variant="outline" size="sm" className="group">
                <Filter className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Filter by Region
              </Button>
            </FadeIn>
          </div>
        </section>
        
        <ArticleGrid 
          title="Today's Global Fact Checks" 
          articles={latestArticles}
          className="pt-0"
          viewAllLink="/latest" 
          sectionIdentifier="latest-news"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LatestPage;
