import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { FadeIn } from "../animations/FadeIn";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createClient } from '@supabase/supabase-js';

// Form validation schema
const feedbackFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Feedback must be at least 10 characters"),
  type: z.enum(["suggestion", "issue", "praise", "other"]).default("suggestion"),
});

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

// Initialize Supabase client with placeholders
// In a production app, these would be environment variables
const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export function FeedbackSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with react-hook-form
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      type: "suggestion",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FeedbackFormValues) => {
    setIsSubmitting(true);
    
    try {
      // For now, we'll just log the feedback data and show a success message
      // In production, you would use actual Supabase credentials
      console.log("Feedback data:", data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show success message
      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback! We'll get back to you soon.",
        variant: "default",
      });
      
      // Reset the form
      form.reset();
    } catch (error) {
      // Show error message
      toast({
        title: "Submission Failed",
        description: "There was a problem submitting your feedback. Please try again.",
        variant: "destructive",
      });
      
      console.error("Error submitting feedback:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding" id="feedback">
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mb-1 block text-sm">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            className="w-full rounded-md bg-muted p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="mb-1 block text-sm">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Your email" 
                            className="w-full rounded-md bg-muted p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-1 block text-sm">Feedback Type</FormLabel>
                      <FormControl>
                        <select 
                          className="w-full rounded-md bg-muted p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          {...field}
                        >
                          <option value="suggestion">Suggestion</option>
                          <option value="issue">Report an Issue</option>
                          <option value="praise">Praise</option>
                          <option value="other">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="mb-1 block text-sm">Feedback</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your thoughts or suggestions..." 
                          className="w-full rounded-md bg-muted p-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                          rows={4}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden rounded-md bg-primary px-6 py-2 font-medium text-white transition-colors hover:bg-primary/90 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                        <span className="absolute right-0 top-0 h-full w-12 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                      </>
                    ) : (
                      "Submit Feedback"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

