"use client";

import { formatDualDate } from "@noorjourney/shared";
import { useI18n } from "@/components/providers/i18n-provider";

export function IslamicDateCard() {
  const { locale, t } = useI18n();
  const dates = formatDualDate(new Date(), locale);

  return (
    <div className="noor-card overflow-hidden p-0">
      <div className="bg-noor-gradient px-5 py-3 text-white">
        <p className="text-xs font-medium uppercase tracking-wider opacity-80">
          {t("calendar.gregorian")} / {t("calendar.hijri")}
        </p>
      </div>
      <div className="grid gap-0 sm:grid-cols-2">
        <div className="border-b border-noor-100 p-4 sm:border-b-0 sm:border-e dark:border-noor-800">
          <p className="mb-1 text-xs font-medium text-noor-500 dark:text-noor-400">
            📅 {t("calendar.gregorian")}
          </p>
          <p className="text-sm font-semibold text-noor-900 dark:text-noor-50">{dates.gregorian}</p>
        </div>
        <div className="p-4">
          <p className="mb-1 text-xs font-medium text-noor-500 dark:text-noor-400">
            🌙 {t("calendar.hijri")}
          </p>
          <p className="font-arabic text-sm font-semibold text-noor-900 dark:text-noor-50" dir="rtl">
            {dates.hijri}
          </p>
        </div>
      </div>
    </div>
  );
}
