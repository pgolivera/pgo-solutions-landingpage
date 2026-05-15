import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SEO_CONFIG, SITE_CONFIG } from "@/constants";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import "@/styles/index.css";

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: SEO_CONFIG.defaultKeywords,
  authors: [{ name: "PGO Solutions" }],
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SEO_CONFIG.baseUrl,
    siteName: SEO_CONFIG.siteName,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [
      {
        url: SEO_CONFIG.defaultImage,
        width: 1200,
        height: 630,
        alt: SEO_CONFIG.defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    images: [SEO_CONFIG.defaultImage],
    creator: SEO_CONFIG.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main id="root">{children}</main>
          <WhatsAppFAB />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
