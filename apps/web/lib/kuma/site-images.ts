/** Local Hyundai Mighty imagery — unified corporate asset library */
const V = "6";

const p = (file: string) => `/images/hero/${file}?v=${V}`;

export const SITE_IMAGES = {
  gt8: p("slide-gt8.png"),
  gt11: p("slide-gt11.png"),
  electric: p("slide-electric.png"),
  fleet: p("slide-fleet.png"),
  showcase: p("slide-showcase.png"),
  logistics: p("slide-logistics.png"),
} as const;

/** Clean slides without baked-in marketing text — best for hero */
export const HERO_SLIDES = [
  { src: SITE_IMAGES.gt8, alt: "Hyundai Mighty GT8" },
  { src: SITE_IMAGES.gt11, alt: "Hyundai Mighty GT11" },
  { src: SITE_IMAGES.electric, alt: "Hyundai Mighty Electric" },
  { src: SITE_IMAGES.fleet, alt: "Hyundai Mighty fleet" },
] as const;

export const SECTION_BANNERS = {
  models: SITE_IMAGES.fleet,
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

/** Model slug → matching truck photo */
export const MODEL_IMAGES: Record<string, string> = {
  gt5: SITE_IMAGES.gt8,
  gt8: SITE_IMAGES.gt8,
  gt10: SITE_IMAGES.gt11,
  gt12: SITE_IMAGES.fleet,
};

export const STOCK_IMAGES: Record<string, string> = {
  GT8: SITE_IMAGES.gt8,
  GT11: SITE_IMAGES.gt11,
  Electric: SITE_IMAGES.electric,
};

export const GALLERY_IMAGES = [
  { src: SITE_IMAGES.gt8, alt: "Hyundai Mighty GT8" },
  { src: SITE_IMAGES.gt11, alt: "Hyundai Mighty GT11" },
  { src: SITE_IMAGES.electric, alt: "Hyundai Mighty Electric" },
  { src: SITE_IMAGES.fleet, alt: "Hyundai коммерциялык парк" },
] as const;

export const SUPERSTRUCTURE_IMAGES = [
  SITE_IMAGES.gt8,
  SITE_IMAGES.gt11,
  SITE_IMAGES.electric,
  SITE_IMAGES.fleet,
] as const;
