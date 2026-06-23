"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SectionBanner } from "./section-banner";
import { PromoVideoPlayer } from "./promo-video-player";
import { PROMO_VIDEOS } from "@/lib/kuma/promo-videos";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { TEST_DRIVE_VIDEOS, getPromoById } from "@/lib/kuma/videos";

function TestDriveCard({
  titleKey,
  descKey,
  previewImage,
  onWatch,
  t,
}: {
  titleKey: string;
  descKey: string;
  previewImage: string;
  onWatch: () => void;
  t: (key: string) => string;
}) {
  return (
    <article className="kuma-card group flex h-full flex-col overflow-hidden">
      <button
        type="button"
        onClick={onWatch}
        className="relative aspect-video w-full overflow-hidden bg-slate-100 text-left"
        aria-label={t(titleKey)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewImage}
          alt={t(titleKey)}
          className="kuma-model-card-image h-full w-full"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-brand-navy/10 transition-colors group-hover:from-brand-navy/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent shadow-lg shadow-brand-accent/40 transition-transform group-hover:scale-110 xs:h-16 xs:w-16">
            <Play className="ml-1 h-6 w-6 fill-white text-white xs:h-7 xs:w-7" />
          </span>
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-brand-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white xs:text-xs">
          {t("videosTestDriveBadge")}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4 xs:p-5">
        <h3 className="mb-2 text-base font-bold text-brand-navy xs:text-lg">{t(titleKey)}</h3>
        <p className="mb-4 flex-1 text-xs leading-relaxed text-brand-navy/70 xs:text-sm">
          {t(descKey)}
        </p>
        <button
          type="button"
          onClick={onWatch}
          className="kuma-btn-primary w-full text-center text-xs xs:text-sm"
        >
          {t("videosWatchBtn")}
        </button>
      </div>
    </article>
  );
}

export function VideoSection() {
  const { t } = useKuma();
  const [activePromoId, setActivePromoId] = useState<string | null>(null);

  const activePromo = activePromoId
    ? getPromoById(activePromoId, PROMO_VIDEOS)
    : undefined;

  return (
    <section id="videos" className="kuma-section bg-white">
      <div className="kuma-container">
        <SectionBanner
          image={SECTION_BANNERS.gallery}
          label={t("videosLabel")}
          title={t("videosTitle")}
          subtitle={t("videosSubtitle")}
        />

        {/* Promo video reviews — 10s per model */}
        <div className="mb-10 xs:mb-12 md:mb-14">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3 xs:mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent xs:text-sm">
              {t("videosReviews")}
            </h3>
            <span className="rounded-full border border-brand-accent/20 bg-brand-accent/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-accent xs:text-xs">
              {t("videosPromoNote")}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 xs:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-7">
            {PROMO_VIDEOS.map((promo, i) => (
              <ScrollReveal key={promo.id} delay={i * 80}>
                <article className="kuma-card overflow-hidden">
                  <PromoVideoPlayer promo={promo} t={t} />
                  <div className="border-t border-gray-100 p-4 xs:p-5">
                    <h4 className="mb-1 text-sm font-bold text-brand-navy xs:text-base">
                      {t(promo.titleKey)}
                    </h4>
                    <p className="text-xs text-brand-navy/65 xs:text-sm">{t(promo.descKey)}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Test-drive videos — GT8, GT11, Electric */}
        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3 xs:mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-accent xs:text-sm">
              {t("videosTestDrive")}
            </h3>
            <span className="text-[10px] font-medium text-brand-navy/50 xs:text-xs">
              {t("videosTestDriveNote")}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 xs:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEST_DRIVE_VIDEOS.map((video, i) => (
              <ScrollReveal key={video.id} delay={i * 100}>
                <TestDriveCard
                  titleKey={video.titleKey}
                  descKey={video.descKey}
                  previewImage={video.previewImage}
                  onWatch={() => setActivePromoId(video.promoId)}
                  t={t}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Test-drive / promo playback modal */}
      {activePromo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePromoId(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePromoId(null)}
              className="kuma-touch absolute -top-12 right-0 flex items-center gap-2 text-sm text-white/80 hover:text-white"
            >
              <X className="h-5 w-5" />
              {t("videosClose")}
            </button>
            <PromoVideoPlayer promo={activePromo} t={t} autoPlay className="rounded-2xl" />
            <div className="mt-4 text-center">
              <h4 className="text-lg font-bold text-white">{t(activePromo.titleKey)}</h4>
              <p className="mt-1 text-sm text-white/70">{t(activePromo.descKey)}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
