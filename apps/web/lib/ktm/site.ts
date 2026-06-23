/** WhatsApp number without + or spaces — easy to configure */
export const WHATSAPP_NUMBER = "996995524272";

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

const DEFAULT_WHATSAPP_MESSAGE =
  "Саламатсызбы! Kyrgyzstan Truck Motors боюнча маалымат алгым келет.";

export const KTM_SITE = {
  name: {
    ky: "Kyrgyzstan Truck Motors",
    ru: "Kyrgyzstan Truck Motors",
    en: "Kyrgyzstan Truck Motors",
  },
  phone: "+996 995 524 272",
  phoneHref: "tel:+996995524272",
  email: "info@ktm.kg",
  address: {
    ky: "Бишкек ш., Кыргызстан",
    ru: "г. Бишкек, Кыргызстан",
    en: "Bishkek, Kyrgyzstan",
  },
  whatsapp: buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE),
  whatsappQuote: buildWhatsAppUrl(
    "Саламатсызбы! Жүк ташуучу үчүн баа сунушун алгым келет."
  ),
} as const;

export const KTM_NAV = [
  { key: "navHome", href: "/" },
  { key: "navAbout", href: "/about" },
  { key: "navTrucks", href: "/trucks" },
  { key: "navService", href: "/service" },
  { key: "navNews", href: "/news" },
  { key: "navContacts", href: "/contacts" },
] as const;
