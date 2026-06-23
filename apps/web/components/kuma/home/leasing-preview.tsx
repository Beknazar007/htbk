"use client";

import Link from "next/link";
import { useKuma } from "../kuma-provider";
import { IMAGES } from "@/lib/kuma/constants";
import { FadeUp } from "@/lib/kuma/motion";

export function LeasingPreview() {
  const { t } = useKuma();

  return (
    <section className="kuma-section">
      <div className="kuma-container">
        <div className="overflow-hidden rounded-3xl bg-kuma-gradient">
          <div className="grid lg:grid-cols-2">
            <FadeUp className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("leasingTitle")}</h2>
              <p className="mt-4 text-white/80">{t("leasingSubtitle")}</p>
              <ul className="mt-6 space-y-2 text-white/90">
                <li>✓ {t("leasingRate")}</li>
                <li>✓ {t("leasingTerm")}</li>
                <li>✓ {t("leasingFast")}</li>
                <li>✓ {t("leasingDocs")}</li>
              </ul>
              <Link href="/leasing" className="mt-8 inline-flex kuma-btn bg-white text-kuma-800 hover:bg-gray-100 w-fit">
                {t("leasingCalcBtn")}
              </Link>
            </FadeUp>
            <div className="relative min-h-[280px] lg:min-h-full">
              <img src={IMAGES.leasing} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
