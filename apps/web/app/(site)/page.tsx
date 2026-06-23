import type { Metadata } from "next";
import { KumaHomePage } from "@/components/kuma/kuma-home-page";
import { buildHreflang } from "@/lib/kuma/seo";
import { SITE } from "@/lib/kuma/content/site";

export const metadata: Metadata = {
  title: `${SITE.name.ky} — Кыргызстандагы коммерциялык унаалар`,
  description:
    "Hyundai Mighty GT Series: ишенимдүү жүк ташуучулар, сервис, лизинг жана корпоративдик чечимдер Кыргызстанда.",
  keywords: ["Hyundai", "жүк ташуучу", "Кыргызстан", "Mighty", "GT8", "GT11", "HTBK"],
  alternates: { languages: buildHreflang("/") },
  openGraph: {
    title: SITE.name.ru,
    description: "Официальный дистрибьютор Hyundai Truck & Bus в Кыргызстане",
    locale: "ky_KG",
    type: "website",
  },
};

export default function HomePage() {
  return <KumaHomePage />;
}
