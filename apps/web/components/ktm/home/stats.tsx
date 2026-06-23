"use client";

import { useKtm } from "../ktm-provider";
import { AnimatedCounter, FadeIn, SectionGray } from "../motion";

const STATS = [
  { value: 10, suffix: "+", labelKey: "statsYears" },
  { value: 500, suffix: "+", labelKey: "statsClients" },
  { value: 24, suffix: "/7", labelKey: "statsSupport" },
] as const;

export function KtmStats() {
  const { t } = useKtm();

  return (
    <SectionGray>
      <div className="grid gap-8 sm:grid-cols-3">
        {STATS.map(({ value, suffix, labelKey }, i) => (
          <FadeIn key={labelKey} delay={i * 0.1}>
            <div className="text-center">
              <AnimatedCounter
                value={value}
                suffix={suffix}
                className="text-4xl font-black text-ktm-red sm:text-5xl"
              />
              <p className="mt-2 text-sm font-medium text-ktm-gray-dark">{t(labelKey)}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionGray>
  );
}
