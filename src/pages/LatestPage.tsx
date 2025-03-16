
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { ClockIcon, Filter } from "lucide-react";

const LatestPage = () => {
  // Sample latest fact-check articles data - different from trending
  const latestArticles = [
    {
      title: "Investigation: Recent flood images claimed to be AI-generated",
      description: "Our team analyzes viral images from the recent flooding disaster that critics claim were created using AI tools.",
      image: "https://images.unsplash.com/photo-1509219411165-3d426daa7f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Disaster",
      date: "Just now",
      slug: "flood-images-ai-generated",
    },
    {
      title: "New research on vitamin supplements: Separating fact from fiction",
      description: "A comprehensive analysis of the latest scientific study on vitamin supplements that's causing controversy in health circles.",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2130&q=80",
      category: "Health",
      date: "30 minutes ago",
      slug: "vitamin-research-facts",
    },
    {
      title: "Fact-checking today's controversial celebrity interview statements",
      description: "Our analysis of the most controversial claims made during a high-profile celebrity interview that aired this morning.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Entertainment",
      date: "2 hours ago",
      slug: "celebrity-interview-factcheck",
    },
    {
      title: "The truth behind today's viral social media market crash prediction",
      description: "A detailed examination of a widely-shared post predicting an imminent market crash that's causing public concern.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Finance",
      date: "4 hours ago",
      slug: "market-crash-prediction",
    },
    {
      title: "Verifying claims about the newly approved environmental policy",
      description: "We analyze the key provisions of today's environmental policy announcement and verify claims from both supporters and critics.",
      image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Environment",
      date: "6 hours ago",
      slug: "environmental-policy-analysis",
    },
    {
      title: "Today's viral education reform memo: Real or fabricated?",
      description: "An alleged internal memo about controversial education reforms has gone viral. Our team investigates its authenticity.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      category: "Education",
      date: "8 hours ago",
      slug: "education-memo-investigation",
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
          viewAllLink="/latest" 
          sectionIdentifier="latest"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LatestPage;
