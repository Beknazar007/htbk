"use client";

import { ExternalLink, Navigation } from "lucide-react";
import { useKuma } from "./kuma-provider";
import {
  buildTwoGisEmbedUrl,
  buildTwoGisOpenUrl,
  buildTwoGisRouteUrl,
  type TwoGisPoint,
} from "@/lib/kuma/two-gis";
import { cn } from "@/lib/utils";

interface TwoGisMapProps {
  point: TwoGisPoint;
  zoom?: number;
  size?: "default" | "large";
  className?: string;
  title?: string;
}

export function TwoGisMap({
  point,
  zoom = 16,
  size = "default",
  className,
  title,
}: TwoGisMapProps) {
  const { t } = useKuma();

  const embedUrl = buildTwoGisEmbedUrl(point, zoom);
  const openUrl = buildTwoGisOpenUrl(point, zoom);
  const routeUrl = buildTwoGisRouteUrl(point);

  return (
    <div className={cn("overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm 3xl:rounded-3xl", className)}>
      <div
        className={cn(
          "relative w-full",
          size === "large"
            ? "min-h-[360px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[600px]"
            : "aspect-video min-h-[260px] sm:min-h-[300px]"
        )}
      >
        <iframe
          title={title ?? "2GIS Map"}
          src={embedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-col gap-2 border-t border-gray-100 bg-gray-50 p-3 xs:flex-row xs:gap-3 xs:p-4">
        <a
          href={routeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kuma-touch inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-accent/90"
        >
          <Navigation className="h-4 w-4 shrink-0" />
          {t("twoGisRoute")}
        </a>
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="kuma-touch inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-brand-navy/20 bg-white px-4 py-3 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy/5"
        >
          <ExternalLink className="h-4 w-4 shrink-0" />
          {t("twoGisOpen")}
        </a>
      </div>
    </div>
  );
}
