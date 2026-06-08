import type { Metadata } from "next";
import { notFound } from "next/navigation";

const locales = ["id", "en", "zh", "de", "es", "fr"];

export const metadata: Metadata = {
  title: "3G Digital Solution",
  description: "Solusi Digital Terdepan untuk Bisnis Global Anda",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
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

  return <>{children}</>;
}
