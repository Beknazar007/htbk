import type { TruckModel } from "./types";

export const TRUCK_MODELS: TruckModel[] = [
  {
    slug: "mighty-ex8",
    name: "Hyundai Mighty EX8",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80",
    price: 2850000,
    shortSpecs: {
      payload: "5 т",
      engine: "Дизель",
      fuelConsumption: "14–16 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "Hyundai",
      model: "Mighty EX8",
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
      ky: "Hyundai Mighty EX8 — орто жүк ташуучу сегменттеги эң популярдуу моделдердин бири. 2018-жылы Hyundai Truck & Bus Korea тарабынан чыгарылган. Шаар ичинде жана регионалдык жеткирүүлөр үчүн оптималдуу чечим. Корей сапаты, төмөн отун сарптоо жана жогорку жүк көтөрүү мүмкүнчүлүгү менен дүйнө жүзүндө миллиондогон жолдорду басууган.",
      ru: "Hyundai Mighty EX8 — одна из самых популярных моделей в сегменте среднегрузовых автомобилей. Выпущена Hyundai Truck & Bus Korea в 2018 году. Оптимальное решение для городских и региональных перевозок. Благодаря корейскому качеству, низкому расходу топлива и высокой грузоподъёмности прошла миллионы километров по всему миру.",
    },
    superstructures: [
      { id: "refrigerator", nameKey: "refrigerator", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
      { id: "isothermal", nameKey: "isothermal", image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&q=80" },
      { id: "dump", nameKey: "dump", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
      { id: "manipulator", nameKey: "manipulator", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
    ],
    pdfPath: "/catalogs/mighty-ex8.pdf",
  },
  {
    slug: "mighty-ex9",
    name: "Hyundai Mighty EX9",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1600&q=80",
    price: 3200000,
    shortSpecs: {
      payload: "5.5 т",
      engine: "Дизель",
      fuelConsumption: "15–17 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "Hyundai",
      model: "Mighty EX9",
      country: "Түштүк Корея",
      engineVolume: "4.0 л",
      horsepower: "170 а.к.",
      transmission: "Механика, 6 ылдамдык",
      payload: "5 500 кг",
      fuelTank: "120 л",
      fuelConsumption: "15–17 л / 100 км",
      maxSpeed: "115 км/саат",
    },
    history: {
      ky: "Hyundai Mighty EX9 — EX8 моделинин кубаттуу версиясы. Кошумча жүк көтөрүү мүмкүнчүлүгү жана жакшыртылган кабина менен 2020-жылы чыгарылган. Логистика компаниялары жана коммерциялык ташуулар үчүн идеалдуу.",
      ru: "Hyundai Mighty EX9 — усиленная версия модели EX8. Выпущена в 2020 году с увеличенной грузоподъёмностью и улучшенной кабиной. Идеальна для логистических компаний и коммерческих перевозок.",
    },
    superstructures: [
      { id: "refrigerator", nameKey: "refrigerator", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
      { id: "tank", nameKey: "tank", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
      { id: "evacuator", nameKey: "evacuator", image: "https://images.unsplash.com/photo-1449965404609-476c12f8c298?w=400&q=80" },
    ],
    pdfPath: "/catalogs/mighty-ex9.pdf",
  },
  {
    slug: "hd78",
    name: "Hyundai HD78",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
    price: 4500000,
    shortSpecs: {
      payload: "7.5 т",
      engine: "Дизель",
      fuelConsumption: "16–18 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "Hyundai",
      model: "HD78",
      country: "Түштүк Корея",
      engineVolume: "4.5 л",
      horsepower: "190 а.к.",
      transmission: "Механика, 6 ылдамдык",
      payload: "7 500 кг",
      fuelTank: "150 л",
      fuelConsumption: "16–18 л / 100 км",
      maxSpeed: "120 км/саат",
    },
    history: {
      ky: "Hyundai HD78 — оор жүк ташуулар үчүн ишенимдүү чечим. Кыргызстандагы курулуш, агро жана логистика компаниялары тарабынан кең колдонулат. Туруктуу иштеши жана оңой тейлөөсү менен белгилүү.",
      ru: "Hyundai HD78 — надёжное решение для тяжёлых перевозок. Широко используется строительными, агро и логистическими компаниями в Кыргызстане. Известен стабильной работой и простым обслуживанием.",
    },
    superstructures: [
      { id: "dump", nameKey: "dump", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
      { id: "manipulator", nameKey: "manipulator", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
      { id: "garbage", nameKey: "garbage", image: "https://images.unsplash.com/photo-1530587199843-99aec3266ec3?w=400&q=80" },
    ],
    pdfPath: "/catalogs/hd78.pdf",
  },
  {
    slug: "hd120",
    name: "Hyundai HD120",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1600&q=80",
    price: 6800000,
    shortSpecs: {
      payload: "12 т",
      engine: "Дизель",
      fuelConsumption: "18–22 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "Hyundai",
      model: "HD120",
      country: "Түштүк Корея",
      engineVolume: "6.0 л",
      horsepower: "280 а.к.",
      transmission: "Автомат, 8 ылдамдык",
      payload: "12 000 кг",
      fuelTank: "200 л",
      fuelConsumption: "18–22 л / 100 км",
      maxSpeed: "130 км/саат",
    },
    history: {
      ky: "Hyundai HD120 — чоң жүк ташуулар үчүн премиум класс. Автоматтык КПП, жогорку коопсуздук стандарттары жана заманбап кабина. Узак аралык маршруттар үчүн оптималдуу.",
      ru: "Hyundai HD120 — премиум-класс для крупных перевозок. Автоматическая КПП, высокие стандарты безопасности и современная кабина. Оптимален для дальних маршрутов.",
    },
    superstructures: [
      { id: "refrigerator", nameKey: "refrigerator", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" },
      { id: "tank", nameKey: "tank", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
      { id: "evacuator", nameKey: "evacuator", image: "https://images.unsplash.com/photo-1449965404609-476c12f8c298?w=400&q=80" },
    ],
    pdfPath: "/catalogs/hd120.pdf",
  },
  {
    slug: "xcient",
    name: "Hyundai XCIENT",
    image: "https://images.unsplash.com/photo-1619642751034-765df6927c12?w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1619642751034-765df6927c12?w=1600&q=80",
    price: 12500000,
    shortSpecs: {
      payload: "25 т",
      engine: "Дизель",
      fuelConsumption: "28–32 л / 100 км",
      country: "Түштүк Корея",
    },
    fullSpecs: {
      brand: "Hyundai",
      model: "XCIENT",
      country: "Түштүк Корея",
      engineVolume: "12.9 л",
      horsepower: "520 а.к.",
      transmission: "Автомат, 12 ылдамдык",
      payload: "25 000 кг",
      fuelTank: "400 л",
      fuelConsumption: "28–32 л / 100 км",
      maxSpeed: "140 км/саат",
    },
    history: {
      ky: "Hyundai XCIENT — Hyundai Truck & Bus компаниясынын флагманы. Жогорку жүк көтөрүү мүмкүнчүлүгү, заманбап технологиялар жана экологиялык стандарттар. Кыргызстандагы эң оор жүк ташуулар үчүн.",
      ru: "Hyundai XCIENT — флагман Hyundai Truck & Bus. Высокая грузоподъёмность, современные технологии и экологические стандарты. Для самых тяжёлых перевозок в Кыргызстане.",
    },
    superstructures: [
      { id: "dump", nameKey: "dump", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80" },
      { id: "tank", nameKey: "tank", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
      { id: "manipulator", nameKey: "manipulator", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" },
    ],
    pdfPath: "/catalogs/xcient.pdf",
  },
];

export function getTruckBySlug(slug: string): TruckModel | undefined {
  return TRUCK_MODELS.find((t) => t.slug === slug);
}

export function getAllTruckSlugs(): string[] {
  return TRUCK_MODELS.map((t) => t.slug);
}
