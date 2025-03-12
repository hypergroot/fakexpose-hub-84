
import { useState, useEffect } from "react";
import { MenuIcon, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchBar } from "../ui/SearchBar";
import { Button } from "../ui/Button";
import { FadeIn } from "../animations/FadeIn";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "glass-panel bg-background/70 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <FadeIn delay={100} className="flex items-center gap-2">
          <a href="/" className="flex items-center">
            <span className="mr-1 text-2xl font-bold tracking-tight text-white">
              Fake<span className="text-fakexpose-blue">Xpose</span>
            </span>
          </a>
        </FadeIn>

        <div className="hidden md:flex md:items-center md:space-x-6">
          <button onClick={() => scrollToSection("trending")} className="text-sm text-white hover:text-fakexpose-blue transition-colors">
            Trending
          </button>
          <button onClick={() => scrollToSection("latest")} className="text-sm text-white hover:text-fakexpose-blue transition-colors">
            Latest
          </button>
          <button onClick={() => scrollToSection("politics")} className="text-sm text-white hover:text-fakexpose-blue transition-colors">
            News & Politics
          </button>
          <button onClick={() => scrollToSection("factcheck")} className="text-sm text-white hover:text-fakexpose-blue transition-colors">
            Fact Check
          </button>
          <button onClick={() => scrollToSection("quiz")} className="text-sm text-white hover:text-fakexpose-blue transition-colors">
            Quiz
          </button>
          <button onClick={() => scrollToSection("feedback")} className="text-sm text-white hover:text-fakexpose-blue transition-colors">
            Feedback
          </button>
        </div>

        <div className="flex items-center gap-4">
          <FadeIn delay={300} className="hidden md:block">
            <SearchBar className="w-60 lg:w-80" />
          </FadeIn>
          
          <FadeIn delay={350}>
            <Button variant="glassmorphic" size="sm" className="hidden md:flex">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </FadeIn>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[60px] z-40 glass-panel p-5 md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"
        )}
      >
        <div className="mb-4">
          <SearchBar />
        </div>
        <nav className="flex flex-col space-y-4">
          <button onClick={() => scrollToSection("trending")} className="text-left text-white hover:text-fakexpose-blue transition-colors">Trending</button>
          <button onClick={() => scrollToSection("latest")} className="text-left text-white hover:text-fakexpose-blue transition-colors">Latest</button>
          <button onClick={() => scrollToSection("politics")} className="text-left text-white hover:text-fakexpose-blue transition-colors">News & Politics</button>
          <button onClick={() => scrollToSection("factcheck")} className="text-left text-white hover:text-fakexpose-blue transition-colors">Fact Check</button>
          <button onClick={() => scrollToSection("quiz")} className="text-left text-white hover:text-fakexpose-blue transition-colors">Quiz</button>
          <button onClick={() => scrollToSection("feedback")} className="text-left text-white hover:text-fakexpose-blue transition-colors">Feedback</button>
          <Button variant="glassmorphic">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
}
