"use client";

import Link from "next/link";
import { useKtm } from "@/components/ktm/ktm-provider";
import { KtmPageShell } from "@/components/ktm/ktm-page-shell";
import { FadeIn } from "@/components/ktm/motion";
import { KTM_NEWS } from "@/lib/ktm/news";

export function NewsPage() {
  const { t, loc } = useKtm();

  return (
    <KtmPageShell>
      <section className="bg-ktm-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black sm:text-4xl">{t("newsTitle")}</h1>
          <p className="mt-4 text-white/70">{t("newsSubtitle")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {KTM_NEWS.map((item, i) => (
            <FadeIn key={item.slug} delay={i * 0.08}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-100">
                <div className="aspect-video overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <time className="text-xs text-ktm-gray-dark">{item.date}</time>
                  <h2 className="mt-2 text-lg font-bold text-ktm-navy">{loc(item.title)}</h2>
                  <p className="mt-2 text-sm text-ktm-gray-dark">{loc(item.excerpt)}</p>
                  <Link
                    href={`/news/${item.slug}`}
                    className="mt-4 inline-block text-sm font-semibold text-ktm-red"
                  >
                    {t("ctaDetails")}
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
