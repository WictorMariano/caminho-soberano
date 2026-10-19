import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Circle, ExternalLink } from "lucide-react";

import {
  challengeProgress,
  getChallenge,
} from "@/lib/membros/catalog";

export const metadata: Metadata = { title: "Desafio" };

export default async function MembrosDesafioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const challenge = getChallenge(slug);
  if (!challenge) notFound();

  const progress = challengeProgress(challenge);

  return (
    <div className="space-y-8">
      <Link href="/membros/desafios" className="text-sm text-accent hover:underline">
        ← Desafios
      </Link>

      <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
        <div className="relative aspect-[21/9] min-h-[220px]">
          <Image
            src={challenge.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b16] via-[#020b16]/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              Desafio {challenge.order}
            </p>
            <h1 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {challenge.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm text-white/75 md:text-base">
              {challenge.purpose}
            </p>
            <div className="mt-4 max-w-md">
              <div className="flex justify-between text-xs text-white/60">
                <span>
                  {progress.done}/{progress.total} missões
                </span>
                <span>{progress.percent}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-6">
        {challenge.levels.map((level) => {
          const levelDone = level.missions.filter((m) => m.done).length;
          return (
            <section
              key={level.id}
              className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5 md:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    Nível {level.order}
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    {level.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-400">
                    {level.summary}
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                  {levelDone}/{level.missions.length} missões
                </span>
              </div>

              <ul className="mt-5 space-y-4">
                {level.missions.map((mission) => (
                  <li
                    key={mission.id}
                    className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4"
                  >
                    <div className="flex items-start gap-3">
                      {mission.done ? (
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-accent"
                          size={18}
                        />
                      ) : (
                        <Circle
                          className="mt-0.5 shrink-0 text-white/30"
                          size={18}
                        />
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-white">
                          {mission.title}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                          {mission.description}
                        </p>
                        {mission.links.length > 0 ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {mission.links.map((link) => {
                              const external = link.href.startsWith("http");
                              const className =
                                "inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-accent transition hover:border-accent/50";
                              return external ? (
                                <a
                                  key={link.href + link.label}
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={className}
                                >
                                  {link.label} <ExternalLink size={12} />
                                </a>
                              ) : (
                                <Link
                                  key={link.href + link.label}
                                  href={link.href}
                                  className={className}
                                >
                                  {link.label}
                                </Link>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
