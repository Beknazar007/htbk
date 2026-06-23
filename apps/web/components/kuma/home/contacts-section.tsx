"use client";

import { useKuma } from "../kuma-provider";
import { SITE } from "@/lib/kuma/content/site";
import { TWO_GIS_MAIN_OFFICE } from "@/lib/kuma/two-gis";
import { LeadForm } from "../lead-form";
import { TwoGisMap } from "../two-gis-map";
import { FadeUp } from "@/lib/kuma/motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactsSection() {
  const { t, locale } = useKuma();

  return (
    <section id="contacts" className="kuma-section">
      <div className="kuma-container">
        <FadeUp className="mb-12">
          <h2 className="kuma-heading text-kuma-900">{t("contactsTitle")}</h2>
        </FadeUp>
        <div className="grid gap-12 lg:grid-cols-2">
          <FadeUp>
            <div className="space-y-6">
              {[
                { icon: MapPin, label: t("contactsAddress"), value: SITE.address[locale] },
                { icon: Phone, label: t("contactsPhone"), value: SITE.phone, href: SITE.phoneHref },
                { icon: Mail, label: t("contactsEmail"), value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Clock, label: t("contactsHours"), value: SITE.workingHours[locale] },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500">{label}</div>
                    {href ? (
                      <a href={href} className="font-semibold text-kuma-800 hover:text-kuma-600">
                        {value}
                      </a>
                    ) : (
                      <div className="font-semibold text-kuma-800">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp delay={100}>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
              <h3 className="mb-6 text-xl font-bold text-kuma-900">{t("contactsFormTitle")}</h3>
              <LeadForm showVehicle id="form" />
            </div>
          </FadeUp>
        </div>

        <FadeUp className="mt-12">
          <h3 className="mb-4 text-lg font-bold text-kuma-900 xs:text-xl">{t("twoGisMapTitle")}</h3>
          <TwoGisMap
            point={TWO_GIS_MAIN_OFFICE}
            size="large"
            zoom={17}
            title={t("twoGisMapTitle")}
          />
        </FadeUp>
      </div>
    </section>
  );
}
