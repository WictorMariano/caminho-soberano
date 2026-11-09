import Link from "next/link";
import { Lock } from "lucide-react";

import type { EduSchool } from "@/lib/edu/curriculum";

export function SchoolGrid({ schools }: { schools: EduSchool[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {schools.map((school) => {
        const lessons = school.modules.reduce((sum, module) => sum + module.lessons.length, 0);
        return (
          <Link
            key={school.slug}
            href={`/membros/edu/${school.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c30] transition hover:border-accent/40"
          >
            <div className="h-1.5" style={{ background: school.color }} />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Escola {school.order}
                </p>
                {school.free ? (
                  <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-semibold text-accent">
                    Acesso gratuito
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-slate-300">
                    <Lock size={12} /> Bloqueada
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-lg font-bold tracking-tight text-white group-hover:text-accent">
                {school.title.replace(/^Escola da /, "")}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{school.summary}</p>
              <p className="mt-4 text-xs text-slate-500">
                {school.modules.length} módulos · {lessons} conteúdos
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
