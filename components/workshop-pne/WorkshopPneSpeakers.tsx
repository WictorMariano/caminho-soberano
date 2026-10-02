"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

import { workshopPneSpeakers } from "@/lib/workshop-pne-tickets";

export function WorkshopPneSpeakers() {
  const reduce = useReducedMotion();

  return (
    <section
      id="palestrantes"
      className="relative overflow-hidden border-t border-border bg-[#03111f] py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_rgba(255,241,0,0.06),_transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Palestrantes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Quem conduz o workshop
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Experiência prática em tecnologia, estratégia e transformação de
            negócios, reunida em um só dia.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {workshopPneSpeakers.map((speaker, index) => (
            <motion.article
              key={speaker.id}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={
                reduce ? undefined : { y: -6, transition: { duration: 0.25 } }
              }
              className="pne-project-card group flex flex-col rounded-[2rem] border"
            >
              <div className="pne-project-card__shine" aria-hidden />

              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/5]">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
                  style={{ objectPosition: speaker.imagePosition }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#102849] via-[#102849]/10 to-transparent"
                  aria-hidden
                />
                <span className="absolute left-5 top-5 rounded-full border border-accent/40 bg-[#020b16]/60 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur-md">
                  {speaker.badge}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">
                    {speaker.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent md:text-base">
                    {speaker.role}
                  </p>
                </div>
              </div>

              <div className="relative flex flex-1 flex-col p-6 md:p-8">
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  {speaker.bio}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {speaker.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <blockquote className="mt-7 border-l-2 border-accent pl-4 pt-1 text-base font-medium italic leading-relaxed text-white/85">
                  <Quote
                    size={18}
                    className="mb-2 text-accent"
                    aria-hidden
                  />
                  “{speaker.quote}”
                </blockquote>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
