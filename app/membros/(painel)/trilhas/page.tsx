import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { trails } from "@/lib/membros/catalog";

export const metadata: Metadata = { title: "Trilhas" };

export default function MembrosTrilhasPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Caminhos
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Trilhas</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
          Cada trilha agrupa cursos e práticas em torno de um objetivo: soberania,
          autocustódia, patrimônio e internacionalização.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {trails.map((trail) => (
          <Link
            key={trail.id}
            href={`/membros/trilhas/${trail.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c30] transition hover:border-accent/40"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={trail.image}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30] via-black/30 to-transparent" />
            </div>
            <div className="p-5">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                style={{ color: trail.accent }}
              >
                {trail.subtitle}
              </p>
              <h2 className="mt-2 text-xl font-bold text-white">{trail.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {trail.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
