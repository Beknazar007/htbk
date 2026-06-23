import { getDailyMotivation, isValidLocale, type Locale } from "@noorjourney/shared";
import { apiSuccess } from "@/lib/api";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const localeParam = searchParams.get("locale") ?? "ky";
  const locale: Locale = isValidLocale(localeParam) ? localeParam : "ky";

  const motivation = getDailyMotivation();

  return Response.json(
    apiSuccess({
      icon: motivation.icon,
      message: motivation.message[locale],
      source: motivation.source,
    })
  );
}
