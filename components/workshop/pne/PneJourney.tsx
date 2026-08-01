"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

import { PneCtaLink } from "@/components/workshop/pne/PneCtaLink";
import { pneExperienceElements, pneJourney } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

const STEP_COUNT = pneJourney.length;

function JourneyStatic() {
  return (
    <section className="relative border-t border-white/8 bg-[#020b16] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Como funciona a experiência
          </h2>
          <p className="mt-3 text-base text-white/65 md:text-lg">
            Uma trilha em seis etapas, da compreensão à transformação.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pneJourney.map((step, i) => (
            <li
              key={step.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-ink">
                {i + 1}
              </span>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent">
                {step.label}
              </p>
              <h3 className="mt-1 font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/60">{step.text}</p>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 text-center text-2xl font-extrabold tracking-tight text-white md:text-3xl">
          Dinâmicas <span className="text-accent">práticas</span> para enraizar
          o aprendizado <span className="text-accent">na hora.</span>
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pneExperienceElements.map((el) => (
            <div
              key={el.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-bold text-white">{el.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {el.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PneCtaLink />
        </div>
      </div>
    </section>
  );
}

export function PneJourney() {
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    // Divide o scroll em 6 faixas iguais — uma por etapa
    const idx = Math.min(
      STEP_COUNT - 1,
      Math.floor(value * STEP_COUNT + 0.001),
    );
    setActiveIndex(idx);
  });

  if (reduce) return <JourneyStatic />;

  const activeStep = pneJourney[activeIndex];

  return (
    <section className="relative border-t border-white/8 bg-[#020b16]">
      {/* Altura de scroll: ~0.55 viewport por etapa → tempo para passar pelos 6 */}
      <div ref={scrollRef} className="relative h-[380vh]">
        <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden py-16 md:py-20">
          <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Como funciona a experiência
              </h2>
              <p className="mt-3 text-base text-white/65 md:text-lg">
                Role para avançar na trilha, da compreensão à transformação.
              </p>
            </div>

            {/* Desktop timeline */}
            <div className="relative mt-12 hidden md:block">
              <div className="absolute left-0 right-0 top-5 z-0 h-0.5 bg-white/10" />
              <motion.div
                className="absolute left-0 top-5 z-0 h-0.5 origin-left bg-accent"
                style={{ width: lineWidth }}
              />
              <ol className="relative z-10 grid grid-cols-6 gap-3">
                {pneJourney.map((step, i) => {
                  const reached = i <= activeIndex;
                  const current = i === activeIndex;
                  return (
                    <li key={step.id}>
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
                        {i + 1}
                      </div>
                      <p
                        className={cn(
                          "text-xs font-semibold uppercase tracking-wider transition-colors duration-500",
                          reached ? "text-accent" : "text-white/35",
                        )}
                      >
                        {step.label}
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
                        {step.title}
                      </h3>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Mobile step dots */}
            <div className="mt-10 flex items-center justify-between gap-2 md:hidden">
              {pneJourney.map((step, i) => {
                const reached = i <= activeIndex;
                const current = i === activeIndex;
                return (
                  <div
                    key={step.id}
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
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Active step detail card */}
            <motion.div
              key={activeStep.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-10 rounded-3xl border border-accent/30 bg-accent/[0.06] p-6 md:mt-12 md:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Etapa {activeIndex + 1} de {STEP_COUNT}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-white md:text-3xl">
                {activeStep.label}: {activeStep.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                {activeStep.text}
              </p>
            </motion.div>

            <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-accent"
                style={{ width: lineWidth }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 bg-[#020b16] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h3 className="text-center text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            Dinâmicas <span className="text-accent">práticas</span> para
            enraizar o aprendizado <span className="text-accent">na hora.</span>
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pneExperienceElements.map((el, i) => (
              <motion.div
                key={el.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <h3 className="font-bold text-white">{el.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {el.text}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <PneCtaLink />
          </div>
        </div>
      </div>
    </section>
  );
}
