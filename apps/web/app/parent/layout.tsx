import { MobileShell } from "@/components/layout/mobile-shell";
import { requireRole } from "@/lib/session";
import { getServerLocale } from "@/lib/locale";
import { buildNav, PARENT_NAV } from "@/lib/nav";
import { t } from "@noorjourney/shared";

export default async function ParentLayout({ children }: { children: React.ReactNode }) {
  const session = await requireRole("PARENT");
  const locale = await getServerLocale();

  return (
    <MobileShell
      title={t(locale, "nav.dashboard")}
      subtitle={t(locale, "app.tagline")}
      navItems={buildNav(locale, PARENT_NAV)}
      userName={session.user.name ?? ""}
    >
      {children}
    </MobileShell>
  );
}
