"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useKtm } from "./ktm-provider";
import { KTM_NAV, KTM_SITE } from "@/lib/ktm/site";
import { KtmButton } from "./ui/button";
import { cn } from "@/lib/utils";

export function KtmHeader() {
  const { t, locale, setLocale, loc } = useKtm();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ktm-navy/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-sm font-black tracking-tight text-white sm:text-base">KTM</span>
          <span className="hidden text-[9px] font-medium uppercase tracking-widest text-white/60 xs:block">
            {loc(KTM_SITE.name)}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {KTM_NAV.map(({ key, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex rounded-lg border border-white/15 p-0.5">
            {(["ky", "ru"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLocale(l)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-xs font-semibold uppercase transition-colors",
                  locale === l ? "bg-ktm-red text-white" : "text-white/60 hover:text-white"
                )}
              >
                {t(l === "ky" ? "langKy" : "langRu")}
              </button>
            ))}
          </div>
          <a
            href={KTM_SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {KTM_SITE.phone}
          </a>
          <Link
            href="/contacts"
            className="rounded-lg bg-ktm-red-gradient px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-ktm-red/30 transition-transform hover:scale-[1.02]"
          >
            {t("ctaContact")}
          </Link>
          <KtmButton
            href={KTM_SITE.whatsappQuote}
            external
            variant="whatsapp"
            className="!min-h-[40px] !px-4 !py-2 !text-sm"
          >
            {t("ctaQuote")}
          </KtmButton>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ktm-navy px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {KTM_NAV.map(({ key, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/90 hover:bg-white/5"
              >
                {t(key)}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-2">
              {(["ky", "ru"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLocale(l)}
                  className={cn(
                    "flex-1 rounded-lg py-2 text-sm font-semibold",
                    locale === l ? "bg-ktm-red text-white" : "bg-white/10 text-white/70"
                  )}
                >
                  {t(l === "ky" ? "langKy" : "langRu")}
                </button>
              ))}
            </div>
            <KtmButton href={KTM_SITE.phoneHref} className="w-full">
              {t("ctaCall")}: {KTM_SITE.phone}
            </KtmButton>
            <KtmButton href={KTM_SITE.whatsapp} external variant="whatsapp" className="w-full">
              {t("whatsappLabel")}
            </KtmButton>
            <KtmButton href={KTM_SITE.whatsappQuote} external variant="ghost" className="w-full">
              {t("ctaQuote")}
            </KtmButton>
          </div>
        </div>
      )}
    </header>
  );
}
