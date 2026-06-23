import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@noorjourney/database";
import { reviewSchema } from "@noorjourney/shared";
import { apiSuccess, apiError } from "@/lib/api";
import { hasRole } from "@/lib/rbac";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Response.json(apiError("Авторизация керек"), { status: 401 });
  if (!hasRole(session.user.roles, ["TEACHER", "ADMIN"])) {
    return Response.json(apiError("Укук жок"), { status: 403 });
  }

  try {
    const body = await req.json();
    const parsed = reviewSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(apiError("Жараксыз маалымат"), { status: 400 });
    }

    const { submissionId, decision, feedback } = parsed.data;

    const review = await prisma.$transaction(async (tx) => {
      const created = await tx.review.create({
        data: {
          submissionId,
          teacherId: session.user.id,
          decision,
          feedback,
        },
      });

      await tx.submission.update({
        where: { id: submissionId },
        data: { status: "REVIEWED" },
      });

      const submission = await tx.submission.findUnique({ where: { id: submissionId } });
      if (submission) {
        await tx.notification.create({
          data: {
            userId: submission.studentId,
            type: "review",
            title: decision === "APPROVED" ? "Тапшыруу макулданды ✅" : "Тапшыруу кайра иштетүү керек",
            body: feedback ?? undefined,
          },
        });
      }

      return created;
    });

    return Response.json(apiSuccess(review), { status: 201 });
  } catch {
    return Response.json(apiError("Сервер катасы"), { status: 500 });
  }
}
