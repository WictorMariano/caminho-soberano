import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import { captureLists, capturePages, leads } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Listas" };

export default async function AdminListasPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Listas"
        description="Organize leads como numa plataforma de e-mail marketing. Cada lista pode receber uma ou mais páginas de captura."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {captureLists.map((list) => {
          const count = leads.filter((l) => l.listId === list.id).length;
          const pages = capturePages.filter((p) => p.listId === list.id);
          return (
            <Link
              key={list.id}
              href={`/admin/listas/${list.id}`}
              className="rounded-2xl border border-white/10 bg-[#081a2e] p-5 transition hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="mt-1 h-3 w-3 rounded-full"
                  style={{ background: list.color }}
                />
                <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">
                  {count} leads
                </span>
              </div>
              <h2 className="mt-4 text-lg font-semibold text-white">
                {list.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {list.description}
              </p>
              <p className="mt-4 text-xs text-white/45">
                Páginas:{" "}
                {pages.length
                  ? pages.map((p) => p.path).join(", ")
                  : "nenhuma atribuída"}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
