"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

type EventosHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function EventosHero({
  eyebrow = "Eventos",
  title,
  description,
}: EventosHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#050b1a]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          style={reduce ? undefined : { y: backgroundY }}
          className="absolute inset-x-0 -top-[12%] h-[124%]"
        >
          <Image
            src="/images/gallery/gallery-12.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105 brightness-[0.95] saturate-[1.08]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#050b1a]/52" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050b1a]/75 via-[#050b1a]/45 to-[#0b1f38]/88" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,_rgba(70,160,255,0.18),_transparent_58%)]" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: "url(/images/events/dominando-bitcoin/noise.png)",
          backgroundSize: "180px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 text-center md:px-8 md:pb-20 md:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-5xl md:text-6xl lg:text-[3.5rem]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] md:text-xl"
        >
          {description}
        </motion.p>

        <motion.a
          href="#lista-eventos"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink shadow-[0_12px_32px_-8px_rgba(255,241,0,0.45)] transition hover:brightness-95"
        >
          Ver eventos
          <span aria-hidden>↓</span>
        </motion.a>
      </div>
    </section>
  );
}
