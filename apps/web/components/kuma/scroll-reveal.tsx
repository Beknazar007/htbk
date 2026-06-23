"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  /** Always visible immediately (use for hero / above-the-fold) */
  immediate?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  immediate = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.style.transitionDelay = `${delay}ms`;
      el.classList.add("kuma-visible");
    };

    if (immediate) {
      reveal();
      return;
    }

    const inView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    if (inView()) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.unobserve(el);
        }
      },
      { threshold: 0, rootMargin: "80px" }
    );

    observer.observe(el);

    const fallback = window.setTimeout(() => {
      if (!el.classList.contains("kuma-visible")) reveal();
    }, 800);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [delay, immediate]);

  const directionClass = {
    up: "kuma-reveal-up",
    left: "kuma-reveal-left",
    right: "kuma-reveal-right",
    none: "kuma-reveal-none",
  }[direction];

  return (
    <div
      ref={ref}
      className={cn(directionClass, immediate && "kuma-visible", className)}
    >
      {children}
    </div>
  );
}
