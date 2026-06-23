"use client";

import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { Fuel, Shield, Zap, Wrench } from "lucide-react";

const ADVANTAGES = [
  { key: "advantageEconomy", descKey: "advantageEconomyDesc", icon: Fuel },
  { key: "advantageReliable", descKey: "advantageReliableDesc", icon: Shield },
  { key: "advantagePower", descKey: "advantagePowerDesc", icon: Zap },
  { key: "advantageService", descKey: "advantageServiceDesc", icon: Wrench },
] as const;

export function KumaAdvantages() {
  const { t } = useKuma();

  return (
    <section className="kuma-section bg-white">
      <div className="kuma-container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {ADVANTAGES.map(({ key, descKey, icon: Icon }, i) => (
            <ScrollReveal key={key} delay={i * 100}>
              <div className="group text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-kuma-50 text-kuma-600 transition-colors group-hover:bg-kuma-600 group-hover:text-white">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-kuma-800">{t(key)}</h3>
                <p className="text-gray-600">{t(descKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
