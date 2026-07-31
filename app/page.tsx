import type { Metadata } from "next";

import { SitePage } from "@/components/SitePage";
import { siteDescription, siteName, siteOgImage } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: `${siteName} | Liberdade financeira com Bitcoin`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Liberdade financeira com Bitcoin`,
    description: siteDescription,
    url: "/",
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
    images: [siteOgImage.url],
  },
};

export default function Home() {
  return <SitePage />;
}
