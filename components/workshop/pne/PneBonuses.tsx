"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, BadgePercent } from "lucide-react";

import { pneBonuses } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

export function PneBonuses() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-t border-white/8 bg-[#020b16] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Bônus para quem participa
          </h2>
          <p className="mt-3 text-base text-white/65 md:text-lg">
            Dois passes exclusivos para estender a experiência além do dia do
            workshop.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pneBonuses.map((bonus, i) => {
            const Icon = bonus.id === "vip" ? MessageCircle : BadgePercent;
            const gold = bonus.tone === "gold";
            return (
              <motion.article
                key={bonus.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                whileHover={reduce ? undefined : { y: -6 }}
                className={cn(
                  "relative overflow-hidden rounded-3xl border p-6 md:p-8",
                  gold
                    ? "border-[#e8c43a]/35 bg-gradient-to-br from-[#e8c43a]/10 to-transparent"
                    : "border-sky-400/30 bg-gradient-to-br from-sky-400/10 to-transparent",
                )}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <Icon
                    className={gold ? "text-[#e8c43a]" : "text-sky-300"}
                    size={28}
                  />
                  <span
                    className={cn(
                      "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide",
                      gold
                        ? "border-[#e8c43a]/40 text-[#e8c43a]"
                        : "border-sky-300/40 text-sky-200",
                    )}
                  >
                    {bonus.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {bonus.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                  {bonus.text}
                </p>
                {"disclaimer" in bonus && bonus.disclaimer ? (
                  <p className="mt-4 text-xs leading-relaxed text-white/40">
                    {bonus.disclaimer}
                  </p>
                ) : null}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
