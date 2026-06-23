import type { MetadataRoute } from "next";
import { TRUCK_MODELS } from "@/lib/kuma/models";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kuma-truck.kg";

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    ...TRUCK_MODELS.map((truck) => ({
      url: `${base}/models/${truck.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
