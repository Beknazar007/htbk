"use client";

import Link from "next/link";
import { TRUCK_MODELS } from "@/lib/kuma/models";
import { useKuma } from "./kuma-provider";
import { useCompare } from "./compare-provider";
import { ScrollReveal } from "./scroll-reveal";
import { GitCompare, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function KumaModels() {
  const { t, locale } = useKuma();
  const { addToCompare, removeFromCompare, isInCompare, compareList } = useCompare();

  const handleCompare = (truck: (typeof TRUCK_MODELS)[0]) => {
    if (isInCompare(truck.slug)) {
      removeFromCompare(truck.slug);
    } else {
      if (compareList.length >= 3) {
        alert(t("compareMax"));
        return;
      }
      addToCompare(truck);
    }
  };

  return (
    <section id="models" className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-kuma-800 sm:text-4xl">
              {t("modelsTitle")}
            </h2>
            <p className="text-lg text-gray-600">{t("modelsSubtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TRUCK_MODELS.map((truck, i) => (
            <ScrollReveal key={truck.slug} delay={i * 100}>
              <article className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={truck.image}
                    alt={truck.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kuma-900/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                    {truck.name}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="mb-6 space-y-2 text-sm text-gray-600">
                    <li>
                      <span className="font-medium text-kuma-700">{t("payload")}:</span>{" "}
                      {truck.shortSpecs.payload}
                    </li>
                    <li>
                      <span className="font-medium text-kuma-700">{t("engine")}:</span>{" "}
                      {truck.shortSpecs.engine}
                    </li>
                    <li>
                      <span className="font-medium text-kuma-700">{t("fuelConsumption")}:</span>{" "}
                      {truck.shortSpecs.fuelConsumption}
                    </li>
                    <li>
                      <span className="font-medium text-kuma-700">{t("country")}:</span>{" "}
                      {truck.shortSpecs.country}
                    </li>
                  </ul>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Link
                      href={`/models/${truck.slug}`}
                      className="kuma-btn-primary flex-1 text-center"
                    >
                      {t("fullInfo")}
                    </Link>
                    <button
                      onClick={() => handleCompare(truck)}
                      className={cn(
                        "flex flex-1 items-center justify-center gap-2 rounded-lg border-2 px-4 py-2.5 text-sm font-semibold transition-colors",
                        isInCompare(truck.slug)
                          ? "border-kuma-500 bg-kuma-50 text-kuma-600"
                          : "border-kuma-200 text-kuma-600 hover:border-kuma-400"
                      )}
                    >
                      <GitCompare className="h-4 w-4" />
                      {isInCompare(truck.slug) ? t("compareRemove") : t("compareAdd")}
                    </button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompareBar() {
  const { t } = useKuma();
  const { compareList, removeFromCompare, clearCompare } = useCompare();

  if (compareList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-kuma-200 bg-white shadow-2xl">
      <div className="kuma-container flex flex-wrap items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <GitCompare className="h-5 w-5 text-kuma-600" />
          <span className="font-semibold text-kuma-800">
            {t("compareTitle")} ({compareList.length}/3)
          </span>
          <div className="flex gap-2">
            {compareList.map((truck) => (
              <span
                key={truck.slug}
                className="flex items-center gap-1 rounded-full bg-kuma-100 px-3 py-1 text-xs font-medium text-kuma-700"
              >
                {truck.name}
                <button onClick={() => removeFromCompare(truck.slug)} aria-label="Remove">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={clearCompare}
            className="rounded-lg px-4 py-2 text-sm text-gray-500 hover:text-gray-700"
          >
            {t("compareRemove")}
          </button>
          <Link
            href={`/compare?models=${compareList.map((t) => t.slug).join(",")}`}
            className="kuma-btn-primary"
          >
            {t("compare")}
          </Link>
        </div>
      </div>
    </div>
  );
}
