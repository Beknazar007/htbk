import type { Locale } from "./locales";
import ky from "./locales/ky.json";
import ru from "./locales/ru.json";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export type TranslationKey = keyof typeof ky;

const dictionaries: Record<Locale, Record<string, string>> = { ky, ru, en, ar };

export function t(locale: Locale, key: TranslationKey): string {
  return dictionaries[locale]?.[key] ?? dictionaries.en[key] ?? key;
}

export function getDictionary(locale: Locale): Record<string, string> {
  return dictionaries[locale] ?? dictionaries.en;
}
