import type { LocalizedString } from "./i18n";

export interface KtmNewsItem {
  slug: string;
  date: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  image: string;
}

import { KTM_IMAGES } from "./images";

export const KTM_NEWS: KtmNewsItem[] = [
  {
    slug: "new-service-center",
    date: "2026-03-01",
    title: {
      ky: "Бишкекте жаңы сервис борбору ачылды",
      ru: "Открыт новый сервисный центр в Бишкеке",
      en: "New service center opened in Bishkek",
    },
    excerpt: {
      ky: "Кеңейтүлгөн тейлөө аянты жана заманбап диагностикалык жабдуулар.",
      ru: "Расширенная зона обслуживания и современное диагностическое оборудование.",
      en: "Expanded service area and modern diagnostics.",
    },
    image: KTM_IMAGES.atlasFleet,
  },
  {
    slug: "fleet-delivery",
    date: "2026-02-15",
    title: {
      ky: "50 жүк ташуучу логистика компаниясына жеткирилди",
      ru: "50 грузовиков поставлено логистической компании",
      en: "50 trucks delivered to logistics company",
    },
    excerpt: {
      ky: "KTM Atlas Fleet модели паркка кошулду.",
      ru: "Модели KTM Atlas Fleet пополнили автопарк.",
      en: "KTM Atlas Fleet models joined the fleet.",
    },
    image: KTM_IMAGES.force8000,
  },
  {
    slug: "volt-e-launch",
    date: "2026-01-20",
    title: {
      ky: "KTM Volt E электр жүк ташуучусы сатылууда",
      ru: "Электрогрузовик KTM Volt E в продаже",
      en: "KTM Volt E electric truck now available",
    },
    excerpt: {
      ky: "Шаардык экологиялык ташуулар үчүн жаңы чечим.",
      ru: "Новое решение для экологичных городских перевозок.",
      en: "New solution for eco urban delivery.",
    },
    image: KTM_IMAGES.voltE,
  },
];

export function getNewsBySlug(slug: string): KtmNewsItem | undefined {
  return KTM_NEWS.find((n) => n.slug === slug);
}
