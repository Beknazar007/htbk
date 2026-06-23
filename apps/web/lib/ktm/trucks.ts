import { KTM_IMAGES } from "./images";
import type { LocalizedString } from "./i18n";

export type TruckCategory = "heavy" | "medium" | "construction" | "logistics" | "special";

export interface KtmTruck {
  slug: string;
  name: LocalizedString;
  category: TruckCategory;
  categoryKey: string;
  image: string;
  heroImage: string;
  engine: LocalizedString;
  power: LocalizedString;
  loadCapacity: LocalizedString;
  description: LocalizedString;
  tagline: LocalizedString;
  specs: {
    engine: LocalizedString;
    power: LocalizedString;
    torque: LocalizedString;
    fuel: LocalizedString;
    load: LocalizedString;
    transmission: LocalizedString;
  };
  features: string[];
}

export const TRUCK_CATEGORIES: { id: TruckCategory; key: string }[] = [
  { id: "heavy", key: "catHeavy" },
  { id: "medium", key: "catMedium" },
  { id: "construction", key: "catConstruction" },
  { id: "logistics", key: "catLogistics" },
  { id: "special", key: "catSpecial" },
];

export const KTM_TRUCKS: KtmTruck[] = [
  {
    slug: "force-8000",
    name: { ky: "KTM Force 8000", ru: "KTM Force 8000", en: "KTM Force 8000" },
    category: "heavy",
    categoryKey: "catHeavy",
    image: KTM_IMAGES.force8000,
    heroImage: KTM_IMAGES.force8000,
    engine: { ky: "Дизель, Euro 5", ru: "Дизель, Euro 5", en: "Diesel, Euro 5" },
    power: { ky: "170 а.к.", ru: "170 л.с.", en: "170 hp" },
    loadCapacity: { ky: "8 000 кг", ru: "8 000 кг", en: "8,000 kg" },
    tagline: {
      ky: "Оор жүк ташуулар үчүн ишенимдүү күч",
      ru: "Надёжная мощь для тяжёлых перевозок",
      en: "Reliable power for heavy haulage",
    },
    description: {
      ky: "Кыргызстандын тоо жолдору жана шаардык логистика үчүн идеалдуу оор жүк ташуучу. Бекем шassi, жогорку өткөрүү мүмкүнчүлүгү.",
      ru: "Идеальный тяжёлый грузовик для горных дорог и городской логистики Кыргызстана. Прочное шасси, высокая проходимость.",
      en: "Ideal heavy truck for mountain roads and urban logistics.",
    },
    specs: {
      engine: { ky: "4.5 л дизель", ru: "4.5 л дизель", en: "4.5L diesel" },
      power: { ky: "170 а.к.", ru: "170 л.с.", en: "170 hp" },
      torque: { ky: "520 Н·м", ru: "520 Н·м", en: "520 Nm" },
      fuel: { ky: "16–18 л/100 км", ru: "16–18 л/100 км", en: "16–18 L/100km" },
      load: { ky: "8 000 кг", ru: "8 000 кг", en: "8,000 kg" },
      transmission: { ky: "Механика / Автомат", ru: "Механика / Автомат", en: "Manual / Automatic" },
    },
    features: ["featReliability", "featFuel", "featSafety"],
  },
  {
    slug: "titan-11000",
    name: { ky: "KTM Titan 11000", ru: "KTM Titan 11000", en: "KTM Titan 11000" },
    category: "medium",
    categoryKey: "catMedium",
    image: KTM_IMAGES.titan11000,
    heroImage: KTM_IMAGES.titan11000,
    engine: { ky: "Дизель, Euro 5", ru: "Дизель, Euro 5", en: "Diesel, Euro 5" },
    power: { ky: "200 а.к.", ru: "200 л.с.", en: "200 hp" },
    loadCapacity: { ky: "11 000 кг", ru: "11 000 кг", en: "11,000 kg" },
    tagline: {
      ky: "Универсалдуу орто жүк ташуучу",
      ru: "Универсальный среднетоннажник",
      en: "Universal medium-duty truck",
    },
    description: {
      ky: "Курулуш, дистрибуция жана коммуналдык сектор үчүн оптималдуу модель.",
      ru: "Оптимальная модель для строительства, дистрибуции и коммунального сектора.",
      en: "Optimal for construction, distribution and utilities.",
    },
    specs: {
      engine: { ky: "5.0 л дизель", ru: "5.0 л дизель", en: "5.0L diesel" },
      power: { ky: "200 а.к.", ru: "200 л.с.", en: "200 hp" },
      torque: { ky: "680 Н·м", ru: "680 Н·м", en: "680 Nm" },
      fuel: { ky: "18–22 л/100 км", ru: "18–22 л/100 км", en: "18–22 L/100km" },
      load: { ky: "11 000 кг", ru: "11 000 кг", en: "11,000 kg" },
      transmission: { ky: "Автомат, 6 ылдамдык", ru: "Автомат, 6 передач", en: "6-speed automatic" },
    },
    features: ["featPower", "featComfort", "featTech"],
  },
  {
    slug: "mountain-pro",
    name: { ky: "KTM Mountain Pro", ru: "KTM Mountain Pro", en: "KTM Mountain Pro" },
    category: "construction",
    categoryKey: "catConstruction",
    image: KTM_IMAGES.mountainPro,
    heroImage: KTM_IMAGES.mountainPro,
    engine: { ky: "Дизель, Euro 5", ru: "Дизель, Euro 5", en: "Diesel, Euro 5" },
    power: { ky: "240 а.к.", ru: "240 л.с.", en: "240 hp" },
    loadCapacity: { ky: "12 000 кг", ru: "12 000 кг", en: "12,000 kg" },
    tagline: {
      ky: "Курулуш жана карьер иштери үчүн",
      ru: "Для строительства и карьеров",
      en: "Built for construction and quarries",
    },
    description: {
      ky: "Оор шарттарда иштөө үчүн күчтүү шassi жана жогорку жүк көтөрүү мүмкүнчүлүгү.",
      ru: "Мощное шасси и высокая грузоподъёмность для тяжёлых условий эксплуатации.",
      en: "Heavy-duty chassis for demanding job sites.",
    },
    specs: {
      engine: { ky: "6.0 л дизель", ru: "6.0 л дизель", en: "6.0L diesel" },
      power: { ky: "240 а.к.", ru: "240 л.с.", en: "240 hp" },
      torque: { ky: "850 Н·м", ru: "850 Н·м", en: "850 Nm" },
      fuel: { ky: "22–26 л/100 км", ru: "22–26 л/100 км", en: "22–26 L/100km" },
      load: { ky: "12 000 кг", ru: "12 000 кг", en: "12,000 kg" },
      transmission: { ky: "Автомат, 8 ылдамдык", ru: "Автомат, 8 передач", en: "8-speed automatic" },
    },
    features: ["featPower", "featReliability", "featSafety"],
  },
  {
    slug: "atlas-fleet",
    name: { ky: "KTM Atlas Fleet", ru: "KTM Atlas Fleet", en: "KTM Atlas Fleet" },
    category: "logistics",
    categoryKey: "catLogistics",
    image: KTM_IMAGES.atlasFleet,
    heroImage: KTM_IMAGES.atlasFleet,
    engine: { ky: "Дизель, Euro 5", ru: "Дизель, Euro 5", en: "Diesel, Euro 5" },
    power: { ky: "170 а.к.", ru: "170 л.с.", en: "170 hp" },
    loadCapacity: { ky: "8 000 кг", ru: "8 000 кг", en: "8,000 kg" },
    tagline: {
      ky: "Логистика паркы үчүн",
      ru: "Для логистических парков",
      en: "For logistics fleets",
    },
    description: {
      ky: "Узак аралык ташуулар жана парк башкаруу үчүн экономиялык чечим.",
      ru: "Экономичное решение для дальних перевозок и управления автопарком.",
      en: "Economical solution for long-haul and fleet management.",
    },
    specs: {
      engine: { ky: "4.5 л дизель", ru: "4.5 л дизель", en: "4.5L diesel" },
      power: { ky: "170 а.к.", ru: "170 л.с.", en: "170 hp" },
      torque: { ky: "520 Н·м", ru: "520 Н·м", en: "520 Nm" },
      fuel: { ky: "14–16 л/100 км", ru: "14–16 л/100 км", en: "14–16 L/100km" },
      load: { ky: "8 000 кг", ru: "8 000 кг", en: "8,000 kg" },
      transmission: { ky: "Автомат, 6 ылдамдык", ru: "Автомат, 6 передач", en: "6-speed automatic" },
    },
    features: ["featFuel", "featTech", "featComfort"],
  },
  {
    slug: "volt-e",
    name: { ky: "KTM Volt E", ru: "KTM Volt E", en: "KTM Volt E" },
    category: "special",
    categoryKey: "catSpecial",
    image: KTM_IMAGES.voltE,
    heroImage: KTM_IMAGES.voltE,
    engine: { ky: "Электр кыймылдаткыч", ru: "Электродвигатель", en: "Electric motor" },
    power: { ky: "150 кВт", ru: "150 кВт", en: "150 kW" },
    loadCapacity: { ky: "3 500 кг", ru: "3 500 кг", en: "3,500 kg" },
    tagline: {
      ky: "Шаардык экологиялык ташуулар",
      ru: "Экологичные городские перевозки",
      en: "Eco urban delivery",
    },
    description: {
      ky: "Ышксыз иштөө, нөлдүк чыгарынды жана төмөн эксплуатация чыгымы.",
      ru: "Бесшумная работа, нулевые выбросы и низкие эксплуатационные расходы.",
      en: "Silent operation with zero emissions.",
    },
    specs: {
      engine: { ky: "Электр", ru: "Электро", en: "Electric" },
      power: { ky: "150 кВт", ru: "150 кВт", en: "150 kW" },
      torque: { ky: "420 Н·м", ru: "420 Н·м", en: "420 Nm" },
      fuel: { ky: "0 л/100 км", ru: "0 л/100 км", en: "0 L/100km" },
      load: { ky: "3 500 кг", ru: "3 500 кг", en: "3,500 kg" },
      transmission: { ky: "Автомат", ru: "Автомат", en: "Automatic" },
    },
    features: ["featEco", "featSilent", "featFuture"],
  },
  {
    slug: "city-cargo",
    name: { ky: "KTM City Cargo", ru: "KTM City Cargo", en: "KTM City Cargo" },
    category: "medium",
    categoryKey: "catMedium",
    image: KTM_IMAGES.cityCargo,
    heroImage: KTM_IMAGES.cityCargo,
    engine: { ky: "Дизель, Euro 5", ru: "Дизель, Euro 5", en: "Diesel, Euro 5" },
    power: { ky: "150 а.к.", ru: "150 л.с.", en: "150 hp" },
    loadCapacity: { ky: "5 000 кг", ru: "5 000 кг", en: "5,000 kg" },
    tagline: {
      ky: "Шаар ичиндеги жеткирүүлөр",
      ru: "Городские доставки",
      en: "Urban delivery",
    },
    description: {
      ky: "Тар көчөлөрдө маневрдүү, компакттуу жана экономиялык модель.",
      ru: "Манёвренная, компактная и экономичная модель для узких улиц.",
      en: "Maneuverable compact truck for city streets.",
    },
    specs: {
      engine: { ky: "3.9 л дизель", ru: "3.9 л дизель", en: "3.9L diesel" },
      power: { ky: "150 а.к.", ru: "150 л.с.", en: "150 hp" },
      torque: { ky: "420 Н·м", ru: "420 Н·м", en: "420 Nm" },
      fuel: { ky: "12–14 л/100 км", ru: "12–14 л/100 км", en: "12–14 L/100km" },
      load: { ky: "5 000 кг", ru: "5 000 кг", en: "5,000 kg" },
      transmission: { ky: "Механика, 6 ылдамдык", ru: "Механика, 6 передач", en: "6-speed manual" },
    },
    features: ["featFuel", "featCompact", "featReliability"],
  },
];

export function getTruckBySlug(slug: string): KtmTruck | undefined {
  return KTM_TRUCKS.find((t) => t.slug === slug);
}

export function getTrucksByCategory(category: TruckCategory): KtmTruck[] {
  return KTM_TRUCKS.filter((t) => t.category === category);
}
