"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowDown,
  Briefcase,
  Building2,
  Check,
  Cpu,
  GraduationCap,
  Landmark,
  Scale,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

import { TicketsCta } from "@/components/workshop-pne/TicketsCta";
import { WorkshopPneExperience } from "@/components/workshop-pne/WorkshopPneExperience";
import { WorkshopPneLab } from "@/components/workshop-pne/WorkshopPneLab";
import { WorkshopPneTimeline } from "@/components/workshop-pne/WorkshopPneTimeline";
import {
  projetoNeChallengeLead,
  projetoNeChallengeTitle,
  projetoNeChanges,
  projetoNeContextItems,
  projetoNeHypothesis,
  projetoNeMeta,
  projetoNePillars,
} from "@/lib/projeto-nova-economia";

const pillarIcons = {
  pesquisa: Search,
  educacao: GraduationCap,
  certificacao: Scale,
} as const;

const pillarImages = {
  pesquisa: {
    src: "/images/events/dominando-bitcoin/benefits/strategy.jpg",
    alt: "Estudo e planejamento estratégico",
  },
  educacao: {
    src: "/images/gallery/gallery-07.jpg",
    alt: "Participantes em workshop do Caminho Soberano",
  },
  certificacao: {
    src: "/images/gallery/gallery-12.jpg",
    alt: "Profissionais reunidos em encontro do Caminho Soberano",
  },
} as const;

const challengeStats = [
  { value: "4", label: "frentes de mudança simultâneas" },
  { value: "30", label: "anos desde a última grande ruptura" },
  { value: "2026", label: "DREX em fase piloto" },
] as const;

const changeVisuals = {
  tech: {
    icon: Cpu,
    src: "/images/events/dominando-bitcoin/benefits/bitcoin-practice.jpg",
    alt: "Aplicativo com cotações de criptoativos no celular",
  },
  reg: {
    icon: Landmark,
    src: "/images/events/dominando-bitcoin/benefits/strategy.jpg",
    alt: "Profissionais analisando documentos e normas",
  },
  biz: {
    icon: Building2,
    src: "/images/events/dominando-bitcoin/benefits/protection.jpg",
    alt: "Pagamento digital feito pelo computador",
  },
  pro: {
    icon: GraduationCap,
    src: "/images/events/dominando-bitcoin/benefits/immersion.jpg",
    alt: "Plateia acompanhando uma apresentação",
  },
} as const;

const audience = [
  { label: "Contadores", icon: Scale },
  { label: "Empresários", icon: Briefcase },
  { label: "Profissionais liberais", icon: Users },
] as const;

