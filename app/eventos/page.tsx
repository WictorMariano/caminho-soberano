import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  MapPin,
  Network,
  Shield,
  Users,
} from "lucide-react";

import { EventosHero } from "@/components/events/EventosHero";
import {
  DefiEventCard,
  WorkshopPneEventCard,
} from "@/components/events/EventsSection";
import { PageShell } from "@/components/PageShell";
import { EVENT_PATH, eventMeta } from "@/lib/event-bitcoin-pratica";
import { DEFI_EVENT_PATH } from "@/lib/event-defi-soberano";
import { PNE_PATH, pneMeta } from "@/lib/workshop-pne";

export const metadata: Metadata = {
  title: "Eventos",
  description:
    "Confira os eventos presenciais do Caminho Soberano e garanta sua vaga.",
};

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
    <PageShell flushHero>
      <EventosHero
        title="Encontros que transformam sua relação com o dinheiro"
        description="Imersões presenciais com prática, networking e foco em soberania financeira."
      />

      {/* Lista de eventos */}
      <section
        id="lista-eventos"
        className="border-t border-border pb-16 pt-4 md:pb-24"
      >
        <div className="mx-auto max-w-6xl space-y-6 px-5 md:px-8">
          <DefiEventCard className="mt-8" />

          <Link
            href={EVENT_PATH}
            className="block overflow-hidden rounded-[2rem] border border-accent/30 bg-[#081c34] transition hover:border-accent/55"
          >
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[200px] overflow-hidden">
                <Image
                  src="/images/events/banners/soberania.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#081c34] via-[#081c34]/70 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Próxima imersão
                  </p>
                  <h3 className="mt-3 max-w-md text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                    Dominando o Bitcoin na prática
                  </h3>
                </div>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  Quatro dias em São Paulo para dominar wallets, segurança,
                  proteção patrimonial e networking soberano.
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-white/75">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} className="text-accent" />
                    {eventMeta.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={14} className="text-accent" />
                    {eventMeta.dateShort}
                  </span>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Ver página do evento <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>

          <WorkshopPneEventCard />

          <Link
            href={PNE_PATH}
            className="block overflow-hidden rounded-[2rem] border border-white/10 bg-surface transition hover:border-accent/35"
          >
            <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[180px]">
                <Image
                  src="/images/gallery/gallery-03.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Realizado · {pneMeta.dateShort}
                </p>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight md:text-3xl">
                  {pneMeta.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 md:text-base">
                  {pneMeta.tagline} · {pneMeta.city}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  Ver página do evento <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
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
            Entre na lista do DeFi Soberano
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
            Cadastro gratuito, sem compromisso. Avisamos quando data, local e
            condições forem definidos.
          </p>
          <Link
            href={DEFI_EVENT_PATH}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            Quero entrar na lista
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
