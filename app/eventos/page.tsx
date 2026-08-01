import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Users,
  Shield,
  Network,
  BookOpen,
} from "lucide-react";

import { EventosHero } from "@/components/events/EventosHero";
import { PageShell } from "@/components/PageShell";
import { EVENT_PATH, eventMeta } from "@/lib/event-bitcoin-pratica";
import { PNE_PATH, pneMeta } from "@/lib/workshop-pne";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Confira os eventos presenciais do Caminho Soberano e garanta sua vaga.",
};

const events = [
  {
    id: "bitcoin-pratica",
    title: eventMeta.title,
    location: eventMeta.location,
    date: eventMeta.dateShort,
    image: "/images/gallery/gallery-06.jpg",
    href: EVENT_PATH,
    badge: null as string | null,
  },
  {
    id: "pne",
    title: "Programa Nova Economia",
    location: pneMeta.location,
    date: pneMeta.dateShort,
    image: "/images/gallery/gallery-07.jpg",
    href: PNE_PATH,
    badge: "Workshop PNE",
  },
];

const expectativas = [
  {
    icon: BookOpen,
    title: "Conteúdo aplicável",
    text: "Palestras e práticas voltadas a wallets, segurança, operação e proteção patrimonial.",
  },
  {
    icon: Network,
    title: "Networking real",
    text: "Conexão com empresários, profissionais e lideranças alinhadas à soberania.",
  },
  {
    icon: Shield,
    title: "Foco em soberania",
    text: "Tudo pensado para você retomar o controle do próprio dinheiro, na prática.",
  },
  {
    icon: Users,
    title: "Ambiente presencial",
    text: "Imersão intensa, com espaço para dúvidas ao vivo e troca entre participantes.",
  },
];

const etapas = [
  {
    step: "01",
    title: "Escolha o evento",
    text: "Veja a cidade, a data e o formato da imersão que faz sentido para você.",
  },
  {
    step: "02",
    title: "Garanta sua vaga",
    text: "Escolha o ingresso e finalize a inscrição pelos canais oficiais do evento.",
  },
  {
    step: "03",
    title: "Prepare-se",
    text: "Acompanhe o cronograma e as orientações enviadas antes do dia do encontro.",
  },
  {
    step: "04",
    title: "Viva a imersão",
    text: "Participe das palestras, pratique, conecte-se e leve o aprendizado para a vida.",
  },
];

export default function EventosPage() {
  return (
    <PageShell>
      <EventosHero
        title="Encontros que transformam sua relação com o dinheiro"
        description="Imersões presenciais com prática, networking e foco em soberania financeira."
      />

      {/* Lista de eventos */}
      <section
        id="lista-eventos"
        className="border-t border-border pb-16 pt-4 md:pb-24"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Link
                key={event.id}
                href={event.href}
                className="group overflow-hidden rounded-[1.75rem] border border-border bg-black/30 transition hover:border-accent/50"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {event.badge ? (
                    <span className="absolute left-3 top-3 rounded-full border border-accent/35 bg-accent/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur-sm">
                      {event.badge}
                    </span>
                  ) : null}
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold leading-snug">
                    {event.title}
                  </h2>
                  <div className="mt-3 flex flex-col gap-1.5 text-sm text-foreground/65">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" />
                      {event.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-accent" />
                      {event.date}
                    </span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Ver evento
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* O que esperar */}
      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Experiência
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            O que esperar de um evento Caminho Soberano
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {expectativas.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border-t border-accent/35 pt-5">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como participar */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Como participar
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Do interesse à imersão, em quatro passos
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {etapas.map((item) => (
              <div key={item.step}>
                <span className="text-sm font-semibold text-accent">
                  {item.step}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem */}
      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/gallery/gallery-03.png"
              alt="Participantes em evento do Caminho Soberano"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Para quem é
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Feito para quem quer soberania de verdade
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
              Profissionais liberais, empresários, investidores, pró-liberdade e
              qualquer pessoa que queira aprender Bitcoin na prática, com
              segurança, clareza e comunidade.
            </p>
            <ul className="mt-6 space-y-3 text-base text-foreground/75">
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                Quem busca independência financeira real
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                Quem quer proteger patrimônio com inteligência
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                Quem valoriza networking alinhado a liberdade
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Próximo encontro: São Paulo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
            {eventMeta.title}, {eventMeta.dateShort}, em{" "}
            {eventMeta.location}. Vagas limitadas.
          </p>
          <Link
            href={EVENT_PATH}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            Garantir minha vaga
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
