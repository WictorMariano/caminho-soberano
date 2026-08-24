"use client";

import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, Radio, Sparkles } from "lucide-react";

import { comunidadeBenefits } from "@/lib/comunidade";

const icons = {
  lives: Radio,
  eventos: CalendarDays,
  conteudo: Sparkles,
  masterclass: GraduationCap,
} as const;

export function ComunidadeBenefits() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(70,160,255,0.1),_transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            O que você recebe
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Tudo que a comunidade libera, em um só lugar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Conteúdo gratuito para acompanhar o Caminho Soberano de perto, com
            acesso a materiais que não circulam no Instagram ou no YouTube.
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2">
          {comunidadeBenefits.map((item, index) => {
            const Icon = icons[item.id];
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex gap-4"
              >
                <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
