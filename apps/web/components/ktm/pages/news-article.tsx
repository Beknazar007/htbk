"use client";

import Link from "next/link";
import { useKtm } from "@/components/ktm/ktm-provider";
import type { KtmNewsItem } from "@/lib/ktm/news";

export function NewsArticleClient({ item }: { item: KtmNewsItem }) {
  const { t, loc } = useKtm();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <time className="text-sm text-ktm-gray-dark">{item.date}</time>
      <h1 className="mt-2 text-3xl font-black text-ktm-navy">{loc(item.title)}</h1>
      <div className="mt-6 overflow-hidden rounded-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt="" className="w-full object-cover" />
      </div>
      <p className="mt-8 text-lg leading-relaxed text-ktm-gray-dark">{loc(item.excerpt)}</p>
      <Link href="/news" className="mt-8 inline-block text-sm font-semibold text-ktm-red">
        ← {t("newsTitle")}
      </Link>
    </article>
  );
}
