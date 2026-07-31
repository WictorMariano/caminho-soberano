"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section
      id="fundador"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_center,_var(--cs-glow),_transparent_60%)] opacity-60" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem]"
        >
          <Image
            src="/images/founder/tarcisio-portrait.jpg"
            alt="Tarcísio, fundador do Caminho Soberano"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Fundador
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            Quem é Tarcísio?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
            Engenheiro, empresário e fundador do{" "}
            <strong className="font-semibold text-white">
              Caminho Soberano
            </strong>
            . Movido pela fé e pela visão de uma sociedade mais justa, ele
            ensina como alcançar a verdadeira independência financeira fora das
            amarras estatais e bancárias. Através do Bitcoin e de soluções
            descentralizadas, Tarcísio capacita indivíduos a retomarem o
            controle de seu dinheiro, transformando-o em uma ferramenta de
            liberdade e autonomia absoluta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
