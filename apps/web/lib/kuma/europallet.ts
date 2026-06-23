export type RecommendedModel = "gt8" | "gt11";

export interface EuropalletResult {
  recommended: RecommendedModel;
  cargoWeightKg: number;
  estimatedPallets: number;
  maxPallets: number;
  fitsPhysically: boolean;
  withinPayload: boolean;
}

const MODEL_LIMITS: Record<RecommendedModel, { maxPayloadKg: number; maxPallets: number }> = {
  gt8: { maxPayloadKg: 8000, maxPallets: 12 },
  gt11: { maxPayloadKg: 11000, maxPallets: 16 },
};

/** Average loaded europallet weight for estimation (kg) */
const AVG_PALLET_WEIGHT_KG = 1000;

export function calculateEuropalletRecommendation(
  cargoWeightKg: number
): EuropalletResult {
  const weight = Math.max(0, cargoWeightKg);
  const estimatedPallets = weight > 0 ? Math.ceil(weight / AVG_PALLET_WEIGHT_KG) : 0;

  const needsGt11 =
    weight > MODEL_LIMITS.gt8.maxPayloadKg ||
    estimatedPallets > MODEL_LIMITS.gt8.maxPallets;

  const recommended: RecommendedModel = needsGt11 ? "gt11" : "gt8";
  const limits = MODEL_LIMITS[recommended];

  return {
    recommended,
    cargoWeightKg: weight,
    estimatedPallets,
    maxPallets: limits.maxPallets,
    fitsPhysically: estimatedPallets <= limits.maxPallets,
    withinPayload: weight <= limits.maxPayloadKg,
  };
}
