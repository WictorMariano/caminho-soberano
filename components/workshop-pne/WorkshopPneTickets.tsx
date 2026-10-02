"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Crown,
  ShieldCheck,
  Star,
  Wifi,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  workshopPneCheckoutUrl,
  workshopPneTickets,
  type WorkshopTicket,
} from "@/lib/workshop-pne-tickets";

const ticketIcons = {
  online: Wifi,
  presencial: Star,
  vip: Crown,
} as const;

export function WorkshopPneTickets() {
  const reduce = useReducedMotion();

  return (
    <section
      id="ingressos"
      className="relative scroll-mt-20 overflow-hidden border-t border-border bg-[#081c34] py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(70,160,255,0.16),_transparent_60%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Ingressos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Escolha como participar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Workshop Profissionais da Nova Economia. Três formas de viver a
            experiência, com o mesmo compromisso: conteúdo prático para
            aplicar.
          </p>
        </motion.div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-7">
          {workshopPneTickets.map((ticket, index) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              index={index}
              reduce={reduce}
            />
          ))}
        </div>

        <motion.p
          className="mt-10 flex flex-wrap items-center justify-center gap-2 text-center text-sm text-white/55"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ShieldCheck size={16} className="text-accent" />
          Pagamento seguro pela plataforma Greenn. As vagas presenciais são
          limitadas.
        </motion.p>
      </div>
    </section>
  );
}

export function WorkshopPneClosing() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-t border-border">
      <Image
        src="/images/gallery/gallery-13.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#020b16]/95 via-[#020b16]/85 to-[#020b16]/70"
        aria-hidden
      />
      <motion.div
        className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-8 md:py-24"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              31 de outubro · Alphaville, Barueri (SP) e online
            </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            O próximo passo na Nova Economia começa agora.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Online a partir de R$ 197, presencial por R$ 997 ou a experiência
            VIP com Jantar de Negócios por R$ 1.997.
          </p>
        </div>
        <a
          href={workshopPneCheckoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-bold text-accent-ink shadow-[0_16px_40px_-12px_rgba(255,241,0,0.5)] transition hover:gap-4 hover:brightness-95"
        >
          Garantir meu ingresso
          <ArrowUpRight size={20} />
        </a>
      </motion.div>
    </section>
  );
}

function TicketCard({
  ticket,
  index,
  reduce,
}: {
  ticket: WorkshopTicket;
  index: number;
  reduce: boolean | null;
}) {
  const Icon = ticketIcons[ticket.id];
  const isVip = ticket.id === "vip";

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
      className={cn(
        "pne-project-card group relative flex h-full flex-col rounded-[1.75rem] border",
        ticket.featured &&
          "!border-accent/60 shadow-[0_0_0_1px_rgba(255,241,0,0.2),0_30px_70px_-30px_rgba(255,241,0,0.35)] lg:-mt-4 lg:mb-4",
        isVip && "!border-amber-300/40",
      )}
    >
      <div className="pne-project-card__shine" aria-hidden />

      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={ticket.image.src}
          alt={ticket.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#102849] via-[#102849]/20 to-transparent"
          aria-hidden
        />
        {ticket.badge ? (
          <span
            className={cn(
              "absolute left-4 top-4 rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]",
              ticket.featured
                ? "bg-accent text-accent-ink"
                : "border border-amber-300/50 bg-amber-300/15 text-amber-200 backdrop-blur-sm",
            )}
          >
            {ticket.badge}
          </span>
        ) : null}
        <span className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/35 bg-[#081c34]/70 text-accent backdrop-blur-sm">
          <Icon size={20} />
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        <h3 className="text-xl font-semibold leading-snug text-white">
          {ticket.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">
          {ticket.tagline}
        </p>

        <p className="mt-6 flex items-baseline gap-2">
          <span className="text-4xl font-extrabold tracking-tight text-white md:text-[2.6rem]">
            {ticket.priceLabel}
          </span>
          <span className="text-sm text-white/50">por pessoa</span>
        </p>

        <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
          {ticket.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
            >
              <Check
                size={16}
                className="mt-0.5 shrink-0 text-accent"
                aria-hidden
              />
              {benefit}
            </li>
          ))}
        </ul>

        <a
          href={workshopPneCheckoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition",
            ticket.featured
              ? "bg-accent text-accent-ink shadow-[0_12px_32px_-10px_rgba(255,241,0,0.45)] hover:brightness-95"
              : "border border-white/20 text-white hover:border-accent hover:text-accent",
          )}
        >
          {ticket.ctaLabel}
          <ArrowUpRight size={16} />
        </a>
      </div>
    </motion.article>
  );
}
