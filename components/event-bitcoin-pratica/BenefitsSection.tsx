"use client";

import {
  Bitcoin,
  Compass,
  Network,
  Shield,
  Users,
  Unlock,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { eventBenefits } from "@/lib/event-bitcoin-pratica";

const icons: Record<(typeof eventBenefits)[number]["icon"], LucideIcon> = {
  bitcoin: Bitcoin,
  shield: Shield,
  network: Network,
  freedom: Unlock,
  users: Users,
  compass: Compass,
};

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Benefícios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            O que você leva deste evento
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Conteúdo prático, networking real e ferramentas para exercer
            soberania financeira com Bitcoin.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventBenefits.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-2xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-md transition hover:border-accent/35 hover:bg-white/[0.06]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition group-hover:bg-accent/15">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
