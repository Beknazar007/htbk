"use client";

import { useEffect, useState } from "react";
import { Play, RotateCcw } from "lucide-react";
import type { PromoVideo } from "@/lib/kuma/promo-videos";
import { PROMO_DURATION_MS } from "@/lib/kuma/promo-videos";
import { cn } from "@/lib/utils";

type PromoVideoPlayerProps = {
  promo: PromoVideo;
  t: (key: string) => string;
  autoPlay?: boolean;
  className?: string;
};

export function PromoVideoPlayer({
  promo,
  t,
  autoPlay = false,
  className,
}: PromoVideoPlayerProps) {
  const [playing, setPlaying] = useState(autoPlay);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!playing) return;
    const id = setTimeout(() => {
      setCycle((c) => c + 1);
    }, PROMO_DURATION_MS);
    return () => clearTimeout(id);
  }, [playing, cycle]);

  const start = () => {
    setCycle((c) => c + 1);
    setPlaying(true);
  };

  const replay = () => {
    setCycle((c) => c + 1);
    setPlaying(true);
  };

  return (
    <div
      className={cn(
        "group relative aspect-video overflow-hidden rounded-xl bg-[#002C5F] shadow-xl ring-1 ring-brand-accent/20",
        className
      )}
    >
      {/* Truck image — Ken Burns zoom */}
      <div
        key={cycle}
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          playing ? "kuma-promo-ken-burns opacity-100" : "opacity-80"
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={promo.image}
          alt={promo.model}
          className="h-full w-full object-contain object-bottom"
          draggable={false}
        />
      </div>

      {/* Hyundai brand gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#002C5F] via-[#002C5F]/20 to-[#002C5F]/60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#002C5F]/50 via-transparent to-transparent" />

      {/* Animated text layers — 10s timeline */}
      {playing && (
        <div key={`overlay-${cycle}`} className="pointer-events-none absolute inset-0">
          <div className="kuma-promo-brand absolute left-4 top-4 xs:left-5 xs:top-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/90 xs:text-xs">
              Hyundai
            </span>
            <span className="block text-[9px] font-medium uppercase tracking-widest text-brand-accent-light xs:text-[10px]">
              Truck &amp; Bus
            </span>
          </div>

          <div className="kuma-promo-title absolute bottom-[38%] left-4 right-4 xs:left-5 xs:right-5">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-accent-light xs:text-xs">
              GT Series
            </p>
            <h3 className="text-2xl font-black tracking-tight text-white xs:text-3xl md:text-4xl">
              {promo.model}
            </h3>
            <p className="mt-1 text-xs font-medium text-white/80 xs:text-sm">{t(promo.payloadKey)}</p>
          </div>

          <div className="kuma-promo-advantages absolute bottom-4 left-4 right-4 space-y-1 xs:bottom-5 xs:left-5 xs:right-5">
            {promo.advantageKeys.map((key) => (
              <p
                key={key}
                className="flex items-center gap-2 text-[11px] font-medium text-white/90 xs:text-xs"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-brand-accent-light" />
                {t(key)}
              </p>
            ))}
          </div>

          <div className="kuma-promo-tagline absolute bottom-4 right-4 hidden text-right xs:block xs:bottom-5 xs:right-5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-brand-accent-light">
              {t("promoTagline")}
            </p>
          </div>
        </div>
      )}

      {/* Static preview when not playing */}
      {!playing && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#002C5F] to-transparent p-4 xs:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-accent-light">
            {t("promoPreviewLabel")}
          </p>
          <h3 className="text-lg font-bold text-white xs:text-xl">{t(promo.titleKey)}</h3>
        </div>
      )}

      {/* Controls */}
      {!playing ? (
        <button
          type="button"
          onClick={start}
          className="absolute inset-0 flex items-center justify-center bg-[#002C5F]/20 transition-colors hover:bg-[#002C5F]/35"
          aria-label={t(promo.titleKey)}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent shadow-lg shadow-brand-accent/40 transition-transform group-hover:scale-110 xs:h-16 xs:w-16">
            <Play className="ml-1 h-6 w-6 fill-white text-white xs:h-7 xs:w-7" />
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={replay}
          className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm transition-colors hover:bg-black/55 xs:text-xs"
          aria-label={t("promoReplay")}
        >
          <RotateCcw className="h-3 w-3" />
          10s
        </button>
      )}

      {/* Progress bar */}
      {playing && (
        <div
          key={`progress-${cycle}`}
          className="kuma-promo-progress absolute bottom-0 left-0 h-1 bg-brand-accent-light"
        />
      )}
    </div>
  );
}
