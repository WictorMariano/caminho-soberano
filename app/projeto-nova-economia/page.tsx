import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";
import { ProjetoNovaEconomiaHero } from "@/components/projeto-nova-economia/ProjetoNovaEconomiaHero";
import { ProjetoNovaEconomiaSections } from "@/components/projeto-nova-economia/ProjetoNovaEconomiaSections";
import { projetoNeMeta } from "@/lib/projeto-nova-economia";

export const metadata: Metadata = {
  title: projetoNeMeta.title,
  description: projetoNeMeta.description,
};

export default function ProjetoNovaEconomiaPage() {
  return (
    <PageShell flushHero>
      <ProjetoNovaEconomiaHero />
      <ProjetoNovaEconomiaSections />
    </PageShell>
  );
}
