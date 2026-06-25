"use client";

import type { ReactNode } from "react";
import { KumaHeader } from "./header";
import { KumaFooter } from "./footer";
import { PageCtaBanner } from "./page-cta-banner";
import { MobileStickyBar } from "./mobile-sticky-bar";
import { OnlineConsultation } from "./online-consultation";
import { WhatsAppFloat } from "./whatsapp-float";
import { ScrollFix } from "./scroll-fix";

export function KumaSubpageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollFix />
      <div className="kuma-page-mobile kuma-site min-h-screen overflow-x-hidden bg-white font-sans antialiased">
        <KumaHeader forceSolid />
        <main className="pt-[calc(3.5rem+env(safe-area-inset-top))] xs:pt-[calc(4rem+env(safe-area-inset-top))] md:pt-[calc(4.25rem+env(safe-area-inset-top))] lg:pt-[calc(4.5rem+env(safe-area-inset-top))] 3xl:pt-[calc(5rem+env(safe-area-inset-top))]">{children}</main>
        <PageCtaBanner />
        <KumaFooter />
        <MobileStickyBar />
        <OnlineConsultation />
        <WhatsAppFloat />
      </div>
    </>
  );
}
