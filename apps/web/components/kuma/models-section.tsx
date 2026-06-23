"use client";

import Link from "next/link";
import { TRUCK_MODELS } from "@/lib/kuma/models";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SectionBanner } from "./section-banner";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { KumaImage } from "./kuma-image";
import { WhatsAppIcon } from "./social-icons";

export function KumaModels() {
  const { t, locale } = useKuma();

  return (
    <section id="models" className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <SectionBanner
          image={SECTION_BANNERS.models}
          label={t("modelsLabel")}
          title={t("modelsTitle")}
          subtitle={t("modelsSubtitle")}
        />

        <div className="grid grid-cols-1 gap-5 xs:gap-6 sm:grid-cols-2 lg:gap-7 3xl:grid-cols-4 3xl:gap-8">
          {TRUCK_MODELS.map((truck, i) => (
            <ScrollReveal key={truck.slug} delay={i * 80}>
              <article className="kuma-card group flex h-full flex-col overflow-hidden">
                <Link href={`/models/${truck.slug}`} className="relative block overflow-hidden bg-slate-100">
                  <KumaImage
                    src={truck.image}
                    alt={truck.name}
                    className="aspect-[16/10] w-full"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-brand-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white xs:text-xs">
                    GT Series
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-4 xs:p-5 sm:p-6">
                  <Link href={`/models/${truck.slug}`}>
                    <h3 className="mb-2 text-xl font-bold text-brand-navy transition-colors group-hover:text-brand-accent xs:text-2xl">
                      {truck.name}
                    </h3>
                  </Link>
                  <div className="mb-3 flex items-center gap-2 text-xs text-gray-500 xs:text-sm">
                    <span className="font-semibold text-brand-navy">{t("payload")}:</span>
                    <span>{truck.shortSpecs.payload}</span>
                  </div>
                  <p className="kuma-subheading mb-5 flex-1 text-brand-navy/75">
                    {locale === "ky" ? truck.history.ky : truck.history.ru}
                  </p>
                  <div className="flex flex-col gap-2.5 sm:flex-row">
                    <Link
                      href={`/models/${truck.slug}`}
                      className="kuma-btn-primary flex-1 text-center text-xs xs:text-sm"
                    >
                      {t("fullInfo")}
                    </Link>
                    <a
                      href={buildWhatsAppUrl(
                        locale === "ky"
                          ? `Саламатсызбы! ${truck.name} модели жөнүндө маалымат алгым келет.`
                          : `Здравствуйте! Интересует модель ${truck.name}.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="kuma-btn-outline-dark flex flex-1 items-center justify-center gap-2 text-xs xs:text-sm"
                    >
                      <WhatsAppIcon className="h-4 w-4 shrink-0" />
                      <span className="truncate">{t("whatsappAsk")}</span>
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
