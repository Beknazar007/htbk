import type { Metadata } from "next";
import { getVehicle, getAllVehicleSlugs } from "@/lib/kuma/content/vehicles";
import { VehiclePageClient } from "@/components/kuma/vehicle-page";
import { productJsonLd, breadcrumbJsonLd, buildHreflang } from "@/lib/kuma/seo";
import { getSiteUrl } from "@/lib/kuma/site-url";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllVehicleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return { title: "HTBK" };

  return {
    title: `${vehicle.name.ru} — Hyundai Truck & Bus Кыргызстан`,
    description: vehicle.description.ru,
    openGraph: { title: vehicle.name.ru, images: [{ url: vehicle.image }] },
    alternates: { languages: buildHreflang(`/products/${slug}`) },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = getVehicle(slug);
  if (!vehicle) return <div className="kuma-container py-32">Not found</div>;

  const siteUrl = getSiteUrl();
  const schemas = [
    productJsonLd(vehicle.name.ru, vehicle.description.ru, vehicle.image, vehicle.price),
    breadcrumbJsonLd([
      { name: "Главная", url: siteUrl },
      { name: vehicle.name.ru, url: `${siteUrl}/products/${slug}` },
    ]),
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <VehiclePageClient vehicle={vehicle} />
    </>
  );
}
