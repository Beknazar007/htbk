"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import type { KtmLocale } from "@/lib/ktm/i18n";
import { t as translate } from "@/lib/ktm/translations";
import { pickLocale } from "@/lib/ktm/i18n";
import type { LocalizedString } from "@/lib/ktm/i18n";

const STORAGE_KEY = "ktm-locale";

interface KtmContextValue {
  locale: KtmLocale;
  setLocale: (locale: KtmLocale) => void;
  t: (key: string) => string;
  loc: (obj: LocalizedString) => string;
}

const KtmContext = createContext<KtmContextValue | null>(null);

export function KtmProvider({
  children,
  defaultLocale = "ky",
}: {
  children: ReactNode;
  defaultLocale?: KtmLocale;
}) {
  const [locale, setLocaleState] = useState<KtmLocale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as KtmLocale | null;
    if (saved === "ky" || saved === "ru") setLocaleState(saved);
  }, []);

  const setLocale = useCallback((l: KtmLocale) => {
    if (l === "en") return;
    setLocaleState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l === "ky" ? "ky" : "ru";
  }, []);

  const t = useCallback((key: string) => translate(locale, key), [locale]);
  const loc = useCallback((obj: LocalizedString) => pickLocale(obj, locale), [locale]);

  return (
    <KtmContext.Provider value={{ locale, setLocale, t, loc }}>
      {children}
    </KtmContext.Provider>
  );
}

export function useKtm() {
  const ctx = useContext(KtmContext);
  if (!ctx) throw new Error("useKtm must be used within KtmProvider");
  return ctx;
}
