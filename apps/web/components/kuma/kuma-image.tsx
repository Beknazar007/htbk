"use client";

import { cn } from "@/lib/utils";

type KumaImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Hides baked-in bottom watermarks via frame crop — does not replace the file */
  cleanBottom?: boolean;
  /** contain = product shots; cover = banners; frame = legacy crop */
  fit?: "frame" | "contain" | "cover";
  loading?: "lazy" | "eager";
};

export function KumaImage({
  src,
  alt,
  className,
  cleanBottom = true,
  fit = "frame",
  loading = "lazy",
}: KumaImageProps) {
  if (!cleanBottom || fit === "cover") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={alt}
        className={cn("h-full w-full object-cover", className)}
        loading={loading}
      />
    );
  }

  if (fit === "contain") {
    return (
      <div className={cn("kuma-image-frame kuma-image-frame--contain", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="kuma-image-frame__img" loading={loading} />
      </div>
    );
  }

  return (
    <div className={cn("kuma-image-frame", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="kuma-image-frame__img" loading={loading} />
    </div>
  );
}
