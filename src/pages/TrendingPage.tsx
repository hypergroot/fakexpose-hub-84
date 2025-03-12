
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TrendingHero } from "@/components/sections/TrendingHero";
import { ArticleGrid } from "@/components/sections/ArticleGrid";

const TrendingPage = () => {
  // Sample trending article data
  const trendingArticles = [
    {
      title: "Viral message claiming new Aadhaar phone verification scam",
      description: "A viral WhatsApp message warns about scammers posing as UIDAI officials. Here's what's real and what's not.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Scam Alert",
      date: "2 hours ago",
    },
    {
      title: "Did the Union Budget really allocate ₹500 crore for cow protection?",
      description: "Social media posts claiming massive budget allocation for cow protection programs need context.",
      image: "https://images.unsplash.com/photo-1533228100935-f9ab9882886e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "5 hours ago",
    },
    {
      title: "No, this video does not show a real AI robot revolt",
      description: "A deepfake video showing robots attacking humans has gone viral with false claims about AI uprising.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80",
      category: "Technology",
      date: "1 day ago",
    },
    {
      title: "Is this viral image of a giant moon over a city real?",
      description: "A spectacular image showing an enormous moon rising over a cityscape has been widely shared on social media.",
      image: "https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      category: "Viral Content",
      date: "3 days ago",
    },
    {
      title: "Fact-checking claims about the new health policy implementation",
      description: "Several claims about the recently announced health policy changes have gone viral. We analyze the facts.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Health",
      date: "4 days ago",
    },
    {
      title: "Did a minister really make these statements about education reforms?",
      description: "An alleged statement by a cabinet minister about controversial education reforms has sparked debate online.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2022&q=80",
      category: "Politics",
      date: "1 week ago",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <TrendingHero />
        <ArticleGrid 
          title="Trending Fact Checks" 
          articles={trendingArticles} 
          className="pt-8"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default TrendingPage;
