"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { comunidadeMeta } from "@/lib/comunidade";

export function ComunidadeSocialProof() {
  return (
    <section className="relative overflow-hidden border-t border-border py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(70,160,255,0.1),_transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center sm:h-[480px] md:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="absolute left-[6%] top-[8%] z-0 -rotate-[18deg] scale-95 opacity-90 sm:left-[10%]"
          >
            <PhoneMock src="/images/events/story-2.jpg" alt="Grupos da comunidade Caminho Soberano" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="absolute right-[8%] top-[4%] z-10 -rotate-[8deg] sm:right-[12%]"
          >
            <PhoneMock src="/images/events/story-1.jpg" alt="Avisos e conteúdos no WhatsApp" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Comunidade ativa
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Informação estratégica em primeira mão
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            Grupos organizados, avisos de lives, materiais exclusivos e troca
            direta com pessoas alinhadas à soberania financeira e ao Bitcoin.
          </p>

          <a
            href="#inscricao"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            <MessageCircle size={18} />
            {comunidadeMeta.ctaLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneMock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto aspect-[9/19] w-[160px] rounded-[2rem] border-[3px] border-[#2a2a2a] bg-[#0a0a0a] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] sm:w-[190px] md:w-[210px]">
      <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-[#111]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="210px"
          className="object-cover object-top"
        />
      </div>
      <div className="absolute -left-[5px] top-24 h-8 w-[3px] rounded-l bg-[#2a2a2a]" />
      <div className="absolute -left-[5px] top-36 h-12 w-[3px] rounded-l bg-[#2a2a2a]" />
      <div className="absolute -right-[5px] top-32 h-14 w-[3px] rounded-r bg-[#2a2a2a]" />
    </div>
  );
}
