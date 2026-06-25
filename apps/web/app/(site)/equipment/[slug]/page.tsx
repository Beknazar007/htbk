import type { Metadata } from "next";
import { EquipmentDetailClient } from "@/components/kuma/equipment-detail";
import { getEquipment, getAllEquipmentSlugs } from "@/lib/kuma/content/equipment";
import { buildHreflang } from "@/lib/kuma/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllEquipmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getEquipment(slug);
  if (!item) return { title: "HTBK" };
  return {
    title: `${item.name.ru} | HTBK`,
    alternates: { languages: buildHreflang(`/equipment/${slug}`) },
  };
}

export default async function EquipmentPage({ params }: Props) {
  const { slug } = await params;
  const item = getEquipment(slug);
  if (!item) return <div className="kuma-container py-32">Not found</div>;
  return <EquipmentDetailClient item={item} />;
}
