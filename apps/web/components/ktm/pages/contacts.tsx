"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { useKtm } from "@/components/ktm/ktm-provider";
import { KtmPageShell } from "@/components/ktm/ktm-page-shell";
import { FadeIn } from "@/components/ktm/motion";
import { KtmButton } from "@/components/ktm/ui/button";
import { KTM_SITE } from "@/lib/ktm/site";

export function ContactsPage() {
  const { t, loc } = useKtm();
  const [sent, setSent] = useState(false);

  return (
    <KtmPageShell>
      <section className="bg-ktm-navy py-16 text-white sm:py-20">
        <div className="ktm-container">
          <h1 className="text-3xl font-black sm:text-4xl md:text-5xl">{t("contactTitle")}</h1>
          <p className="mt-4 max-w-xl text-white/70">{t("contactSubtitle")}</p>
          <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <KtmButton href={KTM_SITE.phoneHref}>
              <Phone className="h-4 w-4" />
              {t("ctaCall")}
            </KtmButton>
            <KtmButton href={KTM_SITE.whatsapp} external variant="whatsapp">
              {t("whatsappLabel")}
            </KtmButton>
            <KtmButton href={KTM_SITE.whatsappQuote} external variant="outline">
              {t("ctaQuote")}
            </KtmButton>
          </div>
        </div>
      </section>

      <section className="ktm-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <ul className="space-y-6">
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-ktm-red">
                  {t("contactPhone")}
                </p>
                <a href={KTM_SITE.phoneHref} className="mt-1 block text-lg font-bold text-ktm-navy">
                  {KTM_SITE.phone}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-ktm-red">
                  {t("contactEmail")}
                </p>
                <a href={`mailto:${KTM_SITE.email}`} className="mt-1 block text-lg font-bold text-ktm-navy">
                  {KTM_SITE.email}
                </a>
              </li>
              <li>
                <p className="text-xs font-semibold uppercase tracking-wider text-ktm-red">
                  {t("contactAddress")}
                </p>
                <p className="mt-1 text-lg font-bold text-ktm-navy">{loc(KTM_SITE.address)}</p>
              </li>
            </ul>
            <div className="mt-8 aspect-video overflow-hidden rounded-2xl bg-ktm-gray">
              <div className="flex h-full items-center justify-center p-6 text-center text-sm text-ktm-gray-dark">
                {loc(KTM_SITE.address)}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              id="form"
              className="ktm-card p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              {sent ? (
                <p className="text-center font-semibold text-ktm-navy">{t("contactFormSuccess")}</p>
              ) : (
                <>
                  <label className="mb-4 block">
                    <span className="mb-1 block text-sm font-medium">{t("contactFormName")}</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ktm-red"
                    />
                  </label>
                  <label className="mb-4 block">
                    <span className="mb-1 block text-sm font-medium">{t("contactFormPhone")}</span>
                    <input
                      required
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ktm-red"
                    />
                  </label>
                  <label className="mb-6 block">
                    <span className="mb-1 block text-sm font-medium">{t("contactFormMessage")}</span>
                    <textarea
                      rows={4}
                      name="message"
                      className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-ktm-red"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-ktm-red-gradient py-3 text-sm font-bold text-white transition-transform hover:scale-[1.01]"
                  >
                    {t("contactFormSend")}
                  </button>
                </>
              )}
            </form>
          </FadeIn>
        </div>
      </section>
    </KtmPageShell>
  );
}
