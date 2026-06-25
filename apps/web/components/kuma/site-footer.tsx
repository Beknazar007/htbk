"use client";

import Link from "next/link";
import { useKuma } from "./kuma-provider";
import { SITE, BRAND_LINKS } from "@/lib/kuma/content/site";
import { VEHICLES } from "@/lib/kuma/content/vehicles";
import { InstagramIcon, WhatsAppIcon } from "./social-icons";

export function SiteFooter() {
  const { t, locale } = useKuma();

  return (
    <footer className="bg-kuma-900 text-white kuma-safe-bottom">
      <div className="kuma-container py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 text-xl font-bold">HTBK</div>
            <p className="text-sm leading-relaxed text-white/70">{t("footerAboutText")}</p>
            <div className="mt-4 flex gap-3">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-white/20">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">{t("footerAbout")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {BRAND_LINKS.slice(0, 4).map((l) => (
                <li key={l.slug}>
                  <Link href={`/brand/${l.slug}`} className="hover:text-white transition-colors">{t(l.key)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">{t("footerProducts")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {VEHICLES.map((v) => (
                <li key={v.slug}>
                  <Link href={`/products/${v.slug}`} className="hover:text-white transition-colors">{v.name[locale]}</Link>
                </li>
              ))}
              <li><Link href="/superstructures" className="hover:text-white">{t("navSuperstructures")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white/50">{t("footerServices")}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/leasing" className="hover:text-white">{t("navLeasing")}</Link></li>
              <li><Link href="/service" className="hover:text-white">{t("navService")}</Link></li>
              <li><Link href="/news" className="hover:text-white">{t("navNews")}</Link></li>
              <li><Link href="/contacts" className="hover:text-white">{t("navContacts")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          {t("footerCopyright")} · htbk.kg
        </div>
      </div>
    </footer>
  );
}
