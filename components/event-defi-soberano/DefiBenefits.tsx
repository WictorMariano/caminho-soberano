"use client";

import Image from "next/image";
import {
  BookOpen,
  Layers,
  Network,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import { defiBenefits } from "@/lib/event-defi-soberano";

const icons: Record<(typeof defiBenefits)[number]["icon"], LucideIcon> = {
  book: BookOpen,
  layers: Layers,
  wrench: Wrench,
  network: Network,
};

export function DefiBenefits() {
  return (
    <section id="experiencia" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div
        className="pointer-events-none absolute -left-[4%] top-[30%] h-80 w-80 rounded-full bg-[rgba(62,207,190,0.12)] blur-[60px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[5%] top-[20%] h-96 w-96 rounded-full bg-[rgba(62,207,190,0.14)] blur-[60px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            O que você vive nesta imersão
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Fundamentos, método, prática guiada e conexões — sem prometer
            rendimento ou resultado financeiro.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          {defiBenefits.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="benefit-soon-card group relative flex flex-col overflow-visible rounded-3xl border border-white/10"
              >
                <div className="benefit-soon-card__shine pointer-events-none absolute inset-0 rounded-3xl" />
                <div className="benefit-soon-card__noise pointer-events-none absolute inset-0 rounded-3xl opacity-[0.35]" />
                <div className="benefit-soon-card__glow" aria-hidden />
                <div className="benefit-soon-card__line" aria-hidden />

                <div className="benefit-soon-card__main relative grid min-h-[210px] grid-cols-1 items-center gap-4 overflow-visible px-5 pb-4 pt-6 sm:grid-cols-[1fr_minmax(0,40%)] sm:px-6 sm:pt-7 md:min-h-[230px]">
                  <div className="relative z-10 flex min-w-0 flex-col items-start pr-2 sm:pr-4">
                    <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-black shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <h3 className="text-[1.05rem] font-bold leading-snug text-white md:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {item.description}
                    </p>
                    <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/12 sm:hidden">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute right-1 top-[42%] z-[2] hidden h-0 w-[min(44%,220px)] -translate-y-1/2 overflow-visible sm:block"
                    aria-hidden
                  >
                    <div className="absolute right-0 top-1/2 h-[clamp(170px,20vw,210px)] w-[clamp(130px,17vw,175px)] -translate-y-1/2 overflow-hidden rounded-[1.35rem] border border-white/15 shadow-[0_20px_40px_-12px_rgba(0,30,60,0.75)]">
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="180px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 px-5 pb-5 sm:px-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-[11px] font-medium text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
