import { IMAGES } from "../constants";
import type { SuperstructureItem } from "./types";

/** CMS: Superstructure collection — 15 body types */
export const SUPERSTRUCTURES: SuperstructureItem[] = [
  {
    slug: "refrigerated",
    nameKey: "bodyRefrigerated",
    image: IMAGES.superRefrigerator,
    description: {
      ru: "Рефрижераторный фургон для перевозки скоропортящихся продуктов с температурным контролем.",
      ky: "Тез бузулуучу продукттарды ташуу үчүн температураны көзөмөлдөгч рефрижератор.",
    },
    applications: {
      ru: ["Продукты питания", "Фармацевтика", "Цветочная логистика"],
      ky: ["Тамак-аш", "Фармацевтика", "Гүл логистикасы"],
    },
  },
  {
    slug: "isothermal",
    nameKey: "bodyIsothermal",
    image: IMAGES.superRefrigerator,
    description: {
      ru: "Изотермический кузов для стабильной температуры без активного охлаждения.",
      ky: "Активдүү муздатуусыз туруктуу температура үчүн изотермикалык кузов.",
    },
    applications: {
      ru: ["Напитки", "Бakaleя", "Молочная продукция"],
      ky: ["Суусундуктар", "Бакалея", "Сүт азыктары"],
    },
  },
  {
    slug: "dump",
    nameKey: "bodyDump",
    image: IMAGES.superDump,
    description: {
      ru: "Самосвальная надстройка для строительных материалов и сыпучих грузов.",
      ky: "Курулуш материалдары жана чоң уча материалдар үчүн самосвал.",
    },
    applications: {
      ru: ["Строительство", "Карьеры", "Коммунальные работы"],
      ky: ["Курулуш", "Карьерлер", "Коммуналдык иштер"],
    },
  },
  {
    slug: "crane",
    nameKey: "bodyCrane",
    image: IMAGES.superManipulator,
    description: {
      ru: "Кран-манипулятор для погрузочно-разгрузочных работ на месте.",
      ky: "Жerде жүк түшүрүү-көтөрүү иштери үчүн манипулятор.",
    },
    applications: {
      ru: ["Строительство", "Монтаж", "Складская логистика"],
      ky: ["Курулуш", "Монтаж", "Склад логистикасы"],
    },
  },
  {
    slug: "tanker",
    nameKey: "bodyTanker",
    image: IMAGES.superTank,
    description: {
      ru: "Цистерна для перевозки жидких грузов: топливо, вода, химия.",
      ky: "Суюк жүктөр: отун, сууну ташуу үчүн цистерна.",
    },
    applications: {
      ru: ["Топливо", "Вода", "Пищевые жидкости"],
      ky: ["Отун", "Суу", "Тамак-аш суюктук"],
    },
  },
  {
    slug: "garbage",
    nameKey: "bodyGarbage",
    image: IMAGES.superGarbage,
    description: {
      ru: "Мусоровоз для коммунальных служб и вывоза ТБО.",
      ky: "Коммуналдык кызматтар үчүн мусоровоз.",
    },
    applications: {
      ru: ["ЖКХ", "Городская уборка", "Промышленные отходы"],
      ky: ["Комуналдык", "Шаар тазалоо", "Өндүрүш калдыктары"],
    },
  },
  {
    slug: "tow",
    nameKey: "bodyTow",
    image: IMAGES.superSemiTrailer,
    description: {
      ru: "Эвакуатор для транспортировки неисправных автомобилей.",
      ky: "Бuzulgan унааларды ташуу үчүн эвакуатор.",
    },
    applications: {
      ru: ["Дорожная помощь", "Автосервисы", "Парковки"],
      ky: ["Жол жардам", "Автосервистер", "Токтотмолор"],
    },
  },
  {
    slug: "flatbed",
    nameKey: "bodyFlatbed",
    image: IMAGES.flatbed,
    description: {
      ru: "Бортовая платформа для негабаритных и паллетных грузов.",
      ky: "Чоң өлчөмдүү жана паллеттик жүктөр үчүн борттук платформа.",
    },
    applications: {
      ru: ["Стройматериалы", "Оборудование", "Металлопрокат"],
      ky: ["Курулуш материалдары", "Жабдуулар", "Металл"],
    },
  },
  {
    slug: "van-box",
    nameKey: "bodyVanBox",
    image: IMAGES.van,
    description: {
      ru: "Фургонный кузов для защищённой перевозки товаров.",
      ky: "Товарларды коопсуз ташуу үчүн фургон кузов.",
    },
    applications: {
      ru: ["E-commerce", "Мебель", "Бытовая техника"],
      ky: ["E-commerce", "Эмерек", "Техника"],
    },
  },
  {
    slug: "curtain",
    nameKey: "bodyCurtain",
    image: IMAGES.commercial,
    description: {
      ru: "Тентованный полуприцеп/кузов для быстрой боковой погрузки.",
      ky: "Тез боковой жүктөө үчүн тент кузов.",
    },
    applications: {
      ru: ["Логистика", "Розница", "Складские поставки"],
      ky: ["Логистика", "Чекен сатуу", "Склад"],
    },
  },
  {
    slug: "mixer",
    nameKey: "bodyMixer",
    image: IMAGES.dump,
    description: {
      ru: "Бетоносмеситель для доставки бетона на стройплощадки.",
      ky: "Бeton жеткирүү үчүн бетоносмеситель.",
    },
    applications: {
      ru: ["Строительство", "ЖК", "Инфраструктура"],
      ky: ["Курулуш", "Тurar joy", "Инфраструктура"],
    },
  },
  {
    slug: "aerial",
    nameKey: "bodyAerial",
    image: IMAGES.commercial,
    description: {
      ru: "Автовышка для высотных работ и обслуживания линий.",
      ky: "Бийик иштер үчүн автовышка.",
    },
    applications: {
      ru: ["Электросети", "Освещение", "Монтаж"],
      ky: ["Электр тармагы", "Жарык", "Монтаж"],
    },
  },
  {
    slug: "tipper",
    nameKey: "bodyTipper",
    image: IMAGES.superDump,
    description: {
      ru: "Трёхсторонний самосвал для сельского хозяйства и строительства.",
      ky: "Айыл чарба жана курулуш үчүн үч тараптуу самосвал.",
    },
    applications: {
      ru: ["Сельхоз", "Карьеры", "Земляные работы"],
      ky: ["Айыл чарба", "Карьерлер", "Toprak иштер"],
    },
  },
  {
    slug: "livestock",
    nameKey: "bodyLivestock",
    image: IMAGES.commercial,
    description: {
      ru: "Скотовоз для перевозки животных с вентиляцией.",
      ky: "Жаныбарларды ташуу үчүн вентиляциялуу скотовоз.",
    },
    applications: {
      ru: ["Фермы", "Скотоводство", "Ярмарки"],
      ky: ["Фермалар", "Мал чарба", "Бazarlar"],
    },
  },
  {
    slug: "special",
    nameKey: "bodySpecial",
    image: IMAGES.tractor,
    description: {
      ru: "Спецтехника по индивидуальному проекту под задачи заказчика.",
      ky: "Заказчынын талабына ылайык атайын техника.",
    },
    applications: {
      ru: ["Госзаказ", "Промышленность", "Нефтегаз"],
      ky: ["Мамлекеттик заказ", "Өндүрүш", "Нeft-gaz"],
    },
  },
];

export function getSuperstructure(slug: string) {
  return SUPERSTRUCTURES.find((s) => s.slug === slug);
}

export function getAllSuperstructureSlugs() {
  return SUPERSTRUCTURES.map((s) => s.slug);
}
