import type { Metadata } from "next";
import { getTruckBySlug, getAllTruckSlugs } from "@/lib/kuma/models";
import { ModelDetailClient } from "@/components/kuma/model-detail-client";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllTruckSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const truck = getTruckBySlug(slug);
  if (!truck) return { title: "HTBK" };

  return {
    title: `${truck.name} — HTBK`,
    description: truck.history.ru.slice(0, 160),
    openGraph: { title: truck.name, images: [{ url: truck.image }] },
  };
}

export default async function ModelPage({ params }: Props) {
  const { slug } = await params;
  const truck = getTruckBySlug(slug);

  if (!truck) {
    return <div className="kuma-container py-32 pt-24">Not found</div>;
  }

  return <ModelDetailClient truck={truck} />;
}
