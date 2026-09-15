"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PneHeroPhotoMarquee } from "@/components/workshop/pne/PneHeroPhotoMarquee";
import { projetoNeMeta } from "@/lib/projeto-nova-economia";

export function ProjetoNovaEconomiaHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#020b16]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(40,100,170,0.22),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-12 pt-32 md:min-h-[850px] md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:px-8 md:pb-20 md:pt-40">
        <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-8 bg-accent" aria-hidden />{projetoNeMeta.title}
          </p>
          <h1 className="mt-7 text-[2.65rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl md:text-[2.65rem] lg:text-[3.5rem] xl:text-[4.25rem]">
            A economia evolui.<br />
            <span className="text-accent">O conhecimento</span><br />
            abre o caminho.
          </h1>
          <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-white/90">
            Preparando a contabilidade para a evolução da infraestrutura financeira.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
            Pesquisa, educação executiva e desenvolvimento profissional para transformar temas complexos em decisões mais conscientes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#o-projeto" className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-4 text-sm font-bold text-accent-ink transition hover:brightness-95">
              Explore o projeto <ArrowDown size={17} />
            </a>
            <Link href="/lista-de-espera" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:border-accent hover:text-accent">
              Próximos encontros <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-3 border-t border-white/10 pt-6 text-[11px] font-semibold uppercase tracking-[0.15em] text-white/50">
            <span>01 / Pesquisa</span><span>02 / Educação</span><span>03 / Desenvolvimento</span>
          </div>
        </motion.div>
        <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }} className="relative min-w-0">
          <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 md:h-[640px]">
            <PneHeroPhotoMarquee className="!h-full" />
          </div>
          <div className="relative z-20 mx-5 -mt-16 rounded-2xl border border-white/15 bg-[#0b1c30]/95 p-5 shadow-2xl backdrop-blur-xl md:mx-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Conhecimento que conecta</p>
            <p className="mt-2 text-lg font-semibold text-white">Pessoas. Ideias. Novas possibilidades.</p>
            <p className="mt-2 text-xs leading-relaxed text-white/55">Registros de encontros e experiências do Caminho Soberano.</p>
          </div>
        </motion.div>
      </div>
      <div className="border-y border-white/10 bg-white/[0.025] px-5 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-9 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-white/60">
          {["Blockchain", "Ativos digitais", "Inteligência artificial", "Nova economia", "Soberania"].map((theme) => <span key={theme} className="flex items-center gap-3"><span className="h-1 w-1 rounded-full bg-accent" aria-hidden />{theme}</span>)}
        </div>
      </div>
    </section>
  );
}
