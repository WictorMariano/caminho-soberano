"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Ticket } from "lucide-react";

import { PneHeroPhotoMarquee } from "@/components/workshop/pne/PneHeroPhotoMarquee";
import {
  workshopPneMeta,
  workshopPneTickets,
} from "@/lib/workshop-pne-tickets";

const modalities = ["Online", "Presencial", "Presencial + Jantar VIP"] as const;

export function WorkshopPneHero() {
  const reduce = useReducedMotion();
  const startingPrice = Math.min(...workshopPneTickets.map((t) => t.price));

  return (
    <section className="relative overflow-hidden bg-[#020b16]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(40,100,170,0.22),transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-12 pt-32 md:min-h-[850px] md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:px-8 md:pb-20 md:pt-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {workshopPneMeta.shortTitle} · Profissionais da Nova Economia
          </p>
          <h1 className="mt-7 text-[2.65rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl md:text-[2.65rem] lg:text-[3.5rem] xl:text-[4.25rem]">
            A economia evolui.
            <br />
            <span className="text-accent">O conhecimento</span>
            <br />
            abre o caminho.
          </h1>
          <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/90">
            Um workshop para você compreender o que está mudando, experimentar
            as ferramentas da Nova Economia e planejar seus próximos passos.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
            Bitcoin, blockchain, inteligência artificial e novos modelos de
            negócio, traduzidos para decisões práticas de quem empreende e
            atua com contabilidade.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#ingressos"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-sm font-bold text-accent-ink shadow-[0_12px_32px_-10px_rgba(255,241,0,0.45)] transition hover:brightness-95"
            >
              Garanta seu ingresso <ArrowDown size={17} />
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm text-white/80">
              <Ticket size={16} className="text-accent" />A partir de{" "}
              <strong className="font-semibold text-white">
                R$ {startingPrice}
              </strong>
            </span>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
            {modalities.map((item) => (
              <li
                key={item}
                className="rounded-full border border-accent/25 bg-accent/[0.06] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative min-w-0"
        >
          <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 md:h-[640px]">
            <PneHeroPhotoMarquee className="!h-full" />
          </div>
          <div className="relative z-20 mx-5 -mt-16 rounded-2xl border border-white/15 bg-[#0b1c30]/95 p-5 shadow-2xl backdrop-blur-xl md:mx-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Conhecimento que conecta
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Pessoas. Ideias. Novas possibilidades.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-white/55">
              Registros de encontros e experiências do Caminho Soberano.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-white/10 bg-white/[0.025] px-5 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-9 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-white/60">
          {[
            "Bitcoin e Blockchain",
            "IA e Automação",
            "Novos modelos de negócio",
            "Nova economia",
            "Soberania",
          ].map((theme) => (
            <span key={theme} className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
              {theme}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
