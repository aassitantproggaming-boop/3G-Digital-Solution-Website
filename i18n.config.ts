import type { Config } from "next-intl/config";
import { getRequestConfig } from "next-intl/server";

const locales = ["id", "en", "zh", "de", "es", "fr"];

const config = {
  locales,
  defaultLocale: "id",
  getRequestConfig: async ({ locale }: { locale: string }) => ({
    messages: (await import(`./messages/${locale}.json`)).default,
  }),
} satisfies Config;

export default config;
