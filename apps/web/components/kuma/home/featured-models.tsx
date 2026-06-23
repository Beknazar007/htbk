"use client";

import Link from "next/link";
import { useKuma } from "../kuma-provider";
import { VEHICLES } from "@/lib/kuma/content/vehicles";
import { FadeUp } from "@/lib/kuma/motion";

export function FeaturedModels() {
  const { t, locale } = useKuma();

  return (
    <section className="kuma-section">
      <div className="kuma-container">
        <FadeUp className="mb-12">
          <h2 className="kuma-heading text-kuma-900">{t("featuredTitle")}</h2>
          <p className="mt-3 text-gray-600">{t("featuredSubtitle")}</p>
        </FadeUp>
        <div className="grid gap-8 lg:grid-cols-3">
          {VEHICLES.map((v, i) => (
            <FadeUp key={v.slug} delay={i * 100}>
              <Link href={`/products/${v.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all hover:shadow-2xl hover:ring-kuma-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={v.image} alt={v.name[locale]} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {v.electric && (
                    <span className="absolute left-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">{t("electricLabel")}</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-kuma-900">{v.name[locale]}</h3>
                  <p className="mt-1 text-sm font-medium text-kuma-600">{v.tagline[locale]}</p>
                  <p className="mt-3 text-sm text-gray-600 line-clamp-2">{v.description[locale]}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-kuma-600 group-hover:underline">{t("learnMore")} →</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
