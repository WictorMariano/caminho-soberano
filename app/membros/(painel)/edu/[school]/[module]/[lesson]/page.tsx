import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lock } from "lucide-react";

import { getLesson, isSchoolOpen } from "@/lib/edu/curriculum";

export const metadata: Metadata = { title: "Aula" };

export default async function EduLessonPage({
  params,
}: {
  params: Promise<{ school: string; module: string; lesson: string }>;
}) {
  const { school: schoolSlug, module: moduleSlug, lesson: lessonSlug } = await params;
  const found = getLesson(schoolSlug, moduleSlug, lessonSlug);
  if (!found) notFound();
  const { school, module, lesson } = found;
  const playable = isSchoolOpen(school) && lesson.published;

  return (
    <div className="space-y-6">
      <header>
        <Link
          href={`/membros/edu/${school.slug}/${module.slug}`}
          className="text-sm text-accent hover:underline"
        >
          ← {module.title}
        </Link>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-accent">
          {school.title.replace(/^Escola da /, "")} · Módulo {module.number}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{lesson.title}</h1>
      </header>

      {playable ? (
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c30]">
          <div className="flex aspect-video items-center justify-center bg-black/40 px-6 text-center">
            <p className="max-w-md text-sm text-slate-300">
              A aula gravada entra aqui. O vídeo desta aula ainda será publicado neste player.
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0b1c30] p-5 text-sm text-slate-300">
          <Lock size={18} className="mt-0.5 shrink-0 text-accent" />
          <p>
            {isSchoolOpen(school)
              ? "Esta aula ainda não está disponível."
              : "Esta escola está bloqueada no acesso gratuito."}
          </p>
        </div>
      )}
    </div>
  );
}
