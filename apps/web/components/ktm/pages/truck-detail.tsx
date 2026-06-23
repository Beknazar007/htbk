"use client";

import { KtmButton } from "@/components/ktm/ui/button";
import { useKtm } from "@/components/ktm/ktm-provider";
import { KtmPageShell } from "@/components/ktm/ktm-page-shell";
import { FadeIn } from "@/components/ktm/motion";
import type { KtmTruck } from "@/lib/ktm/trucks";
import { KTM_SITE } from "@/lib/ktm/site";

export function TruckDetailPage({ truck }: { truck: KtmTruck }) {
  const { t, loc } = useKtm();

  const specRows = [
    { label: t("specEngine"), value: loc(truck.specs.engine) },
    { label: t("specPower"), value: loc(truck.specs.power) },
    { label: t("specTorque"), value: loc(truck.specs.torque) },
    { label: t("specFuel"), value: loc(truck.specs.fuel) },
    { label: t("specLoad"), value: loc(truck.specs.load) },
    { label: t("specTransmission"), value: loc(truck.specs.transmission) },
  ];

  return (
    <KtmPageShell>
      <section className="relative bg-ktm-navy py-16 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold uppercase tracking-widest text-ktm-red">
              {t(truck.categoryKey)}
            </span>
            <h1 className="mt-2 text-3xl font-black sm:text-4xl lg:text-5xl">{loc(truck.name)}</h1>
            <p className="mt-4 text-lg text-white/70">{loc(truck.tagline)}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{loc(truck.description)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <KtmButton href={KTM_SITE.whatsappQuote} external variant="whatsapp">
                {t("ctaQuote")}
              </KtmButton>
              <KtmButton href={KTM_SITE.whatsapp} external variant="outline">
                {t("whatsappLabel")}
              </KtmButton>
              <KtmButton href="/trucks" variant="outline">
                {t("navTrucks")}
              </KtmButton>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={truck.heroImage}
              alt={loc(truck.name)}
              className="w-full object-contain object-bottom"
            />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="mb-8 text-2xl font-black text-ktm-navy">{t("detailSpecs")}</h2>
          <div className="overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full text-left text-sm">
              <tbody>
                {specRows.map(({ label, value }) => (
                  <tr key={label} className="border-b border-gray-100 last:border-0">
                    <th className="bg-ktm-gray px-5 py-4 font-semibold text-ktm-navy">{label}</th>
                    <td className="px-5 py-4 text-ktm-gray-dark">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="mb-4 mt-12 text-xl font-bold text-ktm-navy">{t("detailPerformance")}</h2>
          <ul className="grid gap-3 sm:grid-cols-3">
            {truck.features.map((key) => (
              <li
                key={key}
                className="rounded-xl border border-gray-100 bg-ktm-gray px-4 py-3 text-sm font-medium text-ktm-navy"
              >
                {t(key)}
              </li>
            ))}
          </ul>
        </FadeIn>
      </section>
    </KtmPageShell>
  );
}
