
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FactCheckSection } from "@/components/sections/FactCheckSection";
import { QuizSection } from "@/components/sections/QuizSection";
import { FeedbackSection } from "@/components/sections/FeedbackSection";
import { ArticleGrid } from "@/components/sections/ArticleGrid";

const Index = () => {
  // Sample article data
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
  ];

  const latestArticles = [
    {
      title: "Fact checking PM's Independence Day speech claims on economic growth",
      description: "We analyze the key statistics and claims made during the recent Independence Day address.",
      image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      category: "Politics",
      date: "2 days ago",
    },
    {
      title: "UPI fraud alert: New technique targeting mobile payment users",
      description: "A sophisticated scam is targeting UPI users through fake customer service calls. Learn how to protect yourself.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Scam Alert",
      date: "3 days ago",
    },
    {
      title: "Did heavy rains really cause crocodiles to roam Mumbai streets?",
      description: "Viral images claiming to show crocodiles in Mumbai streets after monsoon rains examined for authenticity.",
      image: "https://images.unsplash.com/photo-1583306346437-f9432a65cf83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2129&q=80",
      category: "Viral Content",
      date: "3 days ago",
    },
  ];

  const politicsArticles = [
    {
      title: "Examining claims about new education policy implementation",
      description: "The new education policy has sparked numerous claims on social media. We sort fact from fiction.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e7f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80",
      category: "Education",
      date: "1 week ago",
    },
    {
      title: "No, this politician did not make these communal remarks",
      description: "A viral video showing an opposition leader has been edited to change the context of their speech.",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Politics",
      date: "1 week ago",
    },
    {
      title: "Fact checking international relations claims after border talks",
      description: "Several claims about a recent diplomatic exchange with neighboring countries require context.",
      image: "https://images.unsplash.com/photo-1447672292251-d98abce1f4af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1986&q=80",
      category: "International",
      date: "2 weeks ago",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroSection />
        <ArticleGrid title="Trending" articles={trendingArticles} />
        <ArticleGrid title="Latest" articles={latestArticles} className="bg-fakexpose-charcoal" />
        <ArticleGrid title="News & Politics" articles={politicsArticles} />
        <FactCheckSection />
        <QuizSection />
        <FeedbackSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
