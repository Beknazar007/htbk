"use client";

import Link from "next/link";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { SectionBanner } from "./section-banner";
import { STOCK_INVENTORY } from "@/lib/kuma/stock-inventory";
import { getStockItemHref } from "@/lib/kuma/stock-links";
import { SECTION_BANNERS } from "@/lib/kuma/site-images";
import { buildWhatsAppUrl } from "@/lib/kuma/constants";
import { KumaImage } from "./kuma-image";
import { WhatsAppIcon } from "./social-icons";
import { cn } from "@/lib/utils";

const STATUS_DOT: Record<string, string> = {
  in_stock: "bg-emerald-500",
  on_order: "bg-amber-400",
};

export function StockAvailability() {
  const { t, locale } = useKuma();

  const whatsappHref = buildWhatsAppUrl(
    locale === "ky"
      ? "Саламатсызбы! Кампадагы жеткиликтүү техникалар боюнча суроо бергим келет."
      : "Здравствуйте! Интересует техника в наличии на складе."
  );

  return (
    <section id="stock" className="kuma-section bg-white">
      <div className="kuma-container">
        <SectionBanner
          image={SECTION_BANNERS.stock}
          label={t("stockLabel")}
          title={t("stockTitle")}
          titleLine2={t("stockTitleLine2")}
          subtitle={t("stockSubtitle")}
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 xs:gap-6 md:grid-cols-3">
          {STOCK_INVENTORY.map((item, idx) => (
            <ScrollReveal key={item.model} delay={idx * 80}>
              <Link
                href={getStockItemHref(item)}
                className="kuma-card group block overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <KumaImage
                    src={item.image}
                    alt={t(item.nameKey)}
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4 xs:p-5">
                  <div className="min-w-0">
                    <div className="mb-1 flex items-center gap-2">
                      <span
                        className={cn("h-2 w-2 shrink-0 rounded-full", STATUS_DOT[item.status])}
                        aria-hidden
                      />
                      <span
                        className={cn(
                          "text-[10px] font-bold uppercase tracking-wide xs:text-xs",
                          item.status === "in_stock" ? "text-emerald-600" : "text-amber-600"
                        )}
                      >
                        {item.status === "in_stock" ? t("stockInStock") : t("stockOnOrder")}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-accent xs:text-xl">
                      {t(item.nameKey)}
                    </h3>
                  </div>
                  {item.count != null ? (
                    <p className="shrink-0 text-xl font-black text-brand-accent xs:text-2xl">
                      {item.count}
                      <span className="ml-1 text-xs font-semibold text-gray-500">{t("stockUnits")}</span>
                    </p>
                  ) : null}
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-8 flex justify-center xs:mt-10">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="kuma-btn-whatsapp inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold xs:text-base"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              {t("stockReserveBtn")}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
