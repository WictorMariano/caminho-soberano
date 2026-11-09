"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { defiHosts } from "@/lib/event-defi-soberano";

export function DefiHosts() {
  const reduce = useReducedMotion();

  return (
    <section id="quem-conduz" className="relative border-t border-white/8 bg-[#061018] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Quem conduz
          </h2>
          <p className="mt-4 text-base text-white/65 md:text-lg">
            A imersão une operação em DeFi e a rede do Caminho Soberano.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {defiHosts.map((host, index) => (
            <motion.article
              key={host.name}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#081820]"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={host.image}
                  alt={host.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081820] via-[#081820]/35 to-transparent" />
              </div>
              <div className="relative -mt-16 px-6 pb-7 md:px-8 md:pb-8">
                <p className="text-sm font-semibold text-accent">{host.role}</p>
                <h3 className="mt-1 text-2xl font-bold text-white md:text-3xl">{host.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
                  {host.bio}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {host.pillars.map((pillar) => (
                    <span
                      key={pillar}
                      className="rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 text-sm text-white/80"
                    >
                      {pillar}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
