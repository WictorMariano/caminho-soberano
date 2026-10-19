import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import { challengeProgress, challenges } from "@/lib/membros/catalog";

export const metadata: Metadata = { title: "Desafios" };

export default async function AdminDesafiosPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Desafios"
        description="Desafios publicados pela diretoria na área de membros. Cada um tem níveis, missões e links de apoio."
      />

      <div className="space-y-4">
        {challenges.map((challenge) => {
          const progress = challengeProgress(challenge);
          return (
            <article
              key={challenge.id}
              className="rounded-2xl border border-white/10 bg-[#081a2e] p-5"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-accent">
                    Desafio {challenge.order}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold">{challenge.title}</h2>
                  <p className="mt-2 max-w-2xl text-sm text-slate-400">
                    {challenge.purpose}
                  </p>
                </div>
                <Link
                  href={`/membros/desafios/${challenge.slug}`}
                  className="text-sm text-accent hover:underline"
                >
                  Ver como membro
                </Link>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                {challenge.levels.length} níveis · {progress.total} missões ·
                progresso médio demo {progress.percent}%
              </p>
              <ul className="mt-4 space-y-2">
                {challenge.levels.map((level) => (
                  <li
                    key={level.id}
                    className="rounded-xl border border-white/10 px-4 py-3 text-sm"
                  >
                    <p className="font-medium text-white">{level.title}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      {level.missions.length} missões · {level.summary}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </div>
  );
}
