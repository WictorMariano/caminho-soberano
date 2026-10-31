"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  ExternalLink,
  MapPin,
} from "lucide-react";

import { BenefitsSection } from "@/components/event-bitcoin-pratica/BenefitsSection";
import { BitcoinHeroMarquee } from "@/components/event-bitcoin-pratica/BitcoinHeroMarquee";
import { BitcoinNetworkField } from "@/components/event-bitcoin-pratica/BitcoinNetworkField";
import { BitcoinTutorials } from "@/components/event-bitcoin-pratica/BitcoinTutorials";
import { BonusSection } from "@/components/event-bitcoin-pratica/BonusSection";
import { EventInviteSection } from "@/components/event-bitcoin-pratica/EventInviteSection";
import { EventScheduleScroll } from "@/components/event-bitcoin-pratica/EventScheduleScroll";
import { EventTestimonials } from "@/components/event-bitcoin-pratica/EventTestimonials";
import { PastEventsGallery } from "@/components/event-bitcoin-pratica/PastEventsGallery";
import { RedeSoberanaSection } from "@/components/event-bitcoin-pratica/RedeSoberanaSection";
import { PricingCards } from "@/components/event-bitcoin-pratica/PricingCards";
import { LotCountdown } from "@/components/event-bitcoin-pratica/LotCountdown";
import { OnlineAttendanceSection } from "@/components/event-bitcoin-pratica/OnlineAttendanceSection";
import { SpeakerDialogGrid } from "@/components/event-bitcoin-pratica/SpeakerDialog";
import { SiteFooter } from "@/components/SiteFooter";
import { eventMeta, scheduleUrl } from "@/lib/event-bitcoin-pratica";

export function BitcoinPraticaEventPage() {
  const reduce = useReducedMotion();

  return (
    <div className="theme-bitcoin min-h-full">
      <main>
        <section className="relative overflow-hidden md:min-h-[100svh]">
          <div className="absolute inset-0 ocean-hero-bg" />
          <BitcoinNetworkField reducedMotion={!!reduce} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#120904]/40 via-transparent to-[#120904]" />

          <div className="relative z-10 mx-auto grid max-w-6xl md:min-h-[100svh] md:grid-cols-2 md:items-stretch">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="flex flex-col justify-center px-5 py-10 md:px-8 md:py-16 lg:pr-10"
            >
              <Link href="/" className="mb-7 inline-flex w-fit items-center gap-3">
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

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                {eventMeta.edition}
              </p>
              <h1 className="mt-3 max-w-[12em] text-balance text-[2.15rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
                Dominando o <span className="text-accent">Bitcoin</span> na prática
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
                Quatro dias de imersão para você dominar o Bitcoin, blindar seu
                patrimônio e finalmente viver livre. Soberania não se pede. Se
                exerce.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-white/88">
                  <CalendarDays size={14} className="text-accent" />
                  {eventMeta.dateFull}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-white/88">
                  <Clock3 size={14} className="text-accent" />
                  {eventMeta.time}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-white/88">
                  <MapPin size={14} className="text-accent" />
                  {eventMeta.location}
                </span>
              </div>

              <a
                href="#ingresso"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-ink transition hover:brightness-105"
              >
                Comprar ingresso
              </a>

              <div className="relative mt-10 md:hidden">
                <BitcoinHeroMarquee />
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative hidden min-h-full md:block"
            >
              <BitcoinHeroMarquee className="absolute inset-0 min-h-0" />
            </motion.div>
          </div>
        </section>

        <EventInviteSection />

        <BitcoinTutorials />
        <PastEventsGallery />

        {/* Benefícios */}
        <BenefitsSection />

        {/* Rede Soberana */}
        <RedeSoberanaSection />

        {/* Palestrantes → Local → Ingressos → Bônus → CTA — fundo contínuo */}
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#120904_0%,#0c0603_18%,#000000_34%,#140a04_52%,#000000_70%,#120904_100%)]"
            aria-hidden
          />

          <section id="palestrantes" className="relative py-20 md:py-28">
            <div className="relative mx-auto max-w-6xl px-5 md:px-8">
              <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
                Palestrantes Confirmados
              </h2>

              <SpeakerDialogGrid />
            </div>
          </section>

          <section id="detalhes" className="relative py-20 md:py-28">
            <div className="relative mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {eventMeta.edition}
              </p>
              <h2 className="mt-3 text-center text-3xl font-bold tracking-tight md:text-4xl">
                Detalhes do Evento
              </h2>

              <div className="mt-12 grid gap-6 lg:grid-cols-2">
                <div className="flex flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-black/45 p-6 backdrop-blur-md md:p-8">
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
                      <p className="mt-1 text-lg font-semibold">
                        {eventMeta.time}
                      </p>
                    </div>
                  </div>
                  <div>
                    <MapPin className="text-accent" size={22} />
                    <p className="mt-3 text-sm text-muted">Localização</p>
                    <p className="mt-1 text-lg font-semibold">
                      {eventMeta.location}
                    </p>
                  </div>

                  <div className="mt-auto rounded-2xl border border-white/10 bg-black/40 p-5">
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

                <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/45 backdrop-blur-md">
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

          <EventScheduleScroll />

          <section id="ingresso" className="relative overflow-hidden py-16 md:py-24">
            <Image
              src="/images/gallery/gallery-13.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/75" aria-hidden />
            <div className="relative mx-auto max-w-6xl px-5 md:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                  Garanta o ingresso pelo menor preço
                </h2>
                <LotCountdown />
              </div>
              <PricingCards />
            </div>
          </section>

          <OnlineAttendanceSection />

          <BonusSection />

          <EventTestimonials />

          <section className="relative py-16 md:py-24">
            <div className="relative mx-auto max-w-6xl px-5 md:px-8">
              <div className="ocean-glow-panel relative min-h-[440px] overflow-hidden rounded-[1.75rem] bg-[#1a0e06] md:min-h-[500px] md:rounded-[2rem]">
                <div className="absolute inset-y-0 right-0 w-full md:w-[58%]">
                  <Image
                    src="/images/events/dominando-bitcoin/hero.png"
                    alt="Público do evento Caminho Soberano"
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover object-[78%_center]"
                  />
                </div>

                <div
                  className="absolute inset-0 bg-gradient-to-r from-[#1a0e06] from-0% via-[#1a0e06] via-35% to-transparent to-78% md:from-[#1a0e06] md:from-0% md:via-[#1a0e06] md:via-42% md:to-transparent md:to-72%"
                  aria-hidden
                />
                <div className="ocean-glow-panel__glow" aria-hidden />
                <div className="ocean-glow-panel__line" aria-hidden />

                <div className="relative z-10 flex min-h-[440px] max-w-xl flex-col justify-center px-7 py-12 sm:px-10 md:min-h-[500px] md:px-14 md:py-16">
                  <h2 className="max-w-[12em] text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Entre agora no movimento
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                    O mundo caminha para mais controle, mais vigilância e menos
                    liberdade. A pergunta não é se isso vai acontecer.
                    <br />
                    <br />A pergunta é:{" "}
                    <strong className="text-white">
                      Você estará preparado?
                    </strong>
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
