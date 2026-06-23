"use client";

import { useState } from "react";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { SubpageHero } from "./subpage-hero";
import { useKuma } from "./kuma-provider";
import { VEHICLES } from "@/lib/kuma/content/vehicles";
import { calcLeasing } from "@/lib/kuma/leasing";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { LeadForm } from "./lead-form";
import { FadeUp } from "@/lib/kuma/motion";

export function LeasingPageClient() {
  const { t, locale } = useKuma();
  const [vehicleIdx, setVehicleIdx] = useState(0);
  const [price, setPrice] = useState(VEHICLES[0].price);
  const [down, setDown] = useState(Math.round(VEHICLES[0].price * 0.2));
  const [term, setTerm] = useState(36);

  const result = calcLeasing(price, down, term);

  const onVehicleChange = (idx: number) => {
    setVehicleIdx(idx);
    setPrice(VEHICLES[idx].price);
    setDown(Math.round(VEHICLES[idx].price * 0.2));
  };

  return (
    <KumaSubpageShell>
    <div>
      <SubpageHero
        image={SECTION_BANNERS.leasing}
        title={t("leasingTitle")}
        subtitle={t("leasingSubtitle")}
        breadcrumbs={[{ label: t("navLeasing") }]}
      />

      <section className="kuma-section">
        <div className="kuma-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeUp>
              <h2 className="text-2xl font-bold text-kuma-900 mb-8">{t("calcTitle")}</h2>
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium">{t("calcVehicle")}</label>
                  <select
                    value={vehicleIdx}
                    onChange={(e) => onVehicleChange(Number(e.target.value))}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3"
                  >
                    {VEHICLES.map((v, i) => (
                      <option key={v.slug} value={i}>{v.name[locale]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t("calcPrice")}</label>
                  <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full rounded-xl border border-gray-200 px-4 py-3" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t("calcDown")}</label>
                  <input type="number" value={down} onChange={(e) => setDown(Number(e.target.value))} className="w-full rounded-xl border border-gray-200 px-4 py-3" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">{t("calcTerm")}</label>
                  <input type="range" min={12} max={60} step={6} value={term} onChange={(e) => setTerm(Number(e.target.value))} className="w-full" />
                  <div className="mt-1 text-sm text-gray-600">{term} {t("calcMonths")}</div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="rounded-2xl bg-kuma-900 p-8 text-white lg:sticky lg:top-28">
                <div className="text-sm uppercase tracking-wider text-white/60">{t("calcMonthly")}</div>
                <div className="mt-2 text-5xl font-bold">
                  {result.monthlyPayment.toLocaleString("ru-RU")} <span className="text-2xl">сом</span>
                </div>
                <div className="mt-6 space-y-2 text-sm text-white/70">
                  <div>{t("calcRate")}: {result.interestRate}%</div>
                  <div>{t("calcTerm")}: {result.totalMonths} {t("calcMonths")}</div>
                </div>
                <p className="mt-6 text-xs text-white/50">{t("calcDisclaimer")}</p>
              </div>
            </FadeUp>
          </div>

          <FadeUp className="mt-16 max-w-xl">
            <h2 className="text-2xl font-bold text-kuma-900 mb-6">{t("leasingApply")}</h2>
            <LeadForm showVehicle />
          </FadeUp>
        </div>
      </section>
    </div>
    </KumaSubpageShell>
  );
}
