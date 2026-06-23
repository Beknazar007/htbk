"use client";

import Link from "next/link";
import { useKtm } from "../ktm-provider";
import { FadeIn, Section } from "../motion";
import { KTM_SITE } from "@/lib/ktm/site";

export function KtmCta() {
  const { t } = useKtm();

  return (
    <Section dark className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(198,40,40,0.12)_0%,_transparent_70%)]" />
      <FadeIn>
        <div className="relative text-center">
          <h2 className="text-2xl font-black sm:text-3xl md:text-4xl">{t("ctaTitle")}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">{t("ctaSubtitle")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-ktm-red-gradient px-8 py-3 text-sm font-bold text-white shadow-xl"
            >
              {t("ctaContact")}
            </Link>
            <a
              href={KTM_SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/25 px-8 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
