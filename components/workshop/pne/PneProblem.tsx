"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Eye, Compass } from "lucide-react";

import { pneObserves, pnePrepares } from "@/lib/workshop-pne";

export function PneProblem() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-t border-white/8 bg-[#03111f] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            O mercado já mudou. A pergunta é: você está só observando ou se preparando?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
            Entre acompanhar de longe e construir vantagem competitiva, existe um
            caminho prático.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-white/50">
              <Eye size={18} />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Quem só observa
              </span>
            </div>
            <ul className="space-y-3">
              {pneObserves.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/8 pb-3 text-base text-white/75 last:border-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="flex items-center justify-center py-2 md:py-0">
            <div className="flex items-center gap-2 text-accent md:flex-col md:gap-3">
              <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent md:block" />
              <ArrowRight className="md:rotate-90" size={28} />
              <span className="text-xs font-bold uppercase tracking-widest">
                Preparar
              </span>
              <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-accent/60 to-transparent md:block" />
            </div>
          </div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="rounded-3xl border border-accent/25 bg-accent/[0.06] p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-accent">
              <Compass size={18} />
              <span className="text-sm font-semibold uppercase tracking-wider">
                Quem se prepara
              </span>
            </div>
            <ul className="space-y-3">
              {pnePrepares.map((item) => (
                <li
                  key={item}
                  className="border-b border-accent/15 pb-3 text-base text-white/85 last:border-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
