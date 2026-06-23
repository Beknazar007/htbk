"use client";

import Link from "next/link";
import type { TruckModel } from "@/lib/kuma/types";
import { KumaProvider, useKuma } from "@/components/kuma/kuma-provider";
import { ScrollReveal } from "@/components/kuma/scroll-reveal";
import { Download, ArrowLeft } from "lucide-react";

function ModelDetailInner({ truck }: { truck: TruckModel }) {
  const { t, locale } = useKuma();

  const specRows = [
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
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="kuma-container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-kuma-800">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-semibold">{t("backToCatalog")}</span>
          </Link>
          <a
            href={truck.pdfPath}
            download
            className="flex items-center gap-2 rounded-lg bg-kuma-600 px-4 py-2 text-sm font-semibold text-white hover:bg-kuma-500"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">{t("downloadPdf")}</span>
          </a>
        </div>
      </header>

      <div
        className="relative mt-16 flex h-[50vh] min-h-[400px] items-end bg-cover bg-center"
        style={{ backgroundImage: `url(${truck.heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-kuma-900/80 to-transparent" />
        <div className="relative z-10 kuma-container px-4 pb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{truck.name}</h1>
        </div>
      </div>

      <div className="kuma-container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <h2 className="mb-8 text-2xl font-bold text-kuma-800">{t("specsTitle")}</h2>
            <dl className="divide-y divide-gray-100">
              {specRows.map(({ label, value }) => (
                <div key={label} className="flex justify-between py-4">
                  <dt className="font-medium text-gray-600">{label}</dt>
                  <dd className="font-semibold text-kuma-800">{value}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="mb-8 text-2xl font-bold text-kuma-800">{t("historyTitle")}</h2>
            <p className="leading-relaxed text-gray-700">{truck.history[locale]}</p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <h2 className="mb-8 mt-16 text-2xl font-bold text-kuma-800">
            {t("superstructuresTitle")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {truck.superstructures.map((s, i) => (
              <ScrollReveal key={s.id} delay={i * 80}>
                <div className="overflow-hidden rounded-xl bg-gray-50">
                  <img
                    src={s.image}
                    alt={t(s.nameKey)}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                  <p className="p-4 text-center font-medium text-kuma-800">{t(s.nameKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export function ModelDetailClient({ truck }: { truck: TruckModel }) {
  return (
    <KumaProvider>
      <ModelDetailInner truck={truck} />
    </KumaProvider>
  );
}
