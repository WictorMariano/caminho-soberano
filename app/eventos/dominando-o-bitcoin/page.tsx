import type { Metadata } from "next";

import { BitcoinPraticaEventPage } from "@/components/event-bitcoin-pratica/BitcoinPraticaEventPage";
import { eventMeta } from "@/lib/event-bitcoin-pratica";

export const metadata: Metadata = {
  title: eventMeta.title,
  description:
    "Quatro dias de imersão para você dominar o Bitcoin, blindar seu patrimônio e finalmente viver livre. São Paulo — 18 a 21 de novembro.",
};

export default function Page() {
  return <BitcoinPraticaEventPage />;
}
