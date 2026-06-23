"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { FAQ_ITEMS } from "@/lib/kuma/faq";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const { t } = useKuma();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <ScrollReveal>
          <div className="mb-8 text-center xs:mb-10 md:mb-12">
            <span className="kuma-label">{t("faqLabel")}</span>
            <h2 className="kuma-heading text-brand-black">{t("faqTitle")}</h2>
            <p className="kuma-subheading mx-auto mt-3 max-w-2xl text-gray-600">
              {t("faqSubtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl space-y-3 3xl:max-w-4xl">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={item.questionKey} delay={index * 60}>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="kuma-touch flex w-full items-center justify-between gap-4 px-5 py-4 text-left xs:px-6 xs:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-brand-navy xs:text-base 3xl:text-lg">
                      {t(item.questionKey)}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-brand-accent transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-gray-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-gray-600 xs:px-6 xs:pb-6 xs:text-base 3xl:text-lg">
                        {t(item.answerKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
