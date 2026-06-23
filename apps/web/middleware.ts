import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { canAccessRoute } from "@/lib/rbac";

export default withAuth(
  function middleware(req) {
    const roles = req.nextauth.token?.roles ?? [];
    const pathname = req.nextUrl.pathname;

    if (!canAccessRoute(roles as never[], pathname)) {
      const primaryRole = req.nextauth.token?.primaryRole as string;
      const redirectMap: Record<string, string> = {
        ADMIN: "/admin",
        TEACHER: "/teacher",
        STUDENT: "/student",
        PARENT: "/parent",
      };
      return NextResponse.redirect(new URL(redirectMap[primaryRole] ?? "/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;
        const publicPaths = ["/", "/login", "/register"];
        if (publicPaths.includes(path)) return true;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/admin/:path*", "/teacher/:path*", "/student/:path*", "/parent/:path*"],
};
