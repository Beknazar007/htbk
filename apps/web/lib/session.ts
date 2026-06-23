import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import type { Role } from "@noorjourney/database";
import { hasRole } from "@/lib/rbac";

export async function requireSession() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/login");
  return session;
}

export async function requireRole(role: Role | Role[]) {
  const session = await requireSession();
  if (!hasRole(session.user.roles, role)) {
    redirect("/login");
  }
  return session;
}
