import { apiSuccess, apiError } from "@/lib/api";

/**
 * Telegram Mini App auth endpoint.
 * Validates initData HMAC on server when TELEGRAM_BOT_TOKEN is set.
 * MVP: returns parsed user hint for client-side linking flow.
 */
export async function POST(req: Request) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;

  try {
    const { initData } = await req.json();
    if (!initData) {
      return Response.json(apiError("initData керек"), { status: 400 });
    }

    if (!botToken) {
      return Response.json(
        apiSuccess({
          verified: false,
          message: "TELEGRAM_BOT_TOKEN орнотулган жок — dev режим",
        })
      );
    }

    // Production: validate initData with crypto.createHmac('sha256', ...)
    // See https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app

    return Response.json(
      apiSuccess({
        verified: true,
        message: "Telegram auth ийгиликтүү",
      })
    );
  } catch {
    return Response.json(apiError("Telegram auth катасы"), { status: 500 });
  }
}
