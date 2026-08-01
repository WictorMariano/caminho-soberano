"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { pneExperienceElements, pneJourney } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

export function PneJourney() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      const start = viewH * 0.75;
      const end = viewH * 0.25;
      const raw = (start - rect.top) / (start - end + rect.height * 0.4);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative border-t border-white/8 bg-[#020b16] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Como funciona a experiência
          </h2>
          <p className="mt-3 text-base text-white/65 md:text-lg">
            Uma trilha em seis etapas — da compreensão à transformação.
          </p>
        </motion.div>

        <div ref={trackRef} className="relative mt-12">
          {/* Desktop horizontal */}
          <div className="relative hidden md:block">
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-white/10" />
            <div
              className="absolute left-0 top-5 h-0.5 bg-accent transition-[width] duration-300"
              style={{ width: `${progress * 100}%` }}
            />
            <ol className="relative grid grid-cols-6 gap-3">
              {pneJourney.map((step, i) => {
                const active = progress >= i / (pneJourney.length - 1) - 0.05;
                return (
                  <li key={step.id} className="pt-0">
                    <div
                      className={cn(
                        "mb-4 flex h-10 w-10 items-center justify-center rounded-full border text-sm font-bold transition",
                        active
                          ? "border-accent bg-accent text-accent-ink"
                          : "border-white/20 bg-[#020b16] text-white/50",
                      )}
                    >
                      {i + 1}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {step.label}
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-white/55">
                      {step.text}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Mobile vertical */}
          <ol className="relative space-y-0 md:hidden">
            <div className="absolute bottom-2 left-[15px] top-2 w-0.5 bg-white/10" />
            <div
              className="absolute left-[15px] top-2 w-0.5 bg-accent transition-[height] duration-300"
              style={{ height: `${progress * 100}%` }}
            />
            {pneJourney.map((step, i) => (
              <li key={step.id} className="relative flex gap-4 pb-8 last:pb-0">
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent bg-accent text-xs font-bold text-accent-ink">
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {step.label}
                  </p>
                  <h3 className="mt-0.5 font-bold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pneExperienceElements.map((el, i) => (
            <motion.div
              key={el.title}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="font-bold text-white">{el.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {el.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
