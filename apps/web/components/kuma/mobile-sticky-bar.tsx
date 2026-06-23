"use client";

import { Phone } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { PHONE, WHATSAPP_URL } from "@/lib/kuma/constants";
import { WhatsAppIcon } from "./social-icons";

export function MobileStickyBar() {
  const { t } = useKuma();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:hidden">
      <div className="kuma-safe-bottom grid grid-cols-2 divide-x divide-gray-100">
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="kuma-touch flex flex-col items-center justify-center gap-1 py-2.5 text-brand-navy transition-colors active:bg-gray-50"
        >
          <Phone className="h-5 w-5" strokeWidth={2} />
          <span className="text-[11px] font-semibold">{t("mobileCall")}</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="kuma-touch flex flex-col items-center justify-center gap-1 bg-[#25D366]/10 py-2.5 text-[#128C7E] transition-colors active:bg-[#25D366]/20"
        >
          <WhatsAppIcon className="h-5 w-5" />
          <span className="text-[11px] font-semibold">{t("mobileWhatsApp")}</span>
        </a>
      </div>
    </div>
  );
}
