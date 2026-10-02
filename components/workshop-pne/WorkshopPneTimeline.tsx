"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { projetoNeTimeline } from "@/lib/projeto-nova-economia";
import { cn } from "@/lib/utils";

const STEP_COUNT = projetoNeTimeline.length;

const eraImages = [
  {
    src: "/images/events/dominando-bitcoin/benefits/strategy.jpg",
    alt: "Profissionais trabalhando com computadores e documentos",
  },
  {
    src: "/images/events/dominando-bitcoin/benefits/independence.jpg",
    alt: "Dados financeiros digitais em uma tela",
  },
  {
    src: "/images/events/dominando-bitcoin/benefits/protection.jpg",
    alt: "Pagamento digital feito pelo computador",
  },
  {
    src: "/images/events/dominando-bitcoin/benefits/bitcoin-practice.jpg",
    alt: "Aplicativo com cotações de criptoativos no celular",
  },
] as const;

const heading = {
  eyebrow: "Linha do Tempo",
  title: "A Evolução da Infraestrutura Financeira",
  text: "Cada transformação da infraestrutura financeira redefiniu o papel da contabilidade. Estamos diante de uma nova inflexão.",
};

function TimelineStatic() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <TimelineHeading hint={heading.text} />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projetoNeTimeline.map((item, i) => (
            <li
              key={item.era}
              className="pne-project-card overflow-hidden rounded-2xl border"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={eraImages[i].src}
                  alt={eraImages[i].alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <span className="text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")} · {item.era}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TimelineHeading({ hint }: { hint: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {heading.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {heading.title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-white/65 md:text-lg">
        {hint}
      </p>
    </div>
  );
}

export function WorkshopPneTimeline() {
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const idx = Math.min(
      STEP_COUNT - 1,
      Math.floor(value * STEP_COUNT + 0.001),
    );
    setActiveIndex(idx);
  });

  if (reduce) return <TimelineStatic />;

  const active = projetoNeTimeline[activeIndex];
  const activeImage = eraImages[activeIndex];

  return (
    <section className="relative border-t border-border bg-[#020b16]">
      <div ref={scrollRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden py-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(70,160,255,0.12),_transparent_55%)]"
            aria-hidden
          />
          <div className="relative mx-auto w-full max-w-6xl px-5 md:px-8">
            <TimelineHeading hint="Role para atravessar as décadas e ver como cada virada mudou a profissão." />

            <div className="relative mt-10 hidden md:block">
              <div className="absolute left-0 right-0 top-5 z-0 h-0.5 bg-white/10" />
              <motion.div
                className="absolute left-0 top-5 z-0 h-0.5 origin-left bg-accent shadow-[0_0_12px_rgba(255,241,0,0.5)]"
                style={{ width: lineWidth }}
              />
              <ol className="relative z-10 grid grid-cols-4 gap-4">
                {projetoNeTimeline.map((item, i) => {
                  const reached = i <= activeIndex;
                  const current = i === activeIndex;
                  return (
                    <li key={item.era}>
                      <div
                        className={cn(
                          "relative z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold transition-all duration-500",
                          current
                            ? "scale-110 border-accent bg-accent text-accent-ink shadow-[0_0_22px_rgba(255,241,0,0.45)]"
                            : reached
                              ? "border-accent/70 bg-[#1c1a05] text-accent"
                              : "border-white/20 bg-[#020b16] text-white/40",
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wider transition-colors duration-500",
                          reached ? "text-accent" : "text-white/35",
                        )}
                      >
                        {item.era}
                      </p>
                      <h3
                        className={cn(
                          "mt-1 text-sm font-bold transition-colors duration-500",
                          current
                            ? "text-white"
                            : reached
                              ? "text-white/80"
                              : "text-white/35",
                        )}
                      >
                        {item.title}
                      </h3>
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="mt-8 flex items-center justify-between gap-2 md:hidden">
              {projetoNeTimeline.map((item, i) => {
                const reached = i <= activeIndex;
                const current = i === activeIndex;
                return (
                  <div
                    key={item.era}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold transition-all duration-500",
                        current
                          ? "border-accent bg-accent text-accent-ink"
                          : reached
                            ? "border-accent/60 bg-accent/15 text-accent"
                            : "border-white/20 text-white/40",
                      )}
                    >
                      {i + 1}
                    </div>
                    <span
                      className={cn(
                        "text-center text-[10px] font-semibold uppercase tracking-wide",
                        reached ? "text-accent" : "text-white/35",
                      )}
                    >
                      {item.era}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 grid overflow-hidden rounded-3xl border border-accent/30 bg-accent/[0.05] md:mt-10 md:grid-cols-[1.1fr_1fr]">
              <motion.div
                key={active.era}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col justify-center p-6 md:p-9"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Era {activeIndex + 1} de {STEP_COUNT} · {active.era}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                  {active.text}
                </p>
              </motion.div>

              <div className="relative hidden min-h-[240px] md:block">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={activeImage.src}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      sizes="45vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#0a1622]/80 via-transparent to-transparent"
                  aria-hidden
                />
                <span
                  className="absolute bottom-3 right-5 text-6xl font-extrabold text-white/25"
                  aria-hidden
                >
                  {active.era}
                </span>
              </div>
            </div>

            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-accent"
                style={{ width: lineWidth }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
