"use client";

import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SectionBanner } from "./section-banner";
import {
  COMPARE_MODELS,
  COMPARISON_ROWS,
  type CompareModelId,
} from "@/lib/kuma/comparison-data";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

const MODEL_HEADER_CLASS: Record<CompareModelId, string> = {
  gt8: "bg-brand-navy text-white",
  gt11: "bg-brand-accent text-white",
  electric: "bg-brand-accent-light text-brand-navy",
};

export function ComparisonSection() {
  const { t, locale } = useKuma();

  const whatsappHref = buildWhatsAppUrl(
    locale === "ky"
      ? "Саламатсызбы! GT8, GT11 жана Электрдик моделдерди салыштыруу боюнча кеңеш алгым келет."
      : "Здравствуйте! Хочу получить консультацию по сравнению GT8, GT11 и Электрической модели."
  );

  return (
    <section id="compare" className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <SectionBanner
          image={SECTION_BANNERS.comparison}
          label={t("compareLabel")}
          title={t("compareSectionTitle")}
          subtitle={t("compareSectionSubtitle")}
        />

        <ScrollReveal delay={100}>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg 3xl:rounded-3xl">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr>
                    <th className="sticky left-0 z-10 bg-gray-100 px-4 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500 xs:px-5 xs:py-5 xs:text-sm">
                      {t("compareParamLabel")}
                    </th>
                    {COMPARE_MODELS.map(({ id, nameKey }) => (
                      <th
                        key={id}
                        className={cn(
                          "px-4 py-4 text-center text-sm font-bold xs:px-5 xs:py-5 xs:text-base 3xl:text-lg",
                          MODEL_HEADER_CLASS[id]
                        )}
                      >
                        {t(nameKey)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr
                      key={row.paramKey}
                      className={cn(
                        "border-t border-gray-100",
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50/80"
                      )}
                    >
                      <td className="sticky left-0 z-10 bg-inherit px-4 py-3.5 text-sm font-medium text-brand-navy xs:px-5 xs:py-4 xs:text-base">
                        {t(row.paramKey)}
                      </td>
                      <td className="px-4 py-3.5 text-center text-sm text-gray-700 xs:px-5 xs:py-4 xs:text-base">
                        {t(row.gt8Key)}
                      </td>
                      <td className="px-4 py-3.5 text-center text-sm text-gray-700 xs:px-5 xs:py-4 xs:text-base">
                        {t(row.gt11Key)}
                      </td>
                      <td className="px-4 py-3.5 text-center text-sm text-gray-700 xs:px-5 xs:py-4 xs:text-base">
                        {t(row.electricKey)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8 flex justify-center xs:mt-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="kuma-btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold xs:text-base 3xl:px-8 3xl:py-4"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              {t("compareConsult")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
