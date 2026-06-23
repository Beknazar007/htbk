import { IMAGES } from "./constants";

export type BusinessSectorId =
  | "logistics"
  | "construction"
  | "trade"
  | "agriculture"
  | "utilities"
  | "refrigerated";

export interface BusinessSector {
  id: BusinessSectorId;
  labelKey: string;
  descKey: string;
  icon: string;
  models: string[];
  superstructureKeys: string[];
  image: string;
}

export const BUSINESS_SECTORS: BusinessSector[] = [
  {
    id: "logistics",
    labelKey: "sectorLogistics",
    descKey: "sectorLogisticsDesc",
    icon: "truck",
    models: ["gt8", "gt10", "gt12"],
    superstructureKeys: ["superFlatbed", "superCurtain", "superVan"],
    image: IMAGES.gt10,
  },
  {
    id: "construction",
    labelKey: "sectorConstruction",
    descKey: "sectorConstructionDesc",
    icon: "hard-hat",
    models: ["gt10", "gt12"],
    superstructureKeys: ["superDump", "superMixer", "superCrane"],
    image: IMAGES.gt12,
  },
  {
    id: "trade",
    labelKey: "sectorTrade",
    descKey: "sectorTradeDesc",
    icon: "store",
    models: ["gt5", "gt8"],
    superstructureKeys: ["superVan", "superIsothermal", "superFlatbed"],
    image: IMAGES.gt5,
  },
  {
    id: "agriculture",
    labelKey: "sectorAgriculture",
    descKey: "sectorAgricultureDesc",
    icon: "wheat",
    models: ["gt8", "gt10"],
    superstructureKeys: ["superFlatbed", "superTank", "superLivestock"],
    image: IMAGES.gt8,
  },
  {
    id: "utilities",
    labelKey: "sectorUtilities",
    descKey: "sectorUtilitiesDesc",
    icon: "building",
    models: ["gt10", "gt12"],
    superstructureKeys: ["superAerial", "superGarbage", "superManipulator"],
    image: IMAGES.gt10,
  },
  {
    id: "refrigerated",
    labelKey: "sectorRefrigerated",
    descKey: "sectorRefrigeratedDesc",
    icon: "snowflake",
    models: ["gt8", "gt10"],
    superstructureKeys: ["superRefrigerator", "superIsothermal", "superVan"],
    image: IMAGES.van,
  },
];

export function getSectorById(id: BusinessSectorId): BusinessSector | undefined {
  return BUSINESS_SECTORS.find((s) => s.id === id);
}
