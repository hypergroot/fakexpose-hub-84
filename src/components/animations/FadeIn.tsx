
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  threshold?: number;
  once?: boolean;
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 500,
  direction = "up",
  distance = 20,
  threshold = 0.1,
  once = true,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Set initial position based on direction
  const initialStyles = {
    opacity: 0,
    transform: direction === "up" 
      ? `translateY(${distance}px)` 
      : direction === "down" 
      ? `translateY(-${distance}px)` 
      : direction === "left" 
      ? `translateX(${distance}px)` 
      : direction === "right" 
      ? `translateX(-${distance}px)` 
      : "none",
  };

  // Set visible styles
  const visibleStyles = {
    opacity: 1,
    transform: "translate(0, 0)",
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        ...initialStyles,
        ...(!isVisible ? {} : visibleStyles),
        transition: `opacity ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
