import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Flag } from "lucide-react";

import { challengeProgress, challenges } from "@/lib/membros/catalog";

export const metadata: Metadata = { title: "Desafios" };

export default function MembrosDesafiosPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          <Flag size={16} /> Diretoria
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Desafios</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
          Desafios apresentados pela diretoria do Caminho Soberano. O propósito
          é você se tornar alguém soberano: primeiro blindagem financeira,
          depois independência de renda.
        </p>
      </header>

      <div className="grid gap-5">
        {challenges.map((challenge) => {
          const progress = challengeProgress(challenge);
          return (
            <Link
              key={challenge.id}
              href={`/membros/desafios/${challenge.slug}`}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c30] transition hover:border-accent/40 md:grid md:grid-cols-[280px_1fr]"
            >
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-full">
                <Image
                  src={challenge.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="280px"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  Desafio {challenge.order}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-white">
                  {challenge.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {challenge.purpose}
                </p>
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>
                      {progress.done}/{progress.total} missões
                    </span>
                    <span>{progress.percent}%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${progress.percent}%` }}
                    />
                  </div>
                </div>
                <p className="mt-4 text-xs text-white/45">
                  {challenge.levels.length} níveis · clique para ver missões e
                  links de apoio
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
