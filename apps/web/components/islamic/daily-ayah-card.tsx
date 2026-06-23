"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/components/providers/i18n-provider";

type AyahData = {
  surahName: { ar: string; en: string };
  surah: number;
  ayahStart: number;
  ayahEnd: number;
  textAr: string;
  translation: string;
};

export function DailyAyahCard() {
  const { locale, t, isRtl } = useI18n();
  const [ayah, setAyah] = useState<AyahData | null>(null);

  useEffect(() => {
    fetch(`/api/v1/daily/ayah?locale=${locale}`)
      .then((r) => r.json())
      .then((j) => setAyah(j.data));
  }, [locale]);

  if (!ayah) {
    return (
      <div className="noor-card animate-pulse">
        <div className="h-4 w-32 rounded bg-noor-100 dark:bg-noor-800" />
        <div className="mt-4 h-16 rounded bg-noor-50 dark:bg-noor-900" />
      </div>
    );
  }

  return (
    <div className="noor-card relative overflow-hidden">
      <div className="absolute -end-4 -top-4 text-6xl opacity-5">📖</div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400">
        {t("daily.ayah.title")}
      </p>
      <p className="font-arabic mb-4 text-xl leading-loose text-noor-900 dark:text-noor-50" dir="rtl">
        {ayah.textAr}
      </p>
      <p
        className="mb-3 text-sm leading-relaxed text-noor-600 dark:text-noor-300"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {ayah.translation}
      </p>
      <p className="text-xs text-noor-400" dir="rtl">
        ﴿ {ayah.surahName.ar} — {ayah.surah}:{ayah.ayahStart}
        {ayah.ayahEnd !== ayah.ayahStart ? `-${ayah.ayahEnd}` : ""} ﴾
      </p>
    </div>
  );
}
