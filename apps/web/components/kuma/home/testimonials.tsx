"use client";

import { useKuma } from "../kuma-provider";
import { FadeUp } from "@/lib/kuma/motion";

const TESTIMONIALS = [
  { ru: { name: "Азамат К.", text: "Купили парк Mighty GT11 для дистрибуции. Отличная экономичность и сервис в Бишкеке." }, ky: { name: "Азамат К.", text: "Mighty GT11 парк сатып алдыk. Экономия жана сервис сонун." } },
  { ru: { name: "Бакыт Т.", text: "Лизинг оформили за 2 дня. Профессиональная команда HTBK." }, ky: { name: "Бакыт Т.", text: "Лизинг 2 күндө. HTBK командасы профессионал." } },
  { ru: { name: "Эльдар М.", text: "Рефрижератор на Mighty GT8 — идеально для нашей логистики продуктов." }, ky: { name: "Эльдар М.", text: "GT8 рефрижератор — тамак-аш логистикасы үчүн идеалдуу." } },
];

export function TestimonialsSection() {
  const { t, locale } = useKuma();

  return (
    <section className="kuma-section">
      <div className="kuma-container">
        <FadeUp className="mb-10 text-center">
          <h2 className="kuma-heading text-kuma-900">{t("testimonialsTitle")}</h2>
        </FadeUp>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <FadeUp key={i} delay={i * 80}>
              <blockquote className="h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <p className="text-gray-700 leading-relaxed">&ldquo;{item[locale].text}&rdquo;</p>
                <footer className="mt-4 font-semibold text-kuma-800">{item[locale].name}</footer>
              </blockquote>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
