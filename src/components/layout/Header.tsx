
import { useState, useEffect } from "react";
import { MenuIcon, X, User, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { SearchBar } from "../ui/SearchBar";
import { Button } from "../ui/Button";
import { FadeIn } from "../animations/FadeIn";
import { Link } from "react-router-dom";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Only run section detection on the homepage
      if (window.location.pathname === "/") {
        // Detect which section is currently in view
        const sections = ["latest", "politics", "factcheck", "quiz", "feedback"];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Only scroll if on homepage
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
    }
    setIsMenuOpen(false);
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
          <Link to="/" className="flex items-center">
            <Shield className="w-6 h-6 mr-1 text-fakexpose-blue animate-pulse" />
            <span className="mr-1 text-2xl font-bold tracking-tight text-white">
              Fake<span className="text-fakexpose-blue">Xpose</span>
            </span>
          </Link>
        </FadeIn>

        <div className="hidden md:flex md:items-center md:space-x-6">
          <HoverCard key="trending" openDelay={100} closeDelay={100}>
            <HoverCardTrigger asChild>
              <Link 
                to="/trending" 
                className={cn(
                  "text-sm transition-all duration-300 relative",
                  activeSection === "trending" 
                    ? "text-fakexpose-blue font-medium" 
                    : "text-white hover:text-fakexpose-blue",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-fakexpose-blue after:origin-bottom-right after:transition-transform after:duration-300",
                  activeSection === "trending" ? "after:scale-x-100" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
                )}
              >
                Trending
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="p-3 text-xs glass-panel border-fakexpose-blue/20">
              <p>View trending fact check stories</p>
            </HoverCardContent>
          </HoverCard>

          {[
            { id: "latest", label: "Latest" },
            { id: "politics", label: "News & Politics" },
            { id: "factcheck", label: "Fact Check" },
            { id: "quiz", label: "Quiz" },
            { id: "feedback", label: "Feedback" }
          ].map(({ id, label }) => (
            <HoverCard key={id} openDelay={100} closeDelay={100}>
              <HoverCardTrigger asChild>
                <button 
                  onClick={() => scrollToSection(id)} 
                  className={cn(
                    "text-sm transition-all duration-300 relative",
                    activeSection === id 
                      ? "text-fakexpose-blue font-medium" 
                      : "text-white hover:text-fakexpose-blue",
                    "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-fakexpose-blue after:origin-bottom-right after:transition-transform after:duration-300",
                    activeSection === id ? "after:scale-x-100" : "hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}
                >
                  {label}
                </button>
              </HoverCardTrigger>
              <HoverCardContent className="p-3 text-xs glass-panel border-fakexpose-blue/20">
                <p>View {label.toLowerCase()} stories and updates</p>
              </HoverCardContent>
            </HoverCard>
          ))}
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
          <Link 
            to="/trending" 
            className={cn(
              "text-left transition-colors",
              activeSection === "trending" 
                ? "text-fakexpose-blue font-medium" 
                : "text-white hover:text-fakexpose-blue"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Trending
          </Link>
          {[
            { id: "latest", label: "Latest" },
            { id: "politics", label: "News & Politics" },
            { id: "factcheck", label: "Fact Check" },
            { id: "quiz", label: "Quiz" },
            { id: "feedback", label: "Feedback" }
          ].map(({ id, label }) => (
            <button 
              key={id}
              onClick={() => scrollToSection(id)} 
              className={cn(
                "text-left transition-colors",
                activeSection === id 
                  ? "text-fakexpose-blue font-medium" 
                  : "text-white hover:text-fakexpose-blue"
              )}
            >
              {label}
            </button>
          ))}
          <Button variant="glassmorphic">
            <User className="mr-2 h-4 w-4" />
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
}
