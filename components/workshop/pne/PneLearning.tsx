"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CircleDollarSign,
  Bot,
  Globe2,
  Layers,
  ScanSearch,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { PneCtaLink } from "@/components/workshop/pne/PneCtaLink";
import { pneLearning } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

const icons = [
  CircleDollarSign,
  Bot,
  Globe2,
  Layers,
  ScanSearch,
  BriefcaseBusiness,
];

export function PneLearning() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = pneLearning.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const visibleCount = 3;
  const getVisible = () => {
    const items = [];
    for (let offset = 0; offset < visibleCount; offset++) {
      items.push(pneLearning[(index + offset) % total]);
    }
    return items;
  };

  return (
    <section className="relative border-t border-white/5 bg-black py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-[#03111f] to-[#03111f]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            O que você vai aprender
          </h2>
          <p className="mt-3 text-base text-white/65 md:text-lg">
            Seis blocos para conectar tecnologia, negócio e carreira.
          </p>
          <div className="mt-5 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-accent"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-accent hover:text-accent"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="mt-10 hidden gap-4 md:grid md:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisible().map((item, i) => {
              const absIndex = (index + i) % total;
              const Icon = icons[absIndex] ?? Layers;
              const active = i === 0;
              return (
                <motion.article
                  key={`${item.id}-${index}`}
                  layout
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className={cn(
                    "rounded-3xl border p-6 transition",
                    active
                      ? "border-accent/35 bg-accent/[0.07]"
                      : "border-white/10 bg-white/[0.03]",
                  )}
                >
                  <motion.div
                    animate={
                      reduce || !active
                        ? undefined
                        : { scale: [1, 1.08, 1] }
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <Icon
                      className={cn(active ? "text-accent" : "text-white/50")}
                      size={26}
                    />
                  </motion.div>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-white/65"
                      >
                        · {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile: 1 card */}
        <div className="mt-8 md:hidden">
          <AnimatePresence mode="wait" initial={false}>
            {(() => {
              const item = pneLearning[index];
              const Icon = icons[index] ?? Layers;
              return (
                <motion.article
                  key={item.id}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-accent/30 bg-accent/[0.06] p-5"
                >
                  <Icon className="text-accent" size={24} />
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-white/65"
                      >
                        · {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })()}
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300"
              style={{ width: `${((index + 1) / total) * 100}%` }}
            />
          </div>
          <span className="text-xs tabular-nums text-white/50">
            {index + 1}/{total}
          </span>
        </div>

        <div className="mt-12 flex justify-center">
          <PneCtaLink />
        </div>
      </div>
    </section>
  );
}
