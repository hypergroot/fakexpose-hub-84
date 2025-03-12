
import { Button } from "../ui/Button";
import { FadeIn } from "../animations/FadeIn";

export function QuizSection() {
  return (
    <section className="section-padding bg-fakexpose-charcoal">
      <div className="container">
        <FadeIn className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-fakexpose-blue/10 px-4 py-1 text-sm font-medium text-fakexpose-blue">
            Interactive Knowledge
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Test Your Fact-Checking Skills
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Take our quizzes to sharpen your ability to identify fake news and misinformation.
            Learn as you play and become better at spotting deception.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Political Claims Quiz",
              description: "Test your knowledge on recent political statements and promises. Can you separate truth from fiction?",
              icon: "🏛️",
              questions: 10,
              time: "5 min",
            },
            {
              title: "Health Misinformation",
              description: "Challenge yourself to identify common health myths and scientific facts circulating in social media.",
              icon: "🧪",
              questions: 12,
              time: "6 min",
            },
            {
              title: "Spot the Scam",
              description: "Learn to identify common financial and digital scams targeting Indian citizens.",
              icon: "🔍",
              questions: 8,
              time: "4 min",
            },
          ].map((quiz, index) => (
            <FadeIn key={index} delay={150 * (index + 1)}>
              <div className="glass-panel h-full rounded-xl border-white/10 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-fakexpose-blue/5">
                <div className="mb-4 text-3xl">{quiz.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{quiz.title}</h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {quiz.description}
                </p>
                <div className="mb-6 flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>{quiz.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                    </svg>
                    <span>{quiz.questions} questions</span>
                  </div>
                </div>
                <Button variant="glassmorphic" className="w-full">
                  Take Quiz
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={600} className="mt-12 text-center">
          <Button variant="gradient" size="lg">
            Explore All Quizzes
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
