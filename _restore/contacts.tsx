"use client";

import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/996995524272?text=" +
  encodeURIComponent("Саламатсызбы!\nМен Hyundai Truck & Bus боюнча кеңеш алгым келет.");

export function KumaContacts() {
  const { t } = useKuma();

  return (
    <section id="contacts" className="kuma-section bg-white">
      <div className="kuma-container">
        <ScrollReveal>
          <h2 className="mb-12 text-center text-3xl font-bold text-kuma-800 sm:text-4xl">
            {t("contactsTitle")}
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-kuma-800">{t("contactsAddress")}</h3>
                  <p className="text-gray-600">
                    г. Бишкек,
                    <br />
                    ул. Жусуп Абдрахманова 101
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-kuma-800">{t("contactsPhone")}</h3>
                  <a href="tel:+996995524272" className="text-kuma-600 hover:underline">
                    +996 995 524 272
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-kuma-800">{t("contactsEmail")}</h3>
                  <a href="mailto:info@company.kg" className="text-kuma-600 hover:underline">
                    info@company.kg
                  </a>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://instagram.com/knurdinov_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-kuma-50 text-kuma-600 transition-colors hover:bg-kuma-600 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center rounded-xl bg-green-50 px-6 font-semibold text-green-600 transition-colors hover:bg-green-600 hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <iframe
                title="KUMA Truck Bus office location"
                src="https://maps.google.com/maps?q=42.8746,74.6122&z=16&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
