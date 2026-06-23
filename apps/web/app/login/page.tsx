"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

const ROLE_REDIRECT: Record<string, string> = {
  ADMIN: "/admin",
  TEACHER: "/teacher",
  STUDENT: "/student",
  PARENT: "/parent",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Email же сырсөз туура эмес");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/v1/auth/me");
    const json = await res.json();
    const role = json.data?.primaryRole ?? "STUDENT";
    router.push(ROLE_REDIRECT[role] ?? "/student");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream-50 px-4">
      <div className="noor-card w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-noor-gradient text-2xl text-white">
            ☪
          </div>
          <h1 className="text-2xl font-bold text-noor-900">Кирүү</h1>
          <p className="mt-1 text-sm text-noor-500">NoorJourney платформасына кош келиңиз</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-noor-700">Email</label>
            <input
              type="email"
              className="noor-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-noor-700">Сырсөз</label>
            <input
              type="password"
              className="noor-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Кирүүдө..." : "Кирүү"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-noor-500">
          Аккаунт жокбу?{" "}
          <Link href="/register" className="font-medium text-noor-700 hover:underline">
            Катталуу
          </Link>
        </p>

        <div className="mt-6 rounded-xl bg-noor-50 p-4 text-xs text-noor-600">
          <p className="font-medium">Демо аккаунттар:</p>
          <p>student@noorjourney.kg / password123</p>
          <p>ustaz@noorjourney.kg / password123</p>
        </div>
      </div>
    </div>
  );
}
