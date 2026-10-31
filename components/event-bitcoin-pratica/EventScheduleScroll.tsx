"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const topTalks = [
  {
    id: "abertura",
    when: "18 nov · 08:00",
    title: "Abertura",
    text: "O que muda quando o dinheiro passa a ser seu.",
  },
  {
    id: "carteira",
    when: "18 nov · 14:00",
    title: "Carteira na prática",
    text: "Da instalação da wallet até a primeira operação.",
  },
  {
    id: "seed",
    when: "19 nov · 09:00",
    title: "Segurança da seed",
    text: "Como guardar as palavras sem depender de ninguém.",
  },
  {
    id: "protecao",
    when: "19 nov · 14:00",
    title: "Proteção patrimonial",
    text: "O que reduz exposição a bloqueio e a confisco.",
  },
] as const;

const bottomTalks = [
  {
    id: "dia-a-dia",
    when: "20 nov · 09:00",
    title: "Bitcoin no dia a dia",
    text: "Usar, receber e guardar sem voltar para o banco.",
  },
  {
    id: "rede",
    when: "20 nov · 14:00",
    title: "Rede de negócios",
    text: "Quem está na sala e o que dá para construir junto.",
  },
  {
    id: "encerramento",
    when: "21 nov · 10:00",
    title: "Encerramento",
    text: "Os próximos passos depois dos quatro dias.",
  },
] as const;

export function EventScheduleScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);
  const line = useTransform(scrollYProgress, [0.05, 0.9], ["4%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="cronograma"
      className="relative h-[170vh] bg-[#140c07] text-white max-md:h-[220vh]"
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-[34vw] w-[250vw] items-center gap-[4vw] px-[4vw] max-md:h-[72vh] max-md:w-[720vw]"
        >
          <div className="h-full w-[30vw] shrink-0 overflow-hidden rounded-[1.4vw] max-md:w-[78vw] max-md:rounded-3xl">
            <Image
              src="/images/gallery/gallery-13.jpg"
              alt="Palestra presencial do Caminho Soberano"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="relative h-full min-w-0 flex-1">
            <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center">
              <span className="h-[0.7vw] w-[0.7vw] shrink-0 rounded-full bg-[#f7931a] max-md:h-2.5 max-md:w-2.5" />
              <motion.span style={{ width: line }} className="h-px bg-[#f7931a]" />
              <span className="h-[0.7vw] w-[0.7vw] shrink-0 rounded-full bg-[#f7931a] max-md:h-2.5 max-md:w-2.5" />
            </div>

            <div className="flex h-1/2 items-end pb-[1.2vw]">
              <div className="w-[16vw] shrink-0 max-md:w-[28vw]">
                <h2 className="max-w-[9em] text-balance text-[2.2vw] font-semibold leading-[0.95] max-md:text-[6.5vw]">
                  Palestras dos quatro dias
                </h2>
              </div>
              <div className="flex h-full items-end gap-[12vw]">
                {topTalks.map((talk, index) => (
                  <ScheduleTalk
                    key={talk.id}
                    talk={talk}
                    progress={scrollYProgress}
                    range={[0.08 + index * 0.1, 0.16 + index * 0.1]}
                    className="relative w-[24vw] shrink-0 max-md:w-[62vw]"
                    tickClassName="absolute -bottom-[1.2vw] left-0 h-[8vw] w-px bg-[#f7931a] max-md:h-16"
                    dotClassName="absolute -bottom-[1.55vw] left-0 h-[0.7vw] w-[0.7vw] -translate-x-1/2 rounded-full bg-[#f7931a] max-md:h-2.5 max-md:w-2.5"
                  />
                ))}
              </div>
            </div>

            <div className="flex h-1/2 items-start pt-[1.2vw]">
              <div className="w-[22vw] shrink-0 max-md:w-[36vw]" />
              <div className="flex h-full items-start gap-[14vw]">
                {bottomTalks.map((talk, index) => (
                  <ScheduleTalk
                    key={talk.id}
                    talk={talk}
                    progress={scrollYProgress}
                    range={[0.48 + index * 0.12, 0.58 + index * 0.12]}
                    className="relative flex h-full w-[22vw] shrink-0 flex-col justify-end max-md:w-[62vw]"
                    tickClassName="absolute -top-[1.2vw] left-0 h-[8vw] w-px bg-[#f7931a] max-md:h-16"
                    dotClassName="absolute -top-[1.55vw] left-0 h-[0.7vw] w-[0.7vw] -translate-x-1/2 rounded-full bg-[#f7931a] max-md:h-2.5 max-md:w-2.5"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScheduleTalk({
  talk,
  progress,
  range,
  className,
  tickClassName,
  dotClassName,
}: {
  talk: { id: string; when: string; title: string; text: string };
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  className: string;
  tickClassName: string;
  dotClassName: string;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  const ref = useRef<HTMLElement>(null);

  useMotionValueEvent(opacity, "change", (value) => {
    if (ref.current) ref.current.style.opacity = String(value);
  });

  return (
    <article ref={ref} style={{ opacity: 0 }} className={className}>
      <span className={tickClassName} />
      <span className={dotClassName} />
      <p className="text-[0.9vw] font-semibold uppercase tracking-[0.14em] text-[#f7931a] max-md:text-xs">
        {talk.when}
      </p>
      <h3 className="mt-[0.4vw] text-[1.7vw] font-semibold leading-tight max-md:text-2xl">
        {talk.title}
      </h3>
      <p className="mt-[0.4vw] max-w-[18em] text-[1.05vw] leading-snug text-white/70 max-md:text-sm">
        {talk.text}
      </p>
    </article>
  );
}
