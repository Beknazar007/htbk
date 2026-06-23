"use client";

import Link from "next/link";
import { Shield, Fuel, Wrench, Headphones } from "lucide-react";
import { useKuma } from "../kuma-provider";
import { FadeUp } from "@/lib/kuma/motion";

const ITEMS = [
  { icon: Shield, titleKey: "whyQuality", descKey: "whyQualityDesc" },
  { icon: Fuel, titleKey: "whyEconomy", descKey: "whyEconomyDesc" },
  { icon: Wrench, titleKey: "whyNetwork", descKey: "whyNetworkDesc" },
  { icon: Headphones, titleKey: "whySupport", descKey: "whySupportDesc" },
];

export function WhyHyundaiSection() {
  const { t } = useKuma();

  return (
    <section className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <FadeUp className="mb-12 text-center">
          <h2 className="kuma-heading text-kuma-900">{t("whyHyundaiTitle")}</h2>
          <p className="mt-3 text-gray-600">{t("whyHyundaiSubtitle")}</p>
        </FadeUp>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, titleKey, descKey }, i) => (
            <FadeUp key={titleKey} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-gray-100 bg-white p-8 transition-all hover:border-kuma-200 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600 transition-colors group-hover:bg-kuma-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-kuma-900">{t(titleKey)}</h3>
                <p className="mt-2 text-sm text-gray-600">{t(descKey)}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="mt-10 text-center">
          <Link href="/brand/why-hyundai" className="text-sm font-bold text-kuma-600 hover:underline">
            {t("learnMore")} →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
