"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/providers/i18n-provider";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { IslamicDateCard } from "@/components/islamic/islamic-date-card";
import { DailyAyahCard } from "@/components/islamic/daily-ayah-card";
import { DailyMotivationCard } from "@/components/islamic/daily-motivation-card";

export function LandingPage() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen min-h-[100dvh]">
      <header className="sticky top-0 z-40 border-b border-noor-100 bg-white/90 backdrop-blur dark:border-noor-800 dark:bg-noor-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-noor-gradient text-white sm:h-10 sm:w-10">
              ☪
            </div>
            <span className="text-lg font-semibold text-noor-900 dark:text-noor-50 sm:text-xl">
              {t("app.name")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/login" className="hidden sm:block">
              <Button variant="ghost" size="sm">{t("auth.login")}</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">{t("auth.register")}</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-noor-gradient px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-noor-200">
            {t("app.tagline")}
          </p>
          <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {t("landing.hero")}
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/register">
              <Button size="lg" className="bg-gold-500 text-noor-950 hover:bg-gold-400">
                {t("landing.cta")}
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                {t("auth.login")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-semibold text-noor-800 dark:text-noor-100">🌍 Тил / Language</h2>
          <LanguageSwitcher />
        </div>
        <IslamicDateCard />
        <div className="grid gap-4 lg:grid-cols-2">
          <DailyAyahCard />
          <DailyMotivationCard />
        </div>
      </section>
    </div>
  );
}
