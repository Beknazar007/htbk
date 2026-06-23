import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@noorjourney/database";
import type { Role } from "@noorjourney/database";

export type SessionUser = {
  id: string;
  email: string | null;
  name: string;
  roles: Role[];
  primaryRole: Role;
};

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
          include: { roles: true },
        });

        if (!user || !user.passwordHash || user.status !== "ACTIVE") return null;

        const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        if (!valid) return null;

        const roles = user.roles.map((r) => r.role);
        const priority: Role[] = ["ADMIN", "TEACHER", "STUDENT", "PARENT"];
        const primaryRole = priority.find((r) => roles.includes(r)) ?? roles[0];

        await prisma.user.update({
          where: { id: user.id },
          data: { lastActiveAt: new Date() },
        });

        return {
          id: user.id,
          email: user.email,
          name: user.fullName,
          roles,
          primaryRole,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as SessionUser & { id: string };
        token.id = u.id;
        token.roles = u.roles;
        token.primaryRole = u.primaryRole;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.roles = token.roles as Role[];
        session.user.primaryRole = token.primaryRole as Role;
      }
      return session;
    },
  },
};
