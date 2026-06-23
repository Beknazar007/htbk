import Link from "next/link";
import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";
import { getServerLocale } from "@/lib/locale";
import { startOfToday, formatDate } from "@/lib/utils";
import { t, formatDualDate } from "@noorjourney/shared";
import { Button } from "@/components/ui/button";
import { DashboardPremiumWidgets } from "@/components/layout/dashboard-header-widgets";

export default async function StudentDashboard() {
  const session = await requireRole("STUDENT");
  const locale = await getServerLocale();
  const today = startOfToday();
  const dates = formatDualDate(today, locale);

  const [plan, streak, recentSubmissions, achievements] = await Promise.all([
    prisma.dailyPlan.findFirst({
      where: { studentId: session.user.id, planDate: today, status: "PUBLISHED" },
      include: { items: { orderBy: { orderIndex: "asc" } } },
    }),
    prisma.streak.findUnique({ where: { studentId: session.user.id } }),
    prisma.submission.findMany({
      where: { studentId: session.user.id },
      include: { review: true },
      orderBy: { createdAt: "desc" },
      take: 3,
    }),
    prisma.userAchievement.count({ where: { userId: session.user.id } }),
  ]);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <h1 className="text-xl font-bold text-noor-900 dark:text-noor-50 sm:text-2xl">
          {t(locale, "auth.welcome")}, {session.user.name} 👋
        </h1>
        <p className="mt-1 text-sm text-noor-600 dark:text-noor-400">{dates.gregorianShort}</p>
      </div>

      <DashboardPremiumWidgets />

      <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
        <div className="noor-card bg-gradient-to-br from-noor-700 to-noor-900 text-white">
          <p className="text-sm text-noor-200">{t(locale, "student.streak")}</p>
          <p className="mt-2 text-3xl font-bold sm:text-4xl">
            {streak?.currentStreak ?? 0} {t(locale, "student.days")}
          </p>
        </div>
        <div className="noor-card">
          <p className="text-sm text-noor-500">{t(locale, "student.todayPlan")}</p>
          <p className="mt-2 text-3xl font-bold text-noor-900 dark:text-noor-50">
            {plan?.items.length ?? 0}
          </p>
          <p className="text-sm text-noor-600">{t(locale, "student.tasks")}</p>
        </div>
        <div className="noor-card">
          <p className="text-sm text-noor-500">{t(locale, "nav.achievements")}</p>
          <p className="mt-2 text-3xl font-bold text-gold-500">{achievements}</p>
        </div>
      </div>

      {plan ? (
        <div className="noor-card">
          <h2 className="mb-4 text-lg font-semibold">{plan.title}</h2>
          <div className="space-y-3">
            {plan.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-xl bg-noor-50 p-4 dark:bg-noor-800/50"
              >
                <span className="text-2xl">
                  {item.type === "READ" ? "📖" : item.type === "MEMORIZE" ? "🧠" : "🔄"}
                </span>
                <div>
                  <p className="font-medium text-noor-800 dark:text-noor-100">
                    {item.surahStart && `${item.surahStart}:${item.ayahStart}`}
                  </p>
                  <p className="text-sm text-noor-500">
                    {item.targetRepetitions && `×${item.targetRepetitions}`}
                    {item.targetPages && ` • ${item.targetPages}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/student/submit" className="mt-4 block">
            <Button className="w-full">{t(locale, "student.submit")}</Button>
          </Link>
        </div>
      ) : (
        <div className="noor-card text-center text-noor-500">{t(locale, "student.noPlan")}</div>
      )}

      {recentSubmissions.length > 0 && (
        <div className="noor-card">
          <h2 className="mb-4 text-lg font-semibold">{t(locale, "nav.history")}</h2>
          <div className="space-y-2">
            {recentSubmissions.map((s) => (
              <div
                key={s.id}
                className="flex justify-between rounded-lg bg-cream-100 px-4 py-3 text-sm dark:bg-noor-800/50"
              >
                <span>{formatDate(s.submissionDate)}</span>
                <span className="noor-badge bg-noor-100 text-noor-700 dark:bg-noor-800">
                  {s.review?.decision === "APPROVED" ? "✅" : s.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
