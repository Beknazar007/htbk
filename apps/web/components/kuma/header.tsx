"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { useHomeSectionNav } from "./use-home-section-nav";
import { WHATSAPP_URL } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

type NavItem =
  | { key: string; type: "anchor"; href: string }
  | { key: string; type: "route"; href: string }
  | { key: string; type: "hybrid"; sectionHref: string; pageHref: string };

const NAV_ITEMS: NavItem[] = [
  { key: "navModels", href: "#models", type: "anchor" },
  { key: "navStock", href: "#stock", type: "anchor" },
  { key: "navParts", sectionHref: "#parts", pageHref: "/parts", type: "hybrid" },
  { key: "navService", href: "/service", type: "route" },
  { key: "navFleet", href: "/fleet", type: "route" },
  { key: "navElectric", href: "#electric", type: "anchor" },
  { key: "navContacts", href: "#contacts", type: "anchor" },
];

export function KumaHeader({ forceSolid = false }: { forceSolid?: boolean }) {
  const { t, locale, setLocale } = useKuma();
  const router = useRouter();
  const { isHome, goToSection, goToPageOrSection } = useHomeSectionNav();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNav = (item: NavItem) => {
    setMobileOpen(false);
    if (item.type === "anchor") {
      goToSection(item.href);
    } else if (item.type === "hybrid") {
      goToPageOrSection(item.sectionHref, item.pageHref);
    } else {
      router.push(item.href);
    }
  };

  const goHome = (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (isHome) {
      e.preventDefault();
      goToSection("#home");
    }
  };

  const isSolid = forceSolid || scrolled || mobileOpen || isHome;

  const navLinkClass = cn(
    "whitespace-nowrap font-medium transition-colors hover:text-brand-accent md:text-xs lg:text-sm 3xl:text-base",
    isSolid ? "text-brand-navy" : "text-white/90"
  );

  const renderNavItem = (item: NavItem, className: string) => {
    if (item.type === "route") {
      return (
        <Link
          key={item.key}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className={className}
        >
          {t(item.key)}
        </Link>
      );
    }

    return (
      <button
        key={item.key}
        type="button"
        onClick={() => handleNav(item)}
        className={cn(className, "bg-transparent text-left")}
      >
        {t(item.key)}
      </button>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 kuma-safe-top transition-all duration-500",
        isSolid
          ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-brand-black/25 backdrop-blur-md"
      )}
    >
      <div className="kuma-container flex h-14 items-center gap-3 xs:h-16 md:h-[4.25rem] lg:h-[4.5rem] 3xl:h-20 4xl:h-24">
        <Link href="/" onClick={goHome} className="flex min-w-0 shrink-0 items-center">
          <span
            className={cn(
              "max-w-[10.5rem] text-[10px] font-bold leading-tight tracking-tight xs:max-w-none xs:text-xs sm:text-sm lg:text-base 3xl:text-lg 4xl:text-xl",
              isSolid ? "text-brand-navy" : "text-white"
            )}
          >
            {t("siteName")}
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 overflow-x-auto px-1 md:flex lg:gap-5 xl:gap-6 2xl:gap-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {NAV_ITEMS.map((item) => renderNavItem(item, navLinkClass))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 xs:gap-2 sm:gap-3">
          <div
            className={cn(
              "hidden gap-0.5 rounded-lg border p-0.5 backdrop-blur-sm md:flex",
              isSolid ? "border-gray-200 bg-gray-50" : "border-white/20 bg-black/20"
            )}
          >
            {(["ky", "ru"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={cn(
                  "rounded-md px-2.5 py-1 text-[10px] font-semibold uppercase transition-colors 3xl:px-3 3xl:py-1.5 3xl:text-xs",
                  locale === lang
                    ? "bg-brand-accent text-white"
                    : isSolid
                      ? "text-brand-navy hover:bg-gray-100"
                      : "text-white/80 hover:bg-white/10"
                )}
              >
                {lang === "ky" ? t("langKy") : t("langRu")}
              </button>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-lg bg-brand-accent-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition-all hover:scale-[1.02] active:scale-[0.98] md:inline-flex 3xl:px-6 3xl:py-3 3xl:text-base 4xl:px-8 4xl:text-lg"
          >
            <WhatsAppIcon className="h-4 w-4 3xl:h-5 3xl:w-5" />
            <span className="hidden lg:inline">{t("mobileWhatsApp")}</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="kuma-touch flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-md md:hidden"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>

          <button
            type="button"
            className={cn(
              "kuma-touch flex h-10 w-10 items-center justify-center rounded-lg border transition-colors md:hidden",
              isSolid
                ? "border-gray-200 text-brand-black hover:bg-gray-50"
                : "border-white/30 text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "kuma-mobile-menu md:hidden",
          mobileOpen ? "kuma-mobile-menu-open" : "kuma-mobile-menu-closed pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="kuma-container flex max-h-[calc(100dvh-4rem-env(safe-area-inset-top))] flex-col gap-1 overflow-y-auto py-4 pb-8">
          <div className="mb-2 flex gap-1">
            {(["ky", "ru"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={cn(
                  "kuma-touch flex-1 rounded-lg py-2.5 text-xs font-semibold uppercase",
                  locale === lang
                    ? "bg-brand-accent text-white"
                    : "bg-gray-100 text-brand-navy"
                )}
              >
                {lang === "ky" ? t("langKy") : t("langRu")}
              </button>
            ))}
          </div>

          {NAV_ITEMS.map((item) =>
            renderNavItem(
              item,
              "kuma-touch w-full rounded-xl px-4 py-3.5 text-base font-medium text-brand-black transition-colors hover:bg-gray-50 active:bg-gray-100"
            )
          )}

          <div className="my-3 border-t border-gray-100" />

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="kuma-touch flex items-center gap-3 rounded-xl bg-brand-accent/10 px-4 py-4 text-base font-semibold text-brand-accent transition-colors hover:bg-brand-accent/15 active:bg-brand-accent/20"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            {t("whatsappFloatLabel")}
          </a>
        </nav>
      </div>
    </header>
  );
}
