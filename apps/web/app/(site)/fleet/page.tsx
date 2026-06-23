import type { Metadata } from "next";
import { FleetPageWrapper } from "@/components/kuma/fleet-page-wrapper";
import { buildHreflang } from "@/lib/kuma/seo";

export const metadata: Metadata = {
  title: "Автопарк — Биринчи | Корпоративным клиентам",
  description:
    "Корпоративные решения Hyundai Mighty: закупка 5+, 10+, 20+ грузовиков. Поддержка тендеров в Кыргызстане.",
  alternates: { languages: buildHreflang("/fleet") },
};

export default function FleetPage() {
  return <FleetPageWrapper />;
}
