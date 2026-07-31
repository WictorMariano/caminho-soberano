"use client";

import {
  Anchor,
  Briefcase,
  ContactRound,
  Lock,
  PersonStanding,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { audiences } from "@/lib/event-bitcoin-pratica";

const icons: Record<(typeof audiences)[number]["icon"], LucideIcon> = {
  person: PersonStanding,
  lock: Lock,
  anchor: Anchor,
  id: ContactRound,
  briefcase: Briefcase,
};

function AudienceChip({
  label,
  icon,
}: {
  label: string;
  icon: (typeof audiences)[number]["icon"];
}) {
  const Icon = icons[icon];

  return (
    <div className="audience-card flex shrink-0 items-center gap-3 rounded-2xl border border-[#2a3a55]/90 px-3.5 py-3 shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)]">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1a2740] text-white">
        <Icon size={20} strokeWidth={1.75} />
      </span>
      <span className="whitespace-nowrap pr-1 text-sm font-semibold tracking-tight text-white md:text-[0.95rem]">
        {label}
      </span>
    </div>
  );
}

export function AudienceSection() {
  const loop = [...audiences, ...audiences, ...audiences];

  return (
    <section id="para-quem" className="overflow-hidden bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          className="text-center text-3xl font-bold tracking-tight md:text-4xl"
        >
          Para quem é?
        </motion.h2>
      </div>

      <div className="audience-marquee relative mt-10 w-full overflow-hidden">
        <div className="audience-marquee-track" aria-hidden={false}>
          {loop.map((item, index) => (
            <AudienceChip
              key={`${item.label}-${index}`}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
