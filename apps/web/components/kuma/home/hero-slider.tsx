"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useKuma } from "../kuma-provider";
import { IMAGES } from "@/lib/kuma/constants";
import { FadeUp } from "@/lib/kuma/motion";
import { cn } from "@/lib/utils";

const SLIDES = [
  { image: IMAGES.commercialHero, titleKey: "heroSlide1Title", descKey: "heroSlide1Desc", href: "/products/mighty-gt8" },
  { image: IMAGES.vanHero, titleKey: "heroSlide2Title", descKey: "heroSlide2Desc", href: "/products/mighty-electric" },
  { image: IMAGES.tractorHero, titleKey: "heroSlide3Title", descKey: "heroSlide3Desc", href: "/service" },
];

export function HeroSlider() {
  const { t } = useKuma();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-kuma-900 pt-16 lg:min-h-[90vh] lg:pt-[4.5rem]">
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === current ? "opacity-100" : "opacity-0"
          )}
        >
          <img src={s.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-kuma-hero" />
        </div>
      ))}

      <div className="relative z-10 flex min-h-[calc(85vh-4rem)] flex-col justify-end kuma-container pb-16 lg:min-h-[calc(90vh-4.5rem)] lg:pb-24">
        <FadeUp key={current}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-kuma-300">
            {t("siteTagline")}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
            {t(slide.titleKey)}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80 sm:text-xl">{t(slide.descKey)}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contacts#form" className="kuma-btn-primary">{t("consultBtn")}</Link>
            <Link href={slide.href} className="kuma-btn-outline">{t("learnMore")}</Link>
          </div>
        </FadeUp>

        <div className="mt-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === current ? "w-10 bg-white" : "w-4 bg-white/40"
              )}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
