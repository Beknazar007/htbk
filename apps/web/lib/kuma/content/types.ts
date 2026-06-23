import type { KumaLocale } from "../types";

export type LocalizedText = Record<KumaLocale, string>;

export interface VehiclePerformance {
  icon: string;
  titleKey: string;
  descKey: string;
}

export interface VehicleSpecs {
  engine: string;
  wheelbase: string;
  dimensions: string;
  weight: string;
  fuelConsumption: string;
  transmission: string;
  brakes: string;
  suspension: string;
}

export interface Vehicle {
  slug: string;
  name: LocalizedText;
  tagline: LocalizedText;
  category: "medium" | "electric" | "heavy";
  image: string;
  heroImage: string;
  price: number;
  electric: boolean;
  pdfPath: string;
  description: LocalizedText;
  performance: VehiclePerformance[];
  convenience: LocalizedText;
  technology: LocalizedText;
  exteriorImages: string[];
  interiorImages: string[];
  specs: VehicleSpecs;
  bodyConfigs: string[];
}

export interface SuperstructureItem {
  slug: string;
  nameKey: string;
  image: string;
  description: LocalizedText;
  applications: Record<KumaLocale, string[]>;
}

export interface NewsArticle {
  slug: string;
  date: string;
  image: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  body: LocalizedText;
}

export interface BrandPageContent {
  slug: string;
  titleKey: string;
  subtitleKey: string;
  heroImage: string;
  sections: { titleKey: string; bodyKey: string }[];
}

export interface CmsSeoFields {
  title: LocalizedText;
  description: LocalizedText;
  keywords: string[];
}
