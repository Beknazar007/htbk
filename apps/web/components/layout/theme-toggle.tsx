"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useI18n } from "@/components/providers/i18n-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-24" />;

  const cycle = () => {
    const order = ["light", "dark", "system"] as const;
    const idx = order.indexOf((theme as typeof order[number]) ?? "system");
    setTheme(order[(idx + 1) % order.length]);
  };

  const icon = resolvedTheme === "dark" ? "🌙" : "☀️";
  const label =
    theme === "system" ? t("theme.system") : resolvedTheme === "dark" ? t("theme.dark") : t("theme.light");

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "flex items-center gap-2 rounded-xl border border-noor-200 bg-white px-3 py-2 text-sm",
        "dark:border-noor-700 dark:bg-noor-900 dark:text-noor-100"
      )}
      aria-label={label}
    >
      <span>{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
