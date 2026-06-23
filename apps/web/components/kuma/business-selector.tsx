"use client";

import { useMemo, useState } from "react";
import {
  Building2,
  HardHat,
  Snowflake,
  Store,
  Truck,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SectionBanner } from "./section-banner";
import {
  BUSINESS_SECTORS,
  type BusinessSectorId,
} from "@/lib/kuma/business-sectors";
import { TRUCK_MODELS } from "@/lib/kuma/models";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

const SECTOR_ICONS: Record<string, LucideIcon> = {
  truck: Truck,
  "hard-hat": HardHat,
  store: Store,
  wheat: Wheat,
  building: Building2,
  snowflake: Snowflake,
};

export function BusinessSelector() {
  const { t, locale } = useKuma();
  const [selected, setSelected] = useState<BusinessSectorId>("logistics");

  const sector = useMemo(
    () => BUSINESS_SECTORS.find((s) => s.id === selected)!,
    [selected]
  );

  const recommendedModels = useMemo(
    () => TRUCK_MODELS.filter((m) => sector.models.includes(m.slug)),
    [sector]
  );

  const whatsappHref = buildWhatsAppUrl(
    locale === "ky"
      ? `Саламатсызбы! Мен "${t(sector.labelKey)}" тармагы үчүн жүк ташуучу унаа издеп жатам.`
      : `Здравствуйте! Ищу грузовик для сферы «${t(sector.labelKey)}».`
  );

  return (
    <section id="business" className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <SectionBanner
          image={SECTION_BANNERS.business}
          label={t("businessLabel")}
          title={t("businessTitle")}
          subtitle={t("businessSubtitle")}
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 3xl:gap-10">
          <ScrollReveal className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-2 xs:gap-2.5 sm:grid-cols-3 lg:grid-cols-2 lg:gap-3">
              {BUSINESS_SECTORS.map(({ id, labelKey, icon }) => {
                const Icon = SECTOR_ICONS[icon] ?? Truck;
                const active = selected === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setSelected(id)}
                    className={cn(
                      "kuma-touch flex flex-col items-start gap-2 rounded-xl border bg-white p-3 text-left shadow-sm transition-all duration-300 xs:p-4",
                      active
                        ? "border-brand-accent/40 shadow-md shadow-brand-accent/10 ring-1 ring-brand-accent/20"
                        : "border-gray-100 hover:border-brand-accent/25 hover:shadow-md"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-5 w-5 xs:h-6 xs:w-6",
                        active ? "text-brand-accent" : "text-brand-navy/50"
                      )}
                      strokeWidth={1.5}
                    />
                    <span
                      className={cn(
                        "text-xs font-semibold leading-tight xs:text-sm",
                        active ? "text-brand-navy" : "text-brand-navy/75"
                      )}
                    >
                      {t(labelKey)}
                    </span>
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="lg:col-span-7">
            <div className="kuma-card overflow-hidden">
              <div className="overflow-hidden bg-slate-100">
                <img
                  src={sector.image}
                  alt=""
                  className="kuma-model-card-image aspect-[16/9] w-full sm:aspect-[21/9]"
                />
              </div>
              <div className="border-b border-gray-100 px-4 py-4 xs:px-5 xs:py-5 sm:px-6">
                <p className="text-xs font-medium uppercase tracking-widest text-brand-accent">
                  {t("businessRecommended")}
                </p>
                <h3 className="text-lg font-bold text-brand-navy xs:text-xl md:text-2xl">
                  {t(sector.labelKey)}
                </h3>
                <p className="mt-1 text-xs text-brand-navy/70 xs:text-sm">{t(sector.descKey)}</p>
              </div>

              <div className="space-y-5 p-4 xs:p-5 sm:p-6 md:p-7">
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {t("businessModels")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendedModels.map((model) => (
                      <span
                        key={model.slug}
                        className="rounded-lg bg-brand-accent/10 px-3 py-1.5 text-sm font-bold text-brand-accent"
                      >
                        {model.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {t("businessSuperstructures")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {sector.superstructureKeys.map((key) => (
                      <span
                        key={key}
                        className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-brand-navy/85 xs:text-sm"
                      >
                        {t(key)}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kuma-btn-whatsapp w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  {t("businessConsult")}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
