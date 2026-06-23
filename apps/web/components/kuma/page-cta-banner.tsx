"use client";

import Link from "next/link";
import { Calculator, MessageSquare } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { WHATSAPP_URL, buildWhatsAppUrl } from "@/lib/kuma/constants";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { useHomeSectionNav } from "./use-home-section-nav";
import { KumaImage } from "./kuma-image";
import { WhatsAppIcon } from "./social-icons";

export function PageCtaBanner() {
  const { t, locale } = useKuma();
  const { goToSection } = useHomeSectionNav();

  const consultHref = buildWhatsAppUrl(
    locale === "ky"
      ? "Саламатсызбы! Hyundai Mighty боюнча консультация алгым келет."
      : "Здравствуйте! Хочу получить консультацию по Hyundai Mighty."
  );

  return (
    <section className="overflow-hidden border-t border-gray-100 bg-white">
      <div className="kuma-container px-5 py-10 text-center xs:px-6 xs:py-12 md:py-14">
        <ScrollReveal>
          <h2 className="kuma-heading mx-auto mb-8 max-w-2xl text-brand-navy xs:mb-10">{t("pageCtaTitle")}</h2>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
            <a
              href={consultHref}
              target="_blank"
              rel="noopener noreferrer"
              className="kuma-touch inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-brand-accent-gradient px-6 py-3.5 text-sm font-bold text-white shadow-lg"
            >
              <MessageSquare className="h-5 w-5 shrink-0" />
              {t("pageCtaConsult")}
            </a>
            <Link
              href="/leasing"
              className="kuma-touch inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border-2 border-brand-navy/15 bg-white px-6 py-3.5 text-sm font-bold text-brand-navy"
            >
              <Calculator className="h-5 w-5 shrink-0" />
              {t("pageCtaLeasing")}
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="kuma-touch inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              {t("mobileWhatsApp")}
            </a>
          </div>
          <button
            type="button"
            onClick={() => goToSection("#contacts")}
            className="mt-6 text-sm text-brand-navy/60 underline-offset-4 hover:text-brand-navy hover:underline"
          >
            {t("navContacts")}
          </button>
        </ScrollReveal>
      </div>

      <div className="relative aspect-[21/8] min-h-[180px] w-full overflow-hidden border-t border-gray-100 bg-slate-50 sm:min-h-[220px]">
        <KumaImage src={SECTION_BANNERS.cta} alt="" className="absolute inset-0" />
      </div>
    </section>
  );
}
