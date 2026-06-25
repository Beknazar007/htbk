import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/kuma/site-url";
import { getAllVehicleSlugs } from "@/lib/kuma/content/vehicles";
import { getAllSuperstructureSlugs } from "@/lib/kuma/content/superstructures";
import { getAllNewsSlugs } from "@/lib/kuma/content/news";

import { getAllEquipmentSlugs } from "@/lib/kuma/content/equipment";

export const dynamic = "force-static";

const BRAND_SLUGS = ["hyundai-cv", "design", "technologies", "comfort", "history"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticPages = ["", "/company", "/products", "/leasing", "/fleet", "/service", "/parts", "/engine", "/news", "/contacts", "/superstructures"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  return [
    ...staticPages,
    ...BRAND_SLUGS.map((slug) => ({
      url: `${base}/brand/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllVehicleSlugs().map((slug) => ({
      url: `${base}/products/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...getAllSuperstructureSlugs().map((slug) => ({
      url: `${base}/superstructures/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...getAllNewsSlugs().map((slug) => ({
      url: `${base}/news/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...getAllEquipmentSlugs().map((slug) => ({
      url: `${base}/equipment/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ];
}
