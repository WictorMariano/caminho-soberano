"use client";

import { NetworkSection } from "@/components/event-bitcoin-pratica/NetworkSection";
import { SiteFooter } from "@/components/SiteFooter";
import { PneBenefits } from "@/components/workshop/pne/PneBenefits";
import { PneBonuses } from "@/components/workshop/pne/PneBonuses";
import { PneClosing } from "@/components/workshop/pne/PneClosing";
import { PneExpert } from "@/components/workshop/pne/PneExpert";
import { PneHero } from "@/components/workshop/pne/PneHero";
import { PneJourney } from "@/components/workshop/pne/PneJourney";
import { PneLearning } from "@/components/workshop/pne/PneLearning";
import { PneProblem } from "@/components/workshop/pne/PneProblem";
import { PneSchedule } from "@/components/workshop/pne/PneSchedule";
import { PneStickyCta } from "@/components/workshop/pne/PneStickyCta";
import { PneTestimonials } from "@/components/workshop/pne/PneTestimonials";

export function ProgramaNovaEconomiaPage() {
  return (
    <div className="theme-ocean min-h-full">
      <main>
        <PneHero />
        <PneProblem />
        <PneBenefits />
        <NetworkSection exitToBlack />
        <PneLearning />
        <PneJourney />
        <PneSchedule />
        <PneBonuses />
        <PneExpert />
        <PneTestimonials />
        <PneClosing />
      </main>
      <PneStickyCta />
      <SiteFooter />
    </div>
  );
}
