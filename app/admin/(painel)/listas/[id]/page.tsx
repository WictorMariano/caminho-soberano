import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import { formatDateTime } from "@/lib/admin/data";
import {
  capturePages,
  getList,
  leadsInList,
} from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Lista" };

export default async function AdminListaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const list = getList(id);
  if (!list) notFound();

  const rows = leadsInList(id);
  const pages = capturePages.filter((p) => p.listId === id);

  return (
    <div className="space-y-8">
      <PageHeader title={list.name} description={list.description}>
        <Link
          href="/admin/listas"
          className="text-sm text-accent hover:underline"
        >
          ← Todas as listas
        </Link>
      </PageHeader>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
            Leads
          </p>
          <p className="mt-2 text-3xl font-bold">{rows.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
            Páginas ligadas
          </p>
          <p className="mt-2 text-3xl font-bold">{pages.length}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
            Membros nesta lista
          </p>
          <p className="mt-2 text-3xl font-bold">
            {rows.filter((r) => r.isMember).length}
          </p>
        </div>
      </div>

      <section className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
        <h2 className="text-base font-semibold">Páginas que alimentam esta lista</h2>
        <ul className="mt-4 space-y-2">
          {pages.map((page) => (
            <li
              key={page.id}
              className="flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 text-sm"
            >
              <span>
                <span className="font-medium text-white">{page.title}</span>
                <span className="ml-2 text-slate-500">{page.path}</span>
              </span>
              <span className="text-slate-400">{page.signups} cadastros</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="overflow-x-auto rounded-2xl border border-white/10 bg-[#081a2e] p-5">
        <h2 className="text-base font-semibold">Leads da lista</h2>
        <table className="mt-4 w-full min-w-[720px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.12em] text-white/40">
            <tr>
              <th className="pb-3 pr-4">Nome</th>
              <th className="pb-3 pr-4">Página de origem</th>
              <th className="pb-3 pr-4">Cidade</th>
              <th className="pb-3 pr-4">Membro</th>
              <th className="pb-3">Entrada</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {rows.map((lead) => {
              const page = capturePages.find((p) => p.id === lead.pageId);
              return (
                <tr key={lead.id}>
                  <td className="py-3 pr-4">
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="font-medium hover:text-accent"
                    >
                      {lead.name}
                    </Link>
                    <p className="text-xs text-slate-500">{lead.email}</p>
                  </td>
                  <td className="py-3 pr-4 text-slate-300">{page?.path}</td>
                  <td className="py-3 pr-4 text-slate-300">
                    {lead.city}/{lead.state}
                  </td>
                  <td className="py-3 pr-4">
                    {lead.isMember ? (
                      <span className="text-accent">Sim</span>
                    ) : (
                      <span className="text-slate-500">Não</span>
                    )}
                  </td>
                  <td className="py-3 text-slate-400">
                    {formatDateTime(lead.createdAt)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
