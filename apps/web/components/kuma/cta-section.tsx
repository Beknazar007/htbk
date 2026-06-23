"use client";

import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { WHATSAPP_URL } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";

export function KumaCta() {
  const { t } = useKuma();

  return (
    <section className="relative overflow-hidden bg-brand-black py-14 xs:py-16 sm:py-20 md:py-24 lg:py-28 3xl:py-32 4xl:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,114,188,0.08)_0%,_transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent" />

      <div className="relative kuma-container px-5 text-center xs:px-6">
        <ScrollReveal>
          <h2 className="kuma-heading mx-auto mb-6 max-w-xs text-white xs:mb-8 xs:max-w-lg sm:mb-10 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 3xl:max-w-5xl">
            {t("ctaTitle")}
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[52px] items-center gap-3 rounded-xl bg-brand-accent-gradient px-6 py-4 text-sm font-bold text-white shadow-2xl shadow-brand-accent/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-accent/50 active:scale-[0.98] xs:px-8 xs:text-base sm:px-10 sm:py-5 sm:text-lg 3xl:min-h-[60px] 3xl:gap-4 3xl:px-12 3xl:text-xl 4xl:min-h-[68px] 4xl:px-14 4xl:text-2xl"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6 3xl:h-7 3xl:w-7 4xl:h-8 4xl:w-8" />
            <span>{t("whatsappBtn")}</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
