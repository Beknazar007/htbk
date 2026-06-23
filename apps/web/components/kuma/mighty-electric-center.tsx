"use client";

import { useMemo, useState } from "react";
import { Battery, Clock, Leaf, TrendingDown, Zap } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SectionBanner } from "./section-banner";
import { calculateCo2Savings } from "@/lib/kuma/co2-calculator";
import { buildWhatsAppUrl, IMAGES } from "@/lib/kuma/constants";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { WhatsAppIcon } from "./social-icons";

const FEATURES = [
  { key: "electricFeatureCharge", icon: Clock },
  { key: "electricFeatureBattery", icon: Battery },
  { key: "electricFeatureEconomy", icon: TrendingDown },
] as const;

export function MightyElectricCenter() {
  const { t } = useKuma();
  const [monthlyKm, setMonthlyKm] = useState(3000);

  const co2 = useMemo(() => calculateCo2Savings(monthlyKm), [monthlyKm]);

  const whatsappHref = buildWhatsAppUrl(t("whatsappElectricInquiry"));

  return (
    <section id="electric" className="kuma-section bg-gray-50 text-brand-navy">
      <div className="kuma-container">
        <SectionBanner
          image={SECTION_BANNERS.electric}
          label={t("electricLabel")}
          title={t("electricCenterTitle")}
          subtitle={t("electricCenterSubtitle")}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm 3xl:rounded-3xl">
              <img
                src={IMAGES.van}
                alt={t("promoElectricTitle")}
                className="kuma-model-card-image aspect-[4/3] w-full sm:aspect-[16/11]"
                loading="lazy"
              />
              <div className="flex items-center gap-2 border-t border-gray-100 px-5 py-4">
                <Zap className="h-5 w-5 text-brand-accent" />
                <span className="text-sm font-bold uppercase tracking-wider text-brand-navy">
                  {t("promoElectricTitle")}
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {FEATURES.map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm xs:p-5"
                >
                  <Icon className="mb-2 h-5 w-5 text-brand-accent" />
                  <p className="text-sm leading-relaxed text-brand-navy/80 xs:text-base">{t(key)}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm xs:p-6 md:p-8 3xl:rounded-3xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <Leaf className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold xs:text-xl">{t("co2CalcTitle")}</h3>
              </div>
              <p className="mb-6 text-sm text-brand-navy/70 xs:text-base">{t("co2CalcSaved")}</p>

              <label className="mb-2 block text-sm font-medium text-brand-navy/80">
                {t("co2CalcKmLabel")}
              </label>
              <input
                type="range"
                min={500}
                max={10000}
                step={500}
                value={monthlyKm}
                onChange={(e) => setMonthlyKm(Number(e.target.value))}
                className="mb-2 w-full accent-brand-accent"
              />
              <p className="mb-6 text-center text-2xl font-black text-brand-accent">
                {monthlyKm.toLocaleString()} {t("co2CalcKmUnit")}
              </p>

              <div className="rounded-xl bg-brand-accent/5 p-4 text-center xs:p-5">
                <p className="text-3xl font-black text-brand-accent xs:text-4xl">
                  {co2.annualSavedTonnes} {t("co2CalcTonnes")}
                </p>
                <p className="mt-1 text-sm text-brand-navy/60">{t("co2CalcSaved")}</p>
                <p className="mt-3 text-sm text-brand-navy/70">
                  {t("co2CalcTrees")}: {co2.treesEquivalent}
                </p>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="kuma-btn-whatsapp mt-6 w-full"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                {t("electricCenterCta")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
