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
      className="relative overflow-hidden py-16 md:py-24"
    >
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="ocean-panel relative overflow-hidden rounded-[2rem] border md:rounded-[2.5rem]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,_rgba(70,160,255,0.12),_transparent_55%)]" />

          <div className="relative grid md:grid-cols-2 md:items-stretch">
            <div className="flex flex-col justify-center px-6 py-10 sm:px-8 md:px-10 md:py-14 lg:px-14 lg:py-16">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                WorkShop
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                Conteúdo prático intensivo, implemente no mesmo dia
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                Um encontro com passo a passo para implementar soluções
                financeiras no mesmo dia. Sem teoria solta: foco em execução,
                clareza e resultado imediato.
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

              <div className="mt-8 space-y-3">
                <p className="text-lg font-semibold text-white md:text-xl">
                  Programa Nova Economia
                </p>
                <p className="max-w-md text-sm leading-relaxed text-white/65">
                  {pneMeta.tagline}
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-white/70">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={15} className="text-accent" />
                    {pneMeta.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={15} className="text-accent" />
                    {pneMeta.dateShort}
                  </span>
                </div>
                <Link
                  href={PNE_PATH}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
                >
                  Ver Workshop
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <Link
              href={PNE_PATH}
              className="group relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[480px] lg:min-h-[560px]"
            >
              <Image
                src="/images/gallery/gallery-07.jpg"
                alt={`${pneMeta.title}, Florianópolis`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081c34] via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-[rgba(8,28,52,0.55)]" />
              <span className="absolute left-4 top-4 rounded-full border border-accent/35 bg-accent/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent backdrop-blur-sm md:left-6 md:top-6">
                Workshop PNE
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
