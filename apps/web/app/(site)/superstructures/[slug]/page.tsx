import type { Metadata } from "next";
import { SuperstructureDetail } from "@/components/kuma/superstructures-page";
import { getAllSuperstructureSlugs, getSuperstructure } from "@/lib/kuma/content/superstructures";
import { buildHreflang } from "@/lib/kuma/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSuperstructureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getSuperstructure(slug);
  return {
    title: item ? `${slug} — Надстройки HTBK` : "HTBK",
    alternates: { languages: buildHreflang(`/superstructures/${slug}`) },
  };
}

export default async function SuperstructurePage({ params }: Props) {
  const { slug } = await params;
  if (!getSuperstructure(slug)) return <div className="kuma-container py-32">Not found</div>;
  return <SuperstructureDetail slug={slug} />;
}
