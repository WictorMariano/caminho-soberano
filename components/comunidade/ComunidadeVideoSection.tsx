"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="relative mx-auto w-full max-w-[280px]"
    >
      <div className="relative mx-auto aspect-[9/19] w-full rounded-[2.35rem] border-[3px] border-[#1e2a3a] bg-[#071525] p-2.5 shadow-[0_40px_80px_-24px_rgba(0,20,40,0.9)]">
        <div className="absolute left-1/2 top-3.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

        <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-black">
          <video
            src="/videos/treinamento-presencial.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Tarcísio Machado compartilhando conteúdo do Caminho Soberano"
          />
        </div>

        <div className="absolute -left-[5px] top-28 h-8 w-[3px] rounded-l bg-[#1e2a3a]" />
        <div className="absolute -left-[5px] top-40 h-12 w-[3px] rounded-l bg-[#1e2a3a]" />
        <div className="absolute -right-[5px] top-36 h-14 w-[3px] rounded-r bg-[#1e2a3a]" />
      </div>
    </motion.div>
  );
}

export function ComunidadeVideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          style={reduce ? undefined : { y: backgroundY }}
          className="absolute inset-x-0 -top-[22%] h-[144%]"
        >
          <Image
            src="/images/gallery/gallery-13.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center scale-110 brightness-[1.08] saturate-[1.12]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#050b1a]/38" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050b1a]/72 via-[#050b1a]/28 to-[#050b1a]/18" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a]/55 via-transparent to-[#050b1a]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,_rgba(70,160,255,0.1),_transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Conteúdo exclusivo
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Aprenda com quem vive a soberania na prática
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
            Na comunidade, Tarcísio compartilha orientações, alertas e aulas que
            não aparecem no Instagram ou no YouTube. Conteúdo direto, aplicável e
            pensado para quem quer sair da dependência financeira.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
            Lives semanais, avisos de eventos e masterclasses exclusivas para
            quem faz parte do grupo.
          </p>

          <a
            href="#inscricao"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            Quero entrar na comunidade
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <PhoneMockup />
      </div>
    </section>
  );
}
