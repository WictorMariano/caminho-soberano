import type { Metadata } from "next";

import { DefiSoberanoEventPage } from "@/components/event-defi-soberano/DefiSoberanoEventPage";
import { defiEventMeta } from "@/lib/event-defi-soberano";

export const metadata: Metadata = {
  title: defiEventMeta.title,
  description: `${defiEventMeta.headline} ${defiEventMeta.subheadline}`,
};

export default function Page() {
  return <DefiSoberanoEventPage />;
}
