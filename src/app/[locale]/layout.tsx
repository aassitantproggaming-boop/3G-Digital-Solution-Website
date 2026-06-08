import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "3G Digital Solution",
  description: "Solusi Digital Terdepan untuk Bisnis Global Anda",
};

const locales = ["id", "en", "zh", "de", "es", "fr"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = (await getRequestConfig())["messages"];

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
