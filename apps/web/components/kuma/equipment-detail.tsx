"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { useKuma } from "./kuma-provider";
import { Breadcrumbs } from "./breadcrumbs";
import { FadeUp } from "@/lib/kuma/motion";
import type { EquipmentItem } from "@/lib/kuma/content/equipment";
import { KumaImage } from "./kuma-image";

export function EquipmentDetailClient({ item }: { item: EquipmentItem }) {
  const { t, locale } = useKuma();
  const gallery = item.gallery ?? [item.image];

  return (
    <KumaSubpageShell>
      <section className="bg-gray-50 py-12">
        <div className="kuma-container">
          <Breadcrumbs
            items={[
              { label: t("navProducts"), href: "/products" },
              { label: item.name[locale] },
            ]}
            className="mb-6"
          />
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg">
              <KumaImage src={item.image} alt={item.name[locale]} fit="contain" className="w-full" />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-kuma-500">{item.model}</p>
              <h1 className="mt-2 text-3xl font-bold text-kuma-900 sm:text-4xl">{item.name[locale]}</h1>
              <p className="mt-4 text-gray-700 leading-relaxed">{item.summary[locale]}</p>
              <div className="mt-8 rounded-2xl border border-kuma-100 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-kuma-900">{t("technicalSpecs")}</h2>
                <dl className="mt-4 space-y-3">
                  {item.specs.map((spec) => (
                    <div key={spec.labelKey} className="flex justify-between gap-4 border-b border-gray-100 pb-3 last:border-0">
                      <dt className="text-sm text-gray-600">{t(spec.labelKey)}</dt>
                      <dd className="text-sm font-semibold text-kuma-900">{spec.value[locale]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <Link href="/contacts" className="kuma-btn-primary mt-8 inline-flex">
                {t("consultBtn")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {gallery.length > 1 && (
        <section className="kuma-section border-t border-gray-100">
          <div className="kuma-container">
            <h2 className="text-xl font-bold text-kuma-900">{t("galleryTitle")}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((src) => (
                <div key={src} className="overflow-hidden rounded-xl bg-gray-50 p-3">
                  <KumaImage src={src} alt="" fit="contain" className="h-48 w-full sm:h-56" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </KumaSubpageShell>
  );
}
