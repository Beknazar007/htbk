"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { NAV_ITEMS, BRAND_LINKS, SITE } from "@/lib/kuma/content/site";
import { PRODUCT_CATEGORIES } from "@/lib/kuma/content/product-categories";
import { EQUIPMENT } from "@/lib/kuma/content/equipment";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const { t, locale, setLocale } = useKuma();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"brand" | "products" | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || activeMega ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, activeMega]);

  const navClass = cn(
    "text-sm font-semibold uppercase tracking-wide transition-colors 2xl:text-base",
    scrolled || mobileOpen || activeMega ? "text-kuma-700 hover:text-kuma-500" : "text-white/90 hover:text-white"
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 kuma-safe-top transition-all duration-300",
          scrolled || mobileOpen || activeMega ? "bg-white shadow-md" : "bg-kuma-900/40 backdrop-blur-sm"
        )}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="kuma-container flex h-[calc(3.5rem+env(safe-area-inset-top))] min-h-14 items-center justify-between gap-3 xs:min-h-16 lg:h-[calc(4.5rem+env(safe-area-inset-top))] lg:min-h-[4.5rem]">
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2 xs:gap-3" onClick={() => setMobileOpen(false)}>
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-white text-[10px] font-black text-kuma-800 xs:h-10 xs:w-10 xs:text-xs">
              HTBK
            </div>
            <div className="min-w-0">
              <div className={cn("truncate text-xs font-bold leading-tight xs:text-sm", scrolled || activeMega ? "text-kuma-900" : "text-white")}>
                {t("siteName")}
              </div>
              <div className={cn("hidden truncate text-[9px] uppercase tracking-widest xs:block xs:text-[10px]", scrolled || activeMega ? "text-kuma-500" : "text-white/70")}>
                {t("siteTagline")}
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex">
            {NAV_ITEMS.map((item) => (
              <div key={item.key} className="relative">
                {item.mega ? (
                  <button
                    type="button"
                    className={cn("flex items-center gap-1 px-3 py-2", navClass)}
                    onMouseEnter={() => setActiveMega(item.mega)}
                    onClick={() => setActiveMega(activeMega === item.mega ? null : item.mega)}
                  >
                    {t(item.key)}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", activeMega === item.mega && "rotate-180")} />
                  </button>
                ) : (
                  <Link href={item.href} className={cn("px-3 py-2", navClass)}>
                    {t(item.key)}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex rounded border border-kuma-200/60 bg-white/90 text-xs font-bold uppercase">
              {(["ru", "ky"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={cn(
                    "px-2.5 py-1.5 transition-colors",
                    locale === lang ? "bg-kuma-700 text-white" : "text-kuma-600 hover:bg-kuma-50"
                  )}
                >
                  {lang === "ky" ? t("langKy") : t("langRu")}
                </button>
              ))}
            </div>
            <Link href="/contacts#form" className="hidden kuma-btn-primary px-4 py-2 text-xs sm:inline-flex xl:text-sm">
              {t("consultBtn")}
            </Link>
            <button
              type="button"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg lg:hidden",
                scrolled || mobileOpen ? "text-kuma-800" : "text-white"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mega menu */}
        <div
          className={cn(
            "absolute left-0 right-0 top-full hidden border-t border-kuma-100 bg-white shadow-2xl transition-all duration-300 lg:block",
            activeMega ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
          )}
          onMouseEnter={() => activeMega && setActiveMega(activeMega)}
        >
          <div className="kuma-container py-10">
            {activeMega === "brand" && (
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-bold text-kuma-900">{t("navBrand")}</h3>
                  <p className="mt-2 text-sm text-gray-600">{t("megaBrandDesc")}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
                  {BRAND_LINKS.map((link) => (
                    <Link
                      key={link.slug}
                      href={`/brand/${link.slug}`}
                      onClick={() => setActiveMega(null)}
                      className="group flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-5 transition-all hover:border-kuma-200 hover:bg-white hover:shadow-lg"
                    >
                      <span className="font-semibold text-kuma-800 group-hover:text-kuma-600">{t(link.key)}</span>
                      <ChevronDown className="-rotate-90 h-4 w-4 text-kuma-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {activeMega === "products" && (
              <div>
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-kuma-900">{t("navProducts")}</h3>
                    <p className="mt-1 text-sm text-gray-600">{t("megaProductsDesc")}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCT_CATEGORIES.map((c) => (
                      <Link key={c.id} href={c.href} onClick={() => setActiveMega(null)} className="rounded-full bg-kuma-50 px-3 py-1.5 text-xs font-semibold text-kuma-700 hover:bg-kuma-100">
                        {t(c.labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {EQUIPMENT.slice(0, 8).map((item) => (
                    <Link
                      key={item.slug}
                      href={`/equipment/${item.slug}`}
                      onClick={() => setActiveMega(null)}
                      className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/3] bg-gray-50 p-2">
                        <img src={item.image} alt={locale === "ky" ? item.name.ky : item.name.ru} className="h-full w-full object-contain transition-transform group-hover:scale-105" />
                      </div>
                      <div className="p-3">
                        <p className="text-[10px] font-bold uppercase text-kuma-500">{item.model}</p>
                        <h4 className="text-sm font-bold text-kuma-900">{locale === "ky" ? item.name.ky : item.name.ru}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/products" onClick={() => setActiveMega(null)} className="mt-6 inline-block text-sm font-bold text-kuma-600 hover:underline">
                  {t("viewAllProducts")} →
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 bottom-0 top-[calc(3.5rem+env(safe-area-inset-top))] z-40 overflow-y-auto bg-white pb-[calc(4.75rem+env(safe-area-inset-bottom))] xs:top-[calc(4rem+env(safe-area-inset-top))] lg:hidden">
          <nav className="kuma-container kuma-safe-x py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="kuma-touch block border-b border-gray-100 py-4 text-base font-semibold uppercase tracking-wide text-kuma-800"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="mt-2 space-y-1 border-b border-gray-100 pb-4">
                <p className="py-2 text-xs font-bold uppercase tracking-wider text-kuma-400">{t("navBrand")}</p>
                {BRAND_LINKS.map((link) => (
                  <Link
                    key={link.slug}
                    href={`/brand/${link.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="kuma-touch block rounded-lg px-3 py-2.5 text-sm font-medium text-kuma-700 hover:bg-kuma-50"
                  >
                    {t(link.key)}
                  </Link>
                ))}
                <p className="pt-3 text-xs font-bold uppercase tracking-wider text-kuma-400">{t("navProducts")}</p>
                <Link href="/products" onClick={() => setMobileOpen(false)} className="kuma-touch block rounded-lg px-3 py-2.5 text-sm font-semibold text-kuma-800 hover:bg-kuma-50">
                  {t("viewAllProducts")}
                </Link>
                {EQUIPMENT.slice(0, 4).map((item) => (
                  <Link
                    key={item.slug}
                    href={`/equipment/${item.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="kuma-touch block rounded-lg px-3 py-2.5 text-sm text-kuma-700 hover:bg-kuma-50"
                  >
                    {locale === "ky" ? item.name.ky : item.name.ru}
                  </Link>
                ))}
              </div>
            <a href={SITE.phoneHref} className="kuma-touch mt-2 block py-3 text-base font-medium text-kuma-600">{SITE.phone}</a>
            <Link href="/contacts#form" onClick={() => setMobileOpen(false)} className="kuma-btn-primary mt-4 w-full">
              {t("consultBtn")}
            </Link>
          </nav>
        </div>
      )}

      {activeMega && (
        <div className="fixed inset-0 top-[4.5rem] z-40 hidden bg-black/20 lg:block" onClick={() => setActiveMega(null)} />
      )}
    </>
  );
}
