"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import { SignOutButton } from "./sign-out-button";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { useTelegram } from "@/components/providers/telegram-provider";

type NavItem = { href: string; label: string; icon: string };

export function MobileShell({
  title,
  subtitle,
  navItems,
  children,
  userName,
}: {
  title: string;
  subtitle: string;
  navItems: NavItem[];
  children: ReactNode;
  userName: string;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isTelegram } = useTelegram();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col md:flex-row">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-col border-e border-noor-100 bg-white dark:border-noor-800 dark:bg-noor-950 md:flex">
        <ShellBrand subtitle={subtitle} title={title} />
        <nav className="flex-1 space-y-1 p-4">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} active={isActive(item.href)} />
          ))}
        </nav>
      </aside>

      {/* Mobile slide-over menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          />
          <aside className="absolute start-0 top-0 flex h-full w-72 flex-col bg-white shadow-xl dark:bg-noor-950">
            <ShellBrand subtitle={subtitle} title={title} />
            <nav className="flex-1 space-y-1 overflow-y-auto p-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  active={isActive(item.href)}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </nav>
            <div className="border-t border-noor-100 p-4 dark:border-noor-800">
              <SignOutButton />
            </div>
          </aside>
        </div>
      )}

      <div className="flex flex-1 flex-col">
        <header
          className={cn(
            "sticky top-0 z-40 flex items-center justify-between gap-2 border-b border-noor-100 bg-white/90 px-4 py-3 backdrop-blur dark:border-noor-800 dark:bg-noor-950/90",
            isTelegram && "pt-[max(0.75rem,env(safe-area-inset-top))]"
          )}
        >
          <button
            type="button"
            className="rounded-lg p-2 md:hidden dark:text-noor-100"
            onClick={() => setMenuOpen(true)}
            aria-label="Menu"
          >
            ☰
          </button>
          <div className="hidden md:block" />
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
            <LanguageSwitcher compact />
            <ThemeToggle />
            <span className="hidden max-w-[120px] truncate text-sm text-noor-600 dark:text-noor-300 sm:inline">
              {userName}
            </span>
            <span className="hidden md:inline">
              <SignOutButton />
            </span>
          </div>
        </header>

        <main
          className={cn(
            "flex-1 bg-cream-50 p-4 dark:bg-noor-950 sm:p-6 md:p-8",
            "pb-[max(5rem,calc(4rem+env(safe-area-inset-bottom)))] md:pb-8"
          )}
        >
          {children}
        </main>

        {/* Mobile bottom navigation */}
        <nav
          className={cn(
            "fixed bottom-0 start-0 end-0 z-40 flex border-t border-noor-100 bg-white/95 backdrop-blur dark:border-noor-800 dark:bg-noor-950/95 md:hidden",
            "pb-[env(safe-area-inset-bottom)]"
          )}
        >
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium transition",
                isActive(item.href)
                  ? "text-noor-700 dark:text-noor-300"
                  : "text-noor-400 dark:text-noor-500"
              )}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="max-w-[4.5rem] truncate">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

function ShellBrand({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="border-b border-noor-100 p-5 dark:border-noor-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-noor-gradient text-lg text-white">
          ☪
        </div>
        <div>
          <p className="font-semibold text-noor-900 dark:text-noor-50">NoorJourney</p>
          <p className="text-xs text-noor-500">{subtitle}</p>
        </div>
      </div>
      <p className="mt-3 text-sm font-medium text-noor-700 dark:text-noor-300">{title}</p>
    </div>
  );
}

function NavLink({
  item,
  active,
  onClick,
}: {
  item: NavItem;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm transition",
        active
          ? "bg-noor-50 font-medium text-noor-800 dark:bg-noor-900 dark:text-noor-100"
          : "text-noor-600 hover:bg-noor-50 dark:text-noor-400 dark:hover:bg-noor-900"
      )}
    >
      <span>{item.icon}</span>
      {item.label}
    </Link>
  );
}
