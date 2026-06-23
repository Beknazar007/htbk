"use client";

import { useState } from "react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { calculateLeasing } from "@/lib/kuma/leasing";
import { IMAGES } from "@/lib/kuma/constants";
import { CheckCircle } from "lucide-react";

export function KumaLeasing() {
  const { t } = useKuma();
  const [price, setPrice] = useState(3000000);
  const [downPayment, setDownPayment] = useState(500000);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const result = calculateLeasing(price, downPayment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section id="leasing" className="kuma-section bg-gray-50">
      <div className="kuma-container">
        <div className="grid items-stretch gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 2xl:gap-16">
          <ScrollReveal direction="left">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[320px] md:min-h-[360px] 2xl:min-h-[420px] 2xl:rounded-3xl">
              <img
                src={IMAGES.leasing}
                alt="Leasing"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-kuma-gradient opacity-60" />
              <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-8 2xl:p-10">
                <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl 2xl:text-4xl">
                  {t("leasingTitle")}
                </h2>
                <ul className="space-y-2 sm:space-y-3">
                  {[t("leasingRate"), t("leasingTerm"), t("leasingFast"), t("leasingDocs")].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2 text-sm sm:gap-3 sm:text-base 2xl:text-lg">
                        <CheckCircle className="h-4 w-4 shrink-0 text-kuma-300 sm:h-5 sm:w-5" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="kuma-btn-primary mt-6 w-full sm:mt-8 sm:w-fit 2xl:mt-10"
                >
                  {t("leasingApply")}
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="h-full rounded-2xl bg-white p-5 shadow-lg sm:p-6 md:p-8 2xl:rounded-3xl 2xl:p-10">
              <h3 className="mb-5 text-xl font-bold text-kuma-800 sm:mb-6 sm:text-2xl 2xl:text-3xl">
                {t("calcTitle")}
              </h3>
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-700 sm:text-sm">
                    {t("calcPrice")}
                  </label>
                  <input
                    type="range"
                    min={1000000}
                    max={15000000}
                    step={100000}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full accent-kuma-600"
                  />
                  <p className="mt-1 text-right text-base font-semibold text-kuma-700 sm:text-lg 2xl:text-xl">
                    {price.toLocaleString()} сом
                  </p>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-medium text-gray-700 sm:text-sm">
                    {t("calcDown")}
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={price * 0.5}
                    step={50000}
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full accent-kuma-600"
                  />
                  <p className="mt-1 text-right text-base font-semibold text-kuma-700 sm:text-lg 2xl:text-xl">
                    {downPayment.toLocaleString()} сом
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 rounded-xl bg-kuma-50 p-4 sm:grid-cols-3 sm:gap-4 sm:p-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 sm:text-sm">{t("calcMonthly")}</p>
                    <p className="text-xl font-bold text-kuma-700 sm:text-2xl 2xl:text-3xl">
                      {result.monthlyPayment.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-600 sm:text-sm">{t("calcTerm")}</p>
                    <p className="text-xl font-bold text-kuma-700 sm:text-2xl 2xl:text-3xl">
                      {result.totalMonths} {t("calcMonths")}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-600 sm:text-sm">{t("calcRate")}</p>
                    <p className="text-xl font-bold text-kuma-700 sm:text-2xl 2xl:text-3xl">
                      {result.interestRate}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 sm:items-center sm:p-4">
          <div className="max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:max-w-md sm:rounded-2xl sm:p-8">
            {submitted ? (
              <p className="text-center text-base font-medium text-kuma-700 sm:text-lg">
                {t("applySuccess")}
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-kuma-800 sm:text-xl">{t("leasingApply")}</h3>
                <input
                  required
                  placeholder={t("applyName")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-kuma-500 sm:text-base"
                />
                <input
                  required
                  type="tel"
                  placeholder={t("applyPhone")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-kuma-500 sm:text-base"
                />
                <textarea
                  placeholder={t("applyMessage")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-kuma-500 sm:text-base"
                />
                <div className="flex gap-3">
                  <button type="submit" className="kuma-btn-primary flex-1">
                    {t("applySubmit")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 rounded-lg border border-gray-300 py-3 text-gray-600"
                  >
                    ✕
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
