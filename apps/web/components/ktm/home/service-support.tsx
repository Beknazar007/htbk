"use client";

import { MapPin, Phone, Wrench } from "lucide-react";
import { useKtm } from "../ktm-provider";
import { KTM_SITE } from "@/lib/ktm/site";
import { FadeIn, Section } from "../motion";
import { SectionHeader } from "../ui/section-header";
import { KtmButton } from "../ui/button";

const LOCATIONS = ["networkBishkek", "networkOsh", "networkKarakol"] as const;

export function KtmServiceSupport() {
  const { t } = useKtm();

  return (
    <Section id="service">
      <SectionHeader
        title={t("serviceTitleHome")}
        subtitle={t("serviceSubtitleHome")}
        className="mb-10 md:mb-14"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {LOCATIONS.map((key, i) => (
          <FadeIn key={key} delay={i * 0.08}>
            <div className="ktm-card flex h-full items-start gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ktm-red/10 text-ktm-red">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-ktm-navy">{t(key)}</h3>
                <p className="mt-1 text-sm text-ktm-gray-dark">{t("serviceMaintenanceDesc")}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-12">
        <div className="rounded-2xl bg-ktm-navy p-8 text-center text-white sm:p-10 md:p-12">
          <Wrench className="mx-auto mb-4 h-10 w-10 text-ktm-red" />
          <h3 className="text-xl font-black sm:text-2xl md:text-3xl">{t("ctaTitle")}</h3>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/70 sm:text-base">{t("ctaSubtitle")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 xs:flex-row xs:flex-wrap">
            <KtmButton href="/contacts">{t("ctaContact")}</KtmButton>
            <KtmButton href={KTM_SITE.whatsappQuote} external variant="whatsapp">
              {t("ctaQuote")}
            </KtmButton>
            <KtmButton href={KTM_SITE.phoneHref} external variant="outline" className="!border-white/30">
              <Phone className="h-4 w-4" />
              {t("ctaCall")}
            </KtmButton>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
