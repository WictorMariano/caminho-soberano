import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import { courses, getBadge, lessonsForCourse } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Cursos" };

export default async function AdminCursosPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Cursos"
        description="Estrutura da área de membros: cursos, módulos, aulas, missões e taxa de conclusão."
      />

      <div className="grid gap-4">
        {courses.map((course) => {
          const badge = getBadge(course.badgeId);
          const lessonCount = lessonsForCourse(course.id).length;
          return (
            <Link
              key={course.id}
              href={`/admin/cursos/${course.id}`}
              className="rounded-2xl border border-white/10 bg-[#081a2e] p-5 transition hover:border-accent/40"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-accent">
                    {course.level}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold">{course.title}</h2>
                  <p className="mt-2 text-sm text-slate-400">{course.subtitle}</p>
                </div>
                <div className="text-right text-sm text-slate-400">
                  <p>{course.enrolled} alunos</p>
                  <p className="mt-1 text-accent font-semibold">
                    {course.completionRate}% concluem
                  </p>
                </div>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-accent"
                  style={{ width: `${course.completionRate}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-slate-500">
                {lessonCount} aulas · Insígnia ao concluir: {badge?.name}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
