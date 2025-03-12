
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleGrid } from "@/components/sections/ArticleGrid";
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/Button";
import { LandmarkIcon, Filter } from "lucide-react";

const PoliticsPage = () => {
  // Sample politics fact-check articles data
  const politicsArticles = [
    {
      title: "Fact-checking the finance minister's budget speech claims",
      description: "We analyze the key economic figures and promises presented in yesterday's budget announcement.",
      image: "https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      category: "Economy",
      date: "Yesterday",
      slug: "/politics/budget-speech-analysis",
    },
    {
      title: "Did the opposition leader make contradictory statements?",
      description: "Examining the consistency of policy positions stated in recent interviews and public appearances.",
      image: "https://images.unsplash.com/photo-1579869847557-1f67382cc158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80",
      category: "Policy",
      date: "2 days ago",
      slug: "/politics/opposition-statements",
    },
    {
      title: "Analysis: Voting records vs. campaign promises",
      description: "We compare elected officials' voting records with their stated positions during election campaigns.",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Elections",
      date: "3 days ago",
      slug: "/politics/voting-records-analysis",
    },
    {
      title: "Fact-checking claims about the new infrastructure bill",
      description: "Separating facts from political spin regarding the contents and impact of the infrastructure legislation.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Legislation",
      date: "5 days ago",
      slug: "/politics/infrastructure-bill-facts",
    },
    {
      title: "Investigating the authenticity of leaked government documents",
      description: "A set of documents claiming to reveal secret government plans has been circulating online. We verify their authenticity.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Government",
      date: "1 week ago",
      slug: "/politics/leaked-documents-verification",
    },
    {
      title: "Did the prime minister misrepresent economic statistics?",
      description: "Analyzing the accuracy of economic figures cited in a recent major policy speech and public statements.",
      image: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Economy",
      date: "2 weeks ago",
      slug: "/politics/economic-statistics-check",
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
                <LandmarkIcon className="h-8 w-8 text-fakexpose-blue" />
              </div>
              
              <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Politics Fact Checks
              </h1>
              
              <p className="max-w-2xl text-muted-foreground">
                In-depth analysis of political claims, statements, and policies. We hold elected
                officials accountable by verifying their public statements against facts.
              </p>
            </FadeIn>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8">
          <div className="container">
            <FadeIn className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
              <h2 className="text-xl font-semibold">Politics Fact Checks</h2>
              <Button variant="outline" size="sm" className="group">
                <Filter className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                Filter Results
              </Button>
            </FadeIn>
          </div>
        </section>
        
        <ArticleGrid 
          title="Political Statement Fact Checks" 
          articles={politicsArticles}
          className="pt-0"
          viewAllLink="/politics"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default PoliticsPage;
