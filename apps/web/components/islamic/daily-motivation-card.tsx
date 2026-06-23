"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/providers/i18n-provider";

type MotivationData = {
  icon: string;
  message: string;
  source?: string;
};

export function DailyMotivationCard() {
  const { locale, t } = useI18n();
  const [item, setItem] = useState<MotivationData | null>(null);

  useEffect(() => {
    fetch(`/api/v1/daily/motivation?locale=${locale}`)
      .then((r) => r.json())
      .then((j) => setItem(j.data));
  }, [locale]);

  if (!item) {
    return (
      <div className="noor-card animate-pulse bg-gradient-to-br from-gold-500/10 to-noor-500/10">
        <div className="h-4 w-28 rounded bg-noor-100" />
        <div className="mt-3 h-12 rounded bg-noor-50" />
      </div>
    );
  }

  return (
    <div className="noor-card bg-gradient-to-br from-gold-500/15 via-cream-100 to-noor-500/10 dark:from-gold-500/10 dark:via-noor-900 dark:to-noor-800/50">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
        {t("daily.motivation.title")}
      </p>
      <div className="flex gap-3">
        <span className="text-3xl">{item.icon}</span>
        <p className="flex-1 text-sm font-medium leading-relaxed text-noor-800 dark:text-noor-100">
          {item.message}
        </p>
      </div>
      {item.source && (
        <p className="mt-3 text-xs text-noor-400">— {item.source}</p>
      )}
    </div>
  );
}
