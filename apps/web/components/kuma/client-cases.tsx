"use client";

import { Quote } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { CLIENT_CASES } from "@/lib/kuma/client-cases";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { KumaImage } from "./kuma-image";
import { WhatsAppIcon } from "./social-icons";

export function ClientCases() {
  const { t, locale } = useKuma();

  return (
    <section id="cases" className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <ScrollReveal>
          <div className="mb-8 text-center xs:mb-10 md:mb-12 lg:mb-14">
            <span className="kuma-label">{t("casesLabel")}</span>
            <h2 className="kuma-heading text-brand-black">{t("casesTitle")}</h2>
            <p className="kuma-subheading mx-auto mt-3 max-w-2xl">{t("casesSubtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 xs:gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {CLIENT_CASES.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 100}>
              <article className="kuma-card group flex h-full flex-col overflow-hidden">
                <div className="overflow-hidden bg-slate-100">
                  <KumaImage
                    src={item.image}
                    alt={t(item.companyKey)}
                    className="aspect-[16/10] w-full"
                  />
                </div>

                <div className="border-b border-gray-100 px-4 py-3 xs:px-5 xs:py-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-accent">
                    {t(item.sectorLabelKey)}
                  </p>
                  <h3 className="text-base font-bold text-brand-navy xs:text-lg">
                    {t(item.companyKey)}
                  </h3>
                </div>

                <div className="flex flex-1 flex-col p-4 xs:p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-navy/10 px-3 py-1 text-xs font-bold text-brand-navy">
                      {item.units} × {item.model}
                    </span>
                    <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-bold text-brand-accent">
                      {t(item.metricKey)}
                    </span>
                  </div>

                  <p className="mb-4 text-sm font-medium text-brand-black xs:text-base">
                    {t(item.resultKey)}
                  </p>

                  <blockquote className="relative mb-5 flex-1 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-600 xs:text-base">
                    <Quote className="absolute -top-2 left-3 h-6 w-6 text-brand-accent/30" />
                    <p className="relative pl-1 italic">&ldquo;{t(item.quoteKey)}&rdquo;</p>
                  </blockquote>

                  <a
                    href={buildWhatsAppUrl(
                      locale === "ky"
                        ? `Саламатсызбы! ${t(item.companyKey)} сыяктуу натыйжа керек.`
                        : `Здравствуйте! Хочу такой же результат, как у ${t(item.companyKey)}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kuma-btn-outline-dark flex items-center justify-center gap-2 text-sm"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    {t("casesAskSimilar")}
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
