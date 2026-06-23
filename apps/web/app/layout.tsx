import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/kuma/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${SITE.name.ky} — Кыргызстандагы коммерциялык унаалар`,
  description:
    "Hyundai Mighty GT Series: ишенимдүү жүк ташуучулар, сервис, лизинг жана корпоративдик чечимдер.",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "default", title: SITE.shortName },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#002C5F" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0B" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ky" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
