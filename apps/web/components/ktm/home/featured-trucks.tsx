"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useKtm } from "../ktm-provider";
import { FadeIn, SectionGray } from "../motion";
import { KTM_TRUCKS } from "@/lib/ktm/trucks";

export function KtmFeaturedTrucks() {
  const { t, loc } = useKtm();
  const featured = KTM_TRUCKS.slice(0, 4);

  return (
    <SectionGray id="models">
      <FadeIn>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-black text-ktm-navy sm:text-3xl md:text-4xl">{t("featuredTitle")}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-ktm-gray-dark">{t("featuredSubtitle")}</p>
        </div>
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((truck, i) => (
          <FadeIn key={truck.slug} delay={i * 0.1}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={truck.image}
                  alt={loc(truck.name)}
                  className="h-full w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-ktm-navy">{loc(truck.name)}</h3>
                <dl className="mt-3 space-y-1 text-xs text-ktm-gray-dark">
                  <div className="flex justify-between">
                    <dt>{t("specEngine")}</dt>
                    <dd className="font-medium text-ktm-navy">{loc(truck.engine)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>{t("specPower")}</dt>
                    <dd className="font-medium text-ktm-navy">{loc(truck.power)}</dd>
                  </div>
                  <div className="flex justify-between">
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
    </SectionGray>
  );
}
