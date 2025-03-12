
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
      <FadeIn>
        <div className="glass-panel max-w-lg rounded-xl p-8">
          <h1 className="mb-2 text-6xl font-bold text-fakexpose-blue">404</h1>
          <h2 className="mb-6 text-2xl font-semibold">Page Not Found</h2>
          <p className="mb-8 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="gradient" asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </FadeIn>
    </div>
  );
};

export default NotFound;
