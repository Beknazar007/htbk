import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="kuma-container py-32 text-center">
      <p>
        <Link href="/brand/hyundai-cv/">Бренд жөнүндө →</Link>
      </p>
      <meta httpEquiv="refresh" content="0;url=/brand/hyundai-cv/" />
    </main>
  );
}
