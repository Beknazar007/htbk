export const KTM_PERFORMANCE_STATS = [
  { value: 320, suffix: " а.к.", key: "perfPower" },
  { value: 1200, suffix: " Н·м", key: "perfTorque" },
  { value: 15, suffix: " л/100км", key: "perfFuel" },
  { value: 11, suffix: " т", key: "perfLoad" },
] as const;

export const KTM_ENGINE_FEATURES = [
  { titleKey: "engineEuro", descKey: "engineEuroDesc" },
  { titleKey: "engineTurbo", descKey: "engineTurboDesc" },
  { titleKey: "engineService", descKey: "engineServiceDesc" },
] as const;

export const KTM_CHASSIS_FEATURES = [
  { titleKey: "chassisFrame", descKey: "chassisFrameDesc" },
  { titleKey: "chassisSuspension", descKey: "chassisSuspensionDesc" },
  { titleKey: "chassisAxle", descKey: "chassisAxleDesc" },
] as const;

export const KTM_SAFETY_FEATURES = [
  { titleKey: "safetyAbs", descKey: "safetyAbsDesc" },
  { titleKey: "safetyEsp", descKey: "safetyEspDesc" },
  { titleKey: "safetyCamera", descKey: "safetyCameraDesc" },
  { titleKey: "safetyBrake", descKey: "safetyBrakeDesc" },
] as const;

export const KTM_COMFORT_FEATURES = [
  { titleKey: "comfortCabin", descKey: "comfortCabinDesc" },
  { titleKey: "comfortClimate", descKey: "comfortClimateDesc" },
  { titleKey: "comfortSeat", descKey: "comfortSeatDesc" },
] as const;

export const KTM_EXTERIOR_FEATURES = [
  { titleKey: "exteriorLed", descKey: "exteriorLedDesc" },
  { titleKey: "exteriorAero", descKey: "exteriorAeroDesc" },
  { titleKey: "exteriorPaint", descKey: "exteriorPaintDesc" },
] as const;

export const KTM_SPEC_ROWS = [
  { labelKey: "specEngine", valueKey: "specRowEngine" },
  { labelKey: "specPower", valueKey: "specRowPower" },
  { labelKey: "specTorque", valueKey: "specRowTorque" },
  { labelKey: "specFuel", valueKey: "specRowFuel" },
  { labelKey: "specLoad", valueKey: "specRowLoad" },
  { labelKey: "specTransmission", valueKey: "specRowTransmission" },
] as const;
