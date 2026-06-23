import type { Metadata } from "next";
import { EnginePageClient } from "@/components/kuma/engine-page";
import { buildHreflang } from "@/lib/kuma/seo";

export const metadata: Metadata = {
  title: "Двигатель D4GA — Hyundai Mighty | Технические характеристики",
  description: "Мощные и экономичные двигатели D4GA для линейки Hyundai Mighty GT.",
  alternates: { languages: buildHreflang("/engine") },
};

export default function EnginePage() {
  return <EnginePageClient />;
}
