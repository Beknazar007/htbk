"use client";

import Link from "next/link";
import { CheckCircle2, Shield, Fuel, TrendingUp, Wrench, Package } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import type { LucideIcon } from "lucide-react";

const ITEMS: { key: string; icon: LucideIcon; href: string }[] = [
  { key: "hyundaiWarranty", icon: Shield, href: "/service" },
  { key: "hyundaiParts", icon: Package, href: "/parts" },
  { key: "hyundaiFuel", icon: Fuel, href: "/engine" },
  { key: "hyundaiResale", icon: TrendingUp, href: "/models/gt8" },
  { key: "hyundaiService", icon: Wrench, href: "/service" },
];

export function WhyHyundaiInfographic() {
  const { t } = useKuma();

  return (
    <section id="why-hyundai" className="kuma-section bg-white">
      <div className="kuma-container">
        <ScrollReveal>
          <div className="mb-8 text-center xs:mb-10 md:mb-12 lg:mb-14">
            <span className="kuma-label">{t("whyHyundaiLabel")}</span>
            <h2 className="kuma-heading text-brand-black">{t("whyHyundaiTitle")}</h2>
            <p className="kuma-subheading mx-auto mt-3 max-w-2xl">{t("whyHyundaiSubtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-4xl">
          <ScrollReveal delay={100}>
            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white shadow-lg shadow-brand-navy/5">
              <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-1 lg:divide-x-0 lg:divide-y">
                {ITEMS.map(({ key, icon: Icon, href }, i) => (
                  <Link
                    key={key}
                    href={href}
                    className="group flex items-center gap-4 p-5 transition-colors hover:bg-brand-accent/5 xs:gap-5 xs:p-6 md:p-7 3xl:p-8"
                    style={{ animationDelay: `${i * 80}ms` }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 xs:h-12 xs:w-12 group-hover:bg-brand-accent/20">
                      <CheckCircle2 className="h-6 w-6 text-brand-accent" strokeWidth={2.5} />
                    </div>
                    <div className="flex min-w-0 flex-1 items-center gap-4">
                      <Icon className="hidden h-5 w-5 shrink-0 text-brand-navy/40 sm:block" strokeWidth={1.5} />
                      <p className="text-sm font-semibold text-brand-black group-hover:text-brand-accent xs:text-base md:text-lg 3xl:text-xl">
                        {t(key)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
