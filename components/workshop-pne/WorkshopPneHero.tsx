"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  CalendarDays,
  MapPin,
  MonitorPlay,
  Ticket,
} from "lucide-react";

import { PneHeroPhotoMarquee } from "@/components/workshop/pne/PneHeroPhotoMarquee";
import {
  workshopPneMeta,
  workshopPneTickets,
} from "@/lib/workshop-pne-tickets";

const eventFacts = [
  {
    icon: CalendarDays,
    label: "Data",
    value: `${workshopPneMeta.dateCompact} · ${workshopPneMeta.weekday}`,
  },
  {
    icon: MonitorPlay,
    label: "Formato",
    value: "Presencial + Online",
  },
  {
    icon: MapPin,
    label: "Presencial em",
    value: workshopPneMeta.venue,
  },
] as const;

export function WorkshopPneHero() {
  const reduce = useReducedMotion();
  const startingPrice = Math.min(...workshopPneTickets.map((t) => t.price));

  return (
    <section className="relative overflow-hidden bg-[#020b16]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_40%,rgba(40,100,170,0.22),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-accent/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-32 md:min-h-[850px] md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:px-8 md:pb-20 md:pt-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Evento presencial e online
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
              {workshopPneMeta.shortTitle} · Profissionais da Nova Economia
            </span>
          </div>

          <p className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
              {workshopPneMeta.dateFull}
            </span>
            <span className="text-base font-semibold text-accent md:text-lg">
              {workshopPneMeta.weekday} · {workshopPneMeta.city} e online
            </span>
          </p>

          <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl md:text-[2.6rem] lg:text-[3.4rem] xl:text-[4rem]">
            A economia evolui.
            <br />
            <span className="text-accent">O conhecimento</span>
            <br />
            abre o caminho.
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/85">
            Um dia para compreender o que está mudando, experimentar as
            ferramentas da Nova Economia e planejar seus próximos passos. Viva
            a experiência na CDL Florianópolis ou acompanhe ao vivo de onde
            estiver.
          </p>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {eventFacts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 backdrop-blur-sm"
              >
                <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                  <Icon size={14} className="text-accent" />
                  {label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#ingressos"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-bold text-accent-ink shadow-[0_12px_32px_-10px_rgba(255,241,0,0.45)] transition hover:gap-4 hover:brightness-95"
            >
              Garanta seu ingresso <ArrowDown size={17} />
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm text-white/80">
              <Ticket size={16} className="text-accent" />A partir de{" "}
              <strong className="font-semibold text-white">
                R$ {startingPrice}
              </strong>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative min-w-0"
        >
          <div className="relative h-[360px] overflow-hidden rounded-[2rem] border border-white/10 md:h-[640px]">
            <PneHeroPhotoMarquee className="!h-full" />
          </div>

          <div className="absolute -top-4 right-4 z-20 flex flex-col items-center rounded-2xl border border-accent/50 bg-accent px-4 py-3 text-accent-ink shadow-[0_18px_40px_-14px_rgba(255,241,0,0.55)] md:-top-6 md:right-8 md:px-5 md:py-4">
            <span className="text-3xl font-black leading-none md:text-4xl">
              {workshopPneMeta.day}
            </span>
            <span className="mt-1 text-xs font-bold uppercase tracking-[0.2em]">
              {workshopPneMeta.monthAbbr}
            </span>
          </div>

          <div className="relative z-20 mx-5 -mt-16 grid grid-cols-2 divide-x divide-white/10 rounded-2xl border border-white/15 bg-[#0b1c30]/95 shadow-2xl backdrop-blur-xl md:mx-8">
            <div className="p-4 md:p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <MapPin size={14} /> Presencial
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                {workshopPneMeta.venue}
              </p>
              <p className="mt-1 text-xs text-white/55">
                {workshopPneMeta.city}
              </p>
            </div>
            <div className="p-4 md:p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <MonitorPlay size={14} /> Online
              </p>
              <p className="mt-2 text-base font-semibold text-white md:text-lg">
                Ao vivo
              </p>
              <p className="mt-1 text-xs text-white/55">
                Participe de onde estiver
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-y border-white/10 bg-white/[0.025] px-5 py-5">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-9 gap-y-3 text-xs font-medium uppercase tracking-[0.16em] text-white/60">
          {[
            "Bitcoin e Blockchain",
            "IA e Automação",
            "Novos modelos de negócio",
            "Nova economia",
            "Soberania",
          ].map((theme) => (
            <span key={theme} className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
              {theme}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
