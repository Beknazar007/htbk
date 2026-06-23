"use client";

import type { ReactNode } from "react";
import { KumaProvider } from "./kuma-provider";

export function KumaSiteLayout({ children }: { children: ReactNode }) {
  return <KumaProvider defaultLocale="ky">{children}</KumaProvider>;
}
