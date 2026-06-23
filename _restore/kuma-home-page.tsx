"use client";

import { KumaProvider } from "@/components/kuma/kuma-provider";
import { CompareProvider } from "@/components/kuma/compare-provider";
import { KumaHeader } from "@/components/kuma/header";
import { KumaHero } from "@/components/kuma/hero";
import { KumaModels, CompareBar } from "@/components/kuma/models-section";
import { KumaAdvantages } from "@/components/kuma/advantages";
import { KumaWarranty } from "@/components/kuma/warranty";
import { KumaLeasing } from "@/components/kuma/leasing";
import { KumaContacts } from "@/components/kuma/contacts";
import { KumaFooter } from "@/components/kuma/footer";

export function KumaHomePage() {
  return (
    <KumaProvider>
      <CompareProvider>
        <div className="min-h-screen bg-white font-sans">
          <KumaHeader />
          <main>
            <KumaHero />
            <KumaModels />
            <KumaAdvantages />
            <KumaWarranty />
            <KumaLeasing />
            <KumaContacts />
          </main>
          <KumaFooter />
          <CompareBar />
        </div>
      </CompareProvider>
    </KumaProvider>
  );
}
