import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

import { ModuleLessonChip } from "@/components/edu/ModuleLessonChip";
import { getCurriculum } from "@/lib/edu/curriculum";
import {
  countModuleLessons,
  getModuleLessonSequence,
  modulePathSteps,
} from "@/lib/edu/module-path";

export const metadata: Metadata = { title: "Jornada em 4 passos" };

const icons = {
  lightbulb: Lightbulb,
  book: BookOpen,
  target: Target,
  users: Users,
} as const;

export default function EduJornadaPage() {
  const schools = getCurriculum();

  return (
    <div className="space-y-8 md:space-y-10">
      <header>
        <Link
          href="/membros/edu"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent"
        >
          <ArrowLeft size={16} /> Voltar para Edu
        </Link>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          Rota completa
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight md:text-4xl">
          Conclua o educacional em 4 passos
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
          Em cada passo, siga a numeração: de cima para baixo no diagrama,
          escola por escola. O chip colorido mostra a origem da aula.
        </p>
      </header>

      <div className="space-y-8">
        {modulePathSteps.map((step) => {
          const Icon = icons[step.icon];
          const sequence = getModuleLessonSequence(schools, step.number);
          const lessons = countModuleLessons(schools, step.number);

          return (
            <section
              key={step.slug}
              className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1c30]"
            >
              <div
                className="flex flex-wrap items-start justify-between gap-4 px-5 py-5 md:px-6"
                style={{
                  background: `linear-gradient(90deg, ${step.color}33, transparent 70%)`,
                }}
              >
                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15"
                    style={{ background: `${step.color}22`, color: step.color }}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <p
                      className="text-[11px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: step.color }}
                    >
                      {step.shortTitle} · {step.journey}
                    </p>
                    <h2 className="mt-1 text-xl font-bold text-white md:text-2xl">
                      {step.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm text-slate-300">
                      {step.promise}
                    </p>
                  </div>
                </div>
                <p className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">
                  {lessons} conteúdos em ordem
                </p>
              </div>

              <ol className="grid gap-2.5 border-t border-white/10 p-4 sm:grid-cols-2 md:p-5 xl:grid-cols-3">
                {sequence.map((item) => (
                  <li key={`${step.slug}-${item.schoolSlug}-${item.lesson.slug}`}>
                    <ModuleLessonChip item={item} />
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </div>
    </div>
  );
}
