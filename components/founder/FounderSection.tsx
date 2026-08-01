"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FounderSection() {
  return (
    <section
      id="fundador"
      className="relative overflow-hidden bg-[#081c34] py-16 md:py-24"
    >
      {/* Fundo azul em código — sem imagem */}
      <div className="founder-bg" aria-hidden>
        <div className="founder-bg__base" />
        <div className="founder-bg__mesh" />
        <div className="founder-bg__orb founder-bg__orb--a" />
        <div className="founder-bg__orb founder-bg__orb--b" />
        <div className="founder-bg__orb founder-bg__orb--c" />
        <div className="founder-bg__vignette" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="ocean-panel relative overflow-hidden rounded-[2rem] border md:rounded-[2.5rem]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,_rgba(70,160,255,0.14),_transparent_55%)]" />

          <div className="relative grid md:grid-cols-2 md:items-stretch">
            <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[480px] lg:min-h-[560px]">
              <Image
                src="/images/founder/tarcisio-2.png"
                alt="Tarcísio, fundador do Caminho Soberano"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c34] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[rgba(8,28,52,0.65)]" />
            </div>

            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 md:px-10 md:py-14 lg:px-14 lg:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Fundador
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Quem é Tarcísio?
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Engenheiro, empresário e fundador do{" "}
                <strong className="font-semibold text-white">
                  Caminho Soberano
                </strong>
                . Movido pela fé e pela visão de uma sociedade mais justa, ele
                ensina como alcançar a verdadeira independência financeira fora
                das amarras estatais e bancárias. Através do Bitcoin e de
                soluções descentralizadas, Tarcísio capacita indivíduos a
                retomarem o controle de seu dinheiro, transformando-o em uma
                ferramenta de liberdade e autonomia absoluta.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
