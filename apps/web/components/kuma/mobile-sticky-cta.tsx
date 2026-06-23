"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { SITE } from "@/lib/kuma/content/site";
import { cn } from "@/lib/utils";

export function MobileStickyCta() {
  const { t } = useKuma();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-kuma-100 bg-white/95 backdrop-blur-lg pb-[env(safe-area-inset-bottom)] lg:hidden">
      <div className="grid grid-cols-3 divide-x divide-kuma-100">
        <a
          href={SITE.phoneHref}
          className="flex flex-col items-center gap-1 py-3 text-kuma-700 transition-colors active:bg-kuma-50"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">{t("mobileCall")}</span>
        </a>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 py-3 text-[#25D366] transition-colors active:bg-kuma-50"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">{t("mobileWhatsApp")}</span>
        </a>
        <Link
          href="/contacts#form"
          className={cn(
            "flex flex-col items-center gap-1 py-3 text-kuma-600 transition-colors active:bg-kuma-50"
          )}
        >
          <FileText className="h-5 w-5" />
          <span className="text-[10px] font-semibold uppercase tracking-wide">{t("mobileRequest")}</span>
        </Link>
      </div>
    </div>
  );
}
