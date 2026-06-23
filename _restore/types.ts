export type KumaLocale = "ky" | "ru";

export interface TruckSpec {
  brand: string;
  model: string;
  country: string;
  engineVolume: string;
  horsepower: string;
  transmission: string;
  payload: string;
  fuelTank: string;
  fuelConsumption: string;
  maxSpeed: string;
}

export interface Superstructure {
  id: string;
  nameKey: string;
  image: string;
}

export interface TruckModel {
  slug: string;
  name: string;
  image: string;
  heroImage: string;
  price: number;
  shortSpecs: {
    payload: string;
    engine: string;
    fuelConsumption: string;
    country: string;
  };
  fullSpecs: TruckSpec;
  history: { ky: string; ru: string };
  superstructures: Superstructure[];
  pdfPath: string;
}

export interface LeasingResult {
  monthlyPayment: number;
  totalMonths: number;
  interestRate: number;
  totalAmount: number;
}
