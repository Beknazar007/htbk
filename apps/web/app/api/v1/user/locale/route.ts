import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@noorjourney/database";
import { isValidLocale } from "@noorjourney/shared";
import { apiSuccess, apiError } from "@/lib/api";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return Response.json(apiError("Авторизация керек"), { status: 401 });
  }

  const body = await req.json();
  if (!body.locale || !isValidLocale(body.locale)) {
    return Response.json(apiError("Жараксыз тил"), { status: 400 });
  }

  await prisma.user.update({
    where: { id: session.user.id },
    data: { locale: body.locale },
  });

  return Response.json(apiSuccess({ locale: body.locale }));
}
