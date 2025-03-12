
import { Button } from "../ui/Button";
import { FadeIn } from "../animations/FadeIn";

export function FeedbackSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <FadeIn className="mb-8 text-center">
          <div className="mb-4 inline-block rounded-full bg-fakexpose-blue/10 px-4 py-1 text-sm font-medium text-fakexpose-blue">
            Your Voice Matters
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Help Us Improve FakeXpose
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Your feedback helps us build a better fact-checking platform for everyone.
            Share your thoughts, report issues, or suggest features.
          </p>
        </FadeIn>
        
        <div className="glass-panel mx-auto max-w-3xl overflow-hidden rounded-xl">
          <div className="p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full rounded-md bg-muted p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md bg-muted p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm" htmlFor="message">
                  Feedback
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full rounded-md bg-muted p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Share your thoughts or suggestions..."
                ></textarea>
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-2 font-medium text-white transition-colors hover:bg-primary/90"
                >
                  Submit Feedback
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
