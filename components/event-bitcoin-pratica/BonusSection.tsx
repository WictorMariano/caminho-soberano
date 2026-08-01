"use client";

import Image from "next/image";
import { Gift, MessageCircle, Percent, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

import { exclusiveBonuses } from "@/lib/event-bitcoin-pratica";

const icons: Record<(typeof exclusiveBonuses)[number]["icon"], LucideIcon> = {
  group: MessageCircle,
  discount: Percent,
};

export function BonusSection() {
  return (
    <section id="bonus" className="relative py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            <Gift size={14} />
            Exclusivo
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Bônus exclusivo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Além da imersão, você leva vantagens que continuam gerando valor
            depois do evento.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          {exclusiveBonuses.map((bonus, index) => {
            const Icon = icons[bonus.icon];

            return (
              <motion.article
                key={bonus.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="benefit-soon-card group relative flex flex-col overflow-visible rounded-3xl border border-white/10"
              >
                <div className="benefit-soon-card__shine pointer-events-none absolute inset-0 rounded-3xl" />
                <div className="benefit-soon-card__noise pointer-events-none absolute inset-0 rounded-3xl opacity-[0.35]" />
                <div className="benefit-soon-card__glow" aria-hidden />
                <div className="benefit-soon-card__line" aria-hidden />

                <div className="benefit-soon-card__main relative grid min-h-[210px] grid-cols-1 items-center gap-4 overflow-visible px-5 pb-4 pt-6 sm:grid-cols-[1fr_minmax(0,40%)] sm:px-6 sm:pt-7 md:min-h-[230px]">
                  <div className="relative z-10 flex min-w-0 flex-col items-start pr-2 sm:pr-4">
                    <div className="mb-3 flex w-full items-center justify-between gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] bg-white text-black shadow-[0_6px_20px_rgba(0,0,0,0.25)]">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-accent">
                        {bonus.badge}
                      </span>
                    </div>

                    <h3 className="text-[1.05rem] font-bold leading-snug text-white md:text-lg">
                      {bonus.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {bonus.description}
                    </p>
                  </div>

                  <div
                    className="pointer-events-none absolute right-1 top-[42%] z-[2] hidden h-0 w-[min(44%,220px)] -translate-y-1/2 overflow-visible sm:block"
                    aria-hidden
                  >
                    <div className="absolute right-0 top-1/2 h-[clamp(170px,20vw,210px)] w-[clamp(130px,17vw,175px)] -translate-y-1/2 overflow-hidden rounded-[1.35rem] border border-white/15 shadow-[0_20px_40px_-12px_rgba(0,30,60,0.75),0_0_0_1px_rgba(90,180,255,0.12)]">
                      <Image
                        src={bonus.image}
                        alt=""
                        fill
                        sizes="180px"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/55 via-transparent to-white/10" />
                    </div>
                  </div>
                </div>

                <div className="relative z-[2] px-5 pb-3 sm:hidden">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/12">
                    <Image
                      src={bonus.image}
                      alt=""
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071525]/50 via-transparent to-transparent" />
                  </div>
                </div>

                <ul className="relative z-[3] m-0 flex list-none flex-wrap gap-2 px-5 pb-5 sm:px-6 sm:pb-6">
                  {bonus.tags.map((tag) => (
                    <li
                      key={tag}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(70,160,255,0.22)] bg-[rgba(70,160,255,0.08)] px-2.5 py-1.5 text-[0.68rem] text-white/75"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#5eb0ff]" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
