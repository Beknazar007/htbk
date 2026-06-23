"use client";

import Link from "next/link";
import { useKuma } from "../kuma-provider";
import { FadeUp } from "@/lib/kuma/motion";

const SERVICES = ["serviceWarranty", "serviceParts", "serviceDiagnostics", "serviceMobile"] as const;

export function ServiceSection() {
  const { t } = useKuma();

  return (
    <section className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <FadeUp className="mb-10">
          <h2 className="kuma-heading text-kuma-900">{t("serviceTitle")}</h2>
          <p className="mt-3 text-gray-600">{t("serviceSubtitle")}</p>
        </FadeUp>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((key, i) => (
            <FadeUp key={key} delay={i * 70}>
              <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-kuma-100 text-kuma-700 font-bold">
                  {i + 1}
                </div>
                <p className="font-semibold text-kuma-900">{t(key)}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="mt-8 text-center">
          <Link href="/service" className="kuma-btn-primary">{t("learnMore")}</Link>
        </FadeUp>
      </div>
    </section>
  );
}
