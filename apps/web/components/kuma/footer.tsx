"use client";

import Link from "next/link";
import { useKuma } from "./kuma-provider";
import { useHomeSectionNav } from "./use-home-section-nav";
import {
  ADDRESS_KY,
  ADDRESS_RU,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PHONE,
  WHATSAPP_URL,
} from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";

export function KumaFooter() {
  const { t, locale } = useKuma();
  const { goToSection, goToPageOrSection } = useHomeSectionNav();
  const address = locale === "ky" ? ADDRESS_KY : ADDRESS_RU;

  const sectionBtn =
    "kuma-touch -ml-2 rounded-lg px-2 py-1 text-left transition-colors hover:text-brand-accent";

  return (
    <footer id="contacts" className="border-t border-gray-200 bg-white text-brand-navy">
      <div className="h-1 bg-brand-accent-gradient" />

      <div className="kuma-container py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 3xl:py-24">
        <div className="grid grid-cols-1 gap-8 xs:gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 xl:gap-12 3xl:gap-16">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-3 xs:mb-4">
              <span className="text-base font-bold leading-tight tracking-tight xs:text-lg 3xl:text-2xl 4xl:text-3xl">
                {t("siteName")}
              </span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-brand-navy/70 xs:text-base 3xl:text-lg 4xl:text-xl">
              {t("footerAboutText")}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent xs:mb-4 3xl:text-sm">
              {t("footerNav")}
            </h4>
            <ul className="space-y-2 text-sm text-brand-navy/70 xs:space-y-2.5 xs:text-base 3xl:text-lg">
              <li>
                <button type="button" onClick={() => goToSection("#models")} className={sectionBtn}>
                  {t("navModels")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection("#advantages")} className={sectionBtn}>
                  {t("navAdvantages")}
                </button>
              </li>
              <li>
                <Link href="/fleet" className={`inline-block ${sectionBtn}`}>
                  {t("navFleet")}
                </Link>
              </li>
              <li>
                <button type="button" onClick={() => goToSection("#stock")} className={sectionBtn}>
                  {t("navStock")}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => goToPageOrSection("#parts", "/parts")}
                  className={sectionBtn}
                >
                  {t("navParts")}
                </button>
              </li>
              <li>
                <Link href="/engine" className={`inline-block ${sectionBtn}`}>
                  {t("advantageEngine")}
                </Link>
              </li>
              <li>
                <Link href="/service" className={`inline-block ${sectionBtn}`}>
                  {t("navService")}
                </Link>
              </li>
              <li>
                <button type="button" onClick={() => goToSection("#compare")} className={sectionBtn}>
                  {t("navCompare")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection("#faq")} className={sectionBtn}>
                  {t("navFaq")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection("#service-map")} className={sectionBtn}>
                  {t("navMap")}
                </button>
              </li>
              <li>
                <button type="button" onClick={() => goToSection("#gallery")} className={sectionBtn}>
                  {t("navGallery")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent xs:mb-4 3xl:text-sm">
              {t("footerContacts")}
            </h4>
            <ul className="space-y-3 text-sm text-brand-navy/70 xs:text-base 3xl:text-lg">
              <li>
                <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-brand-accent">
                  {PHONE}
                </a>
              </li>
              <li>{address}</li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[#25D366] hover:underline"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  {t("whatsappFloatLabel")}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-gray-100 pt-6 text-center text-xs text-brand-navy/50 xs:text-sm 3xl:text-base">
          {t("footerCopyright")}
        </p>
      </div>
    </footer>
  );
}
