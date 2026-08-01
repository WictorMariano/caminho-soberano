"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, MapPin, Users } from "lucide-react";

import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PneCtaLink } from "@/components/workshop/pne/PneCtaLink";
import { pneFaqs, pneMeta } from "@/lib/workshop-pne";

export function PneClosing() {
  const reduce = useReducedMotion();

  return (
    <section
      id="pne-fechamento"
      className="relative border-t border-white/8 bg-[#03111f] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Prepare{" "}
            <span className="text-accent">seu negócio</span> e sua carreira para
            a <span className="text-accent">Nova Economia</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
            Um dia presencial em Florianópolis para sair da observação e entrar
            na preparação, com clareza, prática e próximos passos.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/75">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5">
              <CalendarDays size={14} className="text-accent" />
              {pneMeta.dateFull} · {pneMeta.time}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5">
              <MapPin size={14} className="text-accent" />
              {pneMeta.location}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/35 bg-accent/10 px-3.5 py-1.5 font-semibold text-accent">
              <Users size={14} />
              {pneMeta.remainingSeats} vagas restantes
            </span>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <PneCtaLink />
          </div>
        </motion.div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="mb-6 text-center text-2xl font-bold text-white">
            Perguntas frequentes
          </h3>
          <FaqAccordion items={[...pneFaqs]} />
        </div>
      </div>
    </section>
  );
}
