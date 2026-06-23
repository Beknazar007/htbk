"use client";

import { useState } from "react";
import { useKuma } from "./kuma-provider";
import { ScrollReveal } from "./scroll-reveal";
import { calculateLeasing } from "@/lib/kuma/leasing";
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
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Leasing"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-kuma-gradient opacity-60" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h2 className="mb-4 text-3xl font-bold">{t("leasingTitle")}</h2>
                <ul className="space-y-3">
                  {[t("leasingRate"), t("leasingTerm"), t("leasingFast"), t("leasingDocs")].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 shrink-0 text-kuma-300" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
                <button
                  onClick={() => setShowForm(true)}
                  className="kuma-btn-primary mt-8 w-fit"
                >
                  {t("leasingApply")}
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-kuma-800">{t("calcTitle")}</h3>
              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
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
                  <p className="mt-1 text-right text-lg font-semibold text-kuma-700">
                    {price.toLocaleString()} сом
                  </p>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
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
                  <p className="mt-1 text-right text-lg font-semibold text-kuma-700">
                    {downPayment.toLocaleString()} сом
                  </p>
                </div>
                <div className="grid gap-4 rounded-xl bg-kuma-50 p-6 sm:grid-cols-3">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">{t("calcMonthly")}</p>
                    <p className="text-2xl font-bold text-kuma-700">
                      {result.monthlyPayment.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">{t("calcTerm")}</p>
                    <p className="text-2xl font-bold text-kuma-700">
                      {result.totalMonths} {t("calcMonths")}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600">{t("calcRate")}</p>
                    <p className="text-2xl font-bold text-kuma-700">{result.interestRate}%</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
            {submitted ? (
              <p className="text-center text-lg font-medium text-kuma-700">{t("applySuccess")}</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-kuma-800">{t("leasingApply")}</h3>
                <input
                  required
                  placeholder={t("applyName")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-kuma-500"
                />
                <input
                  required
                  type="tel"
                  placeholder={t("applyPhone")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-kuma-500"
                />
                <textarea
                  placeholder={t("applyMessage")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-kuma-500"
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
