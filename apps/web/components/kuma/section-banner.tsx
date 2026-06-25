"use client";

import { ScrollReveal } from "./scroll-reveal";
import { KumaImage } from "./kuma-image";
import { cn } from "@/lib/utils";

type SectionBannerProps = {
  image: string;
  label: string;
  title: string;
  subtitle?: string;
  /** Two-line responsive title — line 2 stacks on mobile, inline on sm+ */
  titleLine2?: string;
  className?: string;
  dark?: boolean;
  align?: "left" | "center";
  /** @deprecated kept for API compat — text is always above image now */
  textPosition?: "center" | "top";
};

export function SectionBanner({
  image,
  label,
  title,
  titleLine2,
  subtitle,
  className,
  dark = false,
  align = "left",
}: SectionBannerProps) {
  return (
    <ScrollReveal>
      <div
        className={cn(
          "mb-8 overflow-hidden rounded-2xl border shadow-sm xs:mb-10 xs:rounded-3xl md:mb-12",
          dark ? "border-white/10 bg-brand-navy" : "border-gray-100 bg-white",
          className
        )}
      >
        <div
          className={cn(
            "border-b px-5 py-5 xs:px-7 xs:py-6 md:px-8 md:py-7",
            dark ? "border-white/10 bg-brand-navy" : "border-gray-100 bg-white",
            align === "center" && "text-center"
          )}
        >
          <span className="kuma-label mb-2 inline-block xs:mb-3">{label}</span>
          <h2
            className={cn(
              "text-balance font-bold leading-[1.15] tracking-tight text-brand-navy",
              "text-[1.35rem] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-5xl 2xl:text-[2.75rem] 3xl:text-6xl",
              align === "center" && "mx-auto max-w-4xl",
              dark && "text-white"
            )}
          >
            {titleLine2 ? (
              <>
                <span className="block sm:inline">{title}</span>
                <span className="mt-0.5 block sm:mt-0 sm:inline sm:before:content-['_']">{titleLine2}</span>
              </>
            ) : (
              title
            )}
          </h2>
          {subtitle && (
            <p
              className={cn(
                "mt-2 max-w-2xl text-sm leading-relaxed text-brand-navy/75 xs:mt-3 xs:text-base md:text-lg",
                dark && "text-white/80",
                align === "center" && "mx-auto"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative aspect-[4/3] min-h-[160px] w-full bg-slate-100 sm:aspect-[16/9] sm:min-h-[180px] md:aspect-[21/9] md:min-h-[220px] lg:min-h-[260px]">
          <KumaImage src={image} alt="" className="absolute inset-0" />
        </div>
      </div>
    </ScrollReveal>
  );
}
