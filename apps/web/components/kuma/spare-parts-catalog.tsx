"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpDown, Cog, Disc3, Droplets, Filter, Package } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SectionBanner } from "./section-banner";
import {
  SPARE_PARTS,
  SPARE_PART_CATEGORIES,
  type SparePartCategory,
} from "@/lib/kuma/spare-parts";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { KumaImage } from "./kuma-image";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS = {
  filter: Filter,
  disc: Disc3,
  cog: Cog,
  suspension: ArrowUpDown,
  droplet: Droplets,
  package: Package,
} as const;

export function SparePartsCatalog({ asPage = false }: { asPage?: boolean }) {
  const { t, locale } = useKuma();
  const [category, setCategory] = useState<SparePartCategory | "all">("all");

  const filteredParts = useMemo(
    () =>
      category === "all"
        ? SPARE_PARTS
        : SPARE_PARTS.filter((p) => p.category === category),
    [category]
  );

  const buildPartWhatsApp = (sku: string, name: string) =>
    buildWhatsAppUrl(
      locale === "ky"
        ? `Саламатсызбы! Мен "${name}" (${sku}) запчастын сурап жатам.`
        : `Здравствуйте! Интересует запчасть «${name}» (${sku}).`
    );

  return (
    <section id={asPage ? undefined : "parts"} className="kuma-section bg-white">
      <div className="kuma-container">
        {!asPage && (
          <SectionBanner
            image={SECTION_BANNERS.parts}
            label={t("partsLabel")}
            title={t("partsTitle")}
            subtitle={t("partsSubtitle")}
          />
        )}

        <ScrollReveal delay={80}>
          <div className="mb-8 flex flex-wrap justify-center gap-2 xs:gap-2.5">
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={cn(
                "kuma-touch rounded-full px-4 py-2 text-xs font-semibold transition-all xs:px-5 xs:py-2.5 xs:text-sm",
                category === "all"
                  ? "bg-brand-accent text-white shadow-md shadow-brand-accent/25"
                  : "bg-gray-100 text-brand-navy hover:bg-gray-200"
              )}
            >
              {t("partsAllCategories")}
            </button>
            {SPARE_PART_CATEGORIES.map(({ id, labelKey, icon }) => {
              const Icon = CATEGORY_ICONS[icon as keyof typeof CATEGORY_ICONS] ?? Package;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setCategory(id)}
                  className={cn(
                    "kuma-touch inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all xs:gap-2 xs:px-5 xs:py-2.5 xs:text-sm",
                    category === id
                      ? "bg-brand-navy text-white shadow-md"
                      : "bg-gray-100 text-brand-navy hover:bg-gray-200"
                  )}
                >
                  <Icon className="h-3.5 w-3.5 xs:h-4 xs:w-4" />
                  {t(labelKey)}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 xs:gap-5 lg:grid-cols-3 lg:gap-6 3xl:gap-8">
          {filteredParts.map((part, idx) => (
            <ScrollReveal key={part.sku} delay={idx * 50}>
              <article className="kuma-card flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <KumaImage src={part.image} alt={t(part.nameKey)} className="absolute inset-0" />
                </div>
                <div className="flex flex-1 flex-col p-5 xs:p-6">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide xs:text-xs",
                      part.inStock
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-gray-100 text-gray-500"
                    )}
                  >
                    {part.inStock ? t("partsInStock") : t("partsOnOrder")}
                  </span>
                  <p className="font-mono text-xs text-gray-400 xs:text-sm">{part.sku}</p>
                </div>

                <h3 className="mb-2 text-base font-bold text-brand-black xs:text-lg">
                  {t(part.nameKey)}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-gray-600">{t(part.descKey)}</p>

                <p className="mb-4 text-xs text-gray-500 xs:text-sm">
                  {t("partsCompatible")}:{" "}
                  <span className="font-medium text-brand-navy">
                    {part.compatibleModels.map((m) => m.toUpperCase()).join(", ")}
                  </span>
                </p>

                <a
                  href={buildPartWhatsApp(part.sku, t(part.nameKey))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kuma-btn-outline-dark mt-auto inline-flex items-center justify-center gap-2 py-2.5 text-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  {t("partsOrderBtn")}
                </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-8 flex flex-col items-center gap-4 xs:mt-10">
            {!asPage && (
              <Link href="/parts" className="kuma-btn-outline-dark px-6 py-3 text-sm font-semibold">
                {t("partsFullCatalog")}
              </Link>
            )}
            <p className="text-center text-sm text-gray-500 xs:text-base">{t("partsShopNote")}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
