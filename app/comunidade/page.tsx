import type { Metadata } from "next";

import { ComunidadeBenefits } from "@/components/comunidade/ComunidadeBenefits";
import { ComunidadeHero } from "@/components/comunidade/ComunidadeHero";
import { ComunidadeSocialProof } from "@/components/comunidade/ComunidadeSocialProof";
import { ComunidadeVideoSection } from "@/components/comunidade/ComunidadeVideoSection";
import { PageShell } from "@/components/PageShell";
import { comunidadeMeta } from "@/lib/comunidade";

export const metadata: Metadata = {
  title: comunidadeMeta.title,
  description: comunidadeMeta.description,
};

export default function ComunidadePage() {
  return (
    <PageShell flushHero>
      <ComunidadeHero />
      <ComunidadeVideoSection />
      <div className="bg-[#081c34]">
        <ComunidadeBenefits />
        <ComunidadeSocialProof />
      </div>
    </PageShell>
  );
}
