import { MobileShell } from "@/components/layout/mobile-shell";
import { requireRole } from "@/lib/session";
import { getServerLocale } from "@/lib/locale";
import { buildNav, TEACHER_NAV } from "@/lib/nav";
import { t } from "@noorjourney/shared";

export default async function TeacherLayout({ children }: { children: React.ReactNode }) {
  const session = await requireRole(["TEACHER", "ADMIN"]);
  const locale = await getServerLocale();

  return (
    <MobileShell
      title={t(locale, "nav.reviews")}
      subtitle={t(locale, "app.tagline")}
      navItems={buildNav(locale, TEACHER_NAV)}
      userName={session.user.name ?? ""}
    >
      {children}
    </MobileShell>
  );
}
