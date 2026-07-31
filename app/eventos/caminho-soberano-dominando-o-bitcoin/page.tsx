import type { Metadata } from "next";

import { BitcoinPraticaEventPage } from "@/components/event-bitcoin-pratica/BitcoinPraticaEventPage";
import { eventMeta } from "@/lib/event-bitcoin-pratica";

export const metadata: Metadata = {
  title: eventMeta.title,
  description:
    "Dois dias de imersão para você dominar o Bitcoin, blindar seu patrimônio e finalmente viver livre. São Paulo — 30 de Setembro.",
};

export default function Page() {
  return <BitcoinPraticaEventPage />;
}
