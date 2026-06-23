"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { SubpageHero } from "./subpage-hero";
import { useKuma } from "./kuma-provider";
import { SUPERSTRUCTURES, getSuperstructure } from "@/lib/kuma/content/superstructures";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { Breadcrumbs } from "./breadcrumbs";
import { LeadForm } from "./lead-form";
import { FadeUp } from "@/lib/kuma/motion";

export function SuperstructuresCatalog() {
  const { t, locale } = useKuma();

  return (
    <KumaSubpageShell>
      <div>
        <SubpageHero
          image={SECTION_BANNERS.superstructures}
          title={t("superstructuresPageTitle")}
          subtitle={t("superstructuresPageSub")}
          breadcrumbs={[{ label: t("navSuperstructures") }]}
          dark={false}
        />
        <section className="kuma-section">
          <div className="kuma-container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SUPERSTRUCTURES.map((s, i) => (
              <FadeUp key={s.slug} delay={(i % 3) * 60}>
                <Link
                  href={`/superstructures/${s.slug}`}
                  className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={s.image}
                      alt={t(s.nameKey)}
                      className="kuma-truck-card h-full w-full"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-kuma-900">{t(s.nameKey)}</h2>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-600">{s.description[locale]}</p>
                    <span className="mt-4 inline-block text-sm font-bold text-kuma-600">
                      {t("learnMore")} →
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </section>
      </div>
    </KumaSubpageShell>
  );
}

export function SuperstructureDetail({ slug }: { slug: string }) {
  const { t, locale } = useKuma();
  const item = getSuperstructure(slug);
  if (!item) return null;

  return (
    <KumaSubpageShell>
      <div>
        <section className="overflow-hidden border-b border-gray-100 bg-white">
          <div className="kuma-container px-5 py-8 xs:px-6 md:py-10">
            <Breadcrumbs
              items={[
                { label: t("navSuperstructures"), href: "/superstructures" },
                { label: t(item.nameKey) },
              ]}
              className="mb-4 text-brand-navy/50"
            />
            <h1 className="text-3xl font-bold text-brand-navy xs:text-4xl">{t(item.nameKey)}</h1>
          </div>
          <div className="relative aspect-[21/8] min-h-[180px] bg-slate-100">
            <img
              src={item.image}
              alt={t(item.nameKey)}
              className="kuma-banner-truck h-full w-full"
            />
          </div>
        </section>
        <section className="kuma-section">
          <div className="kuma-container grid gap-12 lg:grid-cols-2">
            <FadeUp>
              <p className="text-lg leading-relaxed text-gray-700">{item.description[locale]}</p>
              <h2 className="mt-8 text-xl font-bold text-kuma-900">{t("applicationsTitle")}</h2>
              <ul className="mt-4 space-y-2">
                {item.applications[locale].map((app) => (
                  <li key={app} className="flex items-center gap-2 text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-kuma-600" /> {app}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={100}>
              <LeadForm showVehicle />
            </FadeUp>
          </div>
        </section>
      </div>
    </KumaSubpageShell>
  );
}
