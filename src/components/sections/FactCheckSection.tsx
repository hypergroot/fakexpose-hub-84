
import React from "react";
import { FadeIn } from "../animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function FactCheckSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, rgba(99, 102, 241, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
        }}
      ></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:gap-12">
          <FadeIn className="mb-10 max-w-xl text-center lg:mb-0 lg:text-left">
            <div className="mb-4 inline-block rounded-full bg-fakexpose-blue/10 px-4 py-1 text-sm font-medium text-fakexpose-blue">
              AI-Powered Fact Checking
            </div>
            
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Verify Any Claim with Our Advanced Fact-Checking AI
            </h2>
            
            <p className="mb-8 text-muted-foreground">
              Our state-of-the-art AI system analyzes news articles, social media posts, and viral
              messages to determine their accuracy. Get instant verification of any news or claim
              circulating in India.
            </p>
            
            <form className="mb-6 flex flex-col gap-4">
              <div className="relative">
                <div className="pointer-events-none absolute left-3 top-3 text-muted-foreground">
                  <Search size={20} />
                </div>
                <textarea
                  placeholder="Paste the news, claim or message you want to verify..."
                  className="h-32 w-full rounded-lg bg-muted/70 p-3 pl-10 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-primary/50 backdrop-blur-sm resize-none"
                />
              </div>
              <Button variant="default" className="w-full md:w-auto">
                Verify Now
              </Button>
            </form>
            
            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span>Try examples:</span>
              <a href="#" className="rounded-full bg-muted px-3 py-1 text-xs hover:bg-muted/80">
                "PM announces new welfare scheme"
              </a>
              <a href="#" className="rounded-full bg-muted px-3 py-1 text-xs hover:bg-muted/80">
                "COVID-19 vaccine causes infertility"
              </a>
            </div>
          </FadeIn>
          
          <FadeIn delay={200} className="glass-panel relative w-full max-w-xl rounded-xl border-white/10 p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-fakexpose-red"></div>
              <div className="h-3 w-3 rounded-full bg-amber-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
              <div className="ml-auto text-sm text-muted-foreground">Fact Check Result</div>
            </div>
            
            <div className="mb-4 rounded-lg bg-muted/50 p-4">
              <h4 className="mb-2 font-medium">Claim:</h4>
              <p className="text-sm text-muted-foreground">
                "Indian government is distributing ₹5,000 to all citizens through a new app called 'PM-Relief'."
              </p>
            </div>
            
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-fakexpose-red/10 p-3 text-fakexpose-red">
              <div className="rounded-full bg-fakexpose-red/20 p-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </div>
              <span className="font-medium">False</span>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-medium">Explanation:</h4>
              <p className="text-sm text-muted-foreground">
                This is a scam circulating on WhatsApp and social media. The Indian government has not launched any app
                called 'PM-Relief' for direct cash transfers of ₹5,000.
              </p>
              <p className="text-sm text-muted-foreground">
                The official government relief programs are only announced through official channels like MyGov and 
                Press Information Bureau (PIB).
              </p>
              
              <div className="mt-4 border-t border-border pt-4">
                <h4 className="mb-2 font-medium">Sources:</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-fakexpose-blue hover:underline">
                      Press Information Bureau Official Statement (March 15, 2023)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-fakexpose-blue hover:underline">
                      Ministry of Finance Twitter Clarification
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
