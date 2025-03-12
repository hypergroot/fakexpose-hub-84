
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TrendingPage from "./pages/TrendingPage";
import LatestPage from "./pages/LatestPage";
import NewsPage from "./pages/NewsPage";
import PoliticsPage from "./pages/PoliticsPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trending" element={<TrendingPage />} />
          <Route path="/latest" element={<LatestPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/politics" element={<PoliticsPage />} />
          <Route path="/trending/:slug" element={<ArticleDetailPage />} />
          <Route path="/latest/:slug" element={<ArticleDetailPage />} />
          <Route path="/news/:slug" element={<ArticleDetailPage />} />
          <Route path="/politics/:slug" element={<ArticleDetailPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
