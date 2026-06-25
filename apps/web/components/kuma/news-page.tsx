"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { useKuma } from "./kuma-provider";
import { NEWS, getNewsArticle } from "@/lib/kuma/content/news";
import { Breadcrumbs } from "./breadcrumbs";
import { FadeUp } from "@/lib/kuma/motion";

export function NewsListPage() {
  const { t, locale } = useKuma();

  return (
    <KumaSubpageShell>
      <div>
        <section className="bg-gray-50 py-16">
          <div className="kuma-container">
            <Breadcrumbs items={[{ label: t("navNews") }]} className="mb-4" />
            <h1 className="kuma-heading text-kuma-900">{t("newsPageTitle")}</h1>
            <p className="mt-3 text-gray-600">{t("newsPageSub")}</p>
          </div>
        </section>
        <section className="kuma-section">
          <div className="kuma-container grid gap-8 md:grid-cols-2">
            {NEWS.map((article, i) => (
              <FadeUp key={article.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/news/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl sm:flex-row"
                >
                  <div className="aspect-[16/10] overflow-hidden sm:aspect-auto sm:w-2/5">
                    <img
                      src={article.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <time className="text-xs text-kuma-500">{article.date}</time>
                    <h2 className="mt-2 text-xl font-bold text-kuma-900 group-hover:text-kuma-600">
                      {article.title[locale]}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-gray-600">{article.excerpt[locale]}</p>
                    <span className="mt-4 text-sm font-bold text-kuma-600">{t("readMore")} →</span>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </section>
      </div>
    </KumaSubpageShell>
  );
}

export function NewsArticlePage({ slug }: { slug: string }) {
  const { t, locale } = useKuma();
  const article = getNewsArticle(slug);
  if (!article) return null;

  return (
    <KumaSubpageShell>
      <article>
        <div className="relative h-[40vh] min-h-[280px] overflow-hidden">
          <img src={article.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-kuma-900/50" />
        </div>
        <div className="kuma-container relative z-10 -mt-20 max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-xl sm:p-12">
            <Breadcrumbs
              items={[{ label: t("navNews"), href: "/news" }, { label: article.title[locale] }]}
              className="mb-6"
            />
            <time className="text-sm text-kuma-500">{article.date}</time>
            {article.category && (
              <span className="ml-3 text-sm font-semibold uppercase tracking-wide text-kuma-600">
                {article.category[locale]}
              </span>
            )}
            <h1 className="mt-2 text-3xl font-bold text-kuma-900 sm:text-4xl">
              {article.title[locale]}
            </h1>
            <div className="prose prose-gray mt-8 max-w-none">
              <p className="text-lg leading-relaxed text-gray-700">{article.body[locale]}</p>
              {article.highlights && (
                <ul className="mt-6 space-y-2">
                  {article.highlights[locale].map((item) => (
                    <li key={item} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </article>
    </KumaSubpageShell>
  );
}
