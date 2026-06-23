"use client";

import { ReactNode } from "react";
import type { Locale } from "@noorjourney/shared";
import { AuthProvider } from "./session-provider";
import { ThemeProvider } from "./theme-provider";
import { I18nProvider } from "./i18n-provider";
import { TelegramProvider } from "./telegram-provider";

export function AppProviders({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <ThemeProvider>
      <I18nProvider initialLocale={locale}>
        <TelegramProvider>
          <AuthProvider>{children}</AuthProvider>
        </TelegramProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
