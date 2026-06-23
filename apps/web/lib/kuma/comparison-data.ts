export type CompareModelId = "gt8" | "gt11" | "electric";

export interface ComparisonRow {
  paramKey: string;
  gt8Key: string;
  gt11Key: string;
  electricKey: string;
}

export const COMPARE_MODELS: { id: CompareModelId; nameKey: string }[] = [
  { id: "gt8", nameKey: "compareModelGt8" },
  { id: "gt11", nameKey: "compareModelGt11" },
  { id: "electric", nameKey: "compareModelElectric" },
];

/** GT8 vs GT11 vs Electric — landing page comparison table */
export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    paramKey: "compareParamPayload",
    gt8Key: "comparePayloadGt8",
    gt11Key: "comparePayloadGt11",
    electricKey: "comparePayloadElectric",
  },
  {
    paramKey: "compareParamFuel",
    gt8Key: "compareFuelDiesel",
    gt11Key: "compareFuelDiesel",
    electricKey: "compareFuelElectric",
  },
  {
    paramKey: "compareParamEngine",
    gt8Key: "compareEngineGt8",
    gt11Key: "compareEngineGt11",
    electricKey: "compareEngineElectric",
  },
  {
    paramKey: "compareParamTransmission",
    gt8Key: "compareTransmissionGt8",
    gt11Key: "compareTransmissionGt11",
    electricKey: "compareTransmissionElectric",
  },
  {
    paramKey: "compareParamConsumption",
    gt8Key: "compareConsumptionGt8",
    gt11Key: "compareConsumptionGt11",
    electricKey: "compareConsumptionElectric",
  },
  {
    paramKey: "compareParamEuropallets",
    gt8Key: "compareEuropalletsGt8",
    gt11Key: "compareEuropalletsGt11",
    electricKey: "compareEuropalletsElectric",
  },
];
