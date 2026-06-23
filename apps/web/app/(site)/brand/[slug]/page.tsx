import type { Metadata } from "next";
import { BrandPageClient } from "@/components/kuma/brand-page";
import { buildHreflang } from "@/lib/kuma/seo";

const SLUGS = ["about", "distributor", "history", "mission", "why-hyundai", "contact"];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Бренд — ${slug} | HTBK`,
    alternates: { languages: buildHreflang(`/brand/${slug}`) },
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  if (!SLUGS.includes(slug)) return <div className="kuma-container py-32">Not found</div>;
  return <BrandPageClient slug={slug} />;
}
