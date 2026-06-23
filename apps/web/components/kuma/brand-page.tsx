"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { useKuma } from "./kuma-provider";
import { Breadcrumbs } from "./breadcrumbs";
import { FadeUp } from "@/lib/kuma/motion";
import { IMAGES } from "@/lib/kuma/constants";

const BRAND_PAGES: Record<string, { titleKey: string; subKey: string; hero: string; sections: { t: string; b: string }[] }> = {
  about: {
    titleKey: "brandPageAboutTitle",
    subKey: "brandPageAboutSub",
    hero: IMAGES.commercialHero,
    sections: [
      { t: "brandPageAboutS1T", b: "brandPageAboutS1B" },
      { t: "brandPageAboutS2T", b: "brandPageAboutS2B" },
    ],
  },
  distributor: {
    titleKey: "brandPageDistributorTitle",
    subKey: "brandPageDistributorSub",
    hero: IMAGES.tractorHero,
    sections: [{ t: "brandPageDistributorS1T", b: "brandPageDistributorS1B" }],
  },
  history: {
    titleKey: "brandPageHistoryTitle",
    subKey: "brandPageHistorySub",
    hero: IMAGES.dumpHero,
    sections: [
      { t: "brandPageHistoryS1T", b: "brandPageHistoryS1B" },
      { t: "brandPageHistoryS2T", b: "brandPageHistoryS2B" },
      { t: "brandPageHistoryS3T", b: "brandPageHistoryS3B" },
    ],
  },
  mission: {
    titleKey: "brandPageMissionTitle",
    subKey: "brandPageMissionSub",
    hero: IMAGES.vanHero,
    sections: [
      { t: "brandPageMissionS1T", b: "brandPageMissionS1B" },
      { t: "brandPageMissionS2T", b: "brandPageMissionS2B" },
    ],
  },
  "why-hyundai": {
    titleKey: "brandPageWhyTitle",
    subKey: "brandPageWhySub",
    hero: IMAGES.commercialHero,
    sections: [
      { t: "brandPageWhyS1T", b: "brandPageWhyS1B" },
      { t: "brandPageWhyS2T", b: "brandPageWhyS2B" },
    ],
  },
  contact: {
    titleKey: "brandPageContactTitle",
    subKey: "brandPageContactSub",
    hero: IMAGES.leasing,
    sections: [],
  },
};

export function BrandPageClient({ slug }: { slug: string }) {
  const { t } = useKuma();
  const page = BRAND_PAGES[slug];

  if (!page) return null;

  return (
    <KumaSubpageShell>
    <div>
      <section className="relative min-h-[40vh] overflow-hidden">
        <img src={page.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-kuma-900/70" />
        <div className="relative z-10 flex min-h-[40vh] flex-col justify-end kuma-container pb-12">
          <Breadcrumbs items={[{ label: t("navBrand"), href: "/brand/about" }, { label: t(page.titleKey) }]} className="mb-4 text-white/60 [&_a]:text-white/70 [&_span]:text-white" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{t(page.titleKey)}</h1>
          <p className="mt-3 text-white/80">{t(page.subKey)}</p>
        </div>
      </section>

      {slug === "contact" ? (
        <div className="kuma-container py-16">
          <Link href="/contacts" className="kuma-btn-primary">{t("navContacts")}</Link>
        </div>
      ) : (
        <section className="kuma-section">
          <div className="kuma-container max-w-3xl space-y-12">
            {page.sections.map((s, i) => (
              <FadeUp key={s.t} delay={i * 80}>
                <h2 className="text-2xl font-bold text-kuma-900">{t(s.t)}</h2>
                <p className="mt-4 text-gray-700 leading-relaxed">{t(s.b)}</p>
              </FadeUp>
            ))}
          </div>
        </section>
      )}
    </div>
    </KumaSubpageShell>
  );
}
