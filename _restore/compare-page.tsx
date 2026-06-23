"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TRUCK_MODELS } from "@/lib/kuma/models";
import { KumaProvider, useKuma } from "@/components/kuma/kuma-provider";
import { ArrowLeft } from "lucide-react";

function CompareContent() {
  const { t } = useKuma();
  const searchParams = useSearchParams();
  const slugs = (searchParams.get("models") ?? "").split(",").filter(Boolean);
  const trucks = TRUCK_MODELS.filter((t) => slugs.includes(t.slug));

  if (trucks.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4">
        <p className="text-gray-600">{t("compareEmpty")}</p>
        <Link href="/" className="kuma-btn-primary">
          {t("backToCatalog")}
        </Link>
      </div>
    );
  }

  const rows = [
    { key: "payload", get: (t: (typeof trucks)[0]) => t.fullSpecs.payload },
    { key: "engineVolume", get: (t: (typeof trucks)[0]) => t.fullSpecs.engineVolume },
    { key: "horsepower", get: (t: (typeof trucks)[0]) => t.fullSpecs.horsepower },
    { key: "transmission", get: (t: (typeof trucks)[0]) => t.fullSpecs.transmission },
    { key: "fuelTank", get: (t: (typeof trucks)[0]) => t.fullSpecs.fuelTank },
    { key: "fuelConsumption", get: (t: (typeof trucks)[0]) => t.fullSpecs.fuelConsumption },
    { key: "maxSpeed", get: (t: (typeof trucks)[0]) => t.fullSpecs.maxSpeed },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="kuma-container px-4">
        <Link href="/#models" className="mb-8 inline-flex items-center gap-2 text-kuma-700">
          <ArrowLeft className="h-5 w-5" />
          {t("backToCatalog")}
        </Link>
        <h1 className="mb-8 text-3xl font-bold text-kuma-800">{t("compareTitle")}</h1>

        <div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="p-4 text-left font-medium text-gray-500" />
                {trucks.map((truck) => (
                  <th key={truck.slug} className="p-4 text-center">
                    <img
                      src={truck.image}
                      alt={truck.name}
                      className="mx-auto mb-2 h-24 w-full max-w-[200px] rounded-lg object-cover"
                    />
                    <span className="font-bold text-kuma-800">{truck.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ key, get }) => (
                <tr key={key} className="border-b border-gray-50">
                  <td className="p-4 font-medium text-gray-600">{t(key)}</td>
                  {trucks.map((truck) => (
                    <td key={truck.slug} className="p-4 text-center text-kuma-800">
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
  );
}

export default function ComparePage() {
  return (
    <KumaProvider>
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center">...</div>}>
        <CompareContent />
      </Suspense>
    </KumaProvider>
  );
}
