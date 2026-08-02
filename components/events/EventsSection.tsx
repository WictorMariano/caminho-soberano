"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";

import { EVENT_PATH } from "@/lib/event-bitcoin-pratica";
import { PNE_PATH, pneMeta } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

type Region =
  | "Todos"
  | "Centro - Oeste"
  | "Norte"
  | "Sul"
  | "Nordeste"
  | "Sudeste";

type EventItem = {
  id: string;
  title: string;
  location: string;
  date: string;
  /** ISO date used to sort: closest upcoming first, past last */
  startsAt: string;
  region: Region;
  image: string;
  href?: string;
  badge?: string;
  /** Card informativo sem link */
  disabled?: boolean;
};

const regions: Region[] = [
  "Todos",
  "Centro - Oeste",
  "Norte",
  "Sul",
  "Nordeste",
  "Sudeste",
];

const events: EventItem[] = [
  {
    id: "pne",
    title: "Programa Nova Economia",
    location: pneMeta.city,
    date: pneMeta.dateShort,
    startsAt: "2026-08-29",
    region: pneMeta.region,
    image: "/images/events/dominando-bitcoin/benefits/immersion.jpg",
    href: PNE_PATH,
    badge: "Workshop PNE",
  },
  {
    id: "autocustodia",
    title: "Workshop de Autocustódia",
    location: "Local a confirmar",
    date: "Outubro · data a confirmar",
    startsAt: "2026-10-15",
    region: "Sul",
    image: "/images/events/dominando-bitcoin/benefits/bitcoin-practice.jpg",
    badge: "Workshop",
    disabled: true,
  },
  {
    id: "bitcoin-pratica",
    title: "Caminho Soberano: Dominando o Bitcoin na Prática",
    location: "São Paulo, SP",
    date: "18 a 21 de novembro",
    startsAt: "2026-11-18",
    region: "Sudeste",
    image: "/images/events/dominando-bitcoin/hero.png",
    href: EVENT_PATH,
  },
  {
    id: "bitcoin",
    title: "Caminho Soberano: Bitcoin",
    location: "São Paulo, SP",
    date: "25 e 26 de Abril",
    startsAt: "2026-04-25",
    region: "Sudeste",
    image: "/images/gallery/gallery-01.png",
  },
];

function sortByClosest(a: EventItem, b: EventItem, now = Date.now()) {
  const aTime = new Date(a.startsAt).getTime();
  const bTime = new Date(b.startsAt).getTime();
  const aUpcoming = aTime >= now;
  const bUpcoming = bTime >= now;

  // Upcoming first (soonest), then past (most recent past first)
  if (aUpcoming !== bUpcoming) return aUpcoming ? -1 : 1;
  return aUpcoming ? aTime - bTime : bTime - aTime;
}

export function EventsSection() {
  const [active, setActive] = useState<Region>("Todos");

  const filtered = useMemo(() => {
    const list =
      active === "Todos"
        ? events
        : events.filter((event) => event.region === active);
    return [...list].sort(sortByClosest);
  }, [active]);

  return (
    <section id="eventos" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(70,160,255,0.1),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
        </motion.div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {regions.map((region) => (
            <button
              key={region}
              type="button"
              onClick={() => setActive(region)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition",
                active === region
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-border text-foreground/70 hover:border-white/40 hover:text-white",
              )}
            >
              {region}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-stretch">
          {filtered.length === 0 ? (
            <p className="text-muted md:col-span-2">
              Nenhum evento nesta região no momento. Em breve novas datas.
            </p>
          ) : (
            filtered.map((event, index) => {
              const CardInner = (
                <div className="flex h-full flex-col">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={cn(
                        "object-cover object-center transition duration-700",
                        !event.disabled && "group-hover:scale-105",
                        event.disabled && "opacity-90",
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    {event.badge ? (
                      <span className="absolute left-3 top-3 rounded-full border border-accent/35 bg-accent/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur-sm">
                        {event.badge}
                      </span>
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col space-y-4 p-6">
                    <h3 className="text-xl font-semibold leading-snug">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={16} className="text-accent" />
                        {event.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={16} className="text-accent" />
                        {event.date}
                      </span>
                    </div>
                    {event.disabled ? (
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-white/45">
                        Em breve
                      </span>
                    ) : (
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent transition group-hover:gap-2.5">
                        Mais Informações
                        <ArrowUpRight size={16} />
                      </span>
                    )}
                  </div>
                </div>
              );

              return (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={cn(
                    "ocean-panel h-full overflow-hidden rounded-3xl border",
                    event.disabled ? "cursor-default" : "group",
                  )}
                >
                  {event.disabled ? (
                    <div className="block h-full" aria-disabled="true">
                      {CardInner}
                    </div>
                  ) : event.href ? (
                    <Link href={event.href} className="block h-full">
                      {CardInner}
                    </Link>
                  ) : (
                    <a href="#comunidade" className="block h-full">
                      {CardInner}
                    </a>
                  )}
                </motion.article>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
