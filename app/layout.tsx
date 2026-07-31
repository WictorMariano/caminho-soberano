import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

import {
  siteDescription,
  siteKeywords,
  siteName,
  siteOgImage,
  siteUrl,
} from "@/lib/seo";

import "./globals.css";

const monaSans = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Liberdade financeira com Bitcoin`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [...siteKeywords],
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
      { url: "/images/brand/logo-mark.png", type: "image/png", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title: `${siteName} | Liberdade financeira com Bitcoin`,
    description: siteDescription,
    images: [
      {
        url: siteOgImage.url,
        width: siteOgImage.width,
        height: siteOgImage.height,
        alt: siteOgImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Liberdade financeira com Bitcoin`,
    description: siteDescription,
    images: [siteOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "finance",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/images/brand/logo-mark.png`,
  description: siteDescription,
  email: "contato@caminhosoberano.com.br",
  sameAs: [
    "https://www.instagram.com/ocaminhosoberano/",
  ],
  foundingLocation: {
    "@type": "Place",
    name: "Brasil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${monaSans.variable} h-full scroll-smooth antialiased`}
    >
      <body
        className="min-h-full bg-background font-sans text-foreground"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
