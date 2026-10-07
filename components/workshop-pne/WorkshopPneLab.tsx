"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Bitcoin,
  Blocks,
  Coins,
  FlaskConical,
  Globe,
  Landmark,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";

import { TicketsCta } from "@/components/workshop-pne/TicketsCta";

const journey = [
  { icon: Coins, title: "História do dinheiro" },
  { icon: Bitcoin, title: "Bitcoin" },
  { icon: Blocks, title: "Blockchain" },
  { icon: Globe, title: "Web3" },
  { icon: Wrench, title: "Operações práticas" },
  { icon: Landmark, title: "Nova infraestrutura financeira" },
  { icon: Rocket, title: "Aplicações reais" },
] as const;

const elidioTopics = [
  "História do dinheiro",
  "Bitcoin",
  "Blockchain",
  "Web3",
  "Operações",
  "Empréstimos colateralizados",
  "Ferramentas",
] as const;

const keyMessage =
  "Você não vai apenas ouvir falar sobre a Nova Economia. Vai experimentar como ela funciona.";

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
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export function WorkshopPneLab() {
  const reduce = useReducedMotion();
  const initial = reduce ? false : "hidden";

  return (
    <section
      id="laboratorio"
      className="relative overflow-hidden border-t border-border bg-[#020b16] py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,_rgba(255,241,0,0.08),_transparent_45%),radial-gradient(ellipse_at_90%_60%,_rgba(70,160,255,0.14),_transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={initial}
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-accent"
          >
            <FlaskConical size={14} />
            Laboratório · O diferencial do PNE
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl"
          >
            Laboratório da <span className="text-accent">Nova Economia</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-white/70 md:text-lg"
          >
            Uma jornada guiada, da origem do dinheiro às aplicações reais da
            nova infraestrutura financeira. Cada etapa conecta conceito e
            prática para que você saia sabendo como as coisas funcionam de
            verdade.
          </motion.p>
        </motion.div>

        <div className="relative mt-14">
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-[7%] right-[7%] top-7 hidden h-0.5 origin-left bg-gradient-to-r from-accent/20 via-accent to-accent/20 shadow-[0_0_14px_rgba(255,241,0,0.45)] lg:block"
            initial={reduce ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <motion.ol
            className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 lg:grid-cols-7"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {journey.map(({ icon: Icon, title }, index) => (
              <motion.li
                key={title}
                variants={fadeUp}
                className="group flex flex-col items-center text-center"
              >
                <span className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/40 bg-[#0b1c30] text-accent shadow-[0_0_24px_rgba(255,241,0,0.12)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-accent-ink group-hover:shadow-[0_0_30px_rgba(255,241,0,0.45)]">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent/80">
                  Etapa {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 text-sm font-semibold leading-snug text-white">
                  {title}
                </span>
              </motion.li>
            ))}
          </motion.ol>
        </div>

        <motion.blockquote
          initial={reduce ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-4xl overflow-hidden rounded-[2rem] border border-accent/35 bg-accent/[0.07] px-6 py-10 text-center md:px-12 md:py-12"
        >
          <Sparkles
            className="mx-auto text-accent"
            size={28}
            strokeWidth={1.75}
            aria-hidden
          />
          <p className="mt-5 text-2xl font-bold leading-snug tracking-tight text-white md:text-4xl">
            “{keyMessage}”
          </p>
        </motion.blockquote>

        <div className="mt-20">
          <motion.div
            className="max-w-2xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Quem conduz o laboratório
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-4xl">
              Participação especial de Elídio Segundo
            </h3>
          </motion.div>

          <motion.article
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="pne-project-card group mt-8 grid overflow-hidden rounded-[2rem] border !border-accent/40 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="pne-project-card__shine" aria-hidden />
            <div className="relative min-h-[360px] overflow-hidden md:min-h-[480px]">
              <Image
                src="/images/events/dominando-bitcoin/speakers/elidio.jpg"
                alt="Elídio Segundo"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-[center_20%] transition-transform duration-700 motion-safe:group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#102849] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#102849]/80"
                aria-hidden
              />
              <span className="absolute left-5 top-5 rounded-full bg-accent px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent-ink">
                Participação especial
              </span>
            </div>

            <div className="relative flex flex-col justify-center p-6 md:p-10">
              <h4 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Elídio Segundo
              </h4>
              <p className="mt-2 text-base font-medium text-accent">
                Bitcoin, Blockchain e Web3 na prática
              </p>
              <p className="mt-5 text-base leading-relaxed text-white/70">
                Elídio conduz a parte técnica do laboratório: parte da história
                do dinheiro, passa por Bitcoin, Blockchain e Web3 e chega às
                operações do dia a dia, como empréstimos colateralizados e as
                ferramentas que tornam tudo isso aplicável.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {elidioTopics.map((topic) => (
                  <li
                    key={topic}
                    className="rounded-full border border-accent/30 bg-accent/[0.08] px-3 py-1.5 text-xs font-medium text-white/85"
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.div
            className="mt-6 grid gap-6 md:grid-cols-2"
            variants={stagger}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.article
              variants={fadeUp}
              className="pne-project-card group flex gap-5 rounded-[1.75rem] border p-5 md:p-6"
            >
              <div className="pne-project-card__shine" aria-hidden />
              <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-2xl md:h-32 md:w-28">
                <Image
                  src="/images/founder/tarcisio-machado-expert.png"
                  alt="Tarcísio Machado"
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Visão e estratégia
                </p>
                <h4 className="mt-1 text-xl font-bold text-white">
                  Tarcísio Machado
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Nova Economia, transformação da infraestrutura financeira e
                  Soberania.
                </p>
              </div>
            </motion.article>

            <motion.article
              variants={fadeUp}
              className="pne-project-card group flex flex-col justify-center rounded-[1.75rem] border p-5 md:p-6"
            >
              <div className="pne-project-card__shine" aria-hidden />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Na prática
                </p>
                <h4 className="mt-3">
                  <Image
                    src="/images/partners/liqpay.svg"
                    alt="LiqPay"
                    width={255}
                    height={53}
                    unoptimized
                    className="h-8 w-auto md:h-9"
                  />
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  Aplicação prática da nova infraestrutura financeira, para ver
                  na hora como os conceitos viram operação.
                </p>
              </div>
            </motion.article>
          </motion.div>
        </div>

        <TicketsCta className="mt-14" label="Quero viver o laboratório" />
      </div>
    </section>
  );
}
