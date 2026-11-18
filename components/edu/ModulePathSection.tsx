"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

import { ModuleLessonChip } from "@/components/edu/ModuleLessonChip";
import type { EduSchool } from "@/lib/edu/curriculum";
import {
  countModuleLessons,
  getModuleLessonSequence,
  modulePathSteps,
  type ModulePathStep,
} from "@/lib/edu/module-path";

const icons = {
  lightbulb: Lightbulb,
  book: BookOpen,
  target: Target,
  users: Users,
} as const;

export function ModulePathSection({ schools }: { schools: EduSchool[] }) {
  const [active, setActive] = useState<ModulePathStep["number"]>(1);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const step = modulePathSteps.find((item) => item.number === active)!;
  const sequence = useMemo(
    () => getModuleLessonSequence(schools, active),
    [schools, active],
  );

  function scrollBy(direction: -1 | 1) {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.min(320, node.clientWidth * 0.8);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section
      id="jornada-4-passos"
      className="scroll-mt-24 space-y-5 overflow-visible rounded-[1.75rem] border border-white/10 bg-[#0b1c30] p-5 md:p-7"
    >
      <div className="max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          Rota completa · 4 passos
        </p>
        <h2 className="mt-2 text-xl font-bold tracking-tight text-white md:text-3xl">
          A forma mais clara de concluir o educacional 100%
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
          Em cada passo, consuma os conteúdos na ordem do diagrama — de cima
          para baixo, escola por escola. O número mostra a sequência; o chip
          mostra de qual escola vem a aula.
        </p>
      </div>

      <div className="relative overflow-visible">
        <button
          type="button"
          aria-label="Passos anteriores"
          onClick={() => scrollBy(-1)}
          className="absolute top-1/2 left-0 z-10 inline-flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0b1c30] text-white shadow-lg transition hover:border-accent/50 hover:text-accent sm:h-11 sm:w-11"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Próximos passos"
          onClick={() => scrollBy(1)}
          className="absolute top-1/2 right-0 z-10 inline-flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#0b1c30] text-white shadow-lg transition hover:border-accent/50 hover:text-accent sm:h-11 sm:w-11"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-3 overflow-x-auto px-1 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:gap-4 [&::-webkit-scrollbar]:hidden"
        >
          {modulePathSteps.map((item) => {
            const Icon = icons[item.icon];
            const selected = item.number === active;
            const lessons = countModuleLessons(schools, item.number);
            return (
              <button
                key={item.slug}
                type="button"
                onClick={() => setActive(item.number)}
                className={`relative h-[19rem] w-[13.5rem] shrink-0 snap-start overflow-hidden rounded-[1.35rem] text-left text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.85)] transition duration-300 sm:h-[21rem] sm:w-[15rem] md:h-[22.5rem] md:w-[16rem] ${
                  selected
                    ? "ring-2 ring-white/70 ring-offset-2 ring-offset-[#0b1c30] brightness-110"
                    : "hover:-translate-y-1 hover:brightness-110"
                }`}
                style={{
                  background: `linear-gradient(165deg, ${item.color} 0%, ${item.color} 40%, #041018 125%)`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-35"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.4), transparent 42%), radial-gradient(circle at 88% 78%, rgba(0,0,0,0.35), transparent 48%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.22) 42%, transparent 68%)",
                  }}
                />

                <div className="relative flex h-full flex-col p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#0b1220]">
                      {item.number}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm">
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="mt-auto">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/75">
                      {item.shortTitle}
                    </p>
                    <p className="mt-2 text-2xl font-extrabold leading-tight tracking-tight">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                      {item.journey}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      {item.promise}
                    </p>
                    <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
                      {lessons} conteúdos em ordem
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div
        className="rounded-2xl border border-white/10 bg-black/20 p-4 md:p-5"
        style={{ boxShadow: `inset 3px 0 0 ${step.color}` }}
      >
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p
              className="text-[11px] font-bold uppercase tracking-[0.16em]"
              style={{ color: step.color }}
            >
              {step.shortTitle} · {step.title}
            </p>
            <h3 className="mt-1 text-lg font-bold text-white">
              Sequência de consumo
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              {sequence.length} conteúdos · ordem de cima para baixo no
              diagrama.
            </p>
          </div>
          <Link
            href="/membros/edu/jornada"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
          >
            Ver jornada completa <ArrowRight size={15} />
          </Link>
        </div>

        <ol className="mt-5 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
          {sequence.map((item) => (
            <li key={`${item.schoolSlug}-${item.lesson.slug}`}>
              <ModuleLessonChip item={item} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
