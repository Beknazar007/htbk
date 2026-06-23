import { MODEL_IMAGES, SITE_IMAGES } from "./site-images";

export interface PromoVideo {
  id: string;
  model: string;
  image: string;
  titleKey: string;
  descKey: string;
  advantageKeys: [string, string, string];
  payloadKey: string;
}

export const PROMO_VIDEOS: PromoVideo[] = [
  {
    id: "promo-gt5",
    model: "GT5",
    image: MODEL_IMAGES.gt5,
    titleKey: "promoGt5Title",
    descKey: "promoGt5Desc",
    advantageKeys: ["promoAdvEconomy", "promoAdvCompact", "promoAdvReliable"],
    payloadKey: "promoGt5Payload",
  },
  {
    id: "promo-gt8",
    model: "GT8",
    image: MODEL_IMAGES.gt8,
    titleKey: "promoGt8Title",
    descKey: "promoGt8Desc",
    advantageKeys: ["promoAdvUniversal", "promoAdvChassis", "promoAdvEfficient"],
    payloadKey: "promoGt8Payload",
  },
  {
    id: "promo-gt11",
    model: "GT11",
    image: SITE_IMAGES.gt11,
    titleKey: "promoGt11Title",
    descKey: "promoGt11Desc",
    advantageKeys: ["promoAdvPower", "promoAdvUniversal", "promoAdvEfficient"],
    payloadKey: "promoGt11Payload",
  },
  {
    id: "promo-gt10",
    model: "GT10",
    image: MODEL_IMAGES.gt10,
    titleKey: "promoGt10Title",
    descKey: "promoGt10Desc",
    advantageKeys: ["promoAdvPower", "promoAdvConstruction", "promoAdvSafety"],
    payloadKey: "promoGt10Payload",
  },
  {
    id: "promo-gt12",
    model: "GT12",
    image: MODEL_IMAGES.gt12,
    titleKey: "promoGt12Title",
    descKey: "promoGt12Desc",
    advantageKeys: ["promoAdvFlagship", "promoAdvLonghaul", "promoAdvComfort"],
    payloadKey: "promoGt12Payload",
  },
  {
    id: "promo-electric",
    model: "Mighty Electric",
    image: SITE_IMAGES.electric,
    titleKey: "promoElectricTitle",
    descKey: "promoElectricDesc",
    advantageKeys: ["promoAdvEco", "promoAdvSilent", "promoAdvFuture"],
    payloadKey: "promoElectricPayload",
  },
];

export const PROMO_DURATION_MS = 10_000;
