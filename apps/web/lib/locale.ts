import { cookies } from "next/headers";
import { getServerSession } from "next-auth";
import { prisma } from "@noorjourney/database";
import { isValidLocale, LOCALE_COOKIE, type Locale } from "@noorjourney/shared";
import { authOptions } from "@/lib/auth";

export { LOCALE_COOKIE };

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE)?.value;
  if (value && isValidLocale(value)) return value;

  const session = await getServerSession(authOptions);
  if (session?.user?.id) {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { locale: true },
    });
    if (user?.locale && isValidLocale(user.locale)) return user.locale;
  }

  return "ky";
}
