import type { Metadata } from "next";

import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import {
  curriculumStats,
  getCurriculum,
  type LessonStatus,
} from "@/lib/edu/curriculum";

export const metadata: Metadata = { title: "Edu" };

const STATUSES: LessonStatus[] = ["Concluído", "Em Produção", "Revisão", "Não Iniciado"];

export default async function AdminEduPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await requireAdmin();
  const params = await searchParams;
  const schoolFilter = typeof params.escola === "string" ? params.escola : "";
  const statusFilter = typeof params.status === "string" ? params.status : "";
  const query = typeof params.q === "string" ? params.q.trim().toLowerCase() : "";

  const schools = getCurriculum();
  const stats = curriculumStats(schools);
  const rows = schools.flatMap((school) =>
    school.modules.flatMap((module) =>
      module.lessons.map((lesson) => ({ school, module, lesson })),
    ),
  );
  const filtered = rows.filter((row) => {
    if (schoolFilter && row.school.slug !== schoolFilter) return false;
    if (statusFilter && row.lesson.status !== statusFilter) return false;
    if (!query) return true;
    return (
      row.lesson.title.toLowerCase().includes(query) ||
      row.lesson.track.toLowerCase().includes(query) ||
      row.school.title.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="Edu"
        description="Grade das escolas e o status de gravação das aulas. Esse status só aparece aqui, no admin."
      />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <Stat label="Conteúdos" value={stats.lessons} />
        <Stat label="Gravados" value={stats.concluido} />
        <Stat label="Em produção" value={stats.producao} />
        <Stat label="Revisão" value={stats.revisao} />
        <Stat label="Não iniciados" value={stats.naoIniciado} />
      </div>

      <form method="get" action="/admin/edu" className="grid gap-3 md:grid-cols-4 md:items-end">
        <label className="block text-xs font-medium text-slate-300">
          Buscar
          <input
            name="q"
            defaultValue={query}
            placeholder="Aula, escola ou linha"
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#081626] px-3.5 py-2.5 text-sm text-white outline-none focus:border-accent"
          />
        </label>
        <label className="block text-xs font-medium text-slate-300">
          Escola
          <select
            name="escola"
            defaultValue={schoolFilter}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#081626] px-3.5 py-2.5 text-sm text-white outline-none focus:border-accent"
          >
            <option value="">Todas</option>
            {schools.map((school) => (
              <option key={school.slug} value={school.slug}>
                {school.order}. {school.title.replace(/^Escola da /, "")}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-xs font-medium text-slate-300">
          Status da gravação
          <select
            name="status"
            defaultValue={statusFilter}
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#081626] px-3.5 py-2.5 text-sm text-white outline-none focus:border-accent"
          >
            <option value="">Todos</option>
            {STATUSES.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink hover:brightness-95"
        >
          Filtrar
        </button>
      </form>

      <p className="text-xs text-slate-400">
        {filtered.length.toLocaleString("pt-BR")} de {rows.length.toLocaleString("pt-BR")} conteúdos
      </p>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#081a2e]">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-[11px] uppercase tracking-[0.1em] text-slate-400">
              <th className="px-4 py-3 font-semibold">Escola</th>
              <th className="px-4 py-3 font-semibold">Módulo</th>
              <th className="px-4 py-3 font-semibold">Conteúdo</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr key={`${row.school.slug}-${row.module.slug}-${row.lesson.slug}`} className="border-b border-white/5">
                <td className="px-4 py-3 align-top text-slate-300">
                  {row.school.title.replace(/^Escola da /, "")}
                  {row.school.free ? (
                    <span className="mt-1 block text-[11px] text-accent">Gratuita</span>
                  ) : null}
                </td>
                <td className="px-4 py-3 align-top text-slate-300">
                  {row.module.number}. {row.module.title}
                  <span className="mt-1 block text-[11px] text-slate-500">{row.lesson.track}</span>
                </td>
                <td className="px-4 py-3 align-top font-medium text-white">
                  {row.lesson.title}
                  <span className="mt-1 block text-[11px] font-normal text-slate-500">{row.lesson.level}</span>
                </td>
                <td className="px-4 py-3 align-top">
                  <StatusBadge status={row.lesson.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-4">
      <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-bold tabular-nums">{value.toLocaleString("pt-BR")}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: LessonStatus }) {
  const tone =
    status === "Concluído"
      ? "bg-emerald-400/15 text-emerald-200"
      : status === "Em Produção"
        ? "bg-amber-400/15 text-amber-100"
        : status === "Revisão"
          ? "bg-sky-400/15 text-sky-100"
          : "bg-white/10 text-slate-300";
  return <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${tone}`}>{status}</span>;
}
