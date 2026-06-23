"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Instagram } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "navModels", href: "#models" },
  { key: "navWarranty", href: "#warranty" },
  { key: "navLeasing", href: "#leasing" },
  { key: "navContacts", href: "#contacts" },
] as const;

const WHATSAPP_URL =
  "https://wa.me/996995524272?text=" +
  encodeURIComponent("Саламатсызбы!\nМен Hyundai Truck & Bus боюнча кеңеш алгым келет.");

export function KumaHeader() {
  const { t, locale, setLocale } = useKuma();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="kuma-container flex h-16 items-center justify-between lg:h-20">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-kuma-600 font-bold text-white">
            K
          </div>
          <span
            className={cn(
              "hidden text-lg font-bold sm:block",
              scrolled ? "text-kuma-800" : "text-white"
            )}
          >
            {t("siteName")}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_ITEMS.map(({ key, href }) => (
            <button
              key={key}
              onClick={() => scrollTo(href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-kuma-400",
                scrolled ? "text-kuma-700" : "text-white/90"
              )}
            >
              {t(key)}
            </button>
          ))}
          <a
            href="https://instagram.com/knurdinov_"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "transition-colors hover:text-kuma-400",
              scrolled ? "text-kuma-700" : "text-white/90"
            )}
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-sm font-medium transition-colors hover:text-kuma-400",
              scrolled ? "text-kuma-700" : "text-white/90"
            )}
          >
            WhatsApp
          </a>
          <div className="flex gap-1 rounded-lg border border-kuma-200 p-0.5">
            {(["ky", "ru"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLocale(lang)}
                className={cn(
                  "rounded-md px-2 py-1 text-xs font-medium uppercase transition-colors",
                  locale === lang
                    ? "bg-kuma-600 text-white"
                    : "text-kuma-600 hover:bg-kuma-50"
                )}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>

        <button
          className={cn("lg:hidden", scrolled ? "text-kuma-800" : "text-white")}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-kuma-100 bg-white lg:hidden">
          <nav className="flex flex-col gap-1 p-4">
            {NAV_ITEMS.map(({ key, href }) => (
              <button
                key={key}
                onClick={() => scrollTo(href)}
                className="rounded-lg px-4 py-3 text-left text-kuma-700 hover:bg-kuma-50"
              >
                {t(key)}
              </button>
            ))}
            <a
              href="https://instagram.com/knurdinov_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-kuma-700 hover:bg-kuma-50"
            >
              <Instagram className="h-5 w-5" /> Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-3 text-kuma-700 hover:bg-kuma-50"
            >
              WhatsApp
            </a>
            <div className="flex gap-2 px-4 pt-2">
              {(["ky", "ru"] as const).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLocale(lang)}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-xs font-medium uppercase",
                    locale === lang ? "bg-kuma-600 text-white" : "border border-kuma-200 text-kuma-600"
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
