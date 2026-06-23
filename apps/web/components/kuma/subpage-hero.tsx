"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { KumaImage } from "./kuma-image";
import { cn } from "@/lib/utils";

type SubpageHeroProps = {
  image: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
  dark?: boolean;
};

export function SubpageHero({
  image,
  title,
  subtitle,
  breadcrumbs,
  dark = true,
}: SubpageHeroProps) {
  return (
    <section className="overflow-hidden border-b border-gray-100 bg-white">
      <div className="kuma-container px-5 py-8 xs:px-6 xs:py-10 md:py-12">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs
            items={breadcrumbs}
            className={cn("mb-4", dark ? "text-brand-navy/50" : "text-brand-navy/50")}
          />
        )}
        <h1 className="text-3xl font-bold leading-tight text-brand-navy xs:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-brand-navy/75 xs:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <div className="relative aspect-[21/8] min-h-[180px] w-full bg-slate-100 sm:min-h-[220px] md:min-h-[260px]">
        <KumaImage src={image} alt="" className="absolute inset-0" />
      </div>
    </section>
  );
}
