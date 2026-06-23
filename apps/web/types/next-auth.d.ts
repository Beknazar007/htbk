import type { Role } from "@noorjourney/database";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email?: string | null;
      name?: string | null;
      roles: Role[];
      primaryRole: Role;
    };
  }

  interface User {
    roles: Role[];
    primaryRole: Role;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    roles: Role[];
    primaryRole: Role;
  }
}
