"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

import { PneCtaLink } from "@/components/workshop/pne/PneCtaLink";
import { pneExpert, pneHeroThemes, pneMeta } from "@/lib/workshop-pne";

export function PneHero() {
  const reduce = useReducedMotion();

  return (
    <section id="pne-hero" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-0 ocean-hero-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b16]/40 via-transparent to-[#020b16]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-8 md:grid-cols-2 md:items-center md:gap-12 md:px-8 md:pb-24 md:pt-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {pneMeta.brandLine}
          </p>
          <h1 className="mt-3 text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {pneMeta.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
            {pneMeta.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5">
              <CalendarDays size={14} className="text-accent" />
              {pneMeta.dateFull} · {pneMeta.weekday}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5">
              <Clock3 size={14} className="text-accent" />
              {pneMeta.time}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5">
              <MapPin size={14} className="text-accent" />
              {pneMeta.location}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {pneHeroThemes.map((theme, i) => (
              <motion.span
                key={theme}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.07, duration: 0.35 }}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
              >
                {theme}
              </motion.span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2 sm:items-start">
            <PneCtaLink />
          </div>

          <p className="mt-4 text-sm text-white/50">{pneMeta.audienceLine}</p>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto w-full max-w-md md:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <Image
              src={pneExpert.heroImage}
              alt={pneExpert.name}
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b16] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-lg font-bold text-white">{pneExpert.name}</p>
              <p className="text-sm text-white/70">{pneExpert.role}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-4 -top-4 rounded-full border border-accent/40 bg-accent px-4 py-2 text-xs font-bold uppercase tracking-wide text-accent-ink shadow-lg md:-right-6">
            {pneMeta.capacity} vagas
          </div>
        </motion.div>
      </div>
    </section>
  );
}
