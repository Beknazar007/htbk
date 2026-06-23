"use client";

import { MapPin } from "lucide-react";
import { useKtm } from "../ktm-provider";
import { FadeIn, Section } from "../motion";

const LOCATIONS = ["networkBishkek", "networkOsh", "networkKarakol"] as const;

export function KtmServiceNetwork() {
  const { t } = useKtm();

  return (
    <Section>
      <FadeIn>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black sm:text-3xl">{t("networkTitle")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-ktm-gray-dark">{t("networkSubtitle")}</p>
        </div>
      </FadeIn>

      <div className="grid gap-4 sm:grid-cols-3">
        {LOCATIONS.map((key, i) => (
          <FadeIn key={key} delay={i * 0.08}>
            <div className="flex items-start gap-3 rounded-xl border border-gray-100 bg-ktm-gray p-5">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-ktm-red" />
              <p className="text-sm font-semibold text-ktm-navy">{t(key)}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
