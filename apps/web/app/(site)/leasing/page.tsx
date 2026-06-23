import type { Metadata } from "next";
import { LeasingPageClient } from "@/components/kuma/leasing-page";
import { buildHreflang } from "@/lib/kuma/seo";

export const metadata: Metadata = {
  title: "Лизинг — Hyundai Truck & Bus Кыргызстан",
  description: "Калькулятор лизинга на грузовики Hyundai Mighty GT. От 9% годовых, до 5 лет.",
  alternates: { languages: buildHreflang("/leasing") },
};

export default function LeasingPage() {
  return <LeasingPageClient />;
}
