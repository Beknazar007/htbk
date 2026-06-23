import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";
import { startOfToday, formatDate } from "@/lib/utils";

export default async function StudentPlanPage() {
  const session = await requireRole("STUDENT");
  const today = startOfToday();

  const plan = await prisma.dailyPlan.findFirst({
    where: { studentId: session.user.id, planDate: today, status: "PUBLISHED" },
    include: { items: { orderBy: { orderIndex: "asc" } }, teacher: { select: { fullName: true } } },
  });

  if (!plan) {
    return (
      <div className="noor-card text-center py-12">
        <p className="text-4xl mb-4">📖</p>
        <p className="text-noor-600">Бүгүнкү план жок</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{plan.title}</h1>
        <p className="text-noor-500">{formatDate(plan.planDate)} • Устаз: {plan.teacher.fullName}</p>
      </div>

      {plan.notes && (
        <div className="noor-card bg-gold-500/10 border-gold-400/30">
          <p className="text-sm text-noor-700">{plan.notes}</p>
        </div>
      )}

      <div className="space-y-4">
        {plan.items.map((item, i) => (
          <div key={item.id} className="noor-card">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-noor-100 font-bold text-noor-700">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-noor-900">
                  {item.type === "READ" && "Окуу"}
                  {item.type === "MEMORIZE" && "Жаттоо"}
                  {item.type === "REVISE" && "Кайталоо"}
                  {item.type === "LISTEN" && "Угуу"}
                </p>
                {item.surahStart && (
                  <p className="font-arabic text-lg text-noor-700">
                    Сүрө {item.surahStart}:{item.ayahStart} — {item.surahEnd}:{item.ayahEnd}
                  </p>
                )}
                <div className="mt-2 flex gap-4 text-sm text-noor-500">
                  {item.targetPages && <span>📄 {item.targetPages} бет</span>}
                  {item.targetRepetitions && <span>🔁 {item.targetRepetitions} кайталоо</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
