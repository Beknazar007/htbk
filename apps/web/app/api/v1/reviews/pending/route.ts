import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@noorjourney/database";
import { apiSuccess, apiError } from "@/lib/api";
import { hasRole } from "@/lib/rbac";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Response.json(apiError("Авторизация керек"), { status: 401 });
  if (!hasRole(session.user.roles, ["TEACHER", "ADMIN"])) {
    return Response.json(apiError("Укук жок"), { status: 403 });
  }

  const submissions = await prisma.submission.findMany({
    where: {
      status: "SUBMITTED",
      review: null,
      student: {
        groupMemberships: {
          some: {
            group: { teacherId: session.user.id },
            status: "ACTIVE",
          },
        },
      },
    },
    include: {
      student: { select: { id: true, fullName: true, email: true } },
      audios: true,
      dailyPlan: true,
    },
    orderBy: { submittedAt: "asc" },
  });

  return Response.json(apiSuccess(submissions));
}
