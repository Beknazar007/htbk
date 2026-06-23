/** Diesel: ~2.68 kg CO₂ per liter; GT8 avg ~14 L/100 km */
const DIESEL_KG_CO2_PER_LITER = 2.68;
const DIESEL_L_PER_100KM = 14;

/** Kyrgyz grid estimate: ~0.45 kg CO₂ per kWh; EV ~0.8 kWh/km city */
const GRID_KG_CO2_PER_KWH = 0.45;
const EV_KWH_PER_KM = 0.8;

export interface Co2Result {
  monthlyKm: number;
  annualDieselKg: number;
  annualElectricKg: number;
  annualSavedKg: number;
  annualSavedTonnes: number;
  treesEquivalent: number;
}

export function calculateCo2Savings(monthlyKm: number): Co2Result {
  const km = Math.max(0, monthlyKm);
  const annualKm = km * 12;

  const annualDieselLiters = (annualKm / 100) * DIESEL_L_PER_100KM;
  const annualDieselKg = annualDieselLiters * DIESEL_KG_CO2_PER_LITER;

  const annualElectricKwh = annualKm * EV_KWH_PER_KM;
  const annualElectricKg = annualElectricKwh * GRID_KG_CO2_PER_KWH;

  const annualSavedKg = Math.max(0, annualDieselKg - annualElectricKg);
  const annualSavedTonnes = annualSavedKg / 1000;
  const treesEquivalent = Math.round(annualSavedKg / 21);

  return {
    monthlyKm: km,
    annualDieselKg: Math.round(annualDieselKg),
    annualElectricKg: Math.round(annualElectricKg),
    annualSavedKg: Math.round(annualSavedKg),
    annualSavedTonnes: Math.round(annualSavedTonnes * 10) / 10,
    treesEquivalent,
  };
}
