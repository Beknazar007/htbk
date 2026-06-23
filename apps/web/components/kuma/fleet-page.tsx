"use client";

import { Building2, CheckCircle, FileText, Users } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SubpageHero } from "./subpage-hero";
import { FLEET_TIERS } from "@/lib/kuma/fleet-tiers";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";
import { LeadForm } from "./lead-form";

export function FleetPageClient() {
  const { t, locale } = useKuma();

  const tenderWhatsApp = buildWhatsAppUrl(t("whatsappFleetTenderInquiry"));

  return (
    <>
      <SubpageHero
        image={SECTION_BANNERS.fleet}
        title={t("fleetTitle")}
        subtitle={t("fleetSubtitle")}
        breadcrumbs={[{ label: t("navFleet") }]}
      />

      <section className="kuma-section bg-gray-50">
        <div className="kuma-container">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="kuma-label">{t("fleetTiersLabel")}</span>
              <h2 className="kuma-heading text-brand-black">{t("fleetTiersTitle")}</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {FLEET_TIERS.map((tier, idx) => (
              <ScrollReveal key={tier.minVehicles} delay={idx * 100}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-2xl border bg-white p-6 shadow-lg xs:p-8 3xl:rounded-3xl",
                    idx === 2
                      ? "border-brand-accent ring-2 ring-brand-accent/20"
                      : "border-gray-200"
                  )}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-brand-navy px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      {t(tier.labelKey)}
                    </span>
                    <Users className="h-5 w-5 text-brand-accent" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-brand-black xs:text-2xl">
                    {t(tier.titleKey)}
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 xs:text-base">{t(tier.descKey)}</p>
                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.benefitKeys.map((key) => (
                      <li key={key} className="flex items-start gap-2 text-sm text-gray-700 xs:text-base">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                        {t(key)}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={buildWhatsAppUrl(
                      locale === "ky"
                        ? `Саламатсызбы! Мен ${tier.minVehicles}+ унаа сатып алууну карап жатам.`
                        : `Здравствуйте! Рассматриваю покупку ${tier.minVehicles}+ единиц.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kuma-btn-outline-dark inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    {t("fleetRequestQuote")}
                  </a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="kuma-section bg-white">
        <div className="kuma-container">
          <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-gray-200 bg-gradient-to-br from-brand-navy/5 to-brand-accent/5 p-6 xs:p-8 md:grid-cols-2 lg:gap-12 lg:p-10 3xl:rounded-3xl">
            <ScrollReveal>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white">
                <FileText className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-2xl font-bold text-brand-black xs:text-3xl">
                {t("fleetTenderTitle")}
              </h2>
              <p className="mt-3 text-gray-600 xs:text-lg">{t("fleetTenderDesc")}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700 xs:text-base">
                {[t("fleetTenderItem1"), t("fleetTenderItem2"), t("fleetTenderItem3")].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="rounded-xl bg-white p-6 shadow-lg xs:p-8">
                <h3 className="mb-4 text-lg font-bold text-brand-black">{t("fleetTenderCtaTitle")}</h3>
                <p className="mb-6 text-sm text-gray-600 xs:text-base">{t("fleetTenderCtaDesc")}</p>
                <a
                  href={tenderWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kuma-btn-whatsapp inline-flex w-full items-center justify-center gap-2 py-3.5 text-sm font-semibold"
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  {t("fleetTenderBtn")}
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="kuma-section bg-gray-50">
        <div className="kuma-container">
          <ScrollReveal>
            <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xs:p-8">
              <h2 className="mb-2 text-xl font-bold text-brand-navy xs:text-2xl">{t("consultFormTitle")}</h2>
              <p className="mb-6 text-sm text-gray-600 xs:text-base">{t("fleetSubtitle")}</p>
              <LeadForm showVehicle />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
