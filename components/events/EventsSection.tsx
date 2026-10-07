"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  MonitorPlay,
} from "lucide-react";

import {
  WORKSHOP_PNE_PAGE_PATH,
  workshopPneMeta,
  workshopPneTickets,
} from "@/lib/workshop-pne-tickets";

const facts = [
  {
    icon: CalendarDays,
    label: `${workshopPneMeta.dateFull} · ${workshopPneMeta.weekday}`,
  },
  { icon: MapPin, label: workshopPneMeta.venueFull },
  { icon: MonitorPlay, label: "Presencial e online, ao vivo" },
] as const;

export function EventsSection() {
  const reduce = useReducedMotion();

  return (
    <section id="eventos" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(70,160,255,0.1),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Próximo evento
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Participe dos eventos que irão transformar sua vida!
          </h2>
        </motion.div>

        <WorkshopPneEventCard className="mt-10" />

        <div className="mt-10 flex justify-center">
          <Link
            href="/eventos"
            className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/5 px-7 py-3.5 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent hover:text-accent-ink"
          >
            Ver outros eventos <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function WorkshopPneEventCard({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`ocean-panel group ${className} grid overflow-hidden rounded-[2rem] border border-accent/30 shadow-[0_0_0_1px_rgba(255,241,0,0.08),0_40px_80px_-40px_rgba(255,241,0,0.25)] lg:grid-cols-[1.15fr_1fr]`}
    >
      <Link
        href={WORKSHOP_PNE_PAGE_PATH}
        className="relative flex items-center overflow-hidden bg-black"
        aria-label={`Ver página do ${workshopPneMeta.title}`}
      >
        <div className="relative aspect-[1280/827] w-full">
          <Image
            src="/images/events/banners/nova-economia.jpg"
            alt={workshopPneMeta.title}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain transition duration-700 group-hover:scale-[1.03]"
          />
        </div>
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/45 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent backdrop-blur-md md:left-6 md:top-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Em destaque
        </span>
      </Link>

      <div className="flex flex-col justify-center p-6 md:p-10">
        <div className="flex items-center gap-4">
          <span className="flex shrink-0 flex-col items-center rounded-2xl bg-accent px-3.5 py-2.5 text-accent-ink shadow-[0_14px_32px_-14px_rgba(255,241,0,0.55)]">
            <span className="text-2xl font-black leading-none">
              {workshopPneMeta.day}
            </span>
            <span className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.2em]">
              {workshopPneMeta.monthAbbr}
            </span>
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {workshopPneMeta.shortTitle}
            <span className="block text-white/60">
              Evento presencial e online
            </span>
          </p>
        </div>
        <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
          {workshopPneMeta.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          Um dia para compreender o que está mudando, experimentar as
          ferramentas da Nova Economia e planejar seus próximos passos.
        </p>

        <ul className="mt-6 space-y-2.5">
          {facts.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2.5 text-sm text-white/85"
            >
              <Icon size={16} className="shrink-0 text-accent" />
              {label}
            </li>
          ))}
        </ul>

        <ul className="mt-6 grid grid-cols-3 gap-2">
          {workshopPneTickets.map((ticket) => (
            <li
              key={ticket.id}
              className={
                ticket.featured
                  ? "rounded-xl border border-accent/50 bg-accent/10 px-3 py-2.5"
                  : "rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5"
              }
            >
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/55">
                {ticket.id === "vip"
                  ? "VIP + Jantar"
                  : ticket.id === "presencial"
                    ? "Presencial"
                    : "Online"}
              </span>
              <span className="mt-1 block text-base font-bold leading-tight text-white md:text-lg">
                {ticket.priceLabel}
              </span>
              <span className="block text-[0.7rem] text-white/55">
                à vista
              </span>
              <span className="mt-1 block text-[0.7rem] text-white/55">
                ou 12x de {ticket.installmentLabel}
              </span>
            </li>
          ))}
        </ul>

        <Link
          href={WORKSHOP_PNE_PAGE_PATH}
          className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-[0_12px_32px_-10px_rgba(255,241,0,0.45)] transition hover:gap-3 hover:brightness-95"
        >
          Ver página do evento
          <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}
