"use client";

import { cn } from "@/lib/utils";

type KumaImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** Hides baked-in bottom watermarks via frame crop — does not replace the file */
  cleanBottom?: boolean;
  loading?: "lazy" | "eager";
};

export function KumaImage({
  src,
  alt,
  className,
  cleanBottom = true,
  loading = "lazy",
}: KumaImageProps) {
  if (!cleanBottom) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={className} loading={loading} />
    );
  }

  return (
    <div className={cn("kuma-image-frame", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="kuma-image-frame__img" loading={loading} />
    </div>
  );
}
