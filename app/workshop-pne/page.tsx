import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";
import { PneTestimonials } from "@/components/workshop/pne/PneTestimonials";
import { WorkshopPneHero } from "@/components/workshop-pne/WorkshopPneHero";
import { WorkshopPneSections } from "@/components/workshop-pne/WorkshopPneSections";
import { WorkshopPneSpeakers } from "@/components/workshop-pne/WorkshopPneSpeakers";
import { WorkshopPneWhatsappGroup } from "@/components/workshop-pne/WorkshopPneWhatsappGroup";
import {
  WorkshopPneClosing,
  WorkshopPneTickets,
} from "@/components/workshop-pne/WorkshopPneTickets";
import {
  WORKSHOP_PNE_PAGE_PATH,
  workshopPneMeta,
} from "@/lib/workshop-pne-tickets";

export const metadata: Metadata = {
  title: workshopPneMeta.title,
  description: workshopPneMeta.description,
  alternates: { canonical: WORKSHOP_PNE_PAGE_PATH },
  openGraph: {
    title: workshopPneMeta.title,
    description: workshopPneMeta.description,
    url: WORKSHOP_PNE_PAGE_PATH,
    images: [
      {
        url: "/images/gallery/gallery-12.jpg",
        alt: "Encontro Caminho Soberano",
      },
    ],
  },
};

export default function WorkshopPnePage() {
  return (
    <PageShell flushHero>
      <WorkshopPneHero />
      <WorkshopPneSections />
      <WorkshopPneWhatsappGroup />
      <WorkshopPneTickets />
      <PneTestimonials />
      <WorkshopPneSpeakers />
      <WorkshopPneClosing />
    </PageShell>
  );
}
