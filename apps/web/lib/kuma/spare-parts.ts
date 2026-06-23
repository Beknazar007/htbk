import { SITE_IMAGES } from "./site-images";

export type SparePartCategory =
  | "filters"
  | "brakes"
  | "engine"
  | "suspension"
  | "oil-filters"
  | "accessories";

export interface SparePart {
  sku: string;
  nameKey: string;
  descKey: string;
  image: string;
  category: SparePartCategory;
  compatibleModels: ("gt8" | "gt11" | "electric")[];
  inStock: boolean;
}

export const SPARE_PART_CATEGORIES: {
  id: SparePartCategory;
  labelKey: string;
  icon: string;
}[] = [
  { id: "filters", labelKey: "partsCatFilters", icon: "filter" },
  { id: "brakes", labelKey: "partsCatBrakes", icon: "disc" },
  { id: "engine", labelKey: "partsCatEngine", icon: "cog" },
  { id: "suspension", labelKey: "partsCatSuspension", icon: "suspension" },
  { id: "oil-filters", labelKey: "partsCatOilFilters", icon: "droplet" },
  { id: "accessories", labelKey: "partsCatAccessories", icon: "package" },
];

const PART_IMG = {
  filter: SITE_IMAGES.gt8,
  brake: SITE_IMAGES.gt11,
  engine: SITE_IMAGES.gt8,
  suspension: SITE_IMAGES.logistics,
  oil: SITE_IMAGES.logistics,
  accessory: SITE_IMAGES.fleet,
};

export const SPARE_PARTS: SparePart[] = [
  {
    sku: "28113-4X000",
    nameKey: "partAirFilterGt8",
    descKey: "partDescFilter",
    image: PART_IMG.filter,
    category: "filters",
    compatibleModels: ["gt8"],
    inStock: true,
  },
  {
    sku: "28113-4X100",
    nameKey: "partAirFilterGt11",
    descKey: "partDescFilter",
    image: PART_IMG.filter,
    category: "filters",
    compatibleModels: ["gt11"],
    inStock: true,
  },
  {
    sku: "28113-EV000",
    nameKey: "partCabinFilter",
    descKey: "partDescFilter",
    image: PART_IMG.filter,
    category: "filters",
    compatibleModels: ["gt8", "gt11", "electric"],
    inStock: true,
  },
  {
    sku: "58101-4X000",
    nameKey: "partBrakePadsFront",
    descKey: "partDescBrake",
    image: PART_IMG.brake,
    category: "brakes",
    compatibleModels: ["gt8", "gt11"],
    inStock: true,
  },
  {
    sku: "58102-4X000",
    nameKey: "partBrakePadsRear",
    descKey: "partDescBrake",
    image: PART_IMG.brake,
    category: "brakes",
    compatibleModels: ["gt8", "gt11"],
    inStock: false,
  },
  {
    sku: "ENG-TIM-4X",
    nameKey: "partTimingBelt",
    descKey: "partDescEngine",
    image: PART_IMG.engine,
    category: "engine",
    compatibleModels: ["gt8", "gt11"],
    inStock: true,
  },
  {
    sku: "ENG-GSK-4X",
    nameKey: "partGasketSet",
    descKey: "partDescEngine",
    image: PART_IMG.engine,
    category: "engine",
    compatibleModels: ["gt8", "gt11"],
    inStock: false,
  },
  {
    sku: "SUS-SHK-F",
    nameKey: "partShockAbsorber",
    descKey: "partDescSuspension",
    image: PART_IMG.suspension,
    category: "suspension",
    compatibleModels: ["gt8", "gt11"],
    inStock: true,
  },
  {
    sku: "SUS-LS-GT8",
    nameKey: "partLeafSpring",
    descKey: "partDescSuspension",
    image: PART_IMG.suspension,
    category: "suspension",
    compatibleModels: ["gt8"],
    inStock: true,
  },
  {
    sku: "26300-4X000",
    nameKey: "partOilFilterEngine",
    descKey: "partDescOil",
    image: PART_IMG.oil,
    category: "oil-filters",
    compatibleModels: ["gt8", "gt11"],
    inStock: true,
  },
  {
    sku: "26300-EV000",
    nameKey: "partOilFilterElectric",
    descKey: "partDescOil",
    image: PART_IMG.oil,
    category: "oil-filters",
    compatibleModels: ["electric"],
    inStock: true,
  },
  {
    sku: "26350-4X000",
    nameKey: "partFuelFilter",
    descKey: "partDescOil",
    image: PART_IMG.oil,
    category: "oil-filters",
    compatibleModels: ["gt8", "gt11"],
    inStock: true,
  },
  {
    sku: "ACC-MAT-001",
    nameKey: "partFloorMats",
    descKey: "partDescAccessory",
    image: PART_IMG.accessory,
    category: "accessories",
    compatibleModels: ["gt8", "gt11", "electric"],
    inStock: true,
  },
  {
    sku: "ACC-CAM-001",
    nameKey: "partRearCamera",
    descKey: "partDescAccessory",
    image: PART_IMG.accessory,
    category: "accessories",
    compatibleModels: ["gt8", "gt11", "electric"],
    inStock: true,
  },
  {
    sku: "ACC-GPS-001",
    nameKey: "partGpsTracker",
    descKey: "partDescAccessory",
    image: PART_IMG.accessory,
    category: "accessories",
    compatibleModels: ["gt8", "gt11", "electric"],
    inStock: false,
  },
  {
    sku: "ACC-CHG-001",
    nameKey: "partChargingCable",
    descKey: "partDescAccessory",
    image: PART_IMG.accessory,
    category: "accessories",
    compatibleModels: ["electric"],
    inStock: true,
  },
];
