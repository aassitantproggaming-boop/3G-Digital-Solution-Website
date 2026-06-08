import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "3G Digital Solution - Solusi Digital Internasional",
  description: "Website profesional, game development, dan video editing",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale = "id" } = await params;
  const config = await getRequestConfig();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={config.messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
