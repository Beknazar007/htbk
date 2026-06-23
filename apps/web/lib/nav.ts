import { t, type Locale, type TranslationKey } from "@noorjourney/shared";

type NavDef = { href: string; labelKey: TranslationKey; icon: string };

export const STUDENT_NAV: NavDef[] = [
  { href: "/student", labelKey: "nav.dashboard", icon: "🏠" },
  { href: "/student/plan", labelKey: "nav.plan", icon: "📖" },
  { href: "/student/submit", labelKey: "nav.submit", icon: "✅" },
  { href: "/student/submissions", labelKey: "nav.history", icon: "📋" },
  { href: "/student/progress", labelKey: "nav.progress", icon: "📈" },
  { href: "/student/achievements", labelKey: "nav.achievements", icon: "🏆" },
];

export const TEACHER_NAV: NavDef[] = [
  { href: "/teacher", labelKey: "nav.dashboard", icon: "🏠" },
  { href: "/teacher/groups", labelKey: "nav.groups", icon: "👥" },
  { href: "/teacher/submissions", labelKey: "nav.reviews", icon: "🎙️" },
];

export const ADMIN_NAV: NavDef[] = [
  { href: "/admin", labelKey: "nav.dashboard", icon: "📊" },
  { href: "/admin/users", labelKey: "nav.users", icon: "👤" },
];

export const PARENT_NAV: NavDef[] = [
  { href: "/parent", labelKey: "nav.dashboard", icon: "🏠" },
];

export function buildNav(locale: Locale, defs: NavDef[]) {
  return defs.map((d) => ({
    href: d.href,
    label: t(locale, d.labelKey),
    icon: d.icon,
  }));
}
