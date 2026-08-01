"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarDays, Clock3, MapPin, Users } from "lucide-react";
import type { ReactNode } from "react";

import { PneCtaLink } from "@/components/workshop/pne/PneCtaLink";
import { PneHeroPhotoMarquee } from "@/components/workshop/pne/PneHeroPhotoMarquee";
import { pneHeroThemes, pneMeta } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

function HeroMetaChip({
  children,
  accent = false,
}: {
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center overflow-hidden rounded-full border px-3.5 py-1.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.55)]",
        accent
          ? "border-accent/40 font-medium text-accent"
          : "border-white/10 text-white/88",
      )}
      style={{
        background: accent
          ? "linear-gradient(160deg, rgba(255,241,0,0.12) 0%, rgba(8,10,16,0.96) 55%, rgba(6,8,12,0.98) 100%)"
          : "linear-gradient(160deg, rgb(18,22,30) 0%, rgb(8,10,16) 55%, rgb(6,8,12) 100%)",
      }}
    >
      {/* Soft top-left light sheen */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: accent
            ? "radial-gradient(ellipse 90% 120% at 12% 0%, rgba(255,241,0,0.18), transparent 58%)"
            : "radial-gradient(ellipse 90% 120% at 12% 0%, rgba(255,255,255,0.14), transparent 58%)",
        }}
      />
      {/* Dot-grid texture (same language as IA Divulgadora bento cards) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <span className="relative z-10 inline-flex items-center gap-1.5">
        {children}
      </span>
    </span>
  );
}

export function PneHero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="pne-hero"
      className="relative overflow-hidden md:min-h-[100svh]"
    >
      <div className="absolute inset-0 ocean-hero-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b16]/40 via-transparent to-[#020b16]" />

      <div className="relative z-10 mx-auto grid max-w-6xl md:min-h-[100svh] md:grid-cols-2 md:items-stretch">
        {/* Copy column */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col justify-center px-5 py-10 md:px-8 md:py-16 lg:pr-10"
        >
          <Link
            href="/"
            className="mb-7 inline-flex w-fit items-center gap-3"
          >
            <Image
              src="/images/brand/logo-mark.png"
              alt="Caminho Soberano"
              width={40}
              height={40}
              className="h-9 w-auto md:h-10"
              priority
            />
            <span className="leading-none">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/75 md:text-[0.7rem]">
                Caminho
              </span>
              <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-white md:text-base">
                Soberano
              </span>
            </span>
          </Link>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {pneMeta.brandLine}
          </p>
          <h1 className="mt-3 text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            {pneMeta.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
            {pneMeta.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5 text-sm">
            <HeroMetaChip>
              <CalendarDays size={14} className="text-accent" />
              {pneMeta.dateFull} · {pneMeta.weekday}
            </HeroMetaChip>
            <HeroMetaChip>
              <Clock3 size={14} className="text-accent" />
              {pneMeta.time}
            </HeroMetaChip>
            <HeroMetaChip>
              <MapPin size={14} className="text-accent" />
              {pneMeta.location}
            </HeroMetaChip>
            <HeroMetaChip accent>
              <Users size={14} />
              {pneMeta.capacity} vagas
            </HeroMetaChip>
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

          {/* Mobile: carousel after CTA — altura limitada, loop contínuo */}
          <div className="relative mt-10 md:hidden">
            <PneHeroPhotoMarquee />
          </div>
        </motion.div>

        {/* Desktop: full-height carousel from top to bottom of hero */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative hidden min-h-full md:block"
        >
          <PneHeroPhotoMarquee className="absolute inset-0 min-h-0" />
        </motion.div>
      </div>
    </section>
  );
}
