import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Circle, HelpCircle } from "lucide-react";

import {
  demoMemberState,
  getBadge,
  getCourseBySlug,
  lessonsForModule,
  modulesForCourse,
} from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Curso" };

export default async function MembrosCursoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const mods = modulesForCourse(course.id);
  const badge = getBadge(course.badgeId);

  return (
    <div className="space-y-8">
      <header>
        <Link
          href="/membros/cursos"
          className="text-sm text-accent hover:underline"
        >
          ← Cursos
        </Link>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-accent">
          {course.level}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          {course.title}
        </h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">{course.subtitle}</p>
        <p className="mt-3 text-xs text-white/45">
          Ao concluir: insígnia {badge?.name}
        </p>
      </header>

      <div className="space-y-4">
        {mods.map((mod) => {
          const modLessons = lessonsForModule(mod.id);
          return (
            <section
              key={mod.id}
              className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-accent">
                Módulo {mod.order}
              </p>
              <h2 className="mt-1 text-lg font-semibold">{mod.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{mod.description}</p>
              <ul className="mt-4 space-y-2">
                {modLessons.map((lesson) => {
                  const done = demoMemberState.completedLessonIds.includes(
                    lesson.id,
                  );
                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/membros/cursos/${course.slug}/${lesson.id}`}
                        className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition hover:border-accent/40"
                      >
                        {done ? (
                          <CheckCircle2 className="shrink-0 text-accent" size={18} />
                        ) : (
                          <Circle className="shrink-0 text-white/30" size={18} />
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-white">{lesson.title}</p>
                          <p className="text-xs text-slate-500">
                            {lesson.duration}
                            {lesson.hasMission ? " · com missão" : ""}
                          </p>
                        </div>
                        {lesson.hasMission ? (
                          <HelpCircle size={16} className="text-accent/80" />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
