"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "STUDENT",
    inviteCode: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/v1/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const json = await res.json();
    if (!res.ok) {
      setError(json.error ?? "Катталуу ийгиликсиз");
      setLoading(false);
      return;
    }

    router.push("/login?registered=1");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream-50 px-4 py-8">
      <div className="noor-card w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-noor-900">Катталуу</h1>
          <p className="mt-1 text-sm text-noor-500">NoorJourney саякатына кошулуңуз</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Аты-жөнү</label>
            <input
              className="noor-input"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Email</label>
            <input
              type="email"
              className="noor-input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Сырсөз</label>
            <input
              type="password"
              className="noor-input"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              minLength={6}
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Роль</label>
            <select
              className="noor-input"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="STUDENT">Окуучу</option>
              <option value="TEACHER">Устаз</option>
              <option value="PARENT">Ата-эне</option>
            </select>
          </div>
          {form.role === "STUDENT" && (
            <div>
              <label className="mb-1.5 block text-sm font-medium">Чакыруу коду (optional)</label>
              <input
                className="noor-input"
                value={form.inviteCode}
                onChange={(e) => setForm({ ...form, inviteCode: e.target.value })}
                placeholder="DEMO-GROUP-001"
              />
            </div>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Катталууда..." : "Катталуу"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-noor-500">
          Аккаунт барбы?{" "}
          <Link href="/login" className="font-medium text-noor-700 hover:underline">
            Кирүү
          </Link>
        </p>
      </div>
    </div>
  );
}
