export type ProductCategoryId = "all" | "trucks" | "buses" | "special" | "engines";

export const PRODUCT_CATEGORIES: {
  id: ProductCategoryId;
  labelKey: string;
  href: string;
}[] = [
  { id: "all", labelKey: "prodCatAll", href: "/products" },
  { id: "trucks", labelKey: "prodCatTrucks", href: "/products?cat=trucks" },
  { id: "buses", labelKey: "prodCatBuses", href: "/products?cat=buses" },
  { id: "special", labelKey: "prodCatSpecial", href: "/products?cat=special" },
  { id: "engines", labelKey: "prodCatEngines", href: "/products?cat=engines" },
];

export const EQUIPMENT_TYPES: { slug: string; labelKey: string }[] = [
  { slug: "universal-chassis", labelKey: "eqUniversalChassis" },
  { slug: "chassis", labelKey: "eqChassis" },
  { slug: "cab", labelKey: "eqCab" },
  { slug: "truck", labelKey: "eqTruck" },
  { slug: "truck-crane", labelKey: "eqTruckCrane" },
  { slug: "dump-truck", labelKey: "eqDumpTruck" },
  { slug: "mixer", labelKey: "eqMixer" },
  { slug: "bus", labelKey: "eqBus" },
  { slug: "tractor", labelKey: "eqTractor" },
];
