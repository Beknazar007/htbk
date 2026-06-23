"use client";

import Link from "next/link";
import { useKuma } from "./kuma-provider";
import { Instagram } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/996995524272?text=" +
  encodeURIComponent("Саламатсызбы!\nМен Hyundai Truck & Bus боюнча кеңеш алгым келет.");

export function KumaFooter() {
  const { t } = useKuma();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-kuma-900 text-white">
      <div className="kuma-container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kuma-600 font-bold">
                K
              </div>
              <span className="text-xl font-bold">{t("siteName")}</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">{t("footerAboutText")}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t("footerAbout")}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <button onClick={() => scrollTo("#models")} className="hover:text-white">
                  {t("navModels")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#warranty")} className="hover:text-white">
                  {t("navWarranty")}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("#leasing")} className="hover:text-white">
                  {t("navLeasing")}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t("footerContacts")}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>г. Бишкек, ул. Жусуп Абдрахманова 101</li>
              <li>
                <a href="tel:+996995524272" className="hover:text-white">
                  +996 995 524 272
                </a>
              </li>
              <li>
                <a href="mailto:info@company.kg" className="hover:text-white">
                  info@company.kg
                </a>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://instagram.com/knurdinov_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          {t("footerCopyright")}
        </div>
      </div>
    </footer>
  );
}
