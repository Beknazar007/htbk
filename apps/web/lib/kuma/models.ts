import { IMAGES } from "./constants";
import type { TruckModel } from "./types";

export const TRUCK_MODELS: TruckModel[] = [
  {
    slug: "gt5",
    name: "GT5",
    category: "commercial",
    categoryKey: "categoryCommercial",
    image: IMAGES.gt5,
    heroImage: IMAGES.gt5,
    price: 3200000,
    shortSpecs: {
      payload: "5 000 кг",
      engine: "Дизель, Euro 5",
      fuelConsumption: "14–16 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "GT Series",
      model: "GT5",
      country: "Түштүк Корея",
      engineVolume: "3.9 л",
      horsepower: "150 а.к.",
      transmission: "Механика, 6 ылдамдык",
      payload: "5 000 кг",
      fuelTank: "100 л",
      fuelConsumption: "14–16 л / 100 км",
      maxSpeed: "110 км/саат",
    },
    history: {
      ky: "GT5 — шаар ичиндеги жана регионалдык жеткирүүлөр үчүн оптималдуу модель. Компакттуу, экономиялык жана ишенимдүү.",
      ru: "GT5 — оптимальная модель для городских и региональных доставок. Компактный, экономичный и надёжный.",
    },
    superstructures: [],
    pdfPath: "/catalogs/gt5.pdf",
  },
  {
    slug: "gt8",
    name: "GT8",
    category: "flatbed",
    categoryKey: "categoryFlatbed",
    image: IMAGES.gt8,
    heroImage: IMAGES.gt8,
    price: 4500000,
    shortSpecs: {
      payload: "8 000 кг",
      engine: "Дизель, Euro 5",
      fuelConsumption: "16–18 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "GT Series",
      model: "GT8",
      country: "Түштүк Корея",
      engineVolume: "4.5 л",
      horsepower: "170 а.к.",
      transmission: "Механика / Автомат",
      payload: "8 000 кг",
      fuelTank: "150 л",
      fuelConsumption: "16–18 л / 100 км",
      maxSpeed: "115 км/саат",
    },
    history: {
      ky: "GT8 — универсалдуу жүк ташуучу. Кыргызстандагы кеңири колдонулган модель, бекем шassi жана жогорку өткөрүү мүмкүнчүлүгү.",
      ru: "GT8 — универсальный грузовик. Популярная модель в Кыргызстане с прочным шасси и высокой проходимостью.",
    },
    superstructures: [],
    pdfPath: "/catalogs/gt8.pdf",
  },
  {
    slug: "gt10",
    name: "GT10",
    category: "dump",
    categoryKey: "categoryDump",
    image: IMAGES.gt10,
    heroImage: IMAGES.gt10,
    price: 5800000,
    shortSpecs: {
      payload: "10 000 кг",
      engine: "Дизель, Euro 5",
      fuelConsumption: "18–22 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "GT Series",
      model: "GT10",
      country: "Түштүк Корея",
      engineVolume: "5.0 л",
      horsepower: "200 а.к.",
      transmission: "Автомат, 6 ылдамдык",
      payload: "10 000 кг",
      fuelTank: "180 л",
      fuelConsumption: "18–22 л / 100 км",
      maxSpeed: "120 км/саат",
    },
    history: {
      ky: "GT10 — курулуш, карьер жана инфраструктуралык иштер үчүн. Кубаттуу кыймылдаткыч жана ABS коопсуздук системасы.",
      ru: "GT10 — для строительства, карьеров и инфраструктурных работ. Мощный двигатель и система безопасности ABS.",
    },
    superstructures: [],
    pdfPath: "/catalogs/gt10.pdf",
  },
  {
    slug: "gt12",
    name: "GT12",
    category: "tractor",
    categoryKey: "categoryTractor",
    image: IMAGES.gt12,
    heroImage: IMAGES.gt12,
    price: 7200000,
    shortSpecs: {
      payload: "12 000 кг",
      engine: "Дизель, Euro 5",
      fuelConsumption: "22–26 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "GT Series",
      model: "GT12",
      country: "Түштүк Корея",
      engineVolume: "6.0 л",
      horsepower: "240 а.к.",
      transmission: "Автомат, 8 ылдамдык",
      payload: "12 000 кг",
      fuelTank: "220 л",
      fuelConsumption: "22–26 л / 100 км",
      maxSpeed: "120 км/саат",
    },
    history: {
      ky: "GT12 — оор шарттар жана узак аралык ташуулар үчүн флагман модель. Кең кабина, заманбап коопсуздук жана жогорку жүк көтөрмө.",
      ru: "GT12 — флагманская модель для тяжёлых условий и дальних перевозок. Просторная кабина, современная безопасность и высокая грузоподъёмность.",
    },
    superstructures: [],
    pdfPath: "/catalogs/gt12.pdf",
  },
];

export function getTruckBySlug(slug: string): TruckModel | undefined {
  return TRUCK_MODELS.find((t) => t.slug === slug);
}

export function getAllTruckSlugs(): string[] {
  return TRUCK_MODELS.map((t) => t.slug);
}
