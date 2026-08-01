"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

export function PneTestimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-t border-white/8 bg-[#020b16] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Experiências no Caminho Soberano
          </h2>
          <p className="mt-3 text-base text-white/65 md:text-lg">
            Depoimentos de participantes serão publicados aqui em breve — sem
            nomes ou histórias inventadas.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              className="flex min-h-[180px] flex-col justify-between rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-6"
            >
              <Quote className="text-white/20" size={28} />
              <p className="mt-4 text-sm leading-relaxed text-white/40">
                Espaço reservado para depoimento real de quem já viveu uma
                experiência do Caminho Soberano.
              </p>
              <div className="mt-6 h-3 w-28 rounded-full bg-white/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
