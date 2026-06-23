import type { Locale } from "./locales";

const GREGORIAN_LOCALE: Record<Locale, string> = {
  ky: "ky-KG",
  ru: "ru-RU",
  en: "en-US",
  ar: "ar-SA",
};

const HIJRI_LOCALE: Record<Locale, string> = {
  ky: "ky-KG-u-ca-islamic",
  ru: "ru-RU-u-ca-islamic",
  en: "en-US-u-ca-islamic",
  ar: "ar-SA-u-ca-islamic",
};

export type DualDate = {
  gregorian: string;
  hijri: string;
  gregorianShort: string;
  hijriShort: string;
};

export function formatDualDate(date: Date, locale: Locale): DualDate {
  const gregorian = new Intl.DateTimeFormat(GREGORIAN_LOCALE[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  const hijri = new Intl.DateTimeFormat(HIJRI_LOCALE[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  const gregorianShort = new Intl.DateTimeFormat(GREGORIAN_LOCALE[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  const hijriShort = new Intl.DateTimeFormat(HIJRI_LOCALE[locale], {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);

  return { gregorian, hijri, gregorianShort, hijriShort };
}
