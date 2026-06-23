"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import type { TruckModel } from "@/lib/kuma/types";
import { useKuma } from "@/components/kuma/kuma-provider";
import { ScrollReveal } from "@/components/kuma/scroll-reveal";
import { Breadcrumbs } from "@/components/kuma/breadcrumbs";
import { Download } from "lucide-react";

export function ModelDetailClient({ truck }: { truck: TruckModel }) {
  const { t, locale } = useKuma();

  const specRows = [
    { label: t("categoryLabel"), value: t(truck.categoryKey) },
    { label: t("brand"), value: truck.fullSpecs.brand },
    { label: t("model"), value: truck.fullSpecs.model },
    { label: t("country"), value: truck.fullSpecs.country },
    { label: t("engineVolume"), value: truck.fullSpecs.engineVolume },
    { label: t("horsepower"), value: truck.fullSpecs.horsepower },
    { label: t("transmission"), value: truck.fullSpecs.transmission },
    { label: t("payload"), value: truck.fullSpecs.payload },
    { label: t("fuelTank"), value: truck.fullSpecs.fuelTank },
    { label: t("fuelConsumption"), value: truck.fullSpecs.fuelConsumption },
    { label: t("maxSpeed"), value: truck.fullSpecs.maxSpeed },
  ];

  return (
    <KumaSubpageShell>
    <div>
      <div
        className="relative flex min-h-[40vh] items-end bg-cover bg-center sm:min-h-[45vh] md:min-h-[50vh]"
        style={{ backgroundImage: `url(${truck.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-kuma-900/85 via-kuma-900/30 to-transparent" />
        <div className="relative z-10 kuma-container pb-8 pt-8 sm:pb-10 md:pb-12">
          <Breadcrumbs
            items={[{ label: t("navProducts"), href: "/products/mighty-gt8" }, { label: truck.name }]}
            className="mb-4 text-white/60 [&_a]:text-white/70 [&_span]:text-white"
          />
          <span className="mb-2 inline-block rounded-full bg-kuma-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm sm:text-sm">
            {t(truck.categoryKey)}
          </span>
          <h1 className="text-2xl font-bold text-white sm:text-4xl md:text-5xl">{truck.name}</h1>
          <a
            href={truck.pdfPath}
            download
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
          >
            <Download className="h-4 w-4" /> {t("downloadPdf")}
          </a>
        </div>
      </div>

      <div className="kuma-container py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <h2 className="mb-6 text-xl font-bold text-kuma-800 sm:text-2xl">{t("specsTitle")}</h2>
            <dl className="divide-y divide-gray-100">
              {specRows.map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:py-4">
                  <dt className="text-sm font-medium text-gray-600">{label}</dt>
                  <dd className="text-sm font-semibold text-kuma-800 sm:text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="mb-6 text-xl font-bold text-kuma-800 sm:text-2xl">{t("historyTitle")}</h2>
            <p className="text-sm leading-relaxed text-gray-700 sm:text-base">{truck.history[locale]}</p>
          </ScrollReveal>
        </div>
        <ScrollReveal>
          <h2 className="mb-6 mt-10 text-xl font-bold text-kuma-800 sm:mt-16 sm:text-2xl">{t("superstructuresTitle")}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {truck.superstructures.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 60}>
                <Link href={`/superstructures/${s.id === "semi-trailer" ? "flatbed" : s.id}`} className="block overflow-hidden rounded-xl bg-gray-50 hover:shadow-md transition-shadow">
                  <img src={s.image} alt={t(s.nameKey)} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  <p className="p-3 text-center text-sm font-medium text-kuma-800">{t(s.nameKey)}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
    </KumaSubpageShell>
  );
}
