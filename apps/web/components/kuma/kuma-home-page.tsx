"use client";

import { KumaHeader } from "@/components/kuma/header";
import { KumaHero } from "@/components/kuma/hero";
import { KumaAdvantages } from "@/components/kuma/advantages";
import { WhyHyundaiInfographic } from "@/components/kuma/why-hyundai-infographic";
import { VideoSection } from "@/components/kuma/video-section";
import { BusinessSelector } from "@/components/kuma/business-selector";
import { KumaModels } from "@/components/kuma/models-section";
import { ComparisonSection } from "@/components/kuma/comparison-section";
import { EuropalletCalculator } from "@/components/kuma/europallet-calculator";
import { SparePartsCatalog } from "@/components/kuma/spare-parts-catalog";
import { StockAvailability } from "@/components/kuma/stock-availability";
import { MightyElectricCenter } from "@/components/kuma/mighty-electric-center";
import { KumaGallery } from "@/components/kuma/gallery-section";
import { ClientCases } from "@/components/kuma/client-cases";
import { KumaStats } from "@/components/kuma/stats-section";
import { PageCtaBanner } from "@/components/kuma/page-cta-banner";
import { FaqSection } from "@/components/kuma/faq-section";
import { ServiceMap } from "@/components/kuma/service-map";
import { KumaFooter } from "@/components/kuma/footer";
import { MobileStickyBar } from "@/components/kuma/mobile-sticky-bar";
import { OnlineConsultation } from "@/components/kuma/online-consultation";
import { WhatsAppFloat } from "@/components/kuma/whatsapp-float";
import { ScrollFix } from "@/components/kuma/scroll-fix";

export function KumaHomePage() {
  return (
    <>
      <ScrollFix />
      <div className="kuma-page-mobile min-h-screen overflow-x-hidden bg-white font-sans antialiased">
        <KumaHeader />
        <main>
          <KumaHero />
          <KumaAdvantages />
          <WhyHyundaiInfographic />
          <BusinessSelector />
          <KumaModels />
          <StockAvailability />
          <ComparisonSection />
          <EuropalletCalculator />
          <MightyElectricCenter />
          <KumaGallery />
          <VideoSection />
          <ClientCases />
          <SparePartsCatalog />
          <FaqSection />
          <ServiceMap />
          <KumaStats />
          <PageCtaBanner />
        </main>
        <KumaFooter />
        <MobileStickyBar />
        <OnlineConsultation />
        <WhatsAppFloat />
      </div>
    </>
  );
}
