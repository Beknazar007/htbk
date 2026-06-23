import type { Metadata } from "next";
import { SuperstructuresCatalog } from "@/components/kuma/superstructures-page";
import { buildHreflang } from "@/lib/kuma/seo";

export const metadata: Metadata = {
  title: "Каталог надстроек — HTBK",
  description: "15 типов надстроек для Hyundai Mighty GT: рефрижератор, самосвал, манипулятор и др.",
  alternates: { languages: buildHreflang("/superstructures") },
};

export default function SuperstructuresPage() {
  return <SuperstructuresCatalog />;
}
