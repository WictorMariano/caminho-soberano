"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
} from "lucide-react";

import { AudienceSection } from "@/components/event-bitcoin-pratica/AudienceSection";
import { BenefitsSection } from "@/components/event-bitcoin-pratica/BenefitsSection";
import { BonusSection } from "@/components/event-bitcoin-pratica/BonusSection";
import { HeroStoriesSlider } from "@/components/event-bitcoin-pratica/HeroStoriesSlider";
import { NetworkSection } from "@/components/event-bitcoin-pratica/NetworkSection";
import { PricingCards } from "@/components/event-bitcoin-pratica/PricingCards";
import { LotCountdown } from "@/components/event-bitcoin-pratica/LotCountdown";
import { SpeakerFlipCard } from "@/components/event-bitcoin-pratica/SpeakerFlipCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  eventMeta,
  scheduleUrl,
  speakers,
} from "@/lib/event-bitcoin-pratica";

const heroStories = [
  {
    id: "ocean",
    posterSrc: "/images/events/dominando-bitcoin/ocean.jpg",
    label: "Caminho Soberano",
  },
  {
    id: "tarcisio",
    posterSrc: "/images/events/dominando-bitcoin/speakers/tarcisio.jpg",
    label: "Tarcísio Machado",
  },
  {
    id: "evento",
    posterSrc: "/images/events/dominando-bitcoin/hero.png",
    label: "Imersão presencial",
  },
];

export function BitcoinPraticaEventPage() {
  return (
    <div className="theme-ocean min-h-full">
      <SiteHeader floating ctaHref="#ingresso" />
      <main>
        {/* Hero */}
        <section className="relative min-h-[100svh] overflow-hidden">
          <div className="ocean-hero-bg absolute inset-0" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
            style={{
              backgroundImage:
                "url(/images/events/dominando-bitcoin/noise.png)",
              backgroundSize: "180px",
            }}
          />

          <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-10 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-20 lg:pt-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="max-w-xl"
            >
              <div className="mb-6 flex flex-wrap gap-2.5 text-sm text-foreground/85">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur">
                  <MapPin size={14} className="text-accent" />
                  {eventMeta.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 backdrop-blur">
                  <CalendarDays size={14} className="text-accent" />
                  {eventMeta.dateShort}
                </span>
              </div>

              <h1 className="text-[2.1rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
                {eventMeta.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                Dois dias de imersão para você dominar o Bitcoin, blindar seu
                patrimônio e finalmente viver livre. Soberania não se pede. Se
                exerce.
              </p>
              <a
                href="#ingresso"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
              >
                Comprar ingresso
                <ArrowRight size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative"
            >
              <HeroStoriesSlider stories={heroStories} />
            </motion.div>
          </div>
        </section>

        {/* Para quem é */}
        <AudienceSection />

        {/* Benefícios */}
        <BenefitsSection />

        {/* Network + vídeo expansivo */}
        <NetworkSection />

        {/* Palestrantes */}
        <section id="palestrantes" className="bg-background py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Palestrantes Confirmados
            </h2>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {speakers.map((speaker) => (
                <SpeakerFlipCard
                  key={speaker.name}
                  name={speaker.name}
                  image={speaker.image}
                  instagram={speaker.instagram}
                  twitter={speaker.twitter}
                  bio={speaker.bio}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detalhes + mapa */}
        <section id="detalhes" className="relative overflow-hidden bg-background py-20 md:py-28">
          <div className="absolute inset-0">
            <Image
              src="/images/events/dominando-bitcoin/ocean.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-[#0d2544]/80 to-background" />
          </div>

          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {eventMeta.edition}
            </p>
            <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
              Detalhes do Evento
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="ocean-panel flex flex-col gap-6 rounded-[1.75rem] border p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <CalendarDays className="text-accent" size={22} />
                    <p className="mt-3 text-sm text-muted">Data</p>
                    <p className="mt-1 text-lg font-semibold">
                      {eventMeta.dateFull}
                    </p>
                  </div>
                  <div>
                    <Clock3 className="text-accent" size={22} />
                    <p className="mt-3 text-sm text-muted">Horário</p>
                    <p className="mt-1 text-lg font-semibold">{eventMeta.time}</p>
                  </div>
                </div>
                <div>
                  <MapPin className="text-accent" size={22} />
                  <p className="mt-3 text-sm text-muted">Localização</p>
                  <p className="mt-1 text-lg font-semibold">
                    {eventMeta.location}
                  </p>
                </div>

                <div className="mt-auto rounded-2xl border border-white/10 bg-black/25 p-5">
                  <p className="font-semibold">Cronograma de Palestras</p>
                  <p className="mt-1 text-sm text-foreground/70">
                    Veja a grade completa no Google Sheets.
                  </p>
                  <a
                    href={scheduleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-ink"
                  >
                    Clique para acessar
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="ocean-panel overflow-hidden rounded-[1.75rem] border">
                <iframe
                  title="Mapa do evento em São Paulo"
                  src={eventMeta.mapEmbedUrl}
                  className="h-[320px] w-full border-0 md:h-full md:min-h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ingressos */}
        <section id="ingresso" className="bg-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Garanta o ingresso pelo menor preço
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                Os valores abaixo são do{" "}
                <strong className="font-semibold text-white">
                  1º lote
                </strong>
                . Em 18/08 o preço sobe{" "}
                <strong className="font-semibold text-accent">20%</strong> —
                escolha seu acesso e trave o valor de hoje.
              </p>
            </div>
            <PricingCards />
            <LotCountdown />
          </div>
        </section>

        {/* Bônus exclusivo */}
        <BonusSection />

        {/* CTA final */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="relative min-h-[440px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d2544] md:min-h-[500px] md:rounded-[2rem]">
              {/* Foto só à direita */}
              <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
                <Image
                  src="/images/events/dominando-bitcoin/hero.png"
                  alt="Público do evento Caminho Soberano"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover object-[78%_center]"
                />
              </div>

              {/* Degradê azul → foto */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#0d2544] from-0% via-[#0d2544] via-35% to-transparent to-78% md:from-[#0d2544] md:from-0% md:via-[#0d2544] md:via-42% md:to-transparent md:to-72%"
                aria-hidden
              />

              <div className="relative z-10 flex min-h-[440px] max-w-xl flex-col justify-center px-7 py-12 sm:px-10 md:min-h-[500px] md:px-14 md:py-16">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Entre no
                  <br />
                  Movimento
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                  O mundo caminha para mais controle, mais vigilância e menos
                  liberdade. A pergunta não é se isso vai acontecer.
                  <br />
                  <br />A pergunta é:{" "}
                  <strong className="text-white">Você estará preparado?</strong>
                </p>
                <a
                  href="#ingresso"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
                >
                  Comprar Ingresso
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
