"use client";

import { useState, type FormEvent } from "react";
import { useKuma } from "./kuma-provider";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  className?: string;
  showVehicle?: boolean;
  id?: string;
}

export function LeadForm({ className, showVehicle = false, id = "form" }: LeadFormProps) {
  const { t } = useKuma();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className={cn("rounded-2xl bg-kuma-50 p-8 text-center", className)}>
        <p className="text-lg font-semibold text-kuma-800">{t("applySuccess")}</p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">{t("applyName")}</label>
        <input required className="kuma-input w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-kuma-500 focus:ring-2 focus:ring-kuma-100" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">{t("applyPhone")}</label>
        <input required type="tel" className="kuma-input w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-kuma-500 focus:ring-2 focus:ring-kuma-100" />
      </div>
      {showVehicle && (
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">{t("applyVehicle")}</label>
          <select className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-kuma-500 focus:ring-2 focus:ring-kuma-100">
            <option>{t("formModelGt8")}</option>
            <option>{t("formModelGt11")}</option>
            <option>{t("formModelElectric")}</option>
          </select>
        </div>
      )}
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700">{t("applyMessage")}</label>
        <textarea rows={4} className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-kuma-500 focus:ring-2 focus:ring-kuma-100" />
      </div>
      <button type="submit" className="kuma-btn-primary w-full">
        {t("applySubmit")}
      </button>
    </form>
  );
}
