import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lock, Play } from "lucide-react";

import { getModule, isSchoolOpen } from "@/lib/edu/curriculum";

export const metadata: Metadata = { title: "Módulo" };

export default async function EduModulePage({
  params,
}: {
  params: Promise<{ school: string; module: string }>;
}) {
  const { school: schoolSlug, module: moduleSlug } = await params;
  const found = getModule(schoolSlug, moduleSlug);
  if (!found) notFound();
  const { school, module } = found;
  const open = isSchoolOpen(school);
  const tracks = groupByTrack(module.lessons);

  return (
    <div className="space-y-8">
      <header>
        <Link href={`/membros/edu/${school.slug}`} className="text-sm text-accent hover:underline">
          ← {school.title.replace(/^Escola da /, "")}
        </Link>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-accent">
          Módulo {module.number} · {module.journey}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{module.title}</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">{module.summary}</p>
      </header>

      {tracks.map((group) => (
        <section key={group.track} className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5">
          {tracks.length > 1 ? <h2 className="text-base font-semibold">{group.track}</h2> : null}
          <ul className={tracks.length > 1 ? "mt-4 space-y-2" : "space-y-2"}>
            {group.lessons.map((lesson) => {
              const playable = open && lesson.published;
              const body = (
                <>
                  {playable ? (
                    <Play size={16} className="shrink-0 text-accent" />
                  ) : (
                    <Lock size={16} className="shrink-0 text-slate-500" />
                  )}
                  <span className="min-w-0 flex-1">
                    <span className="block font-medium text-white">{lesson.title}</span>
                    {playable ? (
                      <span className="mt-0.5 block text-xs text-accent">Aula disponível</span>
                    ) : null}
                  </span>
                </>
              );
              return (
                <li key={lesson.slug}>
                  {playable ? (
                    <Link
                      href={`/membros/edu/${school.slug}/${module.slug}/${lesson.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 transition hover:border-accent/40"
                    >
                      {body}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 opacity-80">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}

function groupByTrack<T extends { track: string }>(lessons: T[]) {
  const groups: { track: string; lessons: T[] }[] = [];
  for (const lesson of lessons) {
    const current = groups[groups.length - 1];
    if (current?.track === lesson.track) current.lessons.push(lesson);
    else groups.push({ track: lesson.track, lessons: [lesson] });
  }
  return groups;
}
