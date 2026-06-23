import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@noorjourney/database";
import { apiSuccess, apiError } from "@/lib/api";
import { hasRole } from "@/lib/rbac";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Response.json(apiError("Авторизация керек"), { status: 401 });
  if (!hasRole(session.user.roles, "ADMIN")) {
    return Response.json(apiError("Укук жок"), { status: 403 });
  }

  const [totalUsers, activeUsers, teachers, students, groups, submissions] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { status: "ACTIVE" } }),
    prisma.userRole.count({ where: { role: "TEACHER" } }),
    prisma.userRole.count({ where: { role: "STUDENT" } }),
    prisma.group.count({ where: { status: "ACTIVE" } }),
    prisma.submission.count(),
  ]);

  return Response.json(
    apiSuccess({
      totalUsers,
      activeUsers,
      inactiveUsers: totalUsers - activeUsers,
      teachers,
      students,
      groups,
      submissions,
    })
  );
}
