"use client";

import { Wrench, Package, Shield, Headphones } from "lucide-react";
import { useKtm } from "@/components/ktm/ktm-provider";
import { KtmPageShell } from "@/components/ktm/ktm-page-shell";
import { FadeIn } from "@/components/ktm/motion";

const SERVICES = [
  { icon: Wrench, titleKey: "serviceMaintenance", descKey: "serviceMaintenanceDesc" },
  { icon: Package, titleKey: "serviceParts", descKey: "servicePartsDesc" },
  { icon: Shield, titleKey: "serviceWarranty", descKey: "serviceWarrantyDesc" },
  { icon: Headphones, titleKey: "serviceSupport", descKey: "serviceSupportDesc" },
] as const;

export function ServicePage() {
  const { t } = useKtm();

  return (
    <KtmPageShell>
      <section className="bg-ktm-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black sm:text-4xl">{t("serviceTitle")}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map(({ icon: Icon, titleKey, descKey }, i) => (
            <FadeIn key={titleKey} delay={i * 0.08}>
              <div className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ktm-navy text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-ktm-navy">{t(titleKey)}</h2>
                  <p className="mt-2 text-sm text-ktm-gray-dark">{t(descKey)}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </KtmPageShell>
  );
}
