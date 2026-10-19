import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import { formatDateTime } from "@/lib/admin/data";
import { captureLists, capturePages, leads } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Leads" };

export default async function AdminLeadsPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Leads"
        description="Todos os contatos capturados. Clique em um lead para ver origem, se é membro e o progresso nos cursos."
      />

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#081a2e] p-5">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.12em] text-white/40">
            <tr>
              <th className="pb-3 pr-4">Lead</th>
              <th className="pb-3 pr-4">Lista</th>
              <th className="pb-3 pr-4">Página</th>
              <th className="pb-3 pr-4">Membro</th>
              <th className="pb-3">Quando</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {leads.map((lead) => {
              const list = captureLists.find((l) => l.id === lead.listId);
              const page = capturePages.find((p) => p.id === lead.pageId);
              return (
                <tr key={lead.id} className="hover:bg-white/[0.02]">
                  <td className="py-3.5 pr-4">
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="font-semibold text-white hover:text-accent"
                    >
                      {lead.name}
                    </Link>
                    <p className="text-xs text-slate-500">{lead.email}</p>
                  </td>
                  <td className="py-3.5 pr-4">
                    <span className="inline-flex items-center gap-2">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: list?.color }}
                      />
                      {list?.name}
                    </span>
                  </td>
                  <td className="py-3.5 pr-4 text-slate-400">{page?.path}</td>
                  <td className="py-3.5 pr-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                        lead.isMember
                          ? "bg-accent/20 text-accent"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {lead.isMember ? "Membro" : "Só lead"}
                    </span>
                  </td>
                  <td className="py-3.5 text-slate-400">
                    {formatDateTime(lead.createdAt)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
