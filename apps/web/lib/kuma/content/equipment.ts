import { MEDIA } from "../media";
import type { ProductCategoryId } from "./product-categories";

export interface EquipmentSpec {
  labelKey: string;
  value: { ru: string; ky: string };
}

export interface EquipmentItem {
  slug: string;
  model: string;
  category: ProductCategoryId;
  typeKey: string;
  image: string;
  gallery?: string[];
  name: { ru: string; ky: string };
  summary: { ru: string; ky: string };
  specs: EquipmentSpec[];
}

export const EQUIPMENT: EquipmentItem[] = [
  {
    slug: "universal-chassis",
    model: "Universal Chassis",
    category: "trucks",
    typeKey: "eqUniversalChassis",
    image: MEDIA.universalChassis,
    gallery: [MEDIA.universalChassis, MEDIA.chassis1],
    name: { ru: "Универсальное шасси", ky: "Универсалдуу шасси" },
    summary: {
      ru: "Базовое шасси для автобусов и спецтехники с задним расположением двигателя.",
      ky: "Автобус жана атайын техника үчүн арткы мотордуу базалык шасси.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "10,5–18,0 т", ky: "10,5–18,0 т" } },
      { labelKey: "specYear", value: { ru: "2024–2026", ky: "2024–2026" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "chassis",
    model: "Bare Chassis",
    category: "trucks",
    typeKey: "eqChassis",
    image: MEDIA.chassis1,
    gallery: [MEDIA.chassis1, MEDIA.chassis2],
    name: { ru: "Шасси", ky: "Шасси" },
    summary: {
      ru: "Готовая рама для установки кузова: самосвал, фургон, цистерна и др.",
      ky: "Кузов орнотуу үчүн даяр рама: самосвал, фургон, цистерна ж.б.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "7,5–25,0 т", ky: "7,5–25,0 т" } },
      { labelKey: "specPayload", value: { ru: "4,0–15,0 т", ky: "4,0–15,0 т" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "cab",
    model: "Super Cab",
    category: "trucks",
    typeKey: "eqCab",
    image: MEDIA.cabSuper,
    gallery: [MEDIA.cabSuper, MEDIA.cabXcient],
    name: { ru: "Кабина", ky: "Кабина" },
    summary: {
      ru: "Просторная кабина с цифровой панелью, эргономикой и низким уровнем шума.",
      ky: "Санарип панель, эргономика жана төмөн ызы-чуу менен кең кабина.",
    },
    specs: [
      { labelKey: "specCabType", value: { ru: "Super Cab / XCIENT", ky: "Super Cab / XCIENT" } },
      { labelKey: "specTilt", value: { ru: "Наклон 50°", ky: "50° эңкейтүү" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "truck",
    model: "HD72",
    category: "trucks",
    typeKey: "eqTruck",
    image: MEDIA.truckHd72,
    name: { ru: "Грузовик HD72", ky: "HD72 жүк ташуучу" },
    summary: {
      ru: "Среднетоннажный грузовик для городской и региональной логистики.",
      ky: "Шаардык жана аймактык логистика үчүн орто жүк ташуучу.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "7,5 т", ky: "7,5 т" } },
      { labelKey: "specPayload", value: { ru: "4,0 т", ky: "4,0 т" } },
      { labelKey: "specYear", value: { ru: "2025", ky: "2025" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "truck-crane",
    model: "HD170-1000",
    category: "special",
    typeKey: "eqTruckCrane",
    image: MEDIA.craneHd170,
    gallery: [MEDIA.craneHd170, MEDIA.craneKnuckle, MEDIA.craneStiff],
    name: { ru: "Автокран HD170-1000", ky: "Автокран HD170-1000" },
    summary: {
      ru: "Автомобильный кран для монтажа и погрузочно-разгрузочных работ.",
      ky: "Монтаж жана жүк түшүрүү-көтөрүү иштери үчүн автокран.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "18,8–43,3 т", ky: "18,8–43,3 т" } },
      { labelKey: "specLift", value: { ru: "до 1000 кг·м", ky: "1000 кг·м чейин" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "dump-truck",
    model: "HD260 Dump",
    category: "special",
    typeKey: "eqDumpTruck",
    image: MEDIA.garbageAlt,
    name: { ru: "Самосвал", ky: "Самосвал" },
    summary: {
      ru: "Самосвальная надстройка для строительных и сыпучих грузов.",
      ky: "Курулуш жана чоң уча материалдар үчүн самосвал.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "25,0 т", ky: "25,0 т" } },
      { labelKey: "specPayload", value: { ru: "15,0 т", ky: "15,0 т" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "mixer",
    model: "HD260 Mixer",
    category: "special",
    typeKey: "eqMixer",
    image: MEDIA.garbage,
    name: { ru: "Миксер", ky: "Миксер" },
    summary: {
      ru: "Автобетоносмеситель для доставки и подачи бетонной смеси.",
      ky: "Бетон аралашмасын жеткирүү үчүн автобетоносмеситель.",
    },
    specs: [
      { labelKey: "specVolume", value: { ru: "6–9 м³", ky: "6–9 м³" } },
      { labelKey: "specGvw", value: { ru: "26,0 т", ky: "26,0 т" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "bus",
    model: "Aero City / Universe",
    category: "buses",
    typeKey: "eqBus",
    image: MEDIA.busLineup,
    gallery: [MEDIA.busLineup, MEDIA.busAeroCity, MEDIA.busAeroTown, MEDIA.busAeroExpress],
    name: { ru: "Автобус", ky: "Автобус" },
    summary: {
      ru: "Городские и междугородние автобусы с доступом для маломобильных пассажиров.",
      ky: "Майыптык бар жүргүнчүлөр үчүн шаардык жана шаараралык автобустар.",
    },
    specs: [
      { labelKey: "specCapacity", value: { ru: "25–55 мест", ky: "25–55 орун" } },
      { labelKey: "specLength", value: { ru: "8,5–12,5 м", ky: "8,5–12,5 м" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "tractor",
    model: "XCIENT Fuel Cell",
    category: "trucks",
    typeKey: "eqTractor",
    image: MEDIA.tractorXcient,
    name: { ru: "Тягач XCIENT Fuel Cell", ky: "XCIENT Fuel Cell тягачы" },
    summary: {
      ru: "Водородный тягач для магистральных перевозок с нулевыми выбросами.",
      ky: "Нөлдүк чыгарылыш менен магистралдык ташуулар үчүн суу тутун тягачы.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "42,0 т", ky: "42,0 т" } },
      { labelKey: "specPower", value: { ru: "180 кВт (топливный элемент)", ky: "180 кВт (отун элементи)" } },
      { labelKey: "specYear", value: { ru: "2025", ky: "2025" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "garbage-truck",
    model: "HD260 Refuse",
    category: "special",
    typeKey: "eqGarbage",
    image: MEDIA.garbage,
    name: { ru: "Мусоровоз HD260", ky: "HD260 мусоровоз" },
    summary: {
      ru: "Компакторный мусоровоз для коммунальных служб.",
      ky: "Коммуналдык кызматтар үчүн компактордук мусоровоз.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "26,0 т", ky: "26,0 т" } },
      { labelKey: "specVolume", value: { ru: "12–16 м³", ky: "12–16 м³" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "road-sweeper",
    model: "HD260 Sweeper",
    category: "special",
    typeKey: "eqSweeper",
    image: MEDIA.roadSweeper,
    name: { ru: "Подметально-уборочная машина", ky: "Жол тазалоочу машина" },
    summary: {
      ru: "Дорожная подметально-уборочная техника для городского хозяйства.",
      ky: "Шаар чарбасы үчүн жол тазалоочу техника.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "16,0 т", ky: "16,0 т" } },
      { labelKey: "specSweep", value: { ru: "до 40 000 м²/ч", ky: "40 000 м²/ч чейин" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "wrecker",
    model: "HD72 / HD260",
    category: "special",
    typeKey: "eqWrecker",
    image: MEDIA.wreckerHd72,
    gallery: [MEDIA.wreckerHd72, MEDIA.wreckerHd260],
    name: { ru: "Эвакуатор", ky: "Эвакуатор" },
    summary: {
      ru: "Эвакуаторы с крановой установкой и underlift-системой.",
      ky: "Кран орнотуусу жана underlift системасы бар эвакуаторлор.",
    },
    specs: [
      { labelKey: "specGvw", value: { ru: "7,5–26,0 т", ky: "7,5–26,0 т" } },
      { labelKey: "specLift", value: { ru: "до 12 т", ky: "12 т чейин" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
  {
    slug: "engine",
    model: "D6GA / Generator",
    category: "engines",
    typeKey: "eqEngine",
    image: MEDIA.engine,
    name: { ru: "Двигатель", ky: "Мотор" },
    summary: {
      ru: "Дизельные и генераторные силовые установки Hyundai для коммерческой техники.",
      ky: "Коммерциялык техника үчүн Hyundai дизель жана генератордук кубаттуулук орнотуулары.",
    },
    specs: [
      { labelKey: "specPower", value: { ru: "150–380 л.с.", ky: "150–380 а.к." } },
      { labelKey: "specEmission", value: { ru: "Euro 5 / Euro 6", ky: "Euro 5 / Euro 6" } },
      { labelKey: "specOrigin", value: { ru: "Республика Корея", ky: "Корея Республикасы" } },
    ],
  },
];

export function getEquipment(slug: string) {
  return EQUIPMENT.find((e) => e.slug === slug);
}

export function getAllEquipmentSlugs() {
  return EQUIPMENT.map((e) => e.slug);
}

export function getEquipmentByCategory(cat: ProductCategoryId) {
  if (cat === "all") return EQUIPMENT;
  return EQUIPMENT.filter((e) => e.category === cat);
}
