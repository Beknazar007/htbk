"use client";

import Link from "next/link";
import { KumaSubpageShell } from "@/components/kuma/kuma-subpage-shell";
import { useKuma } from "@/components/kuma/kuma-provider";
import { Breadcrumbs } from "@/components/kuma/breadcrumbs";
import { SITE } from "@/lib/kuma/content/site";
import { KumaImage } from "@/components/kuma/kuma-image";
import { MEDIA } from "@/lib/kuma/media";

export function CompanyPageClient() {
  const { t, locale } = useKuma();

  return (
    <KumaSubpageShell>
      <section className="relative min-h-[45vh] overflow-hidden">
        <KumaImage src={MEDIA.busLineup} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-kuma-900/75" />
        <div className="relative z-10 flex min-h-[45vh] flex-col justify-end kuma-container pb-12">
          <Breadcrumbs items={[{ label: t("navCompany") }]} className="mb-4 text-white/60 [&_span]:text-white" />
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{SITE.name[locale]}</h1>
          <p className="mt-3 max-w-2xl text-white/85">{t("companyHeroSub")}</p>
        </div>
      </section>

      <section className="kuma-section">
        <div className="kuma-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-kuma-900">{t("companyAboutTitle")}</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">{t("companyAboutBody")}</p>
          </div>
          <div className="rounded-2xl border border-kuma-100 bg-kuma-50 p-6">
            <h3 className="font-bold text-kuma-900">{t("navContacts")}</h3>
            <p className="mt-3 text-gray-700">{SITE.address[locale]}</p>
            <a href={SITE.phoneHref} className="mt-2 block font-semibold text-kuma-600">{SITE.phone}</a>
            <a href={SITE.whatsapp} className="kuma-btn-primary mt-6 inline-flex">{t("consultBtn")}</a>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50 py-14">
        <div className="kuma-container grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { href: "/company", key: "navCompany" },
            { href: "/brand/hyundai-cv", key: "navBrand" },
            { href: "/products", key: "navProducts" },
            { href: "/news", key: "navNews" },
          ].map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="rounded-2xl bg-white p-6 text-center font-bold text-kuma-800 shadow-sm transition-shadow hover:shadow-lg"
            >
              {t(link.key)}
            </Link>
          ))}
        </div>
      </section>
    </KumaSubpageShell>
  );
}
