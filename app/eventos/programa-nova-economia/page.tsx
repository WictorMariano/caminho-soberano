import type { Metadata } from "next";

import { ProgramaNovaEconomiaPage } from "@/components/workshop/ProgramaNovaEconomiaPage";
import { pneMeta } from "@/lib/workshop-pne";

export const metadata: Metadata = {
  title: `${pneMeta.title} | ${pneMeta.dateShort} · CDL Florianópolis`,
  description: `${pneMeta.tagline} ${pneMeta.dateFull}, ${pneMeta.time}, ${pneMeta.location}. ${pneMeta.capacity} vagas.`,
};

export default function Page() {
  return <ProgramaNovaEconomiaPage />;
}
