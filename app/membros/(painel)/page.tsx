import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Flag, Sparkles } from "lucide-react";

import { SchoolGrid } from "@/components/edu/SchoolGrid";
import { BadgeIcon } from "@/components/platform/BadgeIcon";
import { requireMember } from "@/lib/membros/session";
import {
  challengeProgress,
  challenges,
  trails,
} from "@/lib/membros/catalog";
import { memberLevels } from "@/lib/membros/demo";
import { getCurriculum } from "@/lib/edu/curriculum";
import {
  demoMemberState,
  getBadge,
} from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Início" };

export default async function MembrosHomePage() {
  const { name } = await requireMember();
  const schools = getCurriculum();
  const level = memberLevels.find((l) => l.current);
  const earnedBadges = demoMemberState.earnedBadgeIds
    .map((id) => getBadge(id))
    .filter(Boolean);

  return (
    <div className="space-y-7 md:space-y-10">
      <header className="flex flex-wrap items-end justify-between gap-3 md:gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent md:text-sm">
            Área de membros
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight md:mt-2 md:text-4xl">
            Olá, {name}
          </h1>
          <p className="mt-1.5 hidden max-w-xl text-sm text-slate-400 sm:block">
            Edu, trilhas e desafios para construir soberania — com progresso
            e conquistas.
          </p>
        </div>
        <Link
          href="/membros/perfil"
          className="rounded-2xl border border-accent/30 bg-accent/10 px-3.5 py-2.5 md:px-4 md:py-3"
        >
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent md:text-xs">
            <Sparkles size={14} /> Nível atual
          </p>
          <p className="mt-1 text-base font-bold text-white md:text-lg">
            {level?.name}
          </p>
          <p className="text-[11px] text-slate-300 md:text-xs">
            {demoMemberState.xp} / {demoMemberState.nextLevelXp} XP
          </p>
        </Link>
      </header>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Edu</h2>
            <p className="mt-1 text-sm text-slate-400">
              A Escola de Soberania Financeira está aberta. As outras escolas
              aparecem bloqueadas.
            </p>
          </div>
          <Link
            href="/membros/edu"
            className="hidden text-sm font-semibold text-accent hover:underline sm:inline"
          >
            Abrir Edu
          </Link>
        </div>
        <SchoolGrid schools={schools} />
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold tracking-tight">Trilhas</h2>
            <p className="mt-1 text-sm text-slate-400">
              Caminhos temáticos: soberania, autocustódia, patrimônio e
              internacionalização.
            </p>
          </div>
          <Link
            href="/membros/trilhas"
            className="hidden text-sm font-semibold text-accent hover:underline sm:inline"
          >
            Ver trilhas
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {trails.map((trail) => (
            <Link
              key={trail.id}
              href={`/membros/trilhas/${trail.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={trail.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: trail.accent }}
                >
                  {trail.subtitle}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {trail.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5 md:p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Flag className="text-accent" size={18} />
              <h2 className="text-lg font-bold">Desafios da diretoria</h2>
            </div>
            <Link
              href="/membros/desafios"
              className="text-sm font-semibold text-accent hover:underline"
            >
              Abrir
            </Link>
          </div>
          <p className="mt-2 text-sm text-slate-400">
            Missões práticas para blindagem e independência financeira — com
            níveis e links de apoio.
          </p>
          <ul className="mt-5 space-y-3">
            {challenges.map((challenge) => {
              const progress = challengeProgress(challenge);
              return (
                <li key={challenge.id}>
                  <Link
                    href={`/membros/desafios/${challenge.slug}`}
                    className="block rounded-xl border border-white/10 px-4 py-3 transition hover:border-accent/40"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-semibold text-white">
                        {challenge.title}
                      </p>
                      <span className="text-xs text-slate-400">
                        {progress.percent}%
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${progress.percent}%` }}
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-accent/25 bg-accent/10 p-5 md:p-6">
          <div className="flex items-center gap-2 text-accent">
            <Award size={18} />
            <h2 className="text-lg font-bold text-white">Prêmios e níveis</h2>
          </div>
          <p className="mt-2 text-sm text-slate-300">
            Quanto mais cursos e desafios você completa, mais XP, níveis e
            insígnias você conquista.
          </p>
          <ul className="mt-5 space-y-3">
            {earnedBadges.map((badge) =>
              badge ? (
                <li
                  key={badge.id}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-ink">
                    <BadgeIcon icon={badge.icon} size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {badge.name}
                    </p>
                    <p className="text-xs text-slate-400">{badge.description}</p>
                  </div>
                </li>
              ) : null,
            )}
          </ul>
          <Link
            href="/membros/insignias"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
          >
            Ver todas as insígnias <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
