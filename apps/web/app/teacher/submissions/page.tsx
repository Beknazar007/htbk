"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Submission = {
  id: string;
  pagesRead: number;
  repetitionCount: number;
  notes?: string | null;
  submittedAt?: string | null;
  student: { fullName: string };
};

export default function TeacherSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [reviewing, setReviewing] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  async function load() {
    const res = await fetch("/api/v1/reviews/pending");
    const json = await res.json();
    setSubmissions(json.data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function submitReview(submissionId: string, decision: string) {
    setReviewing(submissionId);
    await fetch("/api/v1/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submissionId, decision, feedback: feedback || undefined }),
    });
    setFeedback("");
    setReviewing(null);
    load();
  }

  if (loading) return <p className="text-noor-500">Жүктөлүүдө...</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Текшерүү кезеги</h1>

      {submissions.length === 0 ? (
        <div className="noor-card text-center py-12">
          <p className="text-4xl mb-3">✅</p>
          <p className="text-noor-600">Бардык тапшыруулар текшерилди</p>
        </div>
      ) : (
        submissions.map((s) => (
          <div key={s.id} className="noor-card space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">{s.student.fullName}</p>
                <p className="text-sm text-noor-500">
                  {s.pagesRead} бет • {s.repetitionCount} кайталоо
                </p>
              </div>
            </div>
            {s.notes && (
              <p className="rounded-lg bg-cream-100 p-3 text-sm">{s.notes}</p>
            )}
            <textarea
              className="noor-input min-h-[60px]"
              placeholder="Пикир жазыңыз..."
              value={reviewing === s.id ? feedback : ""}
              onChange={(e) => {
                setReviewing(s.id);
                setFeedback(e.target.value);
              }}
            />
            <div className="flex gap-3">
              <Button
                onClick={() => submitReview(s.id, "APPROVED")}
                className="flex-1"
              >
                ✅ Макулдоо
              </Button>
              <Button
                variant="secondary"
                onClick={() => submitReview(s.id, "NEEDS_REVISION")}
                className="flex-1"
              >
                🔄 Кайра иштетүү
              </Button>
              <Button
                variant="danger"
                onClick={() => submitReview(s.id, "REJECTED")}
                className="flex-1"
              >
                ❌ Четке кагуу
              </Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
