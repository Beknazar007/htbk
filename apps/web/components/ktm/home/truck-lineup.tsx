"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useKtm } from "../ktm-provider";
import { KTM_TRUCKS } from "@/lib/ktm/trucks";
import { FadeIn, SectionGray } from "../motion";
import { SectionHeader } from "../ui/section-header";

export function KtmTruckLineup() {
  const { t, loc } = useKtm();

  return (
    <SectionGray id="lineup">
      <SectionHeader title={t("lineupTitle")} subtitle={t("lineupSubtitle")} className="mb-10 md:mb-14" />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-3">
        {KTM_TRUCKS.map((truck, i) => (
          <FadeIn key={truck.slug} delay={i * 0.06}>
            <article className="ktm-card group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={truck.image}
                  alt={loc(truck.name)}
                  loading="lazy"
                  className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-ktm-red">
                  {t(truck.categoryKey)}
                </p>
                <h3 className="mt-1 text-lg font-bold text-ktm-navy sm:text-xl">{loc(truck.name)}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-ktm-gray-dark">{loc(truck.tagline)}</p>
                <dl className="mt-4 space-y-1.5 text-xs text-ktm-gray-dark">
                  <div className="flex justify-between gap-2">
                    <dt>{t("specPower")}</dt>
                    <dd className="font-medium text-ktm-navy">{loc(truck.power)}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt>{t("specLoad")}</dt>
                    <dd className="font-medium text-ktm-red">{loc(truck.loadCapacity)}</dd>
                  </div>
                </dl>
                <Link
                  href={`/trucks/${truck.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ktm-red transition-colors hover:text-ktm-red-hover"
                >
                  {t("ctaDetails")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-10 text-center">
        <Link
          href="/trucks"
          className="inline-flex min-h-[48px] items-center justify-center rounded-lg border-2 border-ktm-navy px-8 py-3 text-sm font-bold text-ktm-navy transition-colors hover:bg-ktm-navy hover:text-white"
        >
          {t("ctaViewTrucks")}
        </Link>
      </FadeIn>
    </SectionGray>
  );
}
