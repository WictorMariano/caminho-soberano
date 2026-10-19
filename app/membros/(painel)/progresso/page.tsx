import type { Metadata } from "next";
import { Lock, Sparkles } from "lucide-react";

import { courses, demoMemberState } from "@/lib/platform/demo";
import { memberLevels } from "@/lib/membros/demo";

export const metadata: Metadata = { title: "Progresso" };

export default function MembrosProgressoPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Gamificação
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Progresso</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
          Níveis da jornada e andamento nos cursos fictícios.
        </p>
      </header>

      <section className="rounded-2xl border border-accent/30 bg-accent/10 p-6">
        <div className="flex items-center gap-2 text-accent">
          <Sparkles size={18} />
          <p className="text-xs font-semibold uppercase tracking-[0.16em]">
            Nível atual
          </p>
        </div>
        <p className="mt-3 text-2xl font-bold text-white">
          {memberLevels.find((l) => l.current)?.name}
        </p>
        <p className="mt-2 text-sm text-slate-300">
          {demoMemberState.xp} XP · faltam{" "}
          {demoMemberState.nextLevelXp - demoMemberState.xp} para o próximo nível
        </p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-black/30">
          <div
            className="h-full rounded-full bg-accent"
            style={{
              width: `${Math.min(
                100,
                (demoMemberState.xp / demoMemberState.nextLevelXp) * 100,
              )}%`,
            }}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5">
        <h2 className="text-base font-semibold">Cursos</h2>
        <ul className="mt-4 space-y-4">
          {courses.map((course) => {
            const done =
              course.id === demoMemberState.activeCourseId
                ? demoMemberState.completedLessonIds.length
                : 0;
            const pct = Math.round((done / course.lessonsTotal) * 100);
            return (
              <li key={course.id}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{course.title}</span>
                  <span className="text-slate-400">
                    {done}/{course.lessonsTotal}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <ol className="space-y-3">
        {memberLevels.map((level, index) => (
          <li
            key={level.id}
            className={`rounded-2xl border px-5 py-4 ${
              level.current
                ? "border-accent/50 bg-accent/10"
                : level.unlocked
                  ? "border-white/10 bg-white/[0.03]"
                  : "border-white/5 bg-white/[0.015] opacity-70"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-sm font-bold">
                {level.unlocked ? index + 1 : <Lock size={14} />}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-white">{level.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{level.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
