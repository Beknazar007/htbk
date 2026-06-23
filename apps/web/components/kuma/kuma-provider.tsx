"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { KumaLocale } from "@/lib/kuma/types";
import { t as translate } from "@/lib/kuma/translations";

interface KumaContextValue {
  locale: KumaLocale;
  setLocale: (locale: KumaLocale) => void;
  t: (key: string) => string;
}

const KumaContext = createContext<KumaContextValue | null>(null);

export function KumaProvider({ children, defaultLocale = "ru" }: { children: ReactNode; defaultLocale?: KumaLocale }) {
  const [locale, setLocale] = useState<KumaLocale>(defaultLocale);
  const t = useCallback((key: string) => translate(locale, key), [locale]);

  return (
    <KumaContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </KumaContext.Provider>
  );
}

export function useKuma() {
  const ctx = useContext(KumaContext);
  if (!ctx) throw new Error("useKuma must be used within KumaProvider");
  return ctx;
}
