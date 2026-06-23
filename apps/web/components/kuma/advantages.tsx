"use client";

import { Cog, Shield, Sofa, Truck } from "lucide-react";
import Link from "next/link";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SectionBanner } from "./section-banner";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";

const ADVANTAGES = [
  { key: "advantageEngine", descKey: "advantageEngineDesc", icon: Cog, href: "/engine" },
  { key: "advantageChassis", descKey: "advantageChassisDesc", icon: Truck, href: "/models/gt8" },
  { key: "advantageSafety", descKey: "advantageSafetyDesc", icon: Shield, href: "/service" },
  { key: "advantageComfort", descKey: "advantageComfortDesc", icon: Sofa, href: "/models/gt12" },
] as const;

export function KumaAdvantages() {
  const { t } = useKuma();

  return (
    <section id="advantages" className="kuma-section bg-white">
      <div className="kuma-container">
        <SectionBanner
          image={SECTION_BANNERS.advantages}
          label={t("advantagesLabel")}
          title={t("advantagesTitle")}
        />

        <div className="grid grid-cols-1 gap-4 xs:gap-5 sm:grid-cols-2 sm:gap-6 md:gap-6 lg:grid-cols-4 lg:gap-5 xl:gap-6 3xl:gap-8">
          {ADVANTAGES.map(({ key, descKey, icon: Icon, href }, i) => (
            <ScrollReveal key={key} delay={i * 100}>
              <Link
                href={href}
                className="group relative block h-full overflow-hidden rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5 xs:rounded-2xl xs:p-6 md:p-7 lg:p-6 3xl:p-8 4xl:p-10"
              >
                <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-brand-accent-gradient transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy transition-colors duration-500 group-hover:bg-brand-accent group-hover:text-white xs:mb-5 xs:h-14 xs:w-14 3xl:h-16 3xl:w-16 4xl:h-[4.5rem] 4xl:w-[4.5rem]">
                  <Icon className="h-6 w-6 xs:h-7 xs:w-7 3xl:h-8 3xl:w-8 4xl:h-9 4xl:w-9" strokeWidth={1.5} />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-brand-black group-hover:text-brand-accent xs:mb-2 xs:text-lg sm:text-xl 3xl:text-2xl 4xl:text-3xl">
                  {t(key)}
                </h3>
                <p className="kuma-subheading">{t(descKey)}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
