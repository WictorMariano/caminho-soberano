"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Eye,
  Target,
  Wrench,
  Lightbulb,
  Map,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { pneBenefits } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

const icons = [Eye, Target, Wrench, Lightbulb, Map, Sparkles];

export function PneBenefits() {
  const reduce = useReducedMotion();
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: -1 | 1) => {
    scroller.current?.scrollBy({
      left: dir * (scroller.current.clientWidth * 0.85),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative border-t border-white/8 bg-[#020b16] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            O que você leva deste workshop
          </h2>
          <p className="mt-3 text-base text-white/65 md:text-lg">
            Clareza, diagnóstico, prática e um primeiro plano — em um único dia.
          </p>
        </motion.div>

        {/* Desktop bento */}
        <div className="mt-10 hidden gap-4 md:grid md:grid-cols-2">
          {pneBenefits.map((item, i) => {
            const Icon = icons[i] ?? Sparkles;
            return (
              <motion.article
                key={item.id}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={reduce ? undefined : { y: -6 }}
                className={cn(
                  "rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition",
                  item.size === "large" && "md:min-h-[180px]",
                )}
              >
                <Icon className="mb-3 text-accent" size={22} />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65 md:text-base">
                  {item.text}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile carousel */}
        <div className="mt-8 md:hidden">
          <div
            ref={scroller}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {pneBenefits.map((item, i) => {
              const Icon = icons[i] ?? Sparkles;
              return (
                <article
                  key={item.id}
                  className="w-[85%] shrink-0 snap-center rounded-3xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <Icon className="mb-3 text-accent" size={20} />
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
