"use client";

import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { GALLERY_IMAGES } from "@/lib/kuma/site-images";
import { KumaImage } from "./kuma-image";
import { cn } from "@/lib/utils";

export function KumaGallery() {
  const { t } = useKuma();

  return (
    <section id="gallery" className="kuma-section bg-gray-50 text-brand-navy">
      <div className="kuma-container">
        <ScrollReveal>
          <div className="mb-8 text-center xs:mb-10 md:mb-12 lg:mb-16">
            <span className="kuma-label">{t("galleryLabel")}</span>
            <h2 className="kuma-heading">{t("galleryTitle")}</h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 xs:gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal key={img.src} delay={i * 60}>
              <figure
                className={cn(
                  "group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm xs:rounded-xl sm:rounded-2xl",
                  i === 0 && "col-span-2 md:col-span-2 md:row-span-2"
                )}
              >
                <div
                  className={cn(
                    "overflow-hidden bg-slate-50",
                    i === 0
                      ? "aspect-[16/9] md:min-h-[320px] 3xl:min-h-[420px]"
                      : "aspect-[4/3] md:min-h-[180px] 3xl:min-h-[220px]"
                  )}
                >
                  <KumaImage
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
