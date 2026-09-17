import { IMAGES } from "../constants";
import { withBasePath } from "../base-path";
import type { Vehicle } from "./types";

/** CMS: Vehicle collection — primary Mighty GT lineup */
export const VEHICLES: Vehicle[] = [
  {
    slug: "mighty-gt8",
    name: { ru: "Hyundai Mighty GT8", ky: "Hyundai Mighty GT8" },
    tagline: { ru: "Грузоподъёмность до 8 тонн", ky: "Жүк көтөрмөсү 8 тоннага чейин" },
    category: "medium",
    image: IMAGES.commercial,
    heroImage: IMAGES.commercialHero,
    price: 4200000,
    electric: false,
    pdfPath: withBasePath("/catalogs/mighty-gt8.pdf"),
    description: {
      ru: "Компактный и манёвренный среднетоннажный грузовик для городской и региональной логистики.",
      ky: "Шаардык жана регионалдык логистика үчүн ыңгайлуу орто жүк ташуучу.",
    },
    performance: [
      { icon: "engine", titleKey: "perfEngine", descKey: "perfEngineGt8" },
      { icon: "transmission", titleKey: "perfTransmission", descKey: "perfTransmissionGt8" },
      { icon: "payload", titleKey: "perfPayload", descKey: "perfPayloadGt8" },
      { icon: "abs", titleKey: "perfAbs", descKey: "perfAbsDesc" },
      { icon: "vdc", titleKey: "perfVdc", descKey: "perfVdcDesc" },
      { icon: "safety", titleKey: "perfSafety", descKey: "perfSafetyDesc" },
    ],
    convenience: {
      ru: "Эргономичная кабина с регулируемым сиденьем, кондиционером и просторным багажным отделением для документов и инструментов.",
      ky: "Эргономикалык кабина, кондиционер жана документтер үчүн кең багаж бөлмөсү.",
    },
    technology: {
      ru: "Система мониторинга расхода топлива, камера заднего вида, Bluetooth-аудио.",
      ky: "Отун мониторинг системасы, артка камера, Bluetooth аудио.",
    },
    exteriorImages: [IMAGES.commercial, IMAGES.flatbed, IMAGES.van],
    interiorImages: [IMAGES.commercialHero, IMAGES.commercial],
    specs: {
      engine: "D4GA 3.9L Diesel, 150 л.с.",
      wheelbase: "3 400 мм",
      dimensions: "6 990 × 2 110 × 2 310 мм",
      weight: "GVW 8 000 кг",
      fuelConsumption: "12–14 л / 100 км",
      transmission: "Механика 6MT / Автомат 6AT",
      brakes: "Дисковые, ABS",
      suspension: "Передняя — рессорная, задняя — рессорная",
    },
    bodyConfigs: ["refrigerated", "isothermal", "dump", "crane", "flatbed", "tanker"],
  },
  {
    slug: "mighty-gt11",
    name: { ru: "Hyundai Mighty GT11", ky: "Hyundai Mighty GT11" },
    tagline: { ru: "Грузоподъёмность до 11 тонн", ky: "Жүк көтөрмөсү 11 тоннага чейин" },
    category: "medium",
    image: IMAGES.flatbed,
    heroImage: IMAGES.flatbedHero,
    price: 5800000,
    electric: false,
    pdfPath: withBasePath("/catalogs/mighty-gt11.pdf"),
    description: {
      ru: "Универсальный грузовик повышенной грузоподъёмности для строительства, дистрибуции и коммунального сектора.",
      ky: "Курулуш, дистрибуция жана коммуналдык сектор үчүн универсалдуу жүк ташуучу.",
    },
    performance: [
      { icon: "engine", titleKey: "perfEngine", descKey: "perfEngineGt11" },
      { icon: "transmission", titleKey: "perfTransmission", descKey: "perfTransmissionGt11" },
      { icon: "payload", titleKey: "perfPayload", descKey: "perfPayloadGt11" },
      { icon: "abs", titleKey: "perfAbs", descKey: "perfAbsDesc" },
      { icon: "vdc", titleKey: "perfVdc", descKey: "perfVdcDesc" },
      { icon: "safety", titleKey: "perfSafety", descKey: "perfSafetyDesc" },
    ],
    convenience: {
      ru: "Просторная двухместная кабина, улучшенная шумоизоляция, подлокотники и USB-порты.",
      ky: "Кең эки орундуу кабина, ычкы шумоизоляция, USB порттор.",
    },
    technology: {
      ru: "Готовность к управлению автопарком, TPMS, система помощи при трогании на подъёме.",
      ky: "Автопарк башкарууга даяр, TPMS, көтөрмөдө жүрүүгө жардам системасы.",
    },
    exteriorImages: [IMAGES.flatbed, IMAGES.dump, IMAGES.commercial],
    interiorImages: [IMAGES.flatbedHero, IMAGES.commercial],
    specs: {
      engine: "D4GA 4.0L Diesel, 170 л.с.",
      wheelbase: "3 900 мм",
      dimensions: "7 490 × 2 180 × 2 350 мм",
      weight: "GVW 11 000 кг",
      fuelConsumption: "14–16 л / 100 км",
      transmission: "Механика 6MT / Автомат 6AT",
      brakes: "Дисковые, ABS + EBD",
      suspension: "Усиленная рессорная подвеска",
    },
    bodyConfigs: ["refrigerated", "isothermal", "dump", "crane", "tanker", "garbage", "tow"],
  },
  {
    slug: "mighty-electric",
    name: { ru: "Hyundai Mighty — электрический", ky: "Hyundai Mighty — электрдик" },
    tagline: { ru: "Электрический грузовик", ky: "Электр жүк ташуycу" },
    category: "electric",
    image: IMAGES.van,
    heroImage: IMAGES.vanHero,
    price: 8900000,
    electric: true,
    pdfPath: withBasePath("/catalogs/mighty-electric.pdf"),
    description: {
      ru: "Бесшумный и экологичный электрогрузовик для «последней мили» и городских маршрутов.",
      ky: "Шаар ичиндеги маршруттар үчүн экологичдик электр жүк ташуycу.",
    },
    performance: [
      { icon: "engine", titleKey: "perfMotor", descKey: "perfMotorElectric" },
      { icon: "transmission", titleKey: "perfTransmission", descKey: "perfTransmissionElectric" },
      { icon: "payload", titleKey: "perfPayload", descKey: "perfPayloadElectric" },
      { icon: "abs", titleKey: "perfAbs", descKey: "perfAbsDesc" },
      { icon: "vdc", titleKey: "perfVdc", descKey: "perfVdcDesc" },
      { icon: "safety", titleKey: "perfSafety", descKey: "perfSafetyElectric" },
    ],
    convenience: {
      ru: "Тихая кабина, мгновенный крутящий момент, низкая стоимость обслуживания.",
      ky: "Тынч кабина, дароо момент, төмөн тейлөө чыгымы.",
    },
    technology: {
      ru: "Батарея 114 kWh, запас хода до 200 км, быстрая зарядка DC.",
      ky: "114 kWh батарея, 200 км чейин жүрүү, DC тез зарядка.",
    },
    exteriorImages: [IMAGES.van, IMAGES.commercial, IMAGES.flatbed],
    interiorImages: [IMAGES.vanHero, IMAGES.commercial],
    specs: {
      engine: "Электродвигатель 120 kW",
      wheelbase: "3 400 мм",
      dimensions: "6 990 × 2 110 × 2 310 мм",
      weight: "GVW 7 500 кг",
      fuelConsumption: "— (электро)",
      transmission: "Редуктор одноступенчатый",
      brakes: "Регенеративное торможение + ABS",
      suspension: "Рессорная",
    },
    bodyConfigs: ["refrigerated", "isothermal", "flatbed", "garbage"],
  },
];

export function getVehicle(slug: string) {
  return VEHICLES.find((v) => v.slug === slug);
}

export function getAllVehicleSlugs() {
  return VEHICLES.map((v) => v.slug);
}
