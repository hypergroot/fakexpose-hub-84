
import { cn } from "@/lib/utils";
import { FadeIn } from "../animations/FadeIn";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={100}>
            <div className="flex flex-col">
              <h3 className="mb-4 text-lg font-semibold">FakeXpose</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Exposing misinformation and debunking fake news to empower readers with verified facts.
              </p>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <a href="#" className="hover:text-primary">Twitter</a>
                <a href="#" className="hover:text-primary">Facebook</a>
                <a href="#" className="hover:text-primary">Instagram</a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Home</a></li>
                <li><a href="#" className="hover:text-primary">Fact Check</a></li>
                <li><a href="#" className="hover:text-primary">Quiz</a></li>
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">News & Politics</a></li>
                <li><a href="#" className="hover:text-primary">Viral Scams</a></li>
                <li><a href="#" className="hover:text-primary">Health Misinformation</a></li>
                <li><a href="#" className="hover:text-primary">Technology</a></li>
                <li><a href="#" className="hover:text-primary">Financial Fraud</a></li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Stay updated with our latest fact checks and resources.
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-md bg-muted p-2 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="rounded-md bg-primary p-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FakeXpose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
