"use client";

import { motion } from "framer-motion";

import { PartnersMarquee } from "@/components/hero/PartnersMarquee";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero/hero-main.png"
          aria-label="Vídeo do treinamento presencial Caminho Soberano"
        >
          <source src="/videos/treinamento-presencial.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--cs-glow),_transparent_55%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-6xl px-5 pb-10 pt-32 md:px-8 md:pb-14">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Alcance liberdade financeira real
              </h1>
              <a
                href="#comunidade"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
              >
                Participe Agora
                <span aria-hidden>→</span>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="max-w-md text-base leading-relaxed text-white/80 md:justify-self-end md:text-right md:text-lg"
            >
              Participe de eventos exclusivos, amplie seu networking e proteja
              seu patrimônio com soluções digitais inteligentes
            </motion.p>
          </div>
        </div>

        <PartnersMarquee />
      </div>
    </section>
  );
}
