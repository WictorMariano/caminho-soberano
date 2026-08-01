"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { pneExpert } from "@/lib/workshop-pne";

export function PneExpert() {
  const reduce = useReducedMotion();

  return (
    <section className="relative border-t border-white/8 bg-[#03111f] py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl border border-white/10"
        >
          <Image
            src={pneExpert.image}
            alt={pneExpert.name}
            fill
            sizes="(max-width: 768px) 90vw, 420px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03111f] via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Especialista
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {pneExpert.name}
          </h2>
          <p className="mt-2 text-base text-white/70">{pneExpert.role}</p>
          <p className="mt-5 text-base leading-relaxed text-white/65 md:text-lg">
            {pneExpert.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {pneExpert.pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/80"
              >
                {pillar}
              </span>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-accent pl-4 text-lg font-medium italic leading-relaxed text-white/85 md:text-xl">
            “{pneExpert.quote}”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
