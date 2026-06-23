"use client";

import { useEffect, useState } from "react";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { PHONE, WHATSAPP_URL } from "@/lib/kuma/constants";
import { LeadForm } from "./lead-form";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

export function OnlineConsultation() {
  const { t } = useKuma();
  const [open, setOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = formOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  const actionClass =
    "kuma-touch flex items-center gap-2.5 rounded-full py-2.5 pl-4 pr-5 shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] 3xl:py-3 3xl:pl-5 3xl:pr-6";

  return (
    <>
      <div className="fixed bottom-28 right-4 z-[45] flex flex-col items-end gap-3 lg:bottom-32 lg:right-6 3xl:bottom-36 3xl:right-8">
        {open && (
          <div className="flex flex-col items-end gap-2.5 opacity-100 transition-opacity duration-200">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={cn(actionClass, "bg-[#25D366] text-white hover:bg-[#20bd5a]")}
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0 3xl:h-5 3xl:w-5" />
              <span className="text-sm font-semibold 3xl:text-base">{t("consultWhatsApp")}</span>
            </a>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              onClick={() => setOpen(false)}
              className={cn(actionClass, "bg-brand-navy text-white hover:bg-brand-navy/90")}
            >
              <Phone className="h-4 w-4 shrink-0 3xl:h-5 3xl:w-5" />
              <span className="text-sm font-semibold 3xl:text-base">{t("consultCall")}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setFormOpen(true);
              }}
              className={cn(actionClass, "bg-brand-accent text-white hover:bg-brand-accent/90")}
            >
              <Mail className="h-4 w-4 shrink-0 3xl:h-5 3xl:w-5" />
              <span className="text-sm font-semibold 3xl:text-base">{t("consultRequest")}</span>
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={cn(
            "kuma-touch flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent-gradient text-white shadow-xl shadow-brand-accent/30 transition-all hover:scale-105 active:scale-95 3xl:h-16 3xl:w-16",
            open && "rotate-0"
          )}
          aria-label={t("consultToggle")}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6 3xl:h-7 3xl:w-7" />
          ) : (
            <MessageCircle className="h-6 w-6 3xl:h-7 3xl:w-7" />
          )}
        </button>
      </div>

      {formOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-4 sm:items-center lg:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={t("consultRequest")}
          onClick={() => setFormOpen(false)}
        >
          <div
            className="kuma-safe-bottom w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl xs:p-6 sm:max-h-[90vh] sm:overflow-y-auto 3xl:max-w-lg 3xl:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold text-brand-black xs:text-xl">
                {t("consultFormTitle")}
              </h3>
              <button
                type="button"
                onClick={() => setFormOpen(false)}
                className="kuma-touch flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100"
                aria-label={t("videosClose")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <LeadForm showVehicle />
          </div>
        </div>
      )}
    </>
  );
}
