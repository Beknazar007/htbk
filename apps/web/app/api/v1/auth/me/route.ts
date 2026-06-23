import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { apiSuccess, apiError } from "@/lib/api";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) return Response.json(apiError("Авторизация керек"), { status: 401 });

  return Response.json(
    apiSuccess({
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      roles: session.user.roles,
      primaryRole: session.user.primaryRole,
    })
  );
}
