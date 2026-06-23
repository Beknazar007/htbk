"use client";

import { useMemo, useState } from "react";
import { Calculator, Package, Truck } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { calculateEuropalletRecommendation } from "@/lib/kuma/europallet";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

export function EuropalletCalculator() {
  const { t, locale } = useKuma();
  const [weightTonnes, setWeightTonnes] = useState(5);

  const cargoWeightKg = Math.round(weightTonnes * 1000);

  const result = useMemo(
    () => calculateEuropalletRecommendation(cargoWeightKg),
    [cargoWeightKg]
  );

  const recommendationKey =
    result.recommended === "gt8" ? "europalletResultGt8" : "europalletResultGt11";

  const whatsappHref = buildWhatsAppUrl(
    locale === "ky"
      ? `Саламатсызбы! Мен ${weightTonnes} т жүк ташоом керек. ${t(recommendationKey)}`
      : `Здравствуйте! Мне нужно перевезти ${weightTonnes} т груза. ${t(recommendationKey)}`
  );

  return (
    <section id="calculator" className="kuma-section bg-gray-50 text-brand-navy">
      <div className="kuma-container">
        <ScrollReveal>
          <div className="mb-8 text-center xs:mb-10 md:mb-12">
            <span className="kuma-label text-brand-accent">{t("europalletLabel")}</span>
            <h2 className="kuma-heading">{t("europalletTitle")}</h2>
            <p className="kuma-subheading mx-auto mt-3 max-w-2xl text-brand-navy/70">
              {t("europalletSubtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 3xl:gap-12">
          <ScrollReveal direction="left">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xs:p-6 md:p-8 3xl:rounded-3xl 3xl:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Calculator className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold xs:text-xl">{t("europalletInputTitle")}</h3>
              </div>

              <label className="mb-3 block text-sm font-medium text-brand-navy/80">
                {t("europalletWeightLabel")}
              </label>
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <span className="text-3xl font-black text-brand-accent xs:text-4xl">
                  {weightTonnes} {t("europalletTonnes")}
                </span>
                <span className="text-sm text-brand-navy/50">
                  {cargoWeightKg.toLocaleString()} {t("europalletKg")}
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={15}
                step={0.5}
                value={weightTonnes}
                onChange={(e) => setWeightTonnes(Number(e.target.value))}
                className="kuma-touch w-full accent-brand-accent"
              />
              <div className="mt-1 flex justify-between text-xs text-brand-navy/40">
                <span>0.5 {t("europalletTonnes")}</span>
                <span>15 {t("europalletTonnes")}</span>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-brand-navy/50 xs:text-sm">
                {t("calcDisclaimer")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xs:p-6 md:p-8 3xl:rounded-3xl 3xl:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent text-white">
                  <Truck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold xs:text-xl">{t("europalletResultTitle")}</h3>
              </div>

              <div
                className={cn(
                  "mb-6 rounded-xl border px-5 py-4 xs:px-6 xs:py-5",
                  result.recommended === "gt11"
                    ? "border-brand-accent/30 bg-brand-accent/5"
                    : "border-gray-200 bg-gray-50"
                )}
              >
                <p className="text-xl font-bold text-brand-navy xs:text-2xl 3xl:text-3xl">
                  {t(recommendationKey)}
                </p>
                {result.recommended === "gt11" && cargoWeightKg <= 8000 && (
                  <p className="mt-2 text-sm text-brand-navy/60">{t("europalletResultGt11Hint")}</p>
                )}
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3 xs:gap-4">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 xs:p-5">
                  <div className="mb-2 flex items-center gap-2 text-brand-accent">
                    <Package className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      {t("europalletPalletsNeeded")}
                    </span>
                  </div>
                  <p className="text-2xl font-black text-brand-navy xs:text-3xl">
                    {result.estimatedPallets || "—"}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 xs:p-5">
                  <div className="mb-2 flex items-center gap-2 text-brand-accent">
                    <Truck className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      {t("europalletPalletsMax")}
                    </span>
                  </div>
                  <p className="text-2xl font-black text-brand-navy xs:text-3xl">{result.maxPallets}</p>
                </div>
              </div>

              {!result.withinPayload && (
                <p className="mb-4 text-sm text-amber-700">{t("europalletOverloadWarning")}</p>
              )}

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="kuma-btn-whatsapp mt-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold xs:text-base"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                {t("europalletAskQuote")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
