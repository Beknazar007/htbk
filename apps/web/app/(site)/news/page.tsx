import type { Metadata } from "next";
import { NewsListPage } from "@/components/kuma/news-page";
import { buildHreflang } from "@/lib/kuma/seo";

export const metadata: Metadata = {
  title: "Жаңылыктар — Hyundai Truck & Bus Кыргызстан",
  description: "Компания жана тармак жаңылыктары.",
  alternates: { languages: buildHreflang("/news") },
};

export default function Page() {
  return <NewsListPage />;
}
