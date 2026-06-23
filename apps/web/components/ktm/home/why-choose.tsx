"use client";

import { Shield, Fuel, Wrench, Zap } from "lucide-react";
import { useKtm } from "../ktm-provider";
import { FadeIn, Section } from "../motion";

const ITEMS = [
  { icon: Shield, titleKey: "whyReliability", descKey: "whyReliabilityDesc" },
  { icon: Zap, titleKey: "whyPower", descKey: "whyPowerDesc" },
  { icon: Fuel, titleKey: "whyFuel", descKey: "whyFuelDesc" },
  { icon: Wrench, titleKey: "whyService", descKey: "whyServiceDesc" },
] as const;

export function KtmWhyChoose() {
  const { t } = useKtm();

  return (
    <Section>
      <FadeIn>
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-black sm:text-3xl md:text-4xl">{t("whyTitle")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-ktm-gray-dark">{t("whySubtitle")}</p>
        </div>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, titleKey, descKey }, i) => (
          <FadeIn key={titleKey} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-ktm-red/20 hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ktm-navy text-white transition-colors group-hover:bg-ktm-red">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-bold">{t(titleKey)}</h3>
              <p className="text-sm leading-relaxed text-ktm-gray-dark">{t(descKey)}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
