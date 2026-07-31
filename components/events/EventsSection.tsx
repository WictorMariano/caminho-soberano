"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays, ArrowUpRight } from "lucide-react";

import { EVENT_PATH } from "@/lib/event-bitcoin-pratica";
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
  region: Region;
  image: string;
  href?: string;
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
    id: "bitcoin-pratica",
    title: "Caminho Soberano: Dominando o Bitcoin na Prática",
    location: "São Paulo - SP",
    date: "30 de Setembro",
    region: "Sudeste",
    image: "/images/events/card-bitcoin-pratica.png",
    href: EVENT_PATH,
  },
  {
    id: "bitcoin",
    title: "Caminho Soberano: Bitcoin",
    location: "São Paulo - SP",
    date: "25 e 26 de Abril",
    region: "Sudeste",
    image: "/images/events/dominando-bitcoin/hero.png",
  },
];

export function EventsSection() {
  const [active, setActive] = useState<Region>("Todos");

  const filtered = useMemo(
    () =>
      active === "Todos"
        ? events
        : events.filter((event) => event.region === active),
    [active],
  );

  return (
    <section id="eventos" className="relative bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
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
                      className="object-cover object-center transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
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
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-accent transition group-hover:gap-2.5">
                      Mais Informações
                      <ArrowUpRight size={16} />
                    </span>
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
                  className="group h-full overflow-hidden rounded-3xl border border-border bg-surface"
                >
                  {event.href ? (
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
