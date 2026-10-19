import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import {
  getCourse,
  getQuiz,
  lessonsForModule,
  modulesForCourse,
} from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Curso" };

export default async function AdminCursoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const course = getCourse(id);
  if (!course) notFound();

  const mods = modulesForCourse(course.id);

  return (
    <div className="space-y-8">
      <PageHeader title={course.title} description={course.subtitle}>
        <Link href="/admin/cursos" className="text-sm text-accent hover:underline">
          ← Cursos
        </Link>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Alunos</p>
          <p className="mt-2 text-3xl font-bold">{course.enrolled}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
            Conclusão
          </p>
          <p className="mt-2 text-3xl font-bold">{course.completionRate}%</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
            Módulos
          </p>
          <p className="mt-2 text-3xl font-bold">{mods.length}</p>
        </div>
      </div>

      <div className="space-y-4">
        {mods.map((mod) => {
          const modLessons = lessonsForModule(mod.id);
          return (
            <section
              key={mod.id}
              className="rounded-2xl border border-white/10 bg-[#081a2e] p-5"
            >
              <p className="text-xs uppercase tracking-[0.14em] text-accent">
                Módulo {mod.order}
              </p>
              <h2 className="mt-1 text-lg font-semibold">{mod.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{mod.description}</p>
              <ul className="mt-4 space-y-2">
                {modLessons.map((lesson) => {
                  const quiz = lesson.quizId ? getQuiz(lesson.quizId) : null;
                  return (
                    <li
                      key={lesson.id}
                      className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm"
                    >
                      <span>
                        <span className="font-medium text-white">
                          {lesson.title}
                        </span>
                        <span className="ml-2 text-slate-500">
                          {lesson.duration}
                        </span>
                      </span>
                      <span className="text-xs text-slate-400">
                        {lesson.hasMission
                          ? `Missão/quiz: ${quiz?.title ?? "sim"}`
                          : "Sem missão"}
                      </span>
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
