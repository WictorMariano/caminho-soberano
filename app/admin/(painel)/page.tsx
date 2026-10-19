import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpenCheck,
  Layers,
  Percent,
  Users,
} from "lucide-react";

import { PageHeader, StatCard } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import {
  captureLists,
  capturePages,
  courses,
  leads,
  platformStats,
} from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Dashboard" };

export default async function AdminDashboardPage() {
  const session = await requireAdmin();
  const stats = platformStats();

  return (
    <div className="space-y-8">
      {session.demo ? (
        <p className="rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
          Modo convidado: painel no estilo de plataforma de listas e membros,
          com dados de exemplo.
        </p>
      ) : null}

      <PageHeader
        title="Dashboard"
        description="Leads, listas de captura e andamento da área de membros."
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Users} label="Leads totais" value={stats.totalLeads} />
        <StatCard icon={BookOpenCheck} label="Membros" value={stats.members} />
        <StatCard icon={Layers} label="Listas" value={stats.lists} />
        <StatCard
          icon={Percent}
          label="Conclusão média"
          value={stats.avgCompletion}
          hint="média dos cursos"
        />
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Listas de captura</h2>
            <Link
              href="/admin/listas"
              className="text-sm text-accent hover:underline"
            >
              Ver todas
            </Link>
          </div>
          <ul className="mt-4 space-y-3">
            {captureLists.map((list) => {
              const count = leads.filter((l) => l.listId === list.id).length;
              return (
                <li key={list.id}>
                  <Link
                    href={`/admin/listas/${list.id}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 transition hover:border-accent/40"
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: list.color }}
                      />
                      <span className="text-sm font-medium">{list.name}</span>
                    </span>
                    <span className="text-sm text-slate-400">{count} leads</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold">Conclusão por curso</h2>
            <Link
              href="/admin/cursos"
              className="text-sm text-accent hover:underline"
            >
              Gerenciar
            </Link>
          </div>
          <ul className="mt-4 space-y-4">
            {courses.map((course) => (
              <li key={course.id}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium">{course.title}</span>
                  <span className="text-slate-400">{course.completionRate}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${course.completionRate}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-slate-500">
                  {course.enrolled} alunos · {course.lessonsTotal} aulas
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">Leads recentes</h2>
          <Link
            href="/admin/leads"
            className="text-sm text-accent hover:underline"
          >
            Ver todos
          </Link>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.12em] text-white/40">
              <tr>
                <th className="pb-3 pr-4 font-medium">Nome</th>
                <th className="pb-3 pr-4 font-medium">Lista</th>
                <th className="pb-3 pr-4 font-medium">Página</th>
                <th className="pb-3 font-medium">Membro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {leads.slice(0, 5).map((lead) => {
                const list = captureLists.find((l) => l.id === lead.listId);
                const page = capturePages.find((p) => p.id === lead.pageId);
                return (
                  <tr key={lead.id}>
                    <td className="py-3 pr-4">
                      <Link
                        href={`/admin/leads/${lead.id}`}
                        className="font-medium text-white hover:text-accent"
                      >
                        {lead.name}
                      </Link>
                      <p className="text-xs text-slate-500">{lead.email}</p>
                    </td>
                    <td className="py-3 pr-4 text-slate-300">{list?.name}</td>
                    <td className="py-3 pr-4 text-slate-400">{page?.path}</td>
                    <td className="py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          lead.isMember
                            ? "bg-accent/20 text-accent"
                            : "bg-white/10 text-slate-400"
                        }`}
                      >
                        {lead.isMember ? "Sim" : "Não"}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
