"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  type Locale,
  type TranslationKey,
  t as translate,
  isRtl,
  LOCALE_COOKIE,
} from "@noorjourney/shared";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
  isRtl: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function readCookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`));
  const value = match?.[1];
  if (value === "ky" || value === "ru" || value === "en" || value === "ar") return value;
  return null;
}

function setCookieLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale};path=/;max-age=31536000;SameSite=Lax`;
}

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = isRtl(locale) ? "rtl" : "ltr";
}

export function I18nProvider({
  children,
  initialLocale = "ky",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const fromCookie = readCookieLocale();
    const next = fromCookie ?? initialLocale;
    setLocaleState(next);
    applyDocumentLocale(next);
  }, [initialLocale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    setCookieLocale(next);
    applyDocumentLocale(next);
    fetch("/api/v1/user/locale", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale: next }),
    }).catch(() => {});
  }, []);

  const t = useCallback((key: TranslationKey) => translate(locale, key), [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isRtl: isRtl(locale) }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
