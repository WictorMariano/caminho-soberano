import type { Metadata } from "next";

import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import { memberMaterials } from "@/lib/membros/demo";

export const metadata: Metadata = { title: "Materiais" };

export default async function AdminMateriaisPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Materiais didáticos"
        description="Arquivos disponíveis na área de membros. Depois cada material poderá ser liberado por curso ou compra."
      />
      <ul className="grid gap-4 md:grid-cols-2">
        {memberMaterials.map((item) => (
          <li
            key={item.id}
            className="rounded-2xl border border-white/10 bg-[#081a2e] p-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              {item.module} · {item.type}
            </p>
            <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-slate-400">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
