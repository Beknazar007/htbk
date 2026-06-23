export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  meta?: Record<string, unknown>;
};

export const ROLE_ROUTES = {
  ADMIN: "/admin",
  TEACHER: "/teacher",
  STUDENT: "/student",
  PARENT: "/parent",
} as const;

export type RoleKey = keyof typeof ROLE_ROUTES;
