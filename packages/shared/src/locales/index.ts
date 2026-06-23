export const LOCALE_COOKIE = "noorjourney_locale";

export type Locale = "ky" | "ru" | "en" | "ar";

export const LOCALES: Locale[] = ["ky", "ru", "en", "ar"];

export const LOCALE_LABELS: Record<Locale, string> = {
  ky: "Кыргызча",
  ru: "Русский",
  en: "English",
  ar: "العربية",
};

export const RTL_LOCALES: Locale[] = ["ar"];

export function isRtl(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

export function isValidLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}
