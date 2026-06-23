export interface FleetTier {
  minVehicles: number;
  labelKey: string;
  titleKey: string;
  descKey: string;
  benefitKeys: string[];
}

export const FLEET_TIERS: FleetTier[] = [
  {
    minVehicles: 5,
    labelKey: "fleetTier5Label",
    titleKey: "fleetTier5Title",
    descKey: "fleetTier5Desc",
    benefitKeys: ["fleetBenefit5a", "fleetBenefit5b", "fleetBenefit5c"],
  },
  {
    minVehicles: 10,
    labelKey: "fleetTier10Label",
    titleKey: "fleetTier10Title",
    descKey: "fleetTier10Desc",
    benefitKeys: ["fleetBenefit10a", "fleetBenefit10b", "fleetBenefit10c"],
  },
  {
    minVehicles: 20,
    labelKey: "fleetTier20Label",
    titleKey: "fleetTier20Title",
    descKey: "fleetTier20Desc",
    benefitKeys: ["fleetBenefit20a", "fleetBenefit20b", "fleetBenefit20c"],
  },
];
