"use client";

import { motion } from "framer-motion";

type EventosHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function EventosHero({
  eyebrow = "Eventos",
  title,
  description,
}: EventosHeroProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-4 md:pb-24 md:pt-8">
      {/* Atmosfera azul em código */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="ocean-hero-bg absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(70,160,255,0.16),_transparent_58%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl"
        >
          {description}
        </motion.p>

        <motion.a
          href="#lista-eventos"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
        >
          Ver eventos
          <span aria-hidden>↓</span>
        </motion.a>
      </div>
    </section>
  );
}
