import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";
import { ProjetoNovaEconomiaHero } from "@/components/projeto-nova-economia/ProjetoNovaEconomiaHero";
import { ProjetoNovaEconomiaSections } from "@/components/projeto-nova-economia/ProjetoNovaEconomiaSections";
import { projetoNeMeta } from "@/lib/projeto-nova-economia";

export const metadata: Metadata = {
  title: projetoNeMeta.title,
  description: projetoNeMeta.description,
  alternates: { canonical: "/projeto-nova-economia" },
  openGraph: {
    title: projetoNeMeta.title,
    description: projetoNeMeta.description,
    url: "/projeto-nova-economia",
    images: [{ url: "/images/gallery/gallery-12.jpg", alt: "Encontro Caminho Soberano" }],
  },
};

export default function ProjetoNovaEconomiaPage() {
  return (
    <PageShell flushHero>
      <ProjetoNovaEconomiaHero />
      <ProjetoNovaEconomiaSections />
    </PageShell>
  );
}
