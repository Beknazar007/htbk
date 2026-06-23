import type { Metadata, Viewport } from "next";
import { Inter, Amiri } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import { getServerLocale } from "@/lib/locale";
import { isRtl } from "@noorjourney/shared";
import { SITE } from "@/lib/kuma/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getServerLocale();

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"} suppressHydrationWarning>
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" async />
      </head>
      <body className={`${inter.variable} ${amiri.variable} font-sans`}>
        <AppProviders locale={locale}>{children}</AppProviders>
      </body>
    </html>
  );
}
