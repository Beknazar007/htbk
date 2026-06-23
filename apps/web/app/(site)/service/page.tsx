import type { Metadata } from "next";
import { ServicePageClient } from "@/components/kuma/service-page";
import { buildHreflang } from "@/lib/kuma/seo";

export const metadata: Metadata = {
  title: "Сервис — Hyundai Truck & Bus Кыргызстан",
  description: "Техникалык тейлөө, оригинал запчасттар, диагностика жана мобилдик сервис.",
  alternates: { languages: buildHreflang("/service") },
};

export default function Page() {
  return <ServicePageClient />;
}
