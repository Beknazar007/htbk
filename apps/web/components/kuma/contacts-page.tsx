"use client";

import { KumaSubpageShell } from "./kuma-subpage-shell";
import { useKuma } from "./kuma-provider";
import { ContactsSection } from "./home/contacts-section";
import { Breadcrumbs } from "./breadcrumbs";

export function ContactsPageClient() {
  const { t } = useKuma();

  return (
    <KumaSubpageShell>
    <div>
      <section className="bg-kuma-gradient py-12 text-white lg:py-16">
        <div className="kuma-container">
          <Breadcrumbs items={[{ label: t("navContacts") }]} className="mb-4 text-white/60 [&_span]:text-white" />
          <h1 className="text-4xl font-bold">{t("contactsTitle")}</h1>
        </div>
      </section>
      <ContactsSection />
    </div>
    </KumaSubpageShell>
  );
}
