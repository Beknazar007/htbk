import { redirect } from "next/navigation";

/**
 * Telegram Mini App entry point.
 * Bot should open: https://your-domain.com/telegram
 * Redirects to login; TelegramProvider syncs theme & viewport.
 */
export default function TelegramEntryPage() {
  redirect("/login?tg=1");
}
