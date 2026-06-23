import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin/", "/teacher/", "/student/", "/parent/"] },
    sitemap: "https://kuma-truck.kg/sitemap.xml",
  };
}
