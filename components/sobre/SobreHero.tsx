"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { EVENT_PATH } from "@/lib/event-bitcoin-pratica";

export function SobreHero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="ocean-hero-bg absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: "url(/images/events/dominando-bitcoin/noise.png)",
          backgroundSize: "180px",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(70,160,255,0.18),_transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex items-center gap-3"
        >
          <Link href="/" aria-label="Ir para a página inicial">
            <Image
              src="/images/brand/logo-mark.png"
              alt="Caminho Soberano"
              width={44}
              height={44}
              className="h-10 w-auto md:h-11"
              priority
            />
          </Link>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Sobre
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]"
        >
          Caminho Soberano
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl"
        >
          Um projeto com propósito: capacitar pessoas a retomarem o controle do
          próprio patrimônio e construírem independência financeira real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#missao"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            Nossa missão
            <span aria-hidden>↓</span>
          </a>
          <Link
            href={EVENT_PATH}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent hover:text-accent"
          >
            Próximo evento
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
