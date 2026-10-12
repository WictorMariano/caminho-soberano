import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Área administrativa", template: "%s · Admin" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#020b16] text-white">{children}</div>;
}
