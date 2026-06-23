"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { TruckModel } from "@/lib/kuma/types";

interface CompareContextValue {
  compareList: TruckModel[];
  addToCompare: (truck: TruckModel) => boolean;
  removeFromCompare: (slug: string) => void;
  isInCompare: (slug: string) => boolean;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextValue | null>(null);

export function CompareProvider({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<TruckModel[]>([]);

  const addToCompare = useCallback(
    (truck: TruckModel) => {
      if (compareList.length >= 3) return false;
      if (compareList.some((t) => t.slug === truck.slug)) return false;
      setCompareList((prev) => [...prev, truck]);
      return true;
    },
    [compareList]
  );

  const removeFromCompare = useCallback((slug: string) => {
    setCompareList((prev) => prev.filter((t) => t.slug !== slug));
  }, []);

  const isInCompare = useCallback(
    (slug: string) => compareList.some((t) => t.slug === slug),
    [compareList]
  );

  const clearCompare = useCallback(() => setCompareList([]), []);

  return (
    <CompareContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, isInCompare, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
