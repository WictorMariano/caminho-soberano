"use client";

import { Gift, MessagesSquare, Percent, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { exclusiveBonuses } from "@/lib/event-bitcoin-pratica";

const icons: Record<(typeof exclusiveBonuses)[number]["icon"], LucideIcon> = {
  group: MessagesSquare,
  discount: Percent,
};

export function BonusSection() {
  return (
    <section id="bonus" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,241,0,0.08),_transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <Gift size={14} />
            Exclusivo
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Bônus exclusivo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Além da imersão, você leva vantagens que continuam gerando valor
            depois do evento.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {exclusiveBonuses.map((bonus, index) => {
            const Icon = icons[bonus.icon];
            return (
              <motion.article
                key={bonus.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.5rem] border border-accent/25 bg-gradient-to-br from-accent/10 via-[#0c1526] to-[#06121f] p-6 backdrop-blur-md md:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
                  aria-hidden
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/35 bg-accent/15 text-accent">
                      <Icon size={22} strokeWidth={1.75} />
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                      {bonus.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white md:text-2xl">
                    {bonus.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                    {bonus.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
