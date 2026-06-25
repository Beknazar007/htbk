"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { useKuma } from "./kuma-provider";
import { Breadcrumbs } from "./breadcrumbs";
import { FadeUp } from "@/lib/kuma/motion";
import { MEDIA } from "@/lib/kuma/media";
import { KumaImage } from "./kuma-image";

const BRAND_PAGES: Record<
  string,
  { titleKey: string; subKey: string; hero: string; gallery: string[]; sections: { t: string; b: string }[] }
> = {
  "hyundai-cv": {
    titleKey: "brandHyundaiCv",
    subKey: "brandHyundaiCvSub",
    hero: MEDIA.brandCv,
    gallery: [MEDIA.brandCv, MEDIA.busLineup],
    sections: [
      { t: "brandCvS1T", b: "brandCvS1B" },
      { t: "brandCvS2T", b: "brandCvS2B" },
    ],
  },
  design: {
    titleKey: "brandDesign",
    subKey: "brandDesignSub",
    hero: MEDIA.brandDesignKv,
    gallery: [MEDIA.brandDesignKv, MEDIA.brandDesignTilt, MEDIA.brandDesignFrame, MEDIA.brandDesignRigid],
    sections: [
      { t: "brandDesignS1T", b: "brandDesignS1B" },
      { t: "brandDesignS2T", b: "brandDesignS2B" },
    ],
  },
  technologies: {
    titleKey: "brandTechnologies",
    subKey: "brandTechnologiesSub",
    hero: MEDIA.brandTechAdas,
    gallery: [MEDIA.brandTechAdas, MEDIA.brandTechCyber, MEDIA.brandTechEco, MEDIA.brandTechMgmt],
    sections: [
      { t: "brandTechS1T", b: "brandTechS1B" },
      { t: "brandTechS2T", b: "brandTechS2B" },
    ],
  },
  comfort: {
    titleKey: "brandComfort",
    subKey: "brandComfortSub",
    hero: MEDIA.brandComfortDash,
    gallery: [MEDIA.brandComfortDash, MEDIA.brandComfortNvh, MEDIA.cabXcient],
    sections: [
      { t: "brandComfortS1T", b: "brandComfortS1B" },
      { t: "brandComfortS2T", b: "brandComfortS2B" },
    ],
  },
  history: {
    titleKey: "brandHistory",
    subKey: "brandHistorySub",
    hero: MEDIA.tractorXcient,
    gallery: [MEDIA.tractorXcient, MEDIA.brandCv],
    sections: [
      { t: "brandPageHistoryS1T", b: "brandPageHistoryS1B" },
      { t: "brandPageHistoryS2T", b: "brandPageHistoryS2B" },
      { t: "brandPageHistoryS3T", b: "brandPageHistoryS3B" },
    ],
  },
  about: { titleKey: "brandHyundaiCv", subKey: "brandHyundaiCvSub", hero: MEDIA.brandCv, gallery: [MEDIA.brandCv], sections: [{ t: "brandCvS1T", b: "brandCvS1B" }] },
  distributor: { titleKey: "brandHyundaiCv", subKey: "brandHyundaiCvSub", hero: MEDIA.brandCv, gallery: [MEDIA.brandCv], sections: [{ t: "brandCvS1T", b: "brandCvS1B" }] },
  mission: { titleKey: "brandHyundaiCv", subKey: "brandHyundaiCvSub", hero: MEDIA.brandCv, gallery: [MEDIA.brandCv], sections: [{ t: "brandCvS2T", b: "brandCvS2B" }] },
  "why-hyundai": { titleKey: "brandTechnologies", subKey: "brandTechnologiesSub", hero: MEDIA.brandTechAdas, gallery: [MEDIA.brandTechAdas], sections: [{ t: "brandTechS1T", b: "brandTechS1B" }] },
  contact: { titleKey: "brandHyundaiCv", subKey: "brandHyundaiCvSub", hero: MEDIA.brandCv, gallery: [], sections: [] },
};

export function BrandPageClient({ slug }: { slug: string }) {
  const { t } = useKuma();
  const page = BRAND_PAGES[slug];

  if (!page) return null;

  return (
    <KumaSubpageShell>
      <div>
        <section className="relative min-h-[40vh] overflow-hidden">
          <KumaImage src={page.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-kuma-900/70" />
          <div className="relative z-10 flex min-h-[40vh] flex-col justify-end kuma-container pb-12">
            <Breadcrumbs items={[{ label: t("navBrand"), href: "/brand/hyundai-cv" }, { label: t(page.titleKey) }]} className="mb-4 text-white/60 [&_a]:text-white/70 [&_span]:text-white" />
            <h1 className="text-4xl font-bold text-white sm:text-5xl">{t(page.titleKey)}</h1>
            <p className="mt-3 text-white/80">{t(page.subKey)}</p>
          </div>
        </section>

        {slug === "contact" ? (
          <div className="kuma-container py-16">
            <Link href="/contacts" className="kuma-btn-primary">{t("navContacts")}</Link>
          </div>
        ) : (
          <>
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
            {page.gallery.length > 0 && (
              <section className="border-t border-gray-100 bg-gray-50 py-14">
                <div className="kuma-container grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {page.gallery.map((src) => (
                    <div key={src} className="overflow-hidden rounded-xl bg-white p-3 shadow-sm">
                      <KumaImage src={src} alt="" className="h-52 w-full object-contain" />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </KumaSubpageShell>
  );
}
