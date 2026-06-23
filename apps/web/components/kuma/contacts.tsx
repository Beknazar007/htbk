"use client";

import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/kuma/constants";
import { TWO_GIS_MAIN_OFFICE } from "@/lib/kuma/two-gis";
import { TwoGisMap } from "./two-gis-map";
import { InstagramIcon, WhatsAppIcon } from "./social-icons";
import { MapPin, Phone, Mail } from "lucide-react";

export function KumaContacts() {
  const { t } = useKuma();

  return (
    <section id="contacts" className="kuma-section bg-white">
      <div className="kuma-container">
        <ScrollReveal>
          <h2 className="kuma-heading mb-8 text-center text-kuma-800 sm:mb-10 md:mb-12">
            {t("contactsTitle")}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 2xl:gap-16">
          <ScrollReveal direction="left">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600 sm:h-12 sm:w-12 2xl:h-14 2xl:w-14">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-7 2xl:w-7" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-kuma-800 sm:text-base 2xl:text-lg">
                    {t("contactsAddress")}
                  </h3>
                  <p className="text-sm text-gray-600 sm:text-base 2xl:text-lg">
                    г. Бишкек,
                    <br />
                    ул. Жусуп Абдрахманова 101
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600 sm:h-12 sm:w-12 2xl:h-14 2xl:w-14">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-7 2xl:w-7" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-kuma-800 sm:text-base 2xl:text-lg">
                    {t("contactsPhone")}
                  </h3>
                  <a
                    href="tel:+996995524272"
                    className="text-sm text-kuma-600 hover:underline sm:text-base 2xl:text-lg"
                  >
                    +996 995 524 272
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600 sm:h-12 sm:w-12 2xl:h-14 2xl:w-14">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 2xl:h-7 2xl:w-7" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-kuma-800 sm:text-base 2xl:text-lg">
                    {t("contactsEmail")}
                  </h3>
                  <a
                    href="mailto:info@company.kg"
                    className="text-sm text-kuma-600 hover:underline sm:text-base 2xl:text-lg"
                  >
                    info@company.kg
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-2 sm:gap-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kuma-social-link group !px-0 !py-0"
                  aria-label="Instagram"
                >
                  <span className="kuma-social-icon !h-11 !w-11 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] sm:!h-12 sm:!w-12">
                    <InstagramIcon className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-sm font-semibold text-kuma-800 group-hover:text-kuma-600">
                    Instagram
                  </span>
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kuma-social-link group !px-0 !py-0"
                >
                  <span className="kuma-social-icon !h-11 !w-11 bg-[#25D366] sm:!h-12 sm:!w-12">
                    <WhatsAppIcon className="h-5 w-5 text-white" />
                  </span>
                  <span className="text-sm font-semibold text-kuma-800 group-hover:text-kuma-600">
                    WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <TwoGisMap point={TWO_GIS_MAIN_OFFICE} size="large" zoom={17} title={t("twoGisMapTitle")} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
