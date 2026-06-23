"use client";

import { cn } from "@/lib/utils";
import { useKtm } from "../ktm-provider";
import { FadeIn } from "../motion";

export function SplitSection({
  image,
  imageAlt = "",
  reverse = false,
  dark = false,
  children,
  id,
}: {
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  dark?: boolean;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "ktm-section overflow-hidden",
        dark ? "bg-ktm-navy text-white" : "bg-white text-ktm-navy"
      )}
    >
      <div className="ktm-container">
        <div
          className={cn(
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 3xl:gap-20",
            reverse && "lg:[&>*:first-child]:order-2"
          )}
        >
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl bg-ktm-gray/50 ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full max-w-full object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </FadeIn>
          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function FeatureList({
  items,
  dark = false,
}: {
  items: readonly { titleKey: string; descKey: string }[];
  dark?: boolean;
}) {
  const { t } = useKtm();

  return (
    <div className="mt-8 space-y-5 sm:space-y-6">
      {items.map(({ titleKey, descKey }, i) => (
        <FadeIn key={titleKey} delay={i * 0.08}>
          <div className="border-l-2 border-ktm-red pl-4 sm:pl-5">
            <h3 className={cn("font-bold", dark ? "text-white" : "text-ktm-navy")}>
              {t(titleKey)}
            </h3>
            <p
              className={cn(
                "mt-1 text-sm leading-relaxed",
                dark ? "text-white/60" : "text-ktm-gray-dark"
              )}
            >
              {t(descKey)}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
