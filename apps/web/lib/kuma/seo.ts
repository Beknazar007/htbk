import { SITE } from "./content/site";
import { getSiteUrl } from "./site-url";
import type { KumaLocale } from "./types";

export function organizationJsonLd(locale: KumaLocale) {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name[locale],
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
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
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: SITE.name[locale],
    image: `${siteUrl}/images/hero/slide-gt8.png`,
    url: siteUrl,
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
  const siteUrl = getSiteUrl();
  return {
    "ru-KG": `${siteUrl}${path}`,
    "ky-KG": `${siteUrl}${path}?lang=ky`,
    "x-default": `${siteUrl}${path}`,
  };
}
