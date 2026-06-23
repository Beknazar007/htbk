"use client";

import { Cpu, ShieldCheck, Sofa } from "lucide-react";
import { useKtm } from "../ktm-provider";
import { FadeIn, Section } from "../motion";
import { KTM_IMAGES } from "@/lib/ktm/images";

const ITEMS = [
  { icon: Cpu, titleKey: "techEngine", descKey: "techEngineDesc" },
  { icon: ShieldCheck, titleKey: "techSafety", descKey: "techSafetyDesc" },
  { icon: Sofa, titleKey: "techComfort", descKey: "techComfortDesc" },
] as const;

export function KtmTechnology() {
  const { t } = useKtm();

  return (
    <Section dark>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={KTM_IMAGES.titan11000}
              alt=""
              className="aspect-[4/3] w-full object-contain object-bottom"
            />
          </div>
        </FadeIn>
        <div>
          <FadeIn>
            <h2 className="text-2xl font-black sm:text-3xl">{t("techTitle")}</h2>
            <p className="mt-3 text-white/70">{t("techSubtitle")}</p>
          </FadeIn>
          <div className="mt-8 space-y-6">
            {ITEMS.map(({ icon: Icon, titleKey, descKey }, i) => (
              <FadeIn key={titleKey} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ktm-red/20 text-ktm-red">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{t(titleKey)}</h3>
                    <p className="mt-1 text-sm text-white/60">{t(descKey)}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
