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
  EVENT_PATH,
  eventMeta,
} from "@/lib/event-bitcoin-pratica";
import {
  DEFI_EVENT_PATH,
  defiEventMeta,
} from "@/lib/event-defi-soberano";
import { PNE_PATH, pneMeta } from "@/lib/workshop-pne";
import { WAITLIST_PATH } from "@/lib/waitlist";
import {
  WORKSHOP_PNE_PAGE_PATH,
  workshopPneMeta,
  workshopPneTickets,
} from "@/lib/workshop-pne-tickets";

const facts = [
  {
    icon: CalendarDays,
    label: `${workshopPneMeta.dateFull} · ${workshopPneMeta.weekday} · ${workshopPneMeta.time}`,
  },
  { icon: MapPin, label: workshopPneMeta.venueFull },
  { icon: MonitorPlay, label: "Presencial e online, ao vivo" },
] as const;

const catalogEvents = [
  {
    href: EVENT_PATH,
    badge: "Próxima imersão",
    title: "Dominando o Bitcoin na prática",
    text: "Quatro dias em São Paulo para dominar wallets, segurança, proteção patrimonial e networking soberano.",
    meta: `${eventMeta.dateShort} · ${eventMeta.location}`,
    image: "/images/events/banners/soberania.jpg",
    cta: "Ver página do evento",
    past: false,
  },
  {
    href: WAITLIST_PATH,
    badge: "Lista de espera",
    title: workshopPneMeta.title,
    text: "Um dia para compreender o que está mudando, experimentar as ferramentas da Nova Economia e planejar os próximos passos.",
    meta: `${workshopPneMeta.dateShort} · ${workshopPneMeta.city}`,
    image: "/images/events/banners/nova-economia.jpg",
    cta: "Entrar na lista de espera",
    past: true,
  },
  {
    href: WAITLIST_PATH,
    badge: "Lista de espera",
    title: pneMeta.title,
    text: pneMeta.tagline,
    meta: `${pneMeta.dateShort} · ${pneMeta.city}`,
    image: "/images/gallery/gallery-03.png",
    cta: "Entrar na lista de espera",
    past: true,
  },
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
            Eventos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Participe dos eventos que irão transformar sua vida!
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65">
            Lista de espera do DeFi Soberano, a próxima imersão de Bitcoin e as
            páginas dos encontros recentes.
          </p>
        </motion.div>

        <DefiEventCard className="mt-10" />

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {catalogEvents.map((event, index) => (
            <EventCatalogCard
              key={event.title}
              event={event}
              delay={0.08 + index * 0.06}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/eventos"
            className="inline-flex items-center gap-3 rounded-full border border-accent/40 bg-accent/5 px-7 py-3.5 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent hover:text-accent-ink"
          >
            Ver todos os eventos <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function EventCatalogCard({
  event,
  delay = 0,
}: {
  event: (typeof catalogEvents)[number];
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay }}
      className="ocean-panel group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-accent/25"
    >
      <Link
        href={event.href}
        className="relative block aspect-[16/10] overflow-hidden bg-black"
        aria-label={event.title}
      >
        <Image
          src={event.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-accent/40 bg-black/50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-accent backdrop-blur-md">
          {event.badge}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
          {event.meta}
        </p>
        <h3 className="mt-2 text-xl font-extrabold leading-tight tracking-tight text-white">
          {event.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
          {event.text}
        </p>
        <Link
          href={event.href}
          className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-accent transition hover:gap-3"
        >
          {event.cta}
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

export function DefiEventCard({
  className = "",
  tone = "defi",
}: {
  className?: string;
  tone?: "defi" | "ocean";
}) {
  const reduce = useReducedMotion();
  const ocean = tone === "ocean";

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={
        ocean
          ? `ocean-panel group grid overflow-hidden rounded-[2rem] border border-accent/30 shadow-[0_0_0_1px_rgba(255,241,0,0.08),0_40px_80px_-40px_rgba(255,241,0,0.25)] lg:grid-cols-[1.15fr_1fr] ${className}`
          : `group grid overflow-hidden rounded-[2rem] border border-[#3ecfbe]/35 bg-[#061018] shadow-[0_0_0_1px_rgba(62,207,190,0.08),0_40px_80px_-40px_rgba(62,207,190,0.28)] lg:grid-cols-[1.15fr_1fr] ${className}`
      }
    >
      <Link
        href={DEFI_EVENT_PATH}
        className="relative flex min-h-[220px] items-end overflow-hidden"
        aria-label={`Ver página do ${defiEventMeta.title}`}
      >
        <Image
          src="/images/gallery/gallery-13.jpg"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div
          className={
            ocean
              ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(8,28,52,0.2),rgba(8,28,52,0.9))]"
              : "absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,24,0.15),rgba(6,16,24,0.88))]"
          }
        />
        <div
          className={
            ocean
              ? "absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,241,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,241,0,0.08)_1px,transparent_1px)] [background-size:36px_36px]"
              : "absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(62,207,190,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(62,207,190,0.1)_1px,transparent_1px)] [background-size:36px_36px]"
          }
        />
        <span
          className={
            ocean
              ? "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-black/45 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent backdrop-blur-md md:left-6 md:top-6"
              : "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#3ecfbe]/45 bg-black/45 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#3ecfbe] backdrop-blur-md md:left-6 md:top-6"
          }
        >
          <span className="relative flex h-2 w-2">
            <span
              className={
                ocean
                  ? "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none"
                  : "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3ecfbe] opacity-60 motion-reduce:animate-none"
              }
            />
            <span
              className={
                ocean
                  ? "relative inline-flex h-2 w-2 rounded-full bg-accent"
                  : "relative inline-flex h-2 w-2 rounded-full bg-[#3ecfbe]"
              }
            />
          </span>
          Lista de espera
        </span>
        <div className="relative z-10 p-6 md:p-8">
          <p
            className={
              ocean
                ? "text-xs font-semibold uppercase tracking-[0.16em] text-accent"
                : "text-xs font-semibold uppercase tracking-[0.16em] text-[#3ecfbe]"
            }
          >
            {defiEventMeta.partners}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/75">
            Imersão presencial em São Paulo. Cadastro gratuito, sem compromisso.
          </p>
        </div>
      </Link>

      <div className="flex flex-col justify-center p-6 md:p-10">
        <p
          className={
            ocean
              ? "text-xs font-semibold uppercase tracking-[0.18em] text-accent"
              : "text-xs font-semibold uppercase tracking-[0.18em] text-[#3ecfbe]"
          }
        >
          Novo evento
        </p>
        <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl lg:text-4xl">
          {defiEventMeta.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
          {defiEventMeta.headline}
        </p>

        <ul className="mt-6 space-y-2.5">
          <li className="flex items-center gap-2.5 text-sm text-white/85">
            <MapPin
              size={16}
              className={ocean ? "shrink-0 text-accent" : "shrink-0 text-[#3ecfbe]"}
            />
            {defiEventMeta.location}
          </li>
          <li className="flex items-center gap-2.5 text-sm text-white/85">
            <CalendarDays
              size={16}
              className={ocean ? "shrink-0 text-accent" : "shrink-0 text-[#3ecfbe]"}
            />
            {defiEventMeta.dateLabel}
          </li>
          <li className="flex items-center gap-2.5 text-sm text-white/85">
            <MonitorPlay
              size={16}
              className={ocean ? "shrink-0 text-accent" : "shrink-0 text-[#3ecfbe]"}
            />
            {defiEventMeta.format}
          </li>
        </ul>

        <Link
          href={DEFI_EVENT_PATH}
          className={
            ocean
              ? "mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink shadow-[0_12px_32px_-10px_rgba(255,241,0,0.45)] transition hover:gap-3 hover:brightness-95"
              : "mt-8 inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#3ecfbe] px-7 py-3.5 text-sm font-bold text-[#061018] shadow-[0_12px_32px_-10px_rgba(62,207,190,0.45)] transition hover:gap-3 hover:brightness-95"
          }
        >
          Entrar na lista de espera
          <ArrowRight size={17} />
        </Link>
      </div>
    </motion.article>
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
          Realizado
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
