import { prisma } from "@noorjourney/database";
import { requireRole } from "@/lib/session";
import { formatDate } from "@/lib/utils";

export default async function AdminUsersPage() {
  await requireRole("ADMIN");

  const users = await prisma.user.findMany({
    include: { roles: true },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  const roleLabels: Record<string, string> = {
    ADMIN: "Админ",
    TEACHER: "Устаз",
    STUDENT: "Окуучу",
    PARENT: "Ата-эне",
  };

  const statusLabels: Record<string, string> = {
    ACTIVE: "Активдүү",
    INACTIVE: "Пассивдүү",
    SUSPENDED: "Токтотулган",
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Колдонуучулар</h1>

      <div className="noor-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-noor-100 text-left text-noor-500">
              <th className="pb-3 pr-4">Аты</th>
              <th className="pb-3 pr-4">Email</th>
              <th className="pb-3 pr-4">Роль</th>
              <th className="pb-3 pr-4">Статус</th>
              <th className="pb-3">Катталган</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-noor-50">
                <td className="py-3 pr-4 font-medium">{u.fullName}</td>
                <td className="py-3 pr-4 text-noor-600">{u.email}</td>
                <td className="py-3 pr-4">
                  {u.roles.map((r) => roleLabels[r.role]).join(", ")}
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={`noor-badge ${
                      u.status === "ACTIVE" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {statusLabels[u.status]}
                  </span>
                </td>
                <td className="py-3 text-noor-500">{formatDate(u.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
