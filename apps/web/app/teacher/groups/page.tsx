import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";

export default async function TeacherGroupsPage() {
  const session = await requireRole(["TEACHER", "ADMIN"]);

  const groups = await prisma.group.findMany({
    where: { teacherId: session.user.id },
    include: {
      course: { select: { name: true } },
      students: {
        where: { status: "ACTIVE" },
        include: { student: { select: { fullName: true, email: true } } },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Топтор</h1>

      {groups.map((g) => (
        <div key={g.id} className="noor-card">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold">{g.name}</h2>
              <p className="text-sm text-noor-500">{g.course?.name ?? "Курс жок"}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-noor-400">Чакыруу коду</p>
              <code className="rounded bg-noor-50 px-2 py-1 text-sm font-mono">{g.inviteCode}</code>
            </div>
          </div>
          <div className="space-y-2">
            {g.students.map((gs) => (
              <div key={gs.id} className="flex items-center gap-3 rounded-lg bg-cream-100 px-4 py-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-noor-200 text-sm font-medium">
                  {gs.student.fullName[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{gs.student.fullName}</p>
                  <p className="text-xs text-noor-400">{gs.student.email}</p>
                </div>
              </div>
            ))}
            {g.students.length === 0 && (
              <p className="text-sm text-noor-400">Окуучулар жок</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
