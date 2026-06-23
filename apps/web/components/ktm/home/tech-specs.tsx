"use client";

import { useKtm } from "../ktm-provider";
import { KTM_SPEC_ROWS } from "@/lib/ktm/home-data";
import { FadeIn, Section } from "../motion";
import { SectionHeader } from "../ui/section-header";

export function KtmTechSpecs() {
  const { t } = useKtm();

  return (
    <Section id="specs" dark>
      <SectionHeader
        title={t("specsTitle")}
        subtitle={t("specsSubtitle")}
        dark
        className="mb-10 md:mb-14"
      />

      <FadeIn>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <dl className="divide-y divide-white/10">
            {KTM_SPEC_ROWS.map(({ labelKey, valueKey }) => (
              <div
                key={labelKey}
                className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-5"
              >
                <dt className="text-sm font-medium text-white/60 sm:text-base">{t(labelKey)}</dt>
                <dd className="text-base font-bold text-white sm:text-lg">{t(valueKey)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </Section>
  );
}
