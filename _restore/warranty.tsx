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
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
            {t("warrantyTitle")}
          </h2>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {blocks.map(({ icon: Icon, title, items }, i) => (
            <ScrollReveal key={title} delay={i * 150}>
              <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{title}</h3>
                <ul className="space-y-2 text-white/85">
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
