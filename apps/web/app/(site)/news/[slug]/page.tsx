import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticlePage } from "@/components/kuma/news-page";
import { NEWS, getNewsArticle } from "@/lib/kuma/content/news";
import { buildHreflang } from "@/lib/kuma/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return { title: "Hyundai Truck & Bus Кыргызстан" };
  return {
    title: `${article.title.ky} — HTBK`,
    description: article.excerpt.ky,
    alternates: { languages: buildHreflang(`/news/${slug}`) },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!getNewsArticle(slug)) notFound();
  return <NewsArticlePage slug={slug} />;
}
