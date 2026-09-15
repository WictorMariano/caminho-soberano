"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function ProjetoExperience() {
  const reduce = useReducedMotion();
  return (
    <section className="overflow-hidden bg-[#061426] py-16 md:py-24" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">O conhecimento ganha vida</p>
            <h2 id="experience-title" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">O futuro se constrói<br />com pessoas, lado a lado.</h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/60">Um olhar sobre as experiências do Caminho Soberano: encontros, aprendizado e conexões para além da sala de aula.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.35fr_1fr]">
          <motion.figure initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="group relative min-h-[380px] overflow-hidden rounded-3xl md:min-h-[560px]">
            <Image src="/images/gallery/gallery-12.jpg" alt="Público reunido em evento do Caminho Soberano" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b16] via-[#020b16]/5 to-transparent" aria-hidden />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 md:p-9"><span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Conexões que importam</span><p className="mt-3 max-w-sm text-2xl font-semibold text-white md:text-3xl">Novas perspectivas começam em boas conversas.</p></figcaption>
          </motion.figure>
          <div className="grid gap-4">
            <motion.figure initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="group relative min-h-[270px] overflow-hidden rounded-3xl">
              <Image src="/images/gallery/gallery-07.jpg" alt="Workshop prático do Caminho Soberano com participantes usando computadores" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b16]/95 to-transparent" aria-hidden />
              <figcaption className="absolute bottom-6 left-7 text-xl font-semibold text-white">Aprender. Experimentar. Aplicar.</figcaption>
            </motion.figure>
            <Link href="/lista-de-espera" className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl border border-accent/25 bg-[#142b3c] p-7 transition hover:border-accent/70 md:p-8">
              <span className="absolute -right-3 -top-8 text-[11rem] font-extrabold leading-none text-accent/[0.06]" aria-hidden>31</span>
              <div className="relative"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">31 de outubro · São Paulo</p><h3 className="mt-3 max-w-xs text-2xl font-semibold text-white">Faça parte do próximo capítulo.</h3></div>
              <span className="relative mt-6 inline-flex items-center gap-3 text-sm font-semibold text-accent">Conheça a fila de espera <ArrowUpRight size={20} className="transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1" /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
