"use client";

import { useState } from "react";
import { MapPin, Wrench } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { TwoGisMap } from "./two-gis-map";
import {
  SERVICE_LOCATIONS,
  type ServiceCityId,
} from "@/lib/kuma/service-locations";
import { PHONE, buildWhatsAppUrl } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

export function ServiceMap() {
  const { t, locale } = useKuma();
  const [selected, setSelected] = useState<ServiceCityId>("bishkek");

  const location = SERVICE_LOCATIONS.find((l) => l.id === selected)!;

  const whatsappHref = buildWhatsAppUrl(
    locale === "ky"
      ? `Саламатсызбы! Мен ${t(location.nameKey)} сервис борбору боюнча суроо бергим келет.`
      : `Здравствуйте! Вопрос по сервисному центру в ${t(location.nameKey)}.`
  );

  return (
    <section id="service-map" className="kuma-section bg-white">
      <div className="kuma-container">
        <ScrollReveal>
          <div className="mb-8 text-center xs:mb-10 md:mb-12">
            <span className="kuma-label">{t("mapLabel")}</span>
            <h2 className="kuma-heading text-brand-black">{t("mapTitle")}</h2>
            <p className="kuma-subheading mx-auto mt-3 max-w-2xl text-gray-600">
              {t("mapSubtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mb-4 flex flex-wrap justify-center gap-2 xs:mb-6 xs:gap-2.5">
          {SERVICE_LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              type="button"
              onClick={() => setSelected(loc.id)}
              className={cn(
                "kuma-touch rounded-full px-3 py-1.5 text-xs font-semibold transition-all xs:px-4 xs:py-2 xs:text-sm",
                selected === loc.id
                  ? "bg-brand-accent text-white shadow-md"
                  : "bg-gray-100 text-brand-navy ring-1 ring-gray-200 hover:ring-brand-accent/40"
              )}
            >
              {t(loc.nameKey)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 3xl:gap-10">
          <ScrollReveal className="lg:col-span-7">
            <TwoGisMap
              key={location.id}
              point={{
                city: location.city,
                lat: location.lat,
                lng: location.lng,
                label: t(location.nameKey),
              }}
              title={`2GIS — ${t(location.nameKey)}`}
            />
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-5" delay={100}>
            <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-5 xs:p-6 md:p-8 3xl:rounded-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black xs:text-xl">
                    {t(location.nameKey)}
                  </h3>
                  {location.isMain && (
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-accent">
                      {t("mapMainCenter")}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-6 flex items-start gap-2 text-sm text-gray-600 xs:text-base">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                <span>{t(location.addressKey)}</span>
              </div>

              <ul className="mb-6 space-y-2 text-sm text-gray-600 xs:text-base">
                <li className="flex items-center gap-2">
                  <span className="font-medium text-brand-navy">{t("contactsPhone")}:</span>
                  <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-brand-accent">
                    {PHONE}
                  </a>
                </li>
                <li>
                  <span className="font-medium text-brand-navy">{t("contactsHours")}:</span>{" "}
                  {t("mapServiceHours")}
                </li>
              </ul>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="kuma-btn-whatsapp mt-auto inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                {t("mapBookService")}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
