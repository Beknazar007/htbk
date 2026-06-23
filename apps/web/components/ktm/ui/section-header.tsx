"use client";

import { cn } from "@/lib/utils";
import { FadeIn } from "../motion";

export function SectionHeader({
  title,
  subtitle,
  dark = false,
  centered = true,
  className,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
  centered?: boolean;
  className?: string;
}) {
  return (
    <FadeIn className={cn(centered && "text-center", className)}>
      <h2
        className={cn(
          "text-2xl font-black sm:text-3xl md:text-4xl 3xl:text-5xl",
          dark ? "text-white" : "text-ktm-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-sm sm:text-base md:text-lg",
            centered && "mx-auto",
            dark ? "text-white/70" : "text-ktm-gray-dark"
          )}
        >
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
