"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { defiAgenda } from "@/lib/event-defi-soberano";

const topTalks = defiAgenda.slice(0, 4);
const bottomTalks = defiAgenda.slice(4);

export function DefiAgendaScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-56%"]);
  const line = useTransform(scrollYProgress, [0.05, 0.88], ["4%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="cronograma"
      className="relative h-[155vh] bg-[#07141d] text-white max-md:h-[200vh]"
    >
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_42%,rgba(62,207,190,0.14),transparent_52%)]"
        />

        <motion.div
          style={{ x }}
          className="relative flex h-[34vw] w-[235vw] items-center gap-[3.5vw] px-[4vw] max-md:h-[72vh] max-md:w-[700vw]"
        >
          <div className="relative h-full w-[28vw] shrink-0 overflow-hidden rounded-[1.4vw] max-md:w-[78vw] max-md:rounded-3xl">
            <Image
              src="/images/gallery/gallery-13.jpg"
              alt="Imersão presencial do Caminho Soberano"
              width={900}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07141d]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-[1.4vw] max-md:p-5">
              <p className="text-[0.75vw] font-semibold uppercase tracking-[0.18em] text-[#3ecfbe] max-md:text-[10px]">
                Um dia presencial
              </p>
              <p className="mt-[0.35vw] max-w-[12em] text-[1.15vw] font-semibold leading-tight text-white max-md:mt-1 max-md:text-base">
                Do fundamento à operação, no ritmo do dia.
              </p>
            </div>
          </div>

          <div className="relative h-full min-w-0 flex-1">
            <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 items-center px-[0.2vw]">
              <span className="h-[0.7vw] w-[0.7vw] shrink-0 rounded-full bg-[#3ecfbe] max-md:h-2.5 max-md:w-2.5" />
              <motion.span
                style={{ width: line }}
                className="h-px bg-[#3ecfbe]"
              />
              <span className="h-[0.7vw] w-[0.7vw] shrink-0 rounded-full bg-[#3ecfbe] max-md:h-2.5 max-md:w-2.5" />
            </div>

            <div className="flex h-1/2 items-end pb-[1.2vw]">
              <div className="w-[15vw] shrink-0 max-md:w-[28vw]">
                <h2 className="max-w-[9em] text-balance text-[2.1vw] font-semibold leading-[0.95] max-md:text-[6.5vw]">
                  Cronograma da imersão
                </h2>
                <p className="mt-[0.55vw] max-w-[14em] text-[0.85vw] leading-snug text-white/55 max-md:mt-2 max-md:text-xs">
                  Rola pra baixo e acompanha o dia.
                </p>
              </div>
              <div className="flex h-full items-end gap-[11vw]">
                {topTalks.map((talk, index) => (
                  <ScheduleTalk
                    key={talk.id}
                    talk={talk}
                    progress={scrollYProgress}
                    range={[0.06 + index * 0.11, 0.14 + index * 0.11]}
                    className="relative w-[22vw] shrink-0 max-md:w-[62vw]"
                    tickClassName="absolute -bottom-[1.2vw] left-0 h-[8vw] w-px bg-[#3ecfbe] max-md:h-16"
                    dotClassName="absolute -bottom-[1.55vw] left-0 h-[0.7vw] w-[0.7vw] -translate-x-1/2 rounded-full bg-[#3ecfbe] max-md:h-2.5 max-md:w-2.5"
                  />
                ))}
              </div>
            </div>

            <div className="flex h-1/2 items-start pt-[1.2vw]">
              <div className="w-[20vw] shrink-0 max-md:w-[34vw]" />
              <div className="flex h-full items-start gap-[12vw]">
                {bottomTalks.map((talk, index) => (
                  <ScheduleTalk
                    key={talk.id}
                    talk={talk}
                    progress={scrollYProgress}
                    range={[0.42 + index * 0.12, 0.52 + index * 0.12]}
                    className="relative flex h-full w-[22vw] shrink-0 flex-col justify-end max-md:w-[62vw]"
                    tickClassName="absolute -top-[1.2vw] left-0 h-[8vw] w-px bg-[#3ecfbe] max-md:h-16"
                    dotClassName="absolute -top-[1.55vw] left-0 h-[0.7vw] w-[0.7vw] -translate-x-1/2 rounded-full bg-[#3ecfbe] max-md:h-2.5 max-md:w-2.5"
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
  talk: (typeof defiAgenda)[number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  className: string;
  tickClassName: string;
  dotClassName: string;
}) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [18, 0]);
  const ref = useRef<HTMLElement>(null);

  useMotionValueEvent(opacity, "change", (value) => {
    if (ref.current) ref.current.style.opacity = String(value);
  });
  useMotionValueEvent(y, "change", (value) => {
    if (ref.current) ref.current.style.transform = `translateY(${value}px)`;
  });

  return (
    <article
      ref={ref}
      style={{ opacity: 0, transform: "translateY(18px)" }}
      className={className}
    >
      <span className={tickClassName} />
      <span className={dotClassName} />
      <p className="text-[0.9vw] font-semibold uppercase tracking-[0.14em] text-[#3ecfbe] max-md:text-xs">
        {talk.moment}
      </p>
      <h3 className="mt-[0.4vw] text-[1.65vw] font-semibold leading-tight max-md:text-2xl">
        {talk.title}
      </h3>
      <p className="mt-[0.4vw] max-w-[18em] text-[1.05vw] leading-snug text-white/70 max-md:text-sm">
        {talk.text}
      </p>
    </article>
  );
}
