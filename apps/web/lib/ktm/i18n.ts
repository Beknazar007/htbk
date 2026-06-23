export type KtmLocale = "ky" | "ru" | "en";

export type LocalizedString = Record<KtmLocale, string>;

export function pickLocale<T extends LocalizedString>(obj: T, locale: KtmLocale): string {
  return obj[locale] ?? obj.ky;
}
