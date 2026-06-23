"use client";

import Link from "next/link";
import { useKuma } from "../kuma-provider";
import { NEWS } from "@/lib/kuma/content/news";
import { FadeUp } from "@/lib/kuma/motion";

export function NewsPreview() {
  const { t, locale } = useKuma();
  const articles = NEWS.slice(0, 3);

  return (
    <section className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <FadeUp className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="kuma-heading text-kuma-900">{t("newsTitle")}</h2>
            <p className="mt-3 text-gray-600">{t("newsSubtitle")}</p>
          </div>
          <Link href="/news" className="text-sm font-bold text-kuma-600 hover:underline">{t("allNews")} →</Link>
        </FadeUp>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article, i) => (
            <FadeUp key={article.slug} delay={i * 80}>
              <Link href={`/news/${article.slug}`} className="group block overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={article.image} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <time className="text-xs font-medium text-kuma-500">{article.date}</time>
                  <h3 className="mt-2 text-lg font-bold text-kuma-900 group-hover:text-kuma-600">{article.title[locale]}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">{article.excerpt[locale]}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-kuma-600">{t("readMore")} →</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
