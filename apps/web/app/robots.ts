import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/kuma/site-url";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
