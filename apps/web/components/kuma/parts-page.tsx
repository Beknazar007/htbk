"use client";

import Link from "next/link";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { SubpageHero } from "./subpage-hero";
import { SparePartsCatalog } from "./spare-parts-catalog";
import { useKuma } from "./kuma-provider";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { ScrollReveal } from "./scroll-reveal";

export function PartsPageClient() {
  return (
    <KumaSubpageShell>
      <PartsPageContent />
    </KumaSubpageShell>
  );
}

function PartsPageContent() {
  const { t, locale } = useKuma();

  const partsWhatsApp = buildWhatsAppUrl(
    locale === "ky"
      ? "Саламатсызбы! Запчасттар боюнча сурамым бар."
      : "Здравствуйте! У меня вопрос по запчастям."
  );

  return (
    <>
      <SubpageHero
        image={SECTION_BANNERS.parts}
        title={t("partsTitle")}
        subtitle={t("partsSubtitle")}
        breadcrumbs={[{ label: t("navParts") }]}
      />
      <SparePartsCatalog asPage />
      <section className="kuma-section border-t border-gray-100 bg-gray-50">
        <div className="kuma-container">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="kuma-heading mb-4 text-brand-navy">{t("partsContactTitle")}</h2>
              <p className="kuma-subheading mb-8 text-brand-navy/80">{t("partsContactDesc")}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href={partsWhatsApp} target="_blank" rel="noopener noreferrer" className="kuma-btn-whatsapp">
                  <WhatsAppIcon className="h-5 w-5" />
                  {t("partsOrderBtn")}
                </a>
                <Link href="/contacts#form" className="kuma-btn-outline-dark">
                  {t("consultBtn")}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
