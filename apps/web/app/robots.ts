import type { MetadataRoute } from "next";
import { SITE } from "@/lib/kuma/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin/", "/teacher/", "/student/", "/parent/", "/login", "/register"] },
    sitemap: `${SITE.domain}/sitemap.xml`,
  };
}
