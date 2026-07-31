"use client";

import {
  Anchor,
  Briefcase,
  ContactRound,
  Lock,
  PersonStanding,
  type LucideIcon,
} from "lucide-react";

import { audiences } from "@/lib/event-bitcoin-pratica";

const icons: Record<(typeof audiences)[number]["icon"], LucideIcon> = {
  person: PersonStanding,
  lock: Lock,
  anchor: Anchor,
  id: ContactRound,
  briefcase: Briefcase,
};

function AudienceChips({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-3" aria-hidden={ariaHidden || undefined}>
      {audiences.map((item) => {
        const Icon = icons[item.icon];
        return (
          <div
            key={item.label}
            className="audience-card flex shrink-0 items-center gap-3 rounded-2xl border border-[#2a3a55] bg-[#0c1526] px-4 py-3.5"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a2740] text-white">
              <Icon size={18} strokeWidth={1.75} />
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-white md:text-[15px]">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function AudienceMarquee() {
  return (
    <div
      className="audience-marquee mt-10 overflow-hidden"
      aria-label="Públicos do evento"
    >
      <div className="audience-marquee-track">
        <AudienceChips />
        <AudienceChips ariaHidden />
        <AudienceChips ariaHidden />
        <AudienceChips ariaHidden />
      </div>
    </div>
  );
}
