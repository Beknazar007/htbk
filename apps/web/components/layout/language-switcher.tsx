"use client";

import { LOCALES, LOCALE_LABELS } from "@noorjourney/shared";
import { useI18n } from "@/components/providers/i18n-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className={cn(
        "flex gap-1 rounded-xl bg-noor-50 p-1 dark:bg-noor-900/50",
        compact && "flex-col sm:flex-row"
      )}
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          className={cn(
            "rounded-lg px-2.5 py-1.5 text-xs font-medium transition",
            locale === l
              ? "bg-white text-noor-800 shadow-sm dark:bg-noor-800 dark:text-noor-100"
              : "text-noor-500 hover:text-noor-700 dark:text-noor-400"
          )}
        >
          {compact ? l.toUpperCase() : LOCALE_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
