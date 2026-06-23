import bcrypt from "bcryptjs";
import { prisma } from "@noorjourney/database";
import { registerSchema } from "@noorjourney/shared";
import { apiSuccess, apiError } from "@/lib/api";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
      return Response.json(apiError(parsed.error.errors[0]?.message ?? "Жараксыз маалымат"), {
        status: 400,
      });
    }

    const { fullName, email, password, role, inviteCode } = parsed.data;

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return Response.json(apiError("Бул email катталган"), { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        fullName,
        passwordHash,
        roles: { create: { role } },
        ...(role === "TEACHER" && { teacherProfile: { create: {} } }),
        ...(role === "STUDENT" && {
          studentProfile: { create: {} },
          streak: { create: {} },
        }),
        ...(role === "PARENT" && { parentProfile: { create: {} } }),
      },
    });

    if (role === "STUDENT" && inviteCode) {
      const group = await prisma.group.findUnique({ where: { inviteCode } });
      if (group) {
        await prisma.groupStudent.create({
          data: { groupId: group.id, studentId: user.id },
        });
      }
    }

    return Response.json(apiSuccess({ id: user.id, email: user.email }), { status: 201 });
  } catch {
    return Response.json(apiError("Сервер катасы"), { status: 500 });
  }
}
