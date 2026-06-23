import { MobileShell } from "@/components/layout/mobile-shell";
import { requireRole } from "@/lib/session";
import { getServerLocale } from "@/lib/locale";
import { buildNav, ADMIN_NAV } from "@/lib/nav";
import { t } from "@noorjourney/shared";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireRole("ADMIN");
  const locale = await getServerLocale();

  return (
    <MobileShell
      title={t(locale, "nav.dashboard")}
      subtitle={t(locale, "app.name")}
      navItems={buildNav(locale, ADMIN_NAV)}
      userName={session.user.name ?? ""}
    >
      {children}
    </MobileShell>
  );
}
