import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";

export default async function AchievementsPage() {
  const session = await requireRole("STUDENT");

  const [earned, all] = await Promise.all([
    prisma.userAchievement.findMany({
      where: { userId: session.user.id },
      include: { achievement: true },
      orderBy: { earnedAt: "desc" },
    }),
    prisma.achievement.findMany(),
  ]);

  const earnedIds = new Set(earned.map((e) => e.achievementId));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Жетишкендиктер</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {all.map((a) => {
          const isEarned = earnedIds.has(a.id);
          return (
            <div
              key={a.id}
              className={`noor-card text-center ${!isEarned && "opacity-40 grayscale"}`}
            >
              <p className="text-4xl mb-3">{a.icon ?? "🏆"}</p>
              <p className="font-semibold text-noor-900">{a.title}</p>
              <p className="mt-1 text-sm text-noor-500">{a.description}</p>
              {isEarned && (
                <span className="mt-3 inline-block noor-badge bg-gold-500/20 text-gold-600">
                  Алынды ✅
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
