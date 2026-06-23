"use client";

import { useKtm } from "../ktm-provider";
import { KTM_IMAGES } from "@/lib/ktm/images";
import { KTM_SITE } from "@/lib/ktm/site";
import { KtmButton } from "../ui/button";
import { FadeIn } from "../motion";

export function KtmHero() {
  const { t } = useKtm();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ktm-navy">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={KTM_IMAGES.hero}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-center sm:object-bottom"
      />
      <div className="absolute inset-0 bg-ktm-hero" />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8 3xl:pb-28">
        <div className="ktm-container !px-0">
          <FadeIn>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-ktm-red sm:text-sm">
              Kyrgyzstan Truck Motors
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mb-5 max-w-4xl text-[clamp(1.75rem,5vw,4rem)] font-black leading-[1.1] text-white">
              {t("heroTitle")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mb-8 max-w-xl text-base text-white/85 sm:text-lg md:text-xl">
              {t("heroSubtitle")}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap">
              <KtmButton href="/trucks">{t("heroBtnTrucks")}</KtmButton>
              <KtmButton href={KTM_SITE.whatsapp} external variant="outline">
                {t("heroBtnContact")}
              </KtmButton>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
