/** Local Hyundai imagery — unified corporate asset library */
import { MEDIA } from "./media";
import { withBasePath } from "./base-path";

const V = "8";
const p = (file: string) => withBasePath(`/images/hero/${file}?v=${V}`);

export const SITE_IMAGES = {
  gt8: p("slide-gt8.png"),
  gt11: p("slide-gt11.png"),
  electric: p("slide-electric.png"),
  fleet: p("slide-fleet.png"),
  showcase: p("slide-showcase.png"),
  logistics: p("slide-logistics.png"),
  xcientBridge: p("xcient-hero-bridge.png"),
  xcientProfile: p("xcient-hero-profile.png"),
  xcientFleet: p("xcient-hero-fleet.png"),
} as const;

/** Wide XCIENT Fuel Cell shots — hero «Сила, созданная для Кыргызстана» */
export const HERO_SLIDES = [
  { src: SITE_IMAGES.xcientBridge, alt: "Hyundai XCIENT Fuel Cell" },
  { src: SITE_IMAGES.xcientFleet, alt: "Hyundai XCIENT Fuel Cell fleet" },
  { src: SITE_IMAGES.xcientProfile, alt: "Hyundai XCIENT Fuel Cell tractor" },
] as const;

export const SECTION_BANNERS = {
  models: MEDIA.busLineup,
  stock: SITE_IMAGES.gt8,
  electric: SITE_IMAGES.electric,
  gallery: SITE_IMAGES.gt11,
  advantages: SITE_IMAGES.gt8,
  business: SITE_IMAGES.gt11,
  comparison: SITE_IMAGES.fleet,
  parts: SITE_IMAGES.gt8,
  leasing: SITE_IMAGES.fleet,
  superstructures: SITE_IMAGES.gt8,
  fleet: SITE_IMAGES.fleet,
  service: SITE_IMAGES.gt8,
  cta: SITE_IMAGES.gt11,
} as const;

/** Model slug → distinct product photo (no duplicate hero crops) */
export const MODEL_IMAGES: Record<string, string> = {
  gt5: MEDIA.modelGt5,
  gt8: MEDIA.modelGt8,
  gt10: MEDIA.modelGt10,
  gt12: MEDIA.modelGt12,
};

export const MODEL_HERO_IMAGES: Record<string, string> = {
  gt5: MEDIA.modelGt5,
  gt8: MEDIA.modelGt8,
  gt10: MEDIA.garbageAlt,
  gt12: MEDIA.heroXcientBridge,
};
export const STOCK_IMAGES: Record<string, string> = {
  GT8: MEDIA.modelGt8,
  GT11: SITE_IMAGES.gt11,
  Electric: SITE_IMAGES.electric,
};
export const GALLERY_IMAGES = [
  { src: MEDIA.modelGt5, alt: "Hyundai HD72" },
  { src: MEDIA.modelGt8, alt: "Hyundai Mighty GT8" },
  { src: SITE_IMAGES.electric, alt: "Hyundai Mighty Electric" },
  { src: MEDIA.modelGt12, alt: "Hyundai XCIENT Fuel Cell" },
] as const;
export const SUPERSTRUCTURE_IMAGES = [
  SITE_IMAGES.gt8,
  SITE_IMAGES.gt11,
  SITE_IMAGES.electric,
  SITE_IMAGES.fleet,
] as const;
