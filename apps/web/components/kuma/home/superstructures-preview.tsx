"use client";

import Link from "next/link";
import { useKuma } from "../kuma-provider";
import { SUPERSTRUCTURES } from "@/lib/kuma/content/superstructures";
import { FadeUp } from "@/lib/kuma/motion";

export function SuperstructuresPreview() {
  const { t, locale } = useKuma();
  const preview = SUPERSTRUCTURES.slice(0, 8);

  return (
    <section className="kuma-section bg-kuma-900 text-white">
      <div className="kuma-container">
        <FadeUp className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="kuma-heading">{t("superstructuresTitle")}</h2>
            <p className="mt-3 text-white/70">{t("superstructuresSubtitle")}</p>
          </div>
          <Link href="/superstructures" className="kuma-btn-outline shrink-0 border-white/30 text-sm">
            {t("superstructuresAll")}
          </Link>
        </FadeUp>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {preview.map((s, i) => (
            <FadeUp key={s.slug} delay={i * 60}>
              <Link
                href={`/superstructures/${s.slug}`}
                className="group relative block aspect-square overflow-hidden rounded-xl"
              >
                <img src={s.image} alt={t(s.nameKey)} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-kuma-900 via-kuma-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-bold">{t(s.nameKey)}</h3>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
