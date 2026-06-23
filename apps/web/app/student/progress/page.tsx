import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";

export default async function ProgressPage() {
  const session = await requireRole("STUDENT");

  const [snapshot, totalSubmissions, approved] = await Promise.all([
    prisma.progressSnapshot.findFirst({
      where: { studentId: session.user.id },
      orderBy: { snapshotDate: "desc" },
    }),
    prisma.submission.count({ where: { studentId: session.user.id } }),
    prisma.submission.count({
      where: { studentId: session.user.id, review: { decision: "APPROVED" } },
    }),
  ]);

  const completion = snapshot?.completionPercentage ?? 0;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Прогресс</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="noor-card flex flex-col items-center py-8">
          <div className="relative h-32 w-32">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e6f7f5" strokeWidth="8" />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#0f766e"
                strokeWidth="8"
                strokeDasharray={`${completion * 2.51} 251`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-noor-800">{completion}%</span>
            </div>
          </div>
          <p className="mt-4 text-noor-600">Жалпы прогресс</p>
        </div>

        <div className="space-y-4">
          <div className="noor-card">
            <p className="text-sm text-noor-500">Жатталган беттер</p>
            <p className="text-2xl font-bold">{snapshot?.totalPagesMemorized ?? 0}</p>
          </div>
          <div className="noor-card">
            <p className="text-sm text-noor-500">Кайталанган беттер</p>
            <p className="text-2xl font-bold">{snapshot?.totalPagesRevised ?? 0}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="noor-card">
          <p className="text-sm text-noor-500">Жалпы тапшыруулар</p>
          <p className="text-3xl font-bold text-noor-800">{totalSubmissions}</p>
        </div>
        <div className="noor-card">
          <p className="text-sm text-noor-500">Макулданган</p>
          <p className="text-3xl font-bold text-green-600">{approved}</p>
        </div>
      </div>
    </div>
  );
}
