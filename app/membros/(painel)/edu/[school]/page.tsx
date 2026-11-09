import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Lock } from "lucide-react";

import { getSchool, isSchoolOpen } from "@/lib/edu/curriculum";

export const metadata: Metadata = { title: "Escola" };

export default async function EduSchoolPage({
  params,
}: {
  params: Promise<{ school: string }>;
}) {
  const { school: schoolSlug } = await params;
  const school = getSchool(schoolSlug);
  if (!school) notFound();
  const open = isSchoolOpen(school);

  return (
    <div className="space-y-8">
      <header>
        <Link href="/membros/edu" className="text-sm text-accent hover:underline">
          ← Edu
        </Link>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-accent">
          Escola {school.order}
          {open ? " · Acesso gratuito" : " · Bloqueada"}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">{school.title}</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400">{school.summary}</p>
        {open ? null : (
          <p className="mt-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            <Lock size={16} className="text-accent" />
            Esta escola está bloqueada no acesso gratuito. Os módulos continuam visíveis.
          </p>
        )}
      </header>

      <div className="grid gap-4">
        {school.modules.map((module) => (
          <Link
            key={module.slug}
            href={`/membros/edu/${school.slug}/${module.slug}`}
            className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5 transition hover:border-accent/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-accent">
                  Módulo {module.number} · {module.journey}
                </p>
                <h2 className="mt-1 text-lg font-semibold">{module.title}</h2>
                <p className="mt-1 text-sm text-slate-400">{module.summary}</p>
              </div>
              {open ? null : <Lock size={16} className="mt-1 shrink-0 text-slate-400" />}
            </div>
            <p className="mt-4 text-xs text-slate-500">{module.lessons.length} conteúdos</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