const experiencePoints = [
  "Diagnóstico da sua realidade e do seu negócio",
  "Tecnologias emergentes na prática: Bitcoin, IA e automação",
  "Dinâmicas e ferramentas aplicáveis já no dia seguinte",
  "Conexões com quem também está construindo a Nova Economia",
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

export function WorkshopPneSections() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : "hidden";

  return (
    <>
      <section
        id="contexto"
        className="relative overflow-hidden border-t border-border py-16 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(70,160,255,0.08),_transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Contexto"
            title="Por que agora?"
            text="A transformação da infraestrutura financeira brasileira não é uma tendência futura. Ela já começou."
            reduce={reduce}
          />
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {projetoNeContextItems.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeUp}
                whileHover={
                  reduce ? undefined : { y: -4, transition: { duration: 0.25 } }
                }
                className="pne-project-card group rounded-2xl border p-5"
              >
                <div className="pne-project-card__shine" aria-hidden />
                <h3 className="relative text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/65">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border bg-[#081c34] py-16 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_10%,_rgba(255,241,0,0.07),_transparent_45%),radial-gradient(ellipse_at_0%_100%,_rgba(70,160,255,0.12),_transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
            <motion.div
              initial={initial}
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              variants={stagger}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
              >
                O Desafio
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.6rem]"
              >
                {projetoNeChallengeTitle}
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-5 text-base leading-relaxed text-white/70 md:text-lg"
              >
                {projetoNeChallengeLead}
              </motion.p>

              <motion.dl
                variants={fadeUp}
                className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6"
              >
                {challengeStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-accent md:text-4xl">
                      {stat.value}
                    </dd>
                    <dd className="mt-1 text-xs leading-snug text-white/60 md:text-sm">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </motion.div>

            <motion.figure
              initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-white/10 md:min-h-[460px]"
            >
              <Image
                src="/images/events/dominando-bitcoin/benefits/independence.jpg"
                alt="Gráfico de mercado em tela, representando a nova infraestrutura financeira"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1200ms] motion-safe:group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#020b16] via-[#020b16]/30 to-transparent"
                aria-hidden
              />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-[#020b16]/60 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Em transformação agora
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  Ruptura estrutural
                </p>
                <p className="mt-2 max-w-sm text-2xl font-semibold leading-snug text-white md:text-[1.75rem]">
                  Quatro mudanças acontecendo ao mesmo tempo.
                </p>
              </figcaption>
            </motion.figure>
          </div>

          <motion.div
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            {projetoNeChanges.map((item, index) => {
              const visual = changeVisuals[item.id];
              const Icon = visual.icon;
              return (
                <motion.article
                  key={item.id}
                  variants={fadeUp}
                  whileHover={
                    reduce ? undefined : { y: -6, transition: { duration: 0.25 } }
                  }
                  className="pne-project-card group flex flex-col rounded-[1.5rem] border"
                >
                  <div className="pne-project-card__shine" aria-hidden />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={visual.src}
                      alt={visual.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#102849] via-[#102849]/25 to-transparent"
                      aria-hidden
                    />
                  </div>
                  <span className="relative z-10 -mt-[22px] ml-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-[#081c34] text-accent shadow-[0_0_20px_rgba(255,241,0,0.18)] transition group-hover:shadow-[0_0_28px_rgba(255,241,0,0.35)]">
                    <Icon size={19} />
                  </span>
                  <div className="relative flex flex-1 flex-col p-5 pt-4">
                    <motion.div
                      className="mb-4 h-px origin-left bg-gradient-to-r from-accent/80 to-transparent"
                      initial={reduce ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
                    />
                    <h3 className="text-lg font-semibold text-white transition group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <TicketsCta className="mt-14" />
        </div>
      </section>

      <WorkshopPneTimeline />

      <section
        id="o-workshop"
        className="border-t border-border bg-[#081c34] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="O Workshop"
            title="Profissionais da Nova Economia"
            text="Uma experiência de aprendizado e prática dedicada a examinar, com clareza, os impactos da evolução da infraestrutura financeira sobre empresas, mercados e profissões."
            reduce={reduce}
          />
          <motion.blockquote
            initial={reduce ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-3xl border-l-2 border-accent pl-5 text-lg font-medium leading-relaxed text-white/85 md:text-xl"
          >
            {projetoNeMeta.purposeQuote}
          </motion.blockquote>

          <motion.div
            className="mt-12 grid gap-10 md:grid-cols-2"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                O que traduzimos
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/70">
                Os principais temas da Nova Economia para uma linguagem
                empresarial, precisa e aplicável, conectando regulação,
                tecnologia e competências profissionais.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                O que você vive no workshop
              </p>
              <ul className="mt-3 space-y-2 text-base text-white/70">
                {experiencePoints.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduce ? false : { opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                    className="flex items-start gap-2.5"
                  >
                    <Check
                      size={18}
                      className="mt-1 shrink-0 text-accent"
                      aria-hidden
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

        </div>
      </section>

      <WorkshopPneLab />

      <WorkshopPneExperience />

      <section className="relative overflow-hidden border-t border-border py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,241,0,0.05),_transparent_55%)]"
          aria-hidden
        />
        <motion.div
          className="relative mx-auto max-w-3xl px-5 text-center md:px-8"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Hipótese de Pesquisa
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Nossa Hipótese
          </h2>
          <blockquote className="mt-8 text-xl font-medium leading-relaxed text-white md:text-2xl">
            {projetoNeHypothesis.quote}
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            {projetoNeHypothesis.body}
          </p>

          <TicketsCta className="mt-10" />
        </motion.div>
      </section>

      <section className="border-t border-border bg-[#081c34] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Como Atuamos"
            title="Três Frentes de Atuação Complementares"
            text="Foco na geração de conhecimento aplicado e no desenvolvimento de competências estratégicas para a profissão contábil brasileira."
            reduce={reduce}
          />
          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-3"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {projetoNePillars.map((item, index) => {
              const Icon = pillarIcons[item.id];
              return (
                <motion.article
                  key={item.id}
                  variants={fadeUp}
                  whileHover={
                    reduce ? undefined : { y: -6, transition: { duration: 0.25 } }
                  }
                  className="pne-project-card group rounded-[1.5rem] border p-6"
                >
                  <div className="pne-project-card__shine" aria-hidden />
                  <div className="relative -mx-6 -mt-6 mb-6 aspect-[4/3] overflow-hidden">
                    <Image
                      src={pillarImages[item.id].src}
                      alt={pillarImages[item.id].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#102849] via-transparent to-transparent"
                      aria-hidden
                    />
                    <span
                      className="absolute bottom-4 right-5 text-5xl font-extrabold text-white/20"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent transition group-hover:shadow-[0_0_24px_rgba(255,241,0,0.25)]">
                    <Icon size={20} />
                  </span>
                  <h3 className="relative mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-white/65 md:text-base">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Para quem é
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Imersão para quem decide o futuro dos negócios
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              O workshop não pretende formar especialistas em blockchain ou
              direito digital. O objetivo é preparar profissionais para
              compreender a evolução da infraestrutura financeira e seus
              impactos sobre empresas, clientes e modelos de negócio.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {audience.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-sm text-white/80"
                >
                  <Icon size={15} className="text-accent" />
                  {label}
                </li>
              ))}
            </ul>
            <a
              href="#ingressos"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink shadow-[0_12px_28px_-10px_rgba(255,241,0,0.4)] transition hover:gap-3 hover:brightness-95"
            >
              Escolher meu ingresso
              <ArrowDown size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="pne-project-card rounded-[1.75rem] border p-6 md:p-8"
          >
            <div className="pne-project-card__shine" aria-hidden />
            <div className="relative -mx-6 -mt-6 mb-6 aspect-[4/3] overflow-hidden md:-mx-8 md:-mt-8">
              <Image
                src="/images/gallery/gallery-07.jpg"
                alt="Aprendizado prático com notebooks em workshop do Caminho Soberano"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#102849] via-transparent to-transparent"
                aria-hidden
              />
              <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.14em] text-white">
                Da conversa à prática
              </p>
            </div>
            <p className="relative text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              O que você leva
            </p>
            <ul className="relative mt-5 space-y-3">
              {experiencePoints.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.35 }}
                  className="flex items-start gap-3 text-base text-white/80"
                >
                  <Sparkles size={16} className="mt-1 shrink-0 text-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  reduce,
}: {
  eyebrow: string;
  title: string;
  text: string;
  reduce: boolean | null;
}) {
  return (
    <motion.div
      className="max-w-3xl"
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
        {text}
      </p>
    </motion.div>
  );
}
