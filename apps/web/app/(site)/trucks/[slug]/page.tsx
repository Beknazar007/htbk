import { redirect } from "next/navigation";

const SLUG_MAP: Record<string, string> = {
  "force-8000": "mighty-gt8",
  "titan-11000": "mighty-gt11",
  "mountain-pro": "mighty-gt8",
  "atlas-fleet": "mighty-gt11",
  "volt-e": "mighty-electric",
  "city-cargo": "mighty-gt8",
};

type Props = { params: Promise<{ slug: string }> };

export default async function TruckDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = SLUG_MAP[slug] ?? "mighty-gt8";
  redirect(`/products/${product}`);
}
