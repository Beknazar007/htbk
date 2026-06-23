import type { Metadata } from "next";
import { ContactsPageClient } from "@/components/kuma/contacts-page";
import { buildHreflang } from "@/lib/kuma/seo";

export const metadata: Metadata = {
  title: "Байланыш — Hyundai Truck & Bus Кыргызстан",
  description: "Телефон, дарек, WhatsApp жана байланыш формасы.",
  alternates: { languages: buildHreflang("/contacts") },
};

export default function Page() {
  return <ContactsPageClient />;
}
