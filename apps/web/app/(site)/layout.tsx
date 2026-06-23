import type { ReactNode } from "react";
import { KumaSiteLayout } from "@/components/kuma/kuma-site-layout";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <KumaSiteLayout>{children}</KumaSiteLayout>;
}
