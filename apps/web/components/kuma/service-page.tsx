"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { SubpageHero } from "./subpage-hero";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { KumaImage } from "./kuma-image";
import { SECTION_BANNERS, SITE_IMAGES } from "@/lib/kuma/site-images";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { FadeUp } from "@/lib/kuma/motion";

const SERVICE_ITEMS = [
  { titleKey: "serviceWarranty", descKey: "servicePageWarrantyDesc", image: SITE_IMAGES.gt8 },
  { titleKey: "serviceParts", descKey: "partsSubtitle", image: SITE_IMAGES.logistics },
  { titleKey: "serviceDiagnostics", descKey: "servicePageProcessDesc", image: SITE_IMAGES.gt11 },
  { titleKey: "serviceMobile", descKey: "servicePageWarrantyDesc", image: SITE_IMAGES.fleet },
] as const;

export function ServicePageClient() {
  return (
    <KumaSubpageShell>
      <ServicePageContent />
    </KumaSubpageShell>
  );
}

function ServicePageContent() {
  const { t, locale } = useKuma();

  const serviceWhatsApp = buildWhatsAppUrl(
    locale === "ky"
      ? "Саламатсызбы! Сервиске жазылгым келет."
      : "Здравствуйте! Хочу записаться на сервис."
  );

  return (
    <>
      <SubpageHero
        image={SECTION_BANNERS.service}
        title={t("servicePageTitle")}
        subtitle={t("servicePageSub")}
        breadcrumbs={[{ label: t("navService") }]}
      />

      <section className="kuma-section bg-white">
        <div className="kuma-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
            <ScrollReveal direction="left">
              <KumaImage
                src={SITE_IMAGES.gt11}
                alt={t("servicePageTitle")}
                className="aspect-[16/11] w-full rounded-2xl border border-gray-100 shadow-lg"
              />
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="kuma-heading mb-4 text-brand-navy">{t("servicePageProcessTitle")}</h2>
              <p className="kuma-subheading mb-6 text-brand-navy/80">{t("servicePageProcessDesc")}</p>
              <h3 className="mb-2 text-lg font-bold text-brand-navy">{t("servicePageWarrantyTitle")}</h3>
              <p className="mb-8 text-gray-600">{t("servicePageWarrantyDesc")}</p>
              <div className="flex flex-wrap gap-3">
                <a href={serviceWhatsApp} target="_blank" rel="noopener noreferrer" className="kuma-btn-whatsapp">
                  <WhatsAppIcon className="h-5 w-5" />
                  {t("servicePageContactBtn")}
                </a>
                <Link href="/contacts#form" className="kuma-btn-outline-dark">
                  {t("consultBtn")}
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="kuma-section bg-gray-50">
        <div className="kuma-container">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_ITEMS.map((item, i) => (
              <FadeUp key={item.titleKey} delay={i * 80}>
                <article className="kuma-card overflow-hidden">
                  <KumaImage src={item.image} alt={t(item.titleKey)} className="aspect-[16/9] w-full" />
                  <div className="p-6 xs:p-8">
                    <h2 className="text-xl font-bold text-brand-navy">{t(item.titleKey)}</h2>
                    <p className="mt-2 text-gray-600">{t(item.descKey)}</p>
                  </div>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
