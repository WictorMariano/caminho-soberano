"use client";

import { motion, useReducedMotion } from "framer-motion";

import { projetoNeMeta } from "@/lib/projeto-nova-economia";

export function ProjetoNovaEconomiaHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#050b1a]">
      <div className="ocean-hero-bg absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: "url(/images/events/dominando-bitcoin/noise.png)",
          backgroundSize: "180px",
        }}
        aria-hidden
      />

      {!reduce ? (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[rgba(70,160,255,0.16)] blur-[90px]"
            animate={{ x: [0, 24, 0], y: [0, -18, 0], opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-[rgba(255,241,0,0.07)] blur-[100px]"
            animate={{ x: [0, -20, 0], y: [0, 22, 0], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_30%,_rgba(70,160,255,0.2),_transparent_55%)]"
          aria-hidden
        />
      )}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b1f38] to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-col items-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {projetoNeMeta.title}
          </p>
          <motion.span
            aria-hidden
            className="mt-3 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.15rem]"
        >
          {projetoNeMeta.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {projetoNeMeta.description}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#o-projeto"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink shadow-[0_12px_32px_-10px_rgba(255,241,0,0.45)] transition hover:brightness-95"
          >
            Conheça o Projeto
            <motion.span
              aria-hidden
              animate={reduce ? undefined : { y: [0, 3, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent hover:text-accent"
          >
            Contato institucional
          </a>
        </motion.div>
      </div>
    </section>
  );
}
