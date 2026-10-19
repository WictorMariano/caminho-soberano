import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Área de membros",
    template: "%s · Membros",
  },
  robots: { index: false, follow: false },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Soberano",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  themeColor: "#020b16",
  colorScheme: "dark",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export default function MembrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-[#020b16] text-white antialiased">
      {children}
    </div>
  );
}
