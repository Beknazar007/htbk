import { SITE } from "./content/site";
import type { KumaLocale } from "./types";

export function organizationJsonLd(locale: KumaLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name[locale],
    url: SITE.domain,
    logo: `${SITE.domain}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      contactType: "sales",
      areaServed: "KG",
      availableLanguage: ["Russian", "Kyrgyz"],
    },
    sameAs: [SITE.instagram],
  };
}

export function localBusinessJsonLd(locale: KumaLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: SITE.name[locale],
    image: `${SITE.domain}/og-image.jpg`,
    url: SITE.domain,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address[locale],
      addressLocality: "Bishkek",
      addressCountry: "KG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.coordinates.lat,
      longitude: SITE.coordinates.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };
}

export function productJsonLd(name: string, description: string, image: string, price: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
    brand: { "@type": "Brand", name: "Hyundai" },
    offers: {
      "@type": "Offer",
      priceCurrency: "KGS",
      price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: SITE.name.ru },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildHreflang(path: string) {
  return {
    "ru-KG": `${SITE.domain}${path}`,
    "ky-KG": `${SITE.domain}${path}?lang=ky`,
    "x-default": `${SITE.domain}${path}`,
  };
}
