"use client";

import { useKtm } from "@/components/ktm/ktm-provider";
import { KtmPageShell } from "@/components/ktm/ktm-page-shell";
import { FadeIn } from "@/components/ktm/motion";
import { KTM_IMAGES } from "@/lib/ktm/images";

export function AboutPage() {
  const { t } = useKtm();

  return (
    <KtmPageShell>
      <section className="bg-ktm-navy py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black sm:text-4xl">{t("aboutTitle")}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={KTM_IMAGES.atlasFleet}
              alt=""
              className="rounded-2xl object-cover shadow-xl"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-xl font-bold text-ktm-navy">{t("aboutStory")}</h2>
            <p className="mt-4 leading-relaxed text-ktm-gray-dark">{t("aboutStoryText")}</p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div className="rounded-2xl border border-gray-100 bg-ktm-gray p-8">
              <h3 className="text-lg font-bold text-ktm-red">{t("aboutMission")}</h3>
              <p className="mt-3 text-ktm-gray-dark">{t("aboutMissionText")}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-gray-100 bg-ktm-gray p-8">
              <h3 className="text-lg font-bold text-ktm-red">{t("aboutVision")}</h3>
              <p className="mt-3 text-ktm-gray-dark">{t("aboutVisionText")}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <h2 className="mb-6 mt-16 text-xl font-bold">{t("aboutValues")}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["aboutValue1", "aboutValue2", "aboutValue3", "aboutValue4"] as const).map((key) => (
              <div
                key={key}
                className="rounded-xl border border-ktm-red/20 bg-white p-5 text-center font-semibold text-ktm-navy shadow-sm"
              >
                {t(key)}
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </KtmPageShell>
  );
}
