import { SITE_IMAGES } from "./site-images";

export interface ClientCase {
  id: string;
  companyKey: string;
  sectorLabelKey: string;
  resultKey: string;
  quoteKey: string;
  units: number;
  model: string;
  metricKey: string;
  image: string;
}

export const CLIENT_CASES: ClientCase[] = [
  {
    id: "xyz-logistics",
    companyKey: "caseXyzCompany",
    sectorLabelKey: "sectorLogistics",
    resultKey: "caseXyzResult",
    quoteKey: "caseXyzQuote",
    units: 5,
    model: "GT11",
    metricKey: "caseXyzMetric",
    image: SITE_IMAGES.gt11,
  },
  {
    id: "altyn-stroy",
    companyKey: "caseAltynCompany",
    sectorLabelKey: "sectorConstruction",
    resultKey: "caseAltynResult",
    quoteKey: "caseAltynQuote",
    units: 3,
    model: "GT12",
    metricKey: "caseAltynMetric",
    image: SITE_IMAGES.fleet,
  },
  {
    id: "bishkek-agro",
    companyKey: "caseAgroCompany",
    sectorLabelKey: "sectorAgriculture",
    resultKey: "caseAgroResult",
    quoteKey: "caseAgroQuote",
    units: 4,
    model: "GT8",
    metricKey: "caseAgroMetric",
    image: SITE_IMAGES.gt8,
  },
];
