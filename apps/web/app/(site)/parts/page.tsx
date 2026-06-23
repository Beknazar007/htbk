import type { Metadata } from "next";
import { PartsPageClient } from "@/components/kuma/parts-page";
import { buildHreflang } from "@/lib/kuma/seo";

export const metadata: Metadata = {
  title: "Запчасти — Hyundai Mighty | Каталог оригинальных запчастей",
  description: "Оригинальные запчасти Hyundai Mighty: фильтры, тормоза, расходники и аксессуары.",
  alternates: { languages: buildHreflang("/parts") },
};

export default function PartsPage() {
  return <PartsPageClient />;
}
