"use client";

import { motion } from "framer-motion";

import { FaqAccordion } from "@/components/faq/FaqAccordion";

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--cs-glow),_transparent_50%)] opacity-45" />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            FAQ&apos;s
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <div className="mt-10">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
