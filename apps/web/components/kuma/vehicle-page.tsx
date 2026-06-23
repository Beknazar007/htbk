"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { Download, Gauge, Shield, Cog, Truck, Zap } from "lucide-react";
import type { Vehicle } from "@/lib/kuma/content/types";
import { useKuma } from "./kuma-provider";
import { Breadcrumbs } from "./breadcrumbs";
import { LeadForm } from "./lead-form";
import { FadeUp } from "@/lib/kuma/motion";
import { SUPERSTRUCTURES } from "@/lib/kuma/content/superstructures";

const ICONS: Record<string, typeof Gauge> = {
  engine: Cog,
  transmission: Gauge,
  payload: Truck,
  abs: Shield,
  vdc: Shield,
  safety: Shield,
  motor: Zap,
};

interface VehiclePageProps {
  vehicle: Vehicle;
}

export function VehiclePageClient({ vehicle }: VehiclePageProps) {
  const { t, locale } = useKuma();

  const specRows = [
    { label: t("specEngine"), value: vehicle.specs.engine },
    { label: t("specWheelbase"), value: vehicle.specs.wheelbase },
    { label: t("specDimensions"), value: vehicle.specs.dimensions },
    { label: t("specWeight"), value: vehicle.specs.weight },
    { label: t("specFuel"), value: vehicle.specs.fuelConsumption },
    { label: t("specTransmission"), value: vehicle.specs.transmission },
    { label: t("specBrakes"), value: vehicle.specs.brakes },
    { label: t("specSuspension"), value: vehicle.specs.suspension },
  ];

  return (
    <KumaSubpageShell>
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] overflow-hidden">
        <img src={vehicle.heroImage} alt={vehicle.name[locale]} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-kuma-900/90 via-kuma-900/60 to-transparent" />
        <div className="relative z-10 flex min-h-[60vh] flex-col justify-end kuma-container pb-12 pt-8">
          <Breadcrumbs items={[{ label: t("navProducts"), href: "/products/mighty-gt8" }, { label: vehicle.name[locale] }]} className="mb-6 text-white/60 [&_a]:text-white/70 [&_span]:text-white" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">{vehicle.name[locale]}</h1>
          <p className="mt-3 max-w-xl text-lg text-white/80">{vehicle.tagline[locale]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacts#form" className="kuma-btn-primary">{t("consultBtn")}</Link>
            <Link href="/contacts#form" className="kuma-btn-outline">{t("testDriveBtn")}</Link>
            <Link href="/leasing" className="kuma-btn-outline">{t("leasingCalcBtn")}</Link>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="kuma-section bg-gray-50">
        <div className="kuma-container">
          <FadeUp><h2 className="kuma-heading text-kuma-900 mb-10">{t("perfTitle")}</h2></FadeUp>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {vehicle.performance.map((p, i) => {
              const Icon = ICONS[p.icon] ?? Shield;
              return (
                <FadeUp key={p.titleKey} delay={i * 60}>
                  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <Icon className="mb-3 h-8 w-8 text-kuma-600" />
                    <h3 className="font-bold text-kuma-900">{t(p.titleKey)}</h3>
                    <p className="mt-2 text-sm text-gray-600">{t(p.descKey)}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Convenience & Technology */}
      <section className="kuma-section">
        <div className="kuma-container grid gap-12 lg:grid-cols-2">
          <FadeUp>
            <h2 className="text-2xl font-bold text-kuma-900 mb-4">{t("convenienceTitle")}</h2>
            <p className="text-gray-700 leading-relaxed">{vehicle.convenience[locale]}</p>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="text-2xl font-bold text-kuma-900 mb-4">{t("technologyTitle")}</h2>
            <p className="text-gray-700 leading-relaxed">{vehicle.technology[locale]}</p>
          </FadeUp>
        </div>
      </section>

      {/* Design galleries */}
      <section className="kuma-section bg-kuma-900 text-white">
        <div className="kuma-container">
          <FadeUp><h2 className="kuma-heading mb-10">{t("designTitle")}</h2></FadeUp>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wider text-white/60">{t("exteriorGallery")}</h3>
              <div className="grid grid-cols-2 gap-3">
                {vehicle.exteriorImages.map((img, i) => (
                  <img key={i} src={img} alt="" className="aspect-[4/3] rounded-xl object-cover" />
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-bold uppercase tracking-wider text-white/60">{t("interiorGallery")}</h3>
              <div className="grid grid-cols-2 gap-3">
                {vehicle.interiorImages.map((img, i) => (
                  <img key={i} src={img} alt="" className="aspect-[4/3] rounded-xl object-cover" />
                ))}
              </div>
              <div className="mt-4 flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-white/20 bg-white/5">
                <span className="text-white/50">{t("view360")} — {t("comingSoon")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs table */}
      <section className="kuma-section">
        <div className="kuma-container">
          <FadeUp className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="kuma-heading text-kuma-900">{t("specsTitle")}</h2>
            <a href={vehicle.pdfPath} className="kuma-btn-primary inline-flex gap-2">
              <Download className="h-4 w-4" /> {t("downloadPdf")}
            </a>
          </FadeUp>
          <FadeUp>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full min-w-[500px] text-left text-sm">
                <tbody>
                  {specRows.map(({ label, value }) => (
                    <tr key={label} className="border-b border-gray-100 last:border-0">
                      <th className="bg-gray-50 px-6 py-4 font-semibold text-gray-600 w-1/3">{label}</th>
                      <td className="px-6 py-4 font-medium text-kuma-900">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Body configurations */}
      <section className="kuma-section bg-gray-50">
        <div className="kuma-container">
          <FadeUp><h2 className="kuma-heading text-kuma-900 mb-8">{t("bodyConfigsTitle")}</h2></FadeUp>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {vehicle.bodyConfigs.map((slug) => {
              const body = SUPERSTRUCTURES.find((s) => s.slug === slug);
              if (!body) return null;
              return (
                <Link key={slug} href={`/superstructures/${slug}`} className="group rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <img src={body.image} alt="" className="mb-3 aspect-video rounded-lg object-cover" />
                  <span className="font-semibold text-kuma-800 group-hover:text-kuma-600">{t(body.nameKey)}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="kuma-section">
        <div className="kuma-container max-w-xl">
          <FadeUp>
            <h2 className="text-2xl font-bold text-kuma-900 mb-6">{t("consultBtn")}</h2>
            <LeadForm showVehicle />
          </FadeUp>
        </div>
      </section>
    </div>
    </KumaSubpageShell>
  );
}
