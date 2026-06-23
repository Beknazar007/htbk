"use client";

import { Gauge, Fuel, Scale, Zap } from "lucide-react";
import { useKtm } from "../ktm-provider";
import { KTM_PERFORMANCE_STATS } from "@/lib/ktm/home-data";
import { AnimatedCounter, FadeIn, SectionGray } from "../motion";
import { SectionHeader } from "../ui/section-header";

const ICONS = [Zap, Gauge, Fuel, Scale];

export function KtmPerformance() {
  const { t } = useKtm();

  return (
    <SectionGray id="performance">
      <SectionHeader title={t("perfTitle")} subtitle={t("perfSubtitle")} className="mb-10 md:mb-14" />

      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {KTM_PERFORMANCE_STATS.map((stat, i) => {
          const Icon = ICONS[i];
          return (
            <FadeIn key={stat.key} delay={i * 0.08}>
              <div className="ktm-card flex h-full flex-col items-center p-5 text-center sm:p-6 md:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ktm-navy text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ktm-red sm:text-sm">
                  {t(stat.key)}
                </p>
                <p className="mt-2 text-2xl font-black text-ktm-navy sm:text-3xl md:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionGray>
  );
}
