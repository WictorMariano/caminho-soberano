import type { Metadata } from "next";
import Link from "next/link";

import { QuizBuilderDemo } from "@/components/admin/QuizBuilderDemo";
import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import { courses, getCourse, lessons, quizzes } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Quizzes" };

export default async function AdminQuizzesPage() {
  await requireAdmin();

  const lessonOptions = lessons.map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    courseTitle: getCourse(lesson.courseId)?.title ?? "",
  }));

  return (
    <div className="space-y-8">
      <PageHeader
        title="Quizzes e missões"
        description="Crie perguntas para colocar no meio dos cursos e medir se a pessoa aprendeu."
      />

      <section className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
        <h2 className="text-base font-semibold">Quizzes existentes</h2>
        <ul className="mt-4 space-y-3">
          {quizzes.map((quiz) => {
            const lesson = lessons.find((l) => l.id === quiz.lessonId);
            const course = lesson ? getCourse(lesson.courseId) : null;
            return (
              <li
                key={quiz.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm"
              >
                <div>
                  <p className="font-medium text-white">{quiz.title}</p>
                  <p className="text-xs text-slate-500">
                    {course?.title} · {lesson?.title} · {quiz.questions.length}{" "}
                    perguntas
                  </p>
                </div>
                <Link
                  href={`/admin/cursos/${course?.id}`}
                  className="text-accent hover:underline"
                >
                  Ver no curso
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-4 text-xs text-slate-500">
          {courses.length} cursos com missões distribuídas nos módulos.
        </p>
      </section>

      <QuizBuilderDemo lessons={lessonOptions} />
    </div>
  );
}
