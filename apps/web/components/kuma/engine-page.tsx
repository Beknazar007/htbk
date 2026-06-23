"use client";

import Link from "next/link";
import { Cog, Gauge, Shield, Wrench } from "lucide-react";
import { KumaSubpageShell } from "./kuma-subpage-shell";
import { SubpageHero } from "./subpage-hero";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { KumaImage } from "./kuma-image";
import { SECTION_BANNERS, SITE_IMAGES } from "@/lib/kuma/site-images";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";

const SPECS = [
  { key: "engineSpecPower", descKey: "engineSpecPowerDesc", icon: Gauge },
  { key: "engineSpecReliability", descKey: "engineSpecReliabilityDesc", icon: Shield },
  { key: "engineSpecMaintenance", descKey: "engineSpecMaintenanceDesc", icon: Wrench },
] as const;

export function EnginePageClient() {
  return (
    <KumaSubpageShell>
      <EnginePageContent />
    </KumaSubpageShell>
  );
}

function EnginePageContent() {
  const { t, locale } = useKuma();

  const whatsappHref = buildWhatsAppUrl(
    locale === "ky"
      ? "Саламатсызбы! Кыймылдаткыч жана техникалык мүнөздөмөлөр боюнча кеңеш алгым келет."
      : "Здравствуйте! Нужна консультация по двигателю и техническим характеристикам."
  );

  return (
    <>
      <SubpageHero
        image={SECTION_BANNERS.advantages}
        title={t("enginePageTitle")}
        subtitle={t("enginePageSub")}
        breadcrumbs={[{ label: t("advantageEngine") }]}
      />

      <section className="kuma-section bg-white">
        <div className="kuma-container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal direction="left">
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg">
                <KumaImage src={SITE_IMAGES.gt8} alt={t("advantageEngine")} className="aspect-[4/3] w-full" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="flex h-full flex-col justify-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent">
                  <Cog className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <h2 className="kuma-heading mb-4 text-brand-navy">{t("advantageEngine")}</h2>
                <p className="kuma-subheading text-brand-navy/80">{t("advantageEngineDesc")}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="kuma-btn-whatsapp">
                    <WhatsAppIcon className="h-5 w-5" />
                    {t("engineCta")}
                  </a>
                  <Link href="/models/gt8" className="kuma-btn-outline-dark">
                    {t("navModels")}
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="kuma-section bg-gray-50">
        <div className="kuma-container">
          <div className="grid gap-6 md:grid-cols-3">
            {SPECS.map(({ key, descKey, icon: Icon }, i) => (
              <ScrollReveal key={key} delay={i * 80}>
                <article className="kuma-card h-full p-6 xs:p-8">
                  <Icon className="mb-4 h-8 w-8 text-brand-accent" strokeWidth={1.5} />
                  <h3 className="mb-2 text-lg font-bold text-brand-navy xs:text-xl">{t(key)}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 xs:text-base">{t(descKey)}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
