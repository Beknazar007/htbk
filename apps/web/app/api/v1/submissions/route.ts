import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@noorjourney/database";
import { ACHIEVEMENT_CODES, submissionSchema } from "@noorjourney/shared";
import { apiSuccess, apiError } from "@/lib/api";
import { startOfToday } from "@/lib/utils";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Response.json(apiError("Авторизация керек"), { status: 401 });

  const submissions = await prisma.submission.findMany({
    where: { studentId: session.user.id },
    include: { review: true, audios: true, dailyPlan: true },
    orderBy: { createdAt: "desc" },
    take: 20,
  });

  return Response.json(apiSuccess(submissions));
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Response.json(apiError("Авторизация керек"), { status: 401 });

  try {
    const body = await req.json();
    const parsed = submissionSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(apiError("Жараксыз маалымат"), { status: 400 });
    }

    const { dailyPlanId, planItemId, pagesRead, repetitionCount, notes } = parsed.data;
    const today = startOfToday();

    const submission = await prisma.submission.create({
      data: {
        studentId: session.user.id,
        dailyPlanId,
        planItemId,
        submissionDate: today,
        pagesRead,
        repetitionCount,
        notes,
        status: "SUBMITTED",
        submittedAt: new Date(),
      },
    });

    const streak = await prisma.streak.findUnique({ where: { studentId: session.user.id } });
    if (streak) {
      const last = streak.lastActivityDate ? new Date(streak.lastActivityDate) : null;
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      let current = 1;
      if (last) {
        const lastTime = last.setHours(0, 0, 0, 0);
        const todayTime = today.getTime();
        if (lastTime === todayTime) current = streak.currentStreak;
        else if (lastTime === yesterday.getTime()) current = streak.currentStreak + 1;
      }

      await prisma.streak.update({
        where: { studentId: session.user.id },
        data: {
          currentStreak: current,
          longestStreak: Math.max(current, streak.longestStreak),
          lastActivityDate: today,
        },
      });
    }

    const firstAchievement = await prisma.achievement.findUnique({
      where: { code: ACHIEVEMENT_CODES.FIRST_PAGE },
    });
    if (firstAchievement) {
      await prisma.userAchievement.upsert({
        where: {
          userId_achievementId: {
            userId: session.user.id,
            achievementId: firstAchievement.id,
          },
        },
        update: {},
        create: {
          userId: session.user.id,
          achievementId: firstAchievement.id,
        },
      });
    }

    return Response.json(apiSuccess(submission), { status: 201 });
  } catch {
    return Response.json(apiError("Сервер катасы"), { status: 500 });
  }
}
