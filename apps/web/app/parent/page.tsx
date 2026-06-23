import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";
import { formatDate } from "@/lib/utils";

export default async function ParentDashboard() {
  const session = await requireRole("PARENT");

  const children = await prisma.parentStudentLink.findMany({
    where: { parentId: session.user.id },
    include: {
      student: {
        include: {
          streak: true,
          submissions: {
            include: { review: true },
            orderBy: { createdAt: "desc" },
            take: 5,
          },
        },
      },
    },
  });

  if (children.length === 0) {
    return (
      <div className="noor-card text-center py-12">
        <p className="text-4xl mb-4">👨‍👩‍👧</p>
        <p className="text-noor-600">Бала байланган жок</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Балаларыңыз</h1>

      {children.map(({ student, relationship }) => (
        <div key={student.id} className="noor-card space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-noor-gradient text-2xl text-white">
              {student.fullName[0]}
            </div>
            <div>
              <h2 className="text-xl font-semibold">{student.fullName}</h2>
              <p className="text-sm text-noor-500">{relationship}</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-noor-50 p-4">
              <p className="text-sm text-noor-500">Streak</p>
              <p className="text-2xl font-bold text-noor-800">
                {student.streak?.currentStreak ?? 0} күн 🔥
              </p>
            </div>
            <div className="rounded-xl bg-noor-50 p-4">
              <p className="text-sm text-noor-500">Тапшыруулар</p>
              <p className="text-2xl font-bold text-noor-800">
                {student.submissions.length}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-medium text-noor-700">Акыркы активдүүлүк</h3>
            {student.submissions.length === 0 ? (
              <p className="text-sm text-noor-400">Азырынча тапшыруу жок</p>
            ) : (
              <div className="space-y-2">
                {student.submissions.map((s) => (
                  <div key={s.id} className="flex justify-between rounded-lg bg-cream-100 px-4 py-2 text-sm">
                    <span>{formatDate(s.submissionDate)}</span>
                    <span>
                      {s.pagesRead} бет •{" "}
                      {s.review?.decision === "APPROVED" ? "✅" : "⏳"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
