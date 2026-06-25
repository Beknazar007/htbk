import {
  GALLERY_IMAGES,
  MODEL_HERO_IMAGES,
  MODEL_IMAGES,
  SECTION_BANNERS,
  SITE_IMAGES,
} from "./site-images";
import { MEDIA } from "./media";

/** Premium truck imagery — distinct photos per model */
export const IMAGES = {
  hero: SITE_IMAGES.gt8,
  heroMobile: SITE_IMAGES.gt8,
  gt5: MODEL_IMAGES.gt5,
  gt5Hero: MODEL_HERO_IMAGES.gt5,
  gt8: MODEL_IMAGES.gt8,
  gt8Hero: MODEL_HERO_IMAGES.gt8,
  gt10: MODEL_IMAGES.gt10,
  gt10Hero: MODEL_HERO_IMAGES.gt10,
  gt12: MODEL_IMAGES.gt12,
  gt12Hero: MODEL_HERO_IMAGES.gt12,
  gallery1: GALLERY_IMAGES[0].src,
  gallery2: GALLERY_IMAGES[1].src,
  gallery3: GALLERY_IMAGES[2].src,
  gallery4: GALLERY_IMAGES[3].src,
  gallery5: SITE_IMAGES.fleet,
  gallery6: SITE_IMAGES.electric,
  tractor: SITE_IMAGES.logistics,
  tractorHero: SITE_IMAGES.logistics,
  dump: SITE_IMAGES.gt11,
  dumpHero: SITE_IMAGES.gt11,
  van: SITE_IMAGES.electric,
  vanHero: SITE_IMAGES.electric,
  flatbed: SITE_IMAGES.gt11,
  flatbedHero: SITE_IMAGES.gt11,
  bus: SITE_IMAGES.fleet,
  busHero: SITE_IMAGES.fleet,
  commercial: MEDIA.modelGt8,
  commercialHero: MEDIA.modelGt8,
  leasing: SECTION_BANNERS.leasing,
  superSemiTrailer: SITE_IMAGES.fleet,
  superDump: SITE_IMAGES.gt11,
  superRefrigerator: SITE_IMAGES.gt8,
  superTank: SITE_IMAGES.logistics,
  superManipulator: SITE_IMAGES.showcase,
  superBusCoach: SITE_IMAGES.fleet,
  superGarbage: SITE_IMAGES.logistics,
} as const;

export const PHONE = "+996 995 524 272";

/** Edit this number for all WhatsApp links site-wide */
export const WHATSAPP_NUMBER = "996995524272";

export const PHONE_RAW = WHATSAPP_NUMBER;

export const WHATSAPP_MESSAGE =
  "Саламатсызбы! Мен сиздердин жүк ташуучу унааларыңыз боюнча маалымат алгым келет.";

export const WHATSAPP_URL =
  "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(WHATSAPP_MESSAGE);

export function buildWhatsAppUrl(message?: string): string {
  return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(message ?? WHATSAPP_MESSAGE)}`;
}

export const INSTAGRAM_URL = "https://instagram.com/knurdinov_";
export const FACEBOOK_URL = "https://facebook.com";
export const ADDRESS_KY = "Бишкек ш., Кыргызстан";
export const ADDRESS_RU = "г. Бишкек, Кыргызстан";
