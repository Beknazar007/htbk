import type { Role } from "@noorjourney/database";
import { ROLE_ROUTES } from "@noorjourney/shared";

export function getDashboardPath(role: Role): string {
  return ROLE_ROUTES[role];
}

export function hasRole(roles: Role[], required: Role | Role[]): boolean {
  const requiredList = Array.isArray(required) ? required : [required];
  return requiredList.some((r) => roles.includes(r));
}

export function canAccessRoute(roles: Role[], pathname: string): boolean {
  if (pathname.startsWith("/admin")) return hasRole(roles, "ADMIN");
  if (pathname.startsWith("/teacher")) return hasRole(roles, ["ADMIN", "TEACHER"]);
  if (pathname.startsWith("/student")) return hasRole(roles, ["ADMIN", "STUDENT"]);
  if (pathname.startsWith("/parent")) return hasRole(roles, ["ADMIN", "PARENT"]);
  return true;
}
