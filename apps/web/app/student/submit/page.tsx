"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Plan = {
  id: string;
  title: string;
  items: { id: string; type: string; targetRepetitions?: number | null }[];
};

export default function SubmitPage() {
  const router = useRouter();
  const [plan, setPlan] = useState<Plan | null>(null);
  const [pagesRead, setPagesRead] = useState(1);
  const [repetitionCount, setRepetitionCount] = useState(3);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("/api/v1/plans/today")
      .then((r) => r.json())
      .then((j) => setPlan(j.data));
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/v1/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dailyPlanId: plan?.id,
        pagesRead,
        repetitionCount,
        notes: notes || undefined,
      }),
    });

    const json = await res.json();
    if (!res.ok) {
      setError(json.error ?? "Ката кетти");
      setLoading(false);
      return;
    }

    setSuccess(true);
    setTimeout(() => router.push("/student/submissions"), 1500);
  }

  if (success) {
    return (
      <div className="noor-card text-center py-16">
        <p className="text-5xl mb-4">✅</p>
        <h2 className="text-xl font-bold text-noor-900">Тапшыруу ийгиликтүү!</h2>
        <p className="text-noor-500 mt-2">Аллах кабыл кылсын</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <h1 className="text-2xl font-bold">Тапшыруу жасоо</h1>

      {plan && (
        <div className="noor-card bg-noor-50">
          <p className="text-sm text-noor-500">Бүгүнкү план</p>
          <p className="font-medium">{plan.title}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="noor-card space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Окулган беттер</label>
          <input
            type="number"
            min={0}
            step={0.5}
            className="noor-input"
            value={pagesRead}
            onChange={(e) => setPagesRead(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Кайталоо саны</label>
          <input
            type="number"
            min={0}
            className="noor-input"
            value={repetitionCount}
            onChange={(e) => setRepetitionCount(Number(e.target.value))}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Эскертүү (optional)</label>
          <textarea
            className="noor-input min-h-[80px]"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Бүгүнкү окуу жөнүндө..."
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Жөнөтүлүүдө..." : "Тапшыруу"}
        </Button>
      </form>
    </div>
  );
}
