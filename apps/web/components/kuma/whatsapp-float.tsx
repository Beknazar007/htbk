"use client";

import { useKuma } from "./kuma-provider";
import { WHATSAPP_URL } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";

export function WhatsAppFloat() {
  const { t } = useKuma();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[4.75rem] right-4 z-[48] flex max-w-[min(100vw-2rem,280px)] items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-[1.02] active:scale-[0.98] sm:right-6 sm:px-5 sm:py-3.5 sm:text-base lg:bottom-6 3xl:bottom-8 3xl:right-8"
      aria-label={t("whatsappFloatLabel")}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
      <span className="leading-tight">{t("whatsappFloatLabel")}</span>
    </a>
  );
}
