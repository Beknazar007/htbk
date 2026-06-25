"use client";

import Link from "next/link";
import { Suspense } from "react";
import { SiteHeader } from "@/components/kuma/site-header";
import { SiteFooter } from "@/components/kuma/site-footer";
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
import { MobileStickyBar } from "@/components/kuma/mobile-sticky-bar";
import { OnlineConsultation } from "@/components/kuma/online-consultation";
import { WhatsAppFloat } from "@/components/kuma/whatsapp-float";
import { ScrollFix } from "@/components/kuma/scroll-fix";
import { useKuma } from "@/components/kuma/kuma-provider";
import { SITE } from "@/lib/kuma/content/site";

function HomeQuickNav() {
  const { t, locale } = useKuma();
  const links = [
    { href: "/company", key: "navCompany" },
    { href: "/brand/hyundai-cv", key: "navBrand" },
    { href: "/products", key: "navProducts" },
    { href: "/news", key: "navNews" },
  ] as const;

  return (
    <section className="border-b border-kuma-100 bg-white py-8">
      <div className="kuma-container text-center">
        <h2 className="text-2xl font-bold text-kuma-900 sm:text-3xl">{SITE.name[locale]}</h2>
        <p className="mt-2 text-gray-600">{t("homeQuickNavSub")}</p>
        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-4 sm:gap-3">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="rounded-xl border-2 border-kuma-100 bg-kuma-50 px-3 py-4 text-center text-xs font-bold uppercase tracking-wide text-kuma-800 transition-colors hover:border-kuma-300 hover:bg-white sm:px-4 sm:py-5 sm:text-sm"
            >
              {t(link.key)}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function KumaHomePage() {
  return (
    <>
      <ScrollFix />
      <div className="kuma-page-mobile kuma-site min-h-screen overflow-x-hidden bg-white font-sans antialiased">
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
        <main>
          <KumaHero />
          <HomeQuickNav />
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
        <SiteFooter />
        <MobileStickyBar />
        <OnlineConsultation />
        <WhatsAppFloat />
      </div>
    </>
  );
}
