import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";

export default async function AdminDashboard() {
  await requireRole("ADMIN");

  const [totalUsers, activeUsers, teachers, students, groups, submissions, courses] =
    await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { status: "ACTIVE" } }),
      prisma.userRole.count({ where: { role: "TEACHER" } }),
      prisma.userRole.count({ where: { role: "STUDENT" } }),
      prisma.group.count({ where: { status: "ACTIVE" } }),
      prisma.submission.count(),
      prisma.course.count({ where: { status: "ACTIVE" } }),
    ]);

  const stats = [
    { label: "Жалпы колдонуучулар", value: totalUsers, icon: "👥" },
    { label: "Активдүү", value: activeUsers, icon: "✅" },
    { label: "Пассивдүү", value: totalUsers - activeUsers, icon: "⏸️" },
    { label: "Устаздар", value: teachers, icon: "👨‍🏫" },
    { label: "Окуучулар", value: students, icon: "📚" },
    { label: "Топтор", value: groups, icon: "🏫" },
    { label: "Курстар", value: courses, icon: "📖" },
    { label: "Тапшыруулар", value: submissions, icon: "📝" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Платформа статистикасы</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="noor-card">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{s.icon}</span>
              <div>
                <p className="text-2xl font-bold text-noor-900">{s.value}</p>
                <p className="text-sm text-noor-500">{s.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
