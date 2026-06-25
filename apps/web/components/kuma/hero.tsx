"use client";

import { useEffect, useState } from "react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { scrollToSection } from "@/lib/kuma/scroll-to";
import { HERO_SLIDES } from "@/lib/kuma/hero-slides";
import { WHATSAPP_URL } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

const SLIDE_MS = 6000;
const FADE_MS = 1200;

export function KumaHero() {
  const { t } = useKuma();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % HERO_SLIDES.length),
      SLIDE_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-slate-100 pt-[calc(3.5rem+env(safe-area-inset-top))] xs:pt-[calc(4rem+env(safe-area-inset-top))] md:pt-[calc(4.25rem+env(safe-area-inset-top))] lg:pt-[calc(4.5rem+env(safe-area-inset-top))] 3xl:pt-[calc(5rem+env(safe-area-inset-top))]"
    >
      {/* Slideshow — full bleed, trucks anchored at bottom */}
      <div className="absolute inset-0 bg-slate-100">
        {HERO_SLIDES.map((slide, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={cn(
              "kuma-hero-truck kuma-hero-clean absolute inset-0 h-full w-full transition-opacity ease-in-out",
              index === active ? "z-[2] opacity-100" : "z-[1] opacity-0"
            )}
            style={{ transitionDuration: `${FADE_MS}ms` }}
            draggable={false}
          />
        ))}
      </div>

      {/* Top text band — integrated with image, does not cover trucks */}
      <div className="relative z-10 flex min-h-[calc(100dvh-3.5rem)] flex-col md:min-h-[calc(100vh-4.25rem)]">
        <div className="bg-gradient-to-b from-white from-0% via-white/97 via-40% to-transparent to-[58%] xs:via-45% xs:to-[62%] md:via-45% md:to-70% px-4 pb-8 pt-2 xs:px-7 xs:pb-12 xs:pt-4 md:px-10 md:pb-14 lg:px-12 lg:pb-16">
          <ScrollReveal immediate>
            <span className="kuma-label mb-3 inline-block rounded-full border border-brand-accent/25 bg-brand-accent/10 px-4 py-1.5 text-brand-accent">
              {t("siteTagline")}
            </span>
          </ScrollReveal>
          <ScrollReveal immediate delay={100}>
            <h1 className="mb-3 max-w-3xl text-balance break-words text-[1.25rem] font-bold leading-[1.12] tracking-tight text-brand-navy xs:mb-4 xs:text-[1.7rem] sm:text-[2.35rem] md:text-[2.75rem] lg:text-5xl xl:text-[3.25rem]">
              {t("heroTitle")}
            </h1>
          </ScrollReveal>
          <ScrollReveal immediate delay={200}>
            <p className="mb-6 max-w-xl text-sm leading-relaxed text-brand-navy/85 xs:mb-8 xs:text-base md:text-lg">
              {t("heroSubtitle")}
            </p>
          </ScrollReveal>
          <ScrollReveal immediate delay={300}>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={() => scrollToSection("#models")}
                className="kuma-btn-primary w-full sm:w-auto sm:min-w-[190px]"
              >
                {t("catalogBtn")}
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="kuma-btn-whatsapp w-full sm:w-auto sm:min-w-[210px]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span className="truncate">{t("whatsappBtn")}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="flex-1" aria-hidden="true" />
      </div>
    </section>
  );
}
