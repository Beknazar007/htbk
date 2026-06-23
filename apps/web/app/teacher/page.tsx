import Link from "next/link";
import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";
import { Button } from "@/components/ui/button";

export default async function TeacherDashboard() {
  const session = await requireRole(["TEACHER", "ADMIN"]);

  const [groups, pendingCount, studentsCount] = await Promise.all([
    prisma.group.findMany({
      where: { teacherId: session.user.id, status: "ACTIVE" },
      include: { _count: { select: { students: true } } },
    }),
    prisma.submission.count({
      where: {
        status: "SUBMITTED",
        review: null,
        student: {
          groupMemberships: {
            some: { group: { teacherId: session.user.id }, status: "ACTIVE" },
          },
        },
      },
    }),
    prisma.groupStudent.count({
      where: { group: { teacherId: session.user.id }, status: "ACTIVE" },
    }),
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Устаз дашборду</h1>
        <p className="text-noor-600">Салам, {session.user.name}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="noor-card">
          <p className="text-sm text-noor-500">Топтор</p>
          <p className="text-3xl font-bold">{groups.length}</p>
        </div>
        <div className="noor-card">
          <p className="text-sm text-noor-500">Окуучулар</p>
          <p className="text-3xl font-bold">{studentsCount}</p>
        </div>
        <div className="noor-card border-gold-300 bg-gold-500/5">
          <p className="text-sm text-noor-500">Күтүүдөгү текшерүү</p>
          <p className="text-3xl font-bold text-gold-600">{pendingCount}</p>
        </div>
      </div>

      {pendingCount > 0 && (
        <Link href="/teacher/submissions">
          <Button className="w-full md:w-auto">
            {pendingCount} тапшырууну текшерүү →
          </Button>
        </Link>
      )}

      <div className="noor-card">
        <h2 className="mb-4 text-lg font-semibold">Менин топторум</h2>
        {groups.length === 0 ? (
          <p className="text-noor-500">Топтор жок</p>
        ) : (
          <div className="space-y-3">
            {groups.map((g) => (
              <div key={g.id} className="flex items-center justify-between rounded-xl bg-noor-50 p-4">
                <div>
                  <p className="font-medium">{g.name}</p>
                  <p className="text-sm text-noor-500">{g._count.students} окуучу</p>
                </div>
                <code className="rounded bg-white px-2 py-1 text-xs text-noor-600">
                  {g.inviteCode}
                </code>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
