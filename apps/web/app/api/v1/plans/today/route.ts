import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@noorjourney/database";
import { apiSuccess, apiError } from "@/lib/api";
import { startOfToday } from "@/lib/utils";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Response.json(apiError("Авторизация керек"), { status: 401 });

  const today = startOfToday();

  const plan = await prisma.dailyPlan.findFirst({
    where: {
      studentId: session.user.id,
      planDate: today,
      status: "PUBLISHED",
    },
    include: { items: { orderBy: { orderIndex: "asc" } } },
  });

  return Response.json(apiSuccess(plan));
}
