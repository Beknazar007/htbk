"use client";

import { ShieldCheck } from "lucide-react";
import { useKtm } from "../ktm-provider";
import { KTM_SAFETY_FEATURES } from "@/lib/ktm/home-data";
import { KTM_IMAGES } from "@/lib/ktm/images";
import { FadeIn, Section } from "../motion";
import { SectionHeader } from "../ui/section-header";

export function KtmSafety() {
  const { t } = useKtm();

  return (
    <Section id="safety">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            title={t("safetyTitle")}
            subtitle={t("safetySubtitle")}
            centered={false}
            className="mb-8 !text-left"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {KTM_SAFETY_FEATURES.map(({ titleKey, descKey }, i) => (
              <FadeIn key={titleKey} delay={i * 0.06}>
                <div className="ktm-card h-full p-5">
                  <ShieldCheck className="mb-3 h-6 w-6 text-ktm-red" />
                  <h3 className="font-bold text-ktm-navy">{t(titleKey)}</h3>
                  <p className="mt-1 text-sm text-ktm-gray-dark">{t(descKey)}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        <FadeIn delay={0.15}>
          <div className="overflow-hidden rounded-2xl bg-ktm-gray ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={KTM_IMAGES.safety}
              alt=""
              loading="lazy"
              className="aspect-[4/3] w-full object-contain object-bottom"
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
