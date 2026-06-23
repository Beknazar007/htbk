"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useKtm } from "@/components/ktm/ktm-provider";
import { KtmPageShell } from "@/components/ktm/ktm-page-shell";
import { FadeIn } from "@/components/ktm/motion";
import { KTM_TRUCKS, TRUCK_CATEGORIES } from "@/lib/ktm/trucks";
import { KTM_IMAGES } from "@/lib/ktm/images";
import type { TruckCategory } from "@/lib/ktm/trucks";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function TrucksCatalogPage() {
  const { t, loc } = useKtm();
  const [filter, setFilter] = useState<TruckCategory | "all">("all");
  const trucks =
    filter === "all" ? KTM_TRUCKS : KTM_TRUCKS.filter((tr) => tr.category === filter);

  return (
    <KtmPageShell>
      <section className="relative overflow-hidden bg-ktm-navy py-20 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={KTM_IMAGES.atlasFleet} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">{t("catalogTitle")}</h1>
          <p className="mt-4 max-w-xl text-white/70">{t("catalogSubtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
              filter === "all" ? "bg-ktm-red text-white" : "bg-ktm-gray text-ktm-navy"
            )}
          >
            {t("navTrucks")}
          </button>
          {TRUCK_CATEGORIES.map(({ id, key }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                filter === id ? "bg-ktm-red text-white" : "bg-ktm-gray text-ktm-navy"
              )}
            >
              {t(key)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trucks.map((truck, i) => (
            <FadeIn key={truck.slug} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
                <div className="aspect-[16/10] overflow-hidden bg-slate-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={truck.image}
                    alt={loc(truck.name)}
                    className="h-full w-full object-contain object-bottom transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ktm-red">
                    {t(truck.categoryKey)}
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-ktm-navy">{loc(truck.name)}</h2>
                  <p className="mt-2 line-clamp-2 text-sm text-ktm-gray-dark">{loc(truck.description)}</p>
                  <Link
                    href={`/trucks/${truck.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ktm-red"
                  >
                    {t("ctaDetails")}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
    </KtmPageShell>
  );
}
