"use client";

import { IslamicDateCard } from "@/components/islamic/islamic-date-card";
import { DailyAyahCard } from "@/components/islamic/daily-ayah-card";
import { DailyMotivationCard } from "@/components/islamic/daily-motivation-card";

export function DashboardPremiumWidgets() {
  return (
    <div className="space-y-4">
      <IslamicDateCard />
      <div className="grid gap-4 lg:grid-cols-2">
        <DailyAyahCard />
        <DailyMotivationCard />
      </div>
    </div>
  );
}
