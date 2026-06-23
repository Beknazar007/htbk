"use client";

import { KtmProvider } from "./ktm-provider";
import { KtmHeader } from "./header";
import { KtmFooter } from "./footer";
import { KtmWhatsAppFloat } from "./whatsapp-float";
import { PageTransition } from "./motion";
import { KtmHero } from "./home/hero";
import { KtmPerformance } from "./home/performance";
import { KtmEngineTechnology } from "./home/engine-technology";
import { KtmChassis } from "./home/chassis";
import { KtmSafety } from "./home/safety";
import { KtmComfort } from "./home/comfort";
import { KtmExterior } from "./home/exterior";
import { KtmTruckLineup } from "./home/truck-lineup";
import { KtmTechSpecs } from "./home/tech-specs";
import { KtmServiceSupport } from "./home/service-support";

export function KtmHomePage() {
  return (
    <KtmProvider defaultLocale="ky">
      <div className="ktm-site min-h-screen bg-white font-sans antialiased">
        <KtmHeader />
        <PageTransition>
          <main>
            <KtmHero />
            <KtmPerformance />
            <KtmEngineTechnology />
            <KtmChassis />
            <KtmSafety />
            <KtmComfort />
            <KtmExterior />
            <KtmTruckLineup />
            <KtmTechSpecs />
            <KtmServiceSupport />
          </main>
        </PageTransition>
        <KtmFooter />
        <KtmWhatsAppFloat />
      </div>
    </KtmProvider>
  );
}
