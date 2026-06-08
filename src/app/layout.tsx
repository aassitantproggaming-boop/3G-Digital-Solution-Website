import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { ReactNode } from "react";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "3G Digital Solution - Solusi Digital Internasional",
  description: "Website profesional, game development, dan video editing",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23ef4444' width='100' height='100' rx='20'/><text x='50' y='70' font-size='60' font-weight='bold' fill='white' text-anchor='middle'>3G</text></svg>",
  },
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="bg-white">
        <NextIntlClientProvider locale={locale} messages={config.messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
