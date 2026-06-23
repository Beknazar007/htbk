"use client";

import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";

export function KumaHero() {
  const { t } = useKuma();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&q=80)`,
        }}
      />
      <div className="absolute inset-0 bg-kuma-hero" />

      <div className="relative z-10 kuma-container px-4 text-center text-white">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-kuma-200 sm:text-base">
            {t("tagline")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            {t("siteName")}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="mx-auto mb-4 max-w-2xl text-xl font-light sm:text-2xl">
            {t("heroSubtitle")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="mx-auto mb-10 max-w-xl text-base text-white/80 sm:text-lg">
            {t("heroDescription")}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={400}>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo("#contacts")}
              className="kuma-btn-primary min-w-[200px]"
            >
              {t("consultBtn")}
            </button>
            <button
              onClick={() => scrollTo("#models")}
              className="kuma-btn-outline min-w-[200px]"
            >
              {t("catalogBtn")}
            </button>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-5 rounded-full border-2 border-white/50">
          <div className="mx-auto mt-2 h-2 w-1 rounded-full bg-white/70" />
        </div>
      </div>
    </section>
  );
}
