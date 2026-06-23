"use client";

import { KumaProvider } from "./kuma-provider";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { MobileStickyCta } from "./mobile-sticky-cta";
import { JsonLd } from "./json-ld";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <KumaProvider defaultLocale="ru">
      <JsonLd />
      <div className="min-h-screen bg-white font-sans pb-16 lg:pb-0">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileStickyCta />
      </div>
    </KumaProvider>
  );
}
