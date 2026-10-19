import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Play } from "lucide-react";

import { LessonQuiz } from "@/components/membros/LessonQuiz";
import {
  getCourseBySlug,
  getQuiz,
  lessons,
} from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Aula" };

export default async function MembrosAulaPage({
  params,
}: {
  params: Promise<{ slug: string; lessonId: string }>;
}) {
  const { slug, lessonId } = await params;
  const course = getCourseBySlug(slug);
  const lesson = lessons.find((l) => l.id === lessonId && l.courseId === course?.id);
  if (!course || !lesson) notFound();

  const quiz = lesson.quizId ? getQuiz(lesson.quizId) : null;

  return (
    <div className="space-y-8">
      <header>
        <Link
          href={`/membros/cursos/${course.slug}`}
          className="text-sm text-accent hover:underline"
        >
          ← {course.title}
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight">{lesson.title}</h1>
        <p className="mt-2 text-sm text-slate-400">{lesson.duration}</p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c30]">
        <div className="relative flex aspect-video items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(255,241,0,0.08),transparent_55%)]">
          <div className="text-center">
            <span className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-ink">
              <Play size={28} fill="currentColor" />
            </span>
            <p className="mt-4 text-sm text-slate-400">
              Player YouTube (demonstração). Na versão final o vídeo oficial
              abre aqui.
            </p>
          </div>
        </div>
      </section>

      {quiz ? <LessonQuiz quiz={quiz} /> : null}
    </div>
  );
}
