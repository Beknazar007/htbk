"use client";

import { useEffect, useRef, type ReactNode, type HTMLAttributes, type ElementType } from "react";
import { cn } from "@/lib/utils";

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export function FadeUp({ children, className, delay = 0, as: Tag = "div" }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("kuma-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref}
      className={cn("kuma-reveal-up", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}

export function MotionDiv({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement> & { children?: ReactNode }) {
  return (
    <div className={cn("transition-all duration-500 ease-out", className)} {...props}>
      {children}
    </div>
  );
}

interface StaggerProps {
  children: ReactNode;
  className?: string;
}

export function StaggerChildren({ children, className }: StaggerProps) {
  return <div className={cn("contents", className)}>{children}</div>;
}
