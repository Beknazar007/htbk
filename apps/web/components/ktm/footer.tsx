"use client";

import Link from "next/link";
import { useKtm } from "./ktm-provider";
import { KTM_NAV, KTM_SITE } from "@/lib/ktm/site";

export function KtmFooter() {
  const { t, loc } = useKtm();

  return (
    <footer className="bg-ktm-navy text-white">
      <div className="h-1 bg-ktm-red-gradient" />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-black">KTM</p>
            <p className="mt-2 text-sm text-white/60">{t("footerDesc")}</p>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ktm-red">
              {t("navContacts")}
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href={KTM_SITE.phoneHref} className="hover:text-white">
                  {KTM_SITE.phone}
                </a>
              </li>
              <li>{KTM_SITE.email}</li>
              <li>{loc(KTM_SITE.address)}</li>
              <li>
                <a
                  href={KTM_SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#25D366] hover:underline"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-ktm-red">
              {t("navTrucks")}
            </p>
            <ul className="space-y-2">
              {KTM_NAV.filter((n) => n.href !== "/").map(({ key, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-white/70 hover:text-white">
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          {t("footerRights")}
        </p>
      </div>
    </footer>
  );
}
