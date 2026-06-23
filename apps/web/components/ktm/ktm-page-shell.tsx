"use client";

import { KtmProvider } from "./ktm-provider";
import { KtmHeader } from "./header";
import { KtmFooter } from "./footer";
import { KtmWhatsAppFloat } from "./whatsapp-float";
import { PageTransition } from "./motion";

export function KtmPageShell({ children }: { children: React.ReactNode }) {
  return (
    <KtmProvider defaultLocale="ky">
      <div className="ktm-site min-h-screen bg-white font-sans antialiased">
        <KtmHeader />
        <PageTransition>
          <main className="pt-16">{children}</main>
        </PageTransition>
        <KtmFooter />
        <KtmWhatsAppFloat />
      </div>
    </KtmProvider>
  );
}
