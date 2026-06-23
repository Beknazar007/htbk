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
  if (!truck) return { title: "KUMA Truck Bus" };

  return {
    title: `${truck.name} — KUMA Truck Bus`,
    description: truck.history.ky.slice(0, 160),
    openGraph: {
      title: truck.name,
      description: truck.history.ru.slice(0, 160),
      images: [{ url: truck.image }],
    },
  };
}

export default async function ModelPage({ params }: Props) {
  const { slug } = await params;
  const truck = getTruckBySlug(slug);

  if (!truck) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Model not found</p>
      </div>
    );
  }

  return <ModelDetailClient truck={truck} />;
}
