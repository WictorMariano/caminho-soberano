"use client";

import Link from "next/link";
import Image from "next/image";
import { ProjetoExperience } from "@/components/projeto-nova-economia/ProjetoExperience";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  GraduationCap,
  Mail,
  Scale,
  Search,
  Sparkles,
} from "lucide-react";

import {
  PROJETO_NE_EXTERNAL,
  projetoNeAgenda,
  projetoNeChallengeLead,
  projetoNeChallengeTitle,
  projetoNeChanges,
  projetoNeContactBio,
  projetoNeContactQuote,
  projetoNeContextItems,
  projetoNeHypothesis,
  projetoNeImmersion,
  projetoNeMeta,
  projetoNeNotUs,
  projetoNePillars,
  projetoNeTimeline,
  projetoNeWhitePaper,
} from "@/lib/projeto-nova-economia";

const pillarIcons = {
  pesquisa: Search,
  educacao: GraduationCap,
  certificacao: Scale,
} as const;

const pillarImages = {
  pesquisa: { src: "/images/events/dominando-bitcoin/benefits/strategy.jpg", alt: "Estudo e planejamento estratégico" },
  educacao: { src: "/images/gallery/gallery-07.jpg", alt: "Participantes em workshop do Caminho Soberano" },
  certificacao: { src: "/images/gallery/gallery-12.jpg", alt: "Profissionais reunidos em encontro do Caminho Soberano" },
} as const;

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
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export function ProjetoNovaEconomiaSections() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : "hidden";

  return (
    <>
      <section id="contexto" className="relative overflow-hidden border-t border-border py-16 md:py-24">
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
                whileHover={reduce ? undefined : { y: -4, transition: { duration: 0.25 } }}
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

      <section className="relative overflow-hidden border-t border-border bg-[#081c34] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
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
              className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              {projetoNeChallengeTitle}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              {projetoNeChallengeLead}
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 sm:grid-cols-2"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projetoNeChanges.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="group border-t border-accent/30 pt-5"
              >
                <motion.div
                  className="mb-4 h-px origin-left bg-gradient-to-r from-accent/80 to-transparent"
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <h3 className="text-xl font-semibold text-white transition group-hover:text-accent">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65 md:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Linha do Tempo"
            title="A Evolução da Infraestrutura Financeira"
            text="Cada transformação da infraestrutura financeira redefiniu o papel da contabilidade. Estamos diante de uma nova inflexão."
            reduce={reduce}
          />
          <div className="relative mt-12">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-3 hidden h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent lg:block"
              initial={reduce ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.ol
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
              variants={stagger}
              initial={initial}
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {projetoNeTimeline.map((item, index) => (
                <motion.li key={item.era} variants={fadeUp} className="relative">
                  <span className="relative z-10 mb-4 hidden h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_rgba(255,241,0,0.55)] lg:block" />
                  <span className="text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")} · {item.era}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </section>

      <section
        id="o-projeto"
        className="border-t border-border bg-[#081c34] py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="O Projeto"
            title={projetoNeMeta.title}
            text="Uma iniciativa de pesquisa, educação executiva e desenvolvimento profissional dedicada a examinar, com rigor, os impactos da evolução da infraestrutura financeira sobre empresas, mercados e profissões."
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
                empresarial, precisa e aplicável — conectando regulação,
                tecnologia e competências profissionais.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                O que não somos
              </p>
              <ul className="mt-3 space-y-2 text-base text-white/70">
                {projetoNeNotUs.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduce ? false : { opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                    className="flex gap-2"
                  >
                    <span className="text-accent">→</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProjetoExperience />

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
            {projetoNePillars.map((item) => {
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
                    <Image src={pillarImages[item.id].src} alt={pillarImages[item.id].alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102849] via-transparent to-transparent" aria-hidden />
                    <span className="absolute bottom-4 right-5 text-5xl font-extrabold text-white/20" aria-hidden>{item.id === "pesquisa" ? "01" : item.id === "educacao" ? "02" : "03"}</span>
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
              {projetoNeImmersion.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              {projetoNeImmersion.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              {projetoNeImmersion.text}
            </p>
            <blockquote className="mt-6 border-l-2 border-accent pl-4 text-base font-medium leading-relaxed text-white/85">
              {projetoNeImmersion.quote}
            </blockquote>
            <Link
              href={projetoNeImmersion.ctaHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink shadow-[0_12px_28px_-10px_rgba(255,241,0,0.4)] transition hover:gap-3 hover:brightness-95"
            >
              {projetoNeImmersion.ctaLabel}
              <ArrowUpRight size={16} />
            </Link>
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
              <Image src="/images/gallery/gallery-07.jpg" alt="Aprendizado prático com notebooks em workshop do Caminho Soberano" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102849] via-transparent to-transparent" aria-hidden />
              <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.14em] text-white">Da conversa à prática</p>
            </div>
            <p className="relative text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Público-alvo
            </p>
            <ul className="relative mt-5 space-y-3">
              {projetoNeImmersion.audience.map((item, i) => (
                <motion.li
                  key={item}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.35 }}
                  className="flex items-center gap-3 text-base text-white/80"
                >
                  <Sparkles size={16} className="shrink-0 text-accent" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border bg-[#081c34] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Agenda 2026"
            title="Construindo uma Agenda Nacional"
            text="Durante o segundo semestre de 2026, o Projeto Nova Economia iniciará reuniões institucionais com CRCs, universidades, entidades representativas e grandes escritórios."
            reduce={reduce}
          />
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projetoNeAgenda.map((item) => (
              <motion.article
                key={item.period}
                variants={fadeUp}
                whileHover={reduce ? undefined : { y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-accent/30 hover:bg-white/[0.05]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  {item.period}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
          <p className="mt-8 text-sm text-white/55">
            Esta iniciativa é construída em parceria — não imposta de cima para
            baixo.
          </p>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <motion.div
            className="grid gap-12 md:grid-cols-2"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Publicações
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                White Papers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                Estudos periódicos sobre a evolução da infraestrutura financeira
                e seus impactos sobre empresas, mercados e profissões.
              </p>
              <article className="pne-project-card mt-8 rounded-2xl border p-6">
                <div className="pne-project-card__shine" aria-hidden />
                <div className="relative flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    <BookOpen size={16} />
                    {projetoNeWhitePaper.code}
                  </span>
                  <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white/55">
                    {projetoNeWhitePaper.status}
                  </span>
                </div>
                <h3 className="relative mt-4 text-xl font-semibold text-white">
                  {projetoNeWhitePaper.title}
                </h3>
              </article>
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Conselho e Parceiros
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                Em formação
              </h2>
              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-accent/25">
                  <div className="flex items-center gap-2 text-accent">
                    <Building2 size={18} />
                    <h3 className="font-semibold text-white">
                      Conselho Consultivo
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    Representantes da academia, da profissão contábil, do
                    mercado financeiro e da tecnologia para validar iniciativas
                    e fortalecer a conexão com os desafios reais da profissão.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-accent/25">
                  <div className="flex items-center gap-2 text-accent">
                    <Building2 size={18} />
                    <h3 className="font-semibold text-white">
                      Parceiros Institucionais
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    CRCs, universidades, associações profissionais e
                    organizações do mercado financeiro e tecnológico que
                    contribuem para o desenvolvimento desta iniciativa.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="contato"
        className="relative overflow-hidden border-t border-border bg-[#081c34] py-16 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(70,160,255,0.1),_transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <SectionHeader
            eyebrow="Contato Institucional"
            title="Coordenação Geral"
            text="Para diálogo com CRCs, universidades, associações profissionais, empresas e organizações interessadas na evolução da profissão contábil."
            reduce={reduce}
          />

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-start">
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="text-2xl font-bold text-white">
                {projetoNeMeta.contactName}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {projetoNeMeta.contactRole}
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                {projetoNeContactBio}
              </p>
              <blockquote className="mt-6 border-l-2 border-accent pl-4 text-base font-medium leading-relaxed text-white/85">
                {projetoNeContactQuote}
              </blockquote>
            </motion.div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="pne-project-card rounded-[1.75rem] border p-6 md:p-8"
            >
              <div className="pne-project-card__shine" aria-hidden />
              <p className="relative text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Vamos construir essa agenda juntos
              </p>
              <p className="relative mt-3 text-base leading-relaxed text-white/70">
                As grandes transformações da profissão contábil serão construídas
                por meio da cooperação entre universidades, entidades de classe,
                empresas e profissionais comprometidos com o futuro da
                contabilidade.
              </p>

              <div className="relative mt-6 space-y-3 text-sm text-white/75">
                <a
                  href={projetoNeMeta.contactEmailHref}
                  className="flex items-center gap-2 transition hover:text-accent"
                >
                  <Mail size={16} className="text-accent" />
                  {projetoNeMeta.contactEmail}
                </a>
                <a
                  href={PROJETO_NE_EXTERNAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-accent"
                >
                  <ArrowUpRight size={16} className="text-accent" />
                  projetonovaeconomia.com.br
                </a>
                <a
                  href={projetoNeMeta.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-accent"
                >
                  <ArrowUpRight size={16} className="text-accent" />
                  {projetoNeMeta.instagramHandle}
                </a>
              </div>

              <a
                href={projetoNeMeta.contactEmailHref}
                className="relative mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-ink shadow-[0_12px_32px_-10px_rgba(255,241,0,0.45)] transition hover:brightness-95"
              >
                Agendar uma conversa institucional
                <Mail size={16} />
              </a>
            </motion.div>
          </div>
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
