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
  { key: "navBrand", href: "/brand/about", mega: "brand" as const },
  { key: "navProducts", href: "/products/mighty-gt8", mega: "products" as const },
  { key: "navSuperstructures", href: "/superstructures", mega: null },
  { key: "navLeasing", href: "/leasing", mega: null },
  { key: "navService", href: "/service", mega: null },
  { key: "navNews", href: "/news", mega: null },
  { key: "navContacts", href: "/contacts", mega: null },
] as const;

export const BRAND_LINKS = [
  { slug: "about", key: "brandAbout" },
  { slug: "distributor", key: "brandDistributor" },
  { slug: "history", key: "brandHistory" },
  { slug: "mission", key: "brandMission" },
  { slug: "why-hyundai", key: "brandWhy" },
  { slug: "contact", key: "brandContact" },
] as const;
