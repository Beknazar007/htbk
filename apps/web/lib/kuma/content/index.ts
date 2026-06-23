/**
 * CMS-ready content collections for HTBK.
 * Replace static exports with API/database fetch when CMS is connected.
 */
export { SITE, NAV_ITEMS, BRAND_LINKS } from "./site";
export { VEHICLES, getVehicle, getAllVehicleSlugs } from "./vehicles";
export { SUPERSTRUCTURES, getSuperstructure, getAllSuperstructureSlugs } from "./superstructures";
export { NEWS, getNewsArticle, getAllNewsSlugs } from "./news";
export type { Vehicle, SuperstructureItem, NewsArticle, BrandPageContent, CmsSeoFields, LocalizedText } from "./types";

/** CMS collection schema identifiers */
export const CMS_COLLECTIONS = {
  vehicles: "vehicle",
  superstructures: "superstructure",
  news: "news",
  pages: "page",
  languages: ["ru", "ky"] as const,
  seoFields: ["title", "description", "keywords", "ogImage"] as const,
} as const;
