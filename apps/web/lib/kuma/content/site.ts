import { buildTwoGisOpenUrl, buildTwoGisRouteUrl, TWO_GIS_MAIN_OFFICE } from "../two-gis";

/** CMS-ready site configuration for HTBK (htbk.kg) */
export const SITE = {
  domain: "https://htbk.kg",
  name: {
    ru: "Hyundai Truck & Bus Кыргызстан",
    ky: "Hyundai Truck & Bus Кыргызstan",
  },
  shortName: "HTBK",
  phone: "+996 312 123 456",
  phoneHref: "tel:+996312123456",
  email: "info@htbk.kg",
  whatsapp: "https://wa.me/996995524272?text=" + encodeURIComponent("Здравствуйте! Хочу получить консультацию по Hyundai Truck & Bus."),
  instagram: "https://instagram.com/htbk.kg",
  address: {
    ru: "г. Бишкек, ул. Логистическая 15, офис 301",
    ky: "Бишкек ш., Логистикалык көч. 15, 301-офис",
  },
  coordinates: { lat: TWO_GIS_MAIN_OFFICE.lat, lng: TWO_GIS_MAIN_OFFICE.lng },
  maps: {
    twoGis: buildTwoGisOpenUrl(TWO_GIS_MAIN_OFFICE),
    twoGisRoute: buildTwoGisRouteUrl(TWO_GIS_MAIN_OFFICE),
  },
  workingHours: {
    ru: "Пн–Пт: 9:00–18:00, Сб: 10:00–15:00",
    ky: "Дш–Жм: 9:00–18:00, Иш: 10:00–15:00",
  },
} as const;

export const NAV_ITEMS = [
  { key: "navCompany", href: "/company", mega: null },
  { key: "navBrand", href: "/brand/hyundai-cv", mega: "brand" as const },
  { key: "navProducts", href: "/products", mega: "products" as const },
  { key: "navNews", href: "/news", mega: null },
] as const;

export const BRAND_LINKS = [
  { slug: "hyundai-cv", key: "brandHyundaiCv" },
  { slug: "design", key: "brandDesign" },
  { slug: "technologies", key: "brandTechnologies" },
  { slug: "comfort", key: "brandComfort" },
  { slug: "history", key: "brandHistory" },
] as const;
