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
      <div className="kuma-page-mobile min-h-screen overflow-x-hidden bg-white font-sans antialiased">
        <KumaHeader forceSolid />
        <main className="pt-14 xs:pt-16 md:pt-[4.25rem] lg:pt-[4.5rem] 3xl:pt-20">{children}</main>
        <PageCtaBanner />
        <KumaFooter />
        <MobileStickyBar />
        <OnlineConsultation />
        <WhatsAppFloat />
      </div>
    </>
  );
}
