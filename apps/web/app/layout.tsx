import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE } from "@/lib/kuma/content/site";
import { getSiteUrl } from "@/lib/kuma/site-url";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const appUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: `${SITE.name.ky} — Кыргызстандагы коммерциялык унаалар`,
  description:
    "Hyundai Mighty GT Series: ишенимдүү жүк ташуучулар, сервис, лизинг жана корпоративдик чечимдер.",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, statusBarStyle: "default", title: SITE.shortName },
  openGraph: {
    type: "website",
    locale: "ky_KG",
    alternateLocale: ["ru_RU"],
    siteName: SITE.name.ru,
    title: SITE.name.ru,
    description: "Hyundai Mighty — жүк ташуучулар, сервис жана лизинг Кыргызстанда",
    images: [{ url: "/images/hero/slide-gt8.png", width: 1200, height: 630, alt: "Hyundai Mighty" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name.ru,
    description: "Hyundai Mighty — коммерциялык унаалар Кыргызстанда",
    images: ["/images/hero/slide-gt8.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
