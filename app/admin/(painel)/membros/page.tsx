import type { Metadata } from "next";

import { DataError, PageHeader } from "@/components/admin/AdminUi";
import { TableShell, tdClass, thClass } from "@/components/admin/ListToolbar";
import { requireAdmin } from "@/lib/admin/dal";
import { fetchMembers, formatDateTime, matchesSearch } from "@/lib/admin/data";

export const metadata: Metadata = { title: "Membros" };

export default async function AdminMembersPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const session = await requireAdmin();
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";

  if (session.demo) {
    return (
      <>
        <PageHeader
          title="Membros"
          description="No modo de exemplo não há contas reais. Entre com o seu e-mail de administrador para ver os cadastros."
        />
        <p className="mt-8 rounded-2xl border border-white/10 bg-[#081a2e] px-5 py-10 text-center text-sm text-slate-400">
          Nenhum membro real neste modo.
        </p>
      </>
    );
  }

  let rows = null;
  try {
    rows = await fetchMembers(session.supabase);
  } catch (error) {
    console.error("AdminMembersPage", error);
  }

  if (!rows) {
    return (
      <>
        <PageHeader title="Membros" />
        <DataError />
      </>
    );
  }

  const filtered = rows.filter((row) => matchesSearch(q, row.name, row.email));

  return (
    <>
      <PageHeader
        title="Membros"
        description="Pessoas que criaram conta na área de membros."
      />
      <form method="get" action="/admin/membros" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-end">
        <label className="block flex-1 text-xs font-medium text-slate-300">
          Buscar
          <input
            name="q"
            defaultValue={q}
            placeholder="Nome ou e-mail"
            className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#081626] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <button
          type="submit"
          className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink hover:brightness-95"
        >
          Filtrar
        </button>
      </form>
      <TableShell empty={filtered.length === 0} count={filtered.length} total={rows.length} noun="membros" emptyLabel="Nenhum membro encontrado.">
        <thead>
          <tr>
            <th className={thClass}>Data</th>
            <th className={thClass}>Nome</th>
            <th className={thClass}>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row) => (
            <tr key={row.user_id} className="hover:bg-white/[0.02]">
              <td className={`${tdClass} whitespace-nowrap text-slate-400`}>{formatDateTime(row.created_at)}</td>
              <td className={`${tdClass} font-medium text-white`}>{row.name}</td>
              <td className={tdClass}>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </>
  );
}
