"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TRUCK_MODELS } from "@/lib/kuma/models";
import { KumaSubpageShell } from "@/components/kuma/kuma-subpage-shell";
import { useKuma } from "@/components/kuma/kuma-provider";
import { queueHomeSectionScroll } from "@/lib/kuma/scroll-to";
import { ArrowLeft } from "lucide-react";

function CompareContent() {
  const { t } = useKuma();
  const searchParams = useSearchParams();
  const slugs = (searchParams.get("models") ?? "").split(",").filter(Boolean);
  const trucks = TRUCK_MODELS.filter((t) => slugs.includes(t.slug));

  if (trucks.length === 0) {
    return (
      <div className="kuma-container flex min-h-screen flex-col items-center justify-center gap-4 px-4 py-16">
        <p className="text-center text-sm text-gray-600 sm:text-base">{t("compareEmpty")}</p>
        <Link href="/" className="kuma-btn-primary">
          {t("backToCatalog")}
        </Link>
      </div>
    );
  }

  const rows = [
    { key: "categoryLabel", get: (truck: (typeof trucks)[0]) => t(truck.categoryKey) },
    { key: "payload", get: (truck: (typeof trucks)[0]) => truck.fullSpecs.payload },
    { key: "engineVolume", get: (truck: (typeof trucks)[0]) => truck.fullSpecs.engineVolume },
    { key: "horsepower", get: (truck: (typeof trucks)[0]) => truck.fullSpecs.horsepower },
    { key: "transmission", get: (truck: (typeof trucks)[0]) => truck.fullSpecs.transmission },
    { key: "fuelTank", get: (truck: (typeof trucks)[0]) => truck.fullSpecs.fuelTank },
    { key: "fuelConsumption", get: (truck: (typeof trucks)[0]) => truck.fullSpecs.fuelConsumption },
    { key: "maxSpeed", get: (truck: (typeof trucks)[0]) => truck.fullSpecs.maxSpeed },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 md:py-10 2xl:py-12">
      <div className="kuma-container">
        <Link
          href="/"
          onClick={() => queueHomeSectionScroll("#models")}
          className="mb-6 inline-flex items-center gap-2 text-sm text-kuma-700 sm:mb-8 sm:text-base"
        >
          <ArrowLeft className="h-5 w-5 shrink-0" />
          {t("backToCatalog")}
        </Link>
        <h1 className="kuma-heading mb-6 text-kuma-800 sm:mb-8">{t("compareTitle")}</h1>

        <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          <div className="min-w-[640px] rounded-2xl bg-white shadow-lg sm:min-w-0 2xl:rounded-3xl">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="p-3 text-left text-xs font-medium text-gray-500 sm:p-4 sm:text-sm" />
                  {trucks.map((truck) => (
                    <th key={truck.slug} className="p-3 text-center sm:p-4">
                      <img
                        src={truck.image}
                        alt={truck.name}
                        className="mx-auto mb-2 aspect-[16/10] w-full max-w-[160px] rounded-lg object-cover sm:max-w-[200px] 2xl:max-w-[240px]"
                      />
                      <span className="text-xs font-bold text-kuma-800 sm:text-sm 2xl:text-base">
                        {truck.name}
                      </span>
                      <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">{t(truck.categoryKey)}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ key, get }) => (
                  <tr key={key} className="border-b border-gray-50">
                    <td className="p-3 text-xs font-medium text-gray-600 sm:p-4 sm:text-sm">
                      {t(key)}
                    </td>
                    {trucks.map((truck) => (
                      <td
                        key={truck.slug}
                        className="p-3 text-center text-xs text-kuma-800 sm:p-4 sm:text-sm 2xl:text-base"
                      >
                        {get(truck)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <KumaSubpageShell>
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center text-kuma-700">...</div>
        }
      >
        <CompareContent />
      </Suspense>
    </KumaSubpageShell>
  );
}
