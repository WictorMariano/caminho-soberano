"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  ShieldAlert,
  Users,
} from "lucide-react";

import { DefiAgendaScroll } from "@/components/event-defi-soberano/DefiAgendaScroll";
import { DefiAudience } from "@/components/event-defi-soberano/DefiAudience";
import { DefiBenefits } from "@/components/event-defi-soberano/DefiBenefits";
import { DefiGallery } from "@/components/event-defi-soberano/DefiGallery";
import { DefiHeroMarquee } from "@/components/event-defi-soberano/DefiHeroMarquee";
import { DefiHosts } from "@/components/event-defi-soberano/DefiHosts";
import { DefiThemes } from "@/components/event-defi-soberano/DefiThemes";
import { DefiWaitlistForm } from "@/components/event-defi-soberano/DefiWaitlistForm";
import { SiteFooter } from "@/components/SiteFooter";
import { defiEventMeta, defiFaqs } from "@/lib/event-defi-soberano";

export function DefiSoberanoEventPage() {
  const reduce = useReducedMotion();

  return (
    <div className="theme-defi min-h-full">
      <main>
        <section className="relative overflow-hidden md:min-h-[100svh]">
          <div className="absolute inset-0 ocean-hero-bg" />
          <div className="absolute inset-0 defi-grid opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061018]/35 via-transparent to-[#061018]" />

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

              <p className="text-sm font-semibold text-accent">
                {defiEventMeta.partners}
              </p>
              <h1 className="mt-3 max-w-[11em] text-balance text-[2.2rem] font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.3rem]">
                {defiEventMeta.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
                {defiEventMeta.headline}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/58 md:text-base">
                {defiEventMeta.subheadline}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-white/88">
                  <MapPin size={14} className="text-accent" />
                  {defiEventMeta.location}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-white/88">
                  <CalendarDays size={14} className="text-accent" />
                  {defiEventMeta.dateLabel}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-white/88">
                  <Users size={14} className="text-accent" />
                  {defiEventMeta.format}
                </span>
              </div>

              <a
                href="#lista"
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-bold text-accent-ink transition hover:brightness-105"
              >
                {defiEventMeta.cta}
              </a>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/45">
                {defiEventMeta.notice}
              </p>

              <div className="relative mt-10 md:hidden">
                <DefiHeroMarquee />
              </div>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative hidden min-h-full md:block"
            >
              <DefiHeroMarquee className="absolute inset-0 min-h-0" />
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e8f7f4] text-[#041512]">
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold text-[#1f6f72]">
                Lista de espera aberta
              </p>
              <h2 className="mt-3 max-w-[12em] text-balance text-3xl font-bold tracking-tight md:text-5xl">
                Operar DeFi com método, não com impulso
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#041512]/75 md:text-lg">
                A imersão une fundamentos, alavancagem com consciência e prática
                guiada. Você entra na lista agora; data, local e condições
                comerciais vêm depois.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[#041512]/75 md:text-lg">
                Não é promessa de lucro. É educação operacional para quem quer
                decidir com soberania.
              </p>
              <a
                href="#lista"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#041512] px-7 py-3.5 text-sm font-bold text-[#3ecfbe] transition hover:brightness-110"
              >
                Entrar na lista <ArrowRight size={16} />
              </a>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-[2rem] border border-[#041512]/10 bg-[#061018] shadow-[0_30px_60px_-30px_rgba(4,21,18,0.45)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/gallery/gallery-09.jpg"
                    alt="Participantes em imersão presencial"
                    fill
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <DefiAudience />
        <DefiBenefits />
        <DefiGallery />
        <DefiThemes />
        <DefiAgendaScroll />
        <DefiHosts />

        <section id="lista" className="relative overflow-hidden py-16 md:py-24">
          <Image
            src="/images/gallery/gallery-13.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#061018]/82" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-8">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                Entre na lista de espera
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                Conte quem você é e o que busca. Usamos isso para decidir data,
                local e o formato certo do lançamento.
              </p>
              <p className="mt-5 text-sm leading-relaxed text-white/50">
                {defiEventMeta.notice}
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#061018]/92 p-5 backdrop-blur-md md:p-8">
              <DefiWaitlistForm />
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 bg-[#061018] py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Perguntas frequentes
            </h2>
            <div className="mt-10 divide-y divide-white/10 border-t border-white/10">
              {defiFaqs.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="text-accent transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/65">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <div className="ocean-glow-panel relative min-h-[440px] overflow-hidden rounded-[1.75rem] md:min-h-[500px] md:rounded-[2rem]">
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
                className="absolute inset-0 bg-gradient-to-r from-[#081820] from-0% via-[#081820] via-40% to-transparent to-78%"
                aria-hidden
              />
              <div className="ocean-glow-panel__glow" aria-hidden />
              <div className="ocean-glow-panel__line" aria-hidden />
              <div className="relative z-10 flex min-h-[440px] max-w-xl flex-col justify-center px-7 py-12 sm:px-10 md:min-h-[500px] md:px-14 md:py-16">
                <h2 className="max-w-[12em] text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Comece pela lista
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                  DeFi exige método e consciência de risco. Se isso faz sentido
                  para você, entre na lista e seja avisado quando a imersão
                  abrir.
                </p>
                <a
                  href="#lista"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
                >
                  {defiEventMeta.cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="mt-8 flex gap-4 rounded-[1.5rem] border border-amber-300/20 bg-amber-400/5 p-5 md:p-6">
              <ShieldAlert className="mt-0.5 shrink-0 text-amber-200" size={22} />
              <div>
                <h2 className="text-base font-semibold text-amber-50">Aviso de riscos</h2>
                <p className="mt-2 text-sm leading-relaxed text-amber-50/75">
                  DeFi, empréstimos e alavancagem envolvem riscos, inclusive perda
                  de capital. Esta página é educacional e não promete rendimento,
                  lucro, ausência de riscos ou resultados financeiros. Entrar na
                  lista não garante vaga. Consulte também nossa{" "}
                  <Link href="/politica-de-privacidade" className="underline hover:text-white">
                    política de privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
