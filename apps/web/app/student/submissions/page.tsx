import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";
import { formatDate } from "@/lib/utils";

export default async function SubmissionsPage() {
  const session = await requireRole("STUDENT");

  const submissions = await prisma.submission.findMany({
    where: { studentId: session.user.id },
    include: { review: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Тапшыруу тарыхы</h1>

      {submissions.length === 0 ? (
        <div className="noor-card text-center py-12 text-noor-500">
          Азырынча тапшыруу жок
        </div>
      ) : (
        <div className="space-y-3">
          {submissions.map((s) => (
            <div key={s.id} className="noor-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{formatDate(s.submissionDate)}</p>
                  <p className="text-sm text-noor-500">
                    {s.pagesRead} бет • {s.repetitionCount} кайталоо
                  </p>
                </div>
                <span
                  className={`noor-badge ${
                    s.review?.decision === "APPROVED"
                      ? "bg-green-100 text-green-700"
                      : s.review?.decision === "REJECTED"
                        ? "bg-red-100 text-red-700"
                        : "bg-noor-100 text-noor-700"
                  }`}
                >
                  {s.review?.decision === "APPROVED"
                    ? "Макул ✅"
                    : s.review?.decision === "REJECTED"
                      ? "Четке кагылды"
                      : s.review?.decision === "NEEDS_REVISION"
                        ? "Кайра иштетүү"
                        : "Күтүүдө"}
                </span>
              </div>
              {s.review?.feedback && (
                <p className="mt-3 rounded-lg bg-cream-100 p-3 text-sm text-noor-700">
                  💬 {s.review.feedback}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
