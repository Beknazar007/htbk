"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { useKuma } from "./kuma-provider";
import { Breadcrumbs } from "./breadcrumbs";
import { FadeUp } from "@/lib/kuma/motion";
import { PRODUCT_CATEGORIES, EQUIPMENT_TYPES, type ProductCategoryId } from "@/lib/kuma/content/product-categories";
import { getEquipmentByCategory } from "@/lib/kuma/content/equipment";
import { KumaImage } from "./kuma-image";

export function ProductsCatalogPage() {
  const { t, locale } = useKuma();
  const searchParams = useSearchParams();
  const cat = (searchParams.get("cat") as ProductCategoryId) || "all";
  const items = getEquipmentByCategory(cat);

  return (
    <KumaSubpageShell>
      <section className="bg-kuma-900 py-12 text-white sm:py-16">
        <div className="kuma-container">
          <Breadcrumbs items={[{ label: t("navProducts") }]} className="mb-4 text-white/60 [&_span]:text-white" />
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">{t("navProducts")}</h1>
          <p className="mt-3 max-w-2xl text-white/80">{t("productsCatalogSub")}</p>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-gray-50">
        <div className="kuma-container flex flex-wrap gap-2 py-4">
          {PRODUCT_CATEGORIES.map((c) => (
            <Link
              key={c.id}
              href={c.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                cat === c.id ? "bg-kuma-700 text-white" : "bg-white text-kuma-700 hover:bg-kuma-50"
              }`}
            >
              {t(c.labelKey)}
            </Link>
          ))}
        </div>
      </section>

      <section className="kuma-section">
        <div className="kuma-container mb-10">
          <h2 className="text-xl font-bold text-kuma-900">{t("equipmentTypesTitle")}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {EQUIPMENT_TYPES.map((eq) => (
              <Link
                key={eq.slug}
                href={`/equipment/${eq.slug}`}
                className="rounded-lg border border-kuma-100 bg-white px-3 py-2 text-sm font-medium text-kuma-700 hover:border-kuma-300"
              >
                {t(eq.labelKey)}
              </Link>
            ))}
          </div>
        </div>

        <div className="kuma-container grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeUp key={item.slug} delay={(i % 3) * 60}>
              <Link
                href={`/equipment/${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <KumaImage src={item.image} alt={item.name[locale]} fit="contain" className="h-full w-full p-2 transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-kuma-500">{item.model}</p>
                  <h3 className="mt-1 text-lg font-bold text-kuma-900">{item.name[locale]}</h3>
                  <p className="mt-2 flex-1 text-sm text-gray-600 line-clamp-2">{item.summary[locale]}</p>
                  {item.specs[0] && (
                    <p className="mt-3 text-sm font-semibold text-kuma-700">
                      {t(item.specs[0].labelKey)}: {item.specs[0].value[locale]}
                    </p>
                  )}
                  <span className="mt-4 text-sm font-bold text-kuma-600">{t("learnMore")} →</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </KumaSubpageShell>
  );
}
