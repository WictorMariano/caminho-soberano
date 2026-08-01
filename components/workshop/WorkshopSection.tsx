"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  CalendarDays,
  MapPin,
  Scale,
  Users,
} from "lucide-react";

import { PNE_PATH, pneMeta } from "@/lib/workshop-pne";

const audienceIcons = [Briefcase, Users, Scale] as const;

const audienceLabels = [
  "Contadores",
  "Empresários",
  "Profissionais liberais",
] as const;

export function WorkshopSection() {
  return (
    <section
      id="workshop"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--cs-glow),_transparent_55%)] opacity-60"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              WorkShop
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Conteúdo prático intensivo, implemente no mesmo dia
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              Um encontro com passo a passo para implementar soluções financeiras
              no mesmo dia. Sem teoria solta: foco em execução, clareza e
              resultado imediato.
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {audienceLabels.map((label, index) => {
                const Icon = audienceIcons[index];
                return (
                  <li
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-sm text-white/80"
                  >
                    <Icon size={15} className="text-accent" />
                    {label}
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="ocean-panel group overflow-hidden rounded-[1.75rem] border"
          >
            <Link href={PNE_PATH} className="block">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/gallery/gallery-07.jpg"
                  alt={`${pneMeta.title}, Florianópolis`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b16] via-[#020b16]/35 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-accent/35 bg-accent/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  Workshop PNE
                </span>
              </div>

              <div className="p-6 md:p-7">
                <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  Programa Nova Economia
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {pneMeta.tagline}
                </p>

                <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/70">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={15} className="text-accent" />
                    {pneMeta.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={15} className="text-accent" />
                    {pneMeta.dateShort}
                  </span>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3">
                  Ver Workshop
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
