import { getDailyAyah, isValidLocale, type Locale } from "@noorjourney/shared";
import { apiSuccess } from "@/lib/api";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const localeParam = searchParams.get("locale") ?? "ky";
  const locale: Locale = isValidLocale(localeParam) ? localeParam : "ky";

  const ayah = getDailyAyah();
  const translation =
    locale === "ar"
      ? ayah.textAr
      : locale === "ky"
        ? ayah.translation.ky
        : locale === "ru"
          ? ayah.translation.ru
          : ayah.translation.en;

  return Response.json(
    apiSuccess({
      ...ayah,
      translation,
    })
  );
}
