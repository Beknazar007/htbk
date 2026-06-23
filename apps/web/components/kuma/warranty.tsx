"use client";

import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { Clock, Wrench, ShieldCheck } from "lucide-react";

export function KumaWarranty() {
  const { t } = useKuma();

  const blocks = [
    {
      icon: Clock,
      title: t("warrantyPeriod"),
      items: [t("warrantyPeriodDesc"), t("warrantyPeriodNote")],
    },
    {
      icon: Wrench,
      title: t("warrantyService"),
      items: [t("warrantyService1"), t("warrantyService2"), t("warrantyService3")],
    },
    {
      icon: ShieldCheck,
      title: t("warrantyInsurance"),
      items: [
        t("warrantyInsurance1"),
        t("warrantyInsurance2"),
        t("warrantyInsurance3"),
        t("warrantyInsurance4"),
        t("warrantyInsurance5"),
      ],
    },
  ];

  return (
    <section id="warranty" className="kuma-section bg-kuma-gradient text-white">
      <div className="kuma-container">
        <ScrollReveal>
          <h2 className="kuma-heading mb-8 text-center sm:mb-10 md:mb-12">{t("warrantyTitle")}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3 md:gap-8 2xl:gap-10">
          {blocks.map(({ icon: Icon, title, items }, i) => (
            <ScrollReveal key={title} delay={i * 120}>
              <div className="h-full rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:p-6 md:p-8 2xl:rounded-3xl 2xl:p-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 sm:mb-5 sm:h-14 sm:w-14 2xl:h-16 2xl:w-16">
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7 2xl:h-8 2xl:w-8" />
                </div>
                <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl 2xl:text-2xl">{title}</h3>
                <ul className="space-y-1.5 text-sm text-white/85 sm:space-y-2 sm:text-base 2xl:text-lg">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kuma-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
