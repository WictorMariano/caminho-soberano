import Link from "next/link";
import { ListChecks, MessageCircle, UserRound } from "lucide-react";

import { DataError, PageHeader, StatCard } from "@/components/admin/AdminUi";
import {
  fetchCommunitySignups,
  fetchMembers,
  fetchWaitlistSignups,
  formatDateTime,
} from "@/lib/admin/data";
import type { AdminSession } from "@/lib/admin/dal";

type AdminClient = NonNullable<Extract<AdminSession, { status: "admin"; demo: false }>["supabase"]>;

export async function LiveDashboard({ supabase }: { supabase: AdminClient }) {
  try {
    const [waitlist, community, members] = await Promise.all([
      fetchWaitlistSignups(supabase),
      fetchCommunitySignups(supabase),
      fetchMembers(supabase),
    ]);

    return (
      <div className="space-y-8">
        <PageHeader
          title="Dashboard"
          description="Inscrições da lista de espera, do grupo do WhatsApp e contas da área de membros."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/admin/lista-de-espera" className="block transition hover:brightness-110">
            <StatCard icon={ListChecks} label="Lista de espera" value={waitlist.length} />
          </Link>
          <Link href="/admin/grupo-whatsapp" className="block transition hover:brightness-110">
            <StatCard icon={MessageCircle} label="Grupo WhatsApp" value={community.length} />
          </Link>
          <Link href="/admin/membros" className="block transition hover:brightness-110">
            <StatCard icon={UserRound} label="Membros" value={members.length} />
          </Link>
        </div>

        <PeopleTable
          title="Lista de espera"
          href="/admin/lista-de-espera"
          rows={waitlist.slice(0, 8).map((row) => ({
            id: row.id,
            name: row.name,
            email: row.email,
            when: row.created_at,
          }))}
          empty="Ninguém entrou na lista de espera ainda."
        />
        <PeopleTable
          title="Membros cadastrados"
          href="/admin/membros"
          rows={members.slice(0, 8).map((row) => ({
            id: row.user_id,
            name: row.name,
            email: row.email,
            when: row.created_at,
          }))}
          empty="Nenhuma conta de membro ainda."
        />
      </div>
    );
  } catch (error) {
    console.error("LiveDashboard", error);
    return (
      <>
        <PageHeader title="Dashboard" />
        <DataError />
      </>
    );
  }
}

function PeopleTable({
  title,
  href,
  rows,
  empty,
}: {
  title: string;
  href: string;
  rows: { id: string; name: string; email: string; when: string }[];
  empty: string;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <Link href={href} className="text-sm text-accent hover:underline">
          Ver todos
        </Link>
      </div>
      {rows.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">{empty}</p>
      ) : (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="text-xs uppercase tracking-[0.12em] text-white/40">
              <tr>
                <th className="pb-3 pr-4 font-medium">Nome</th>
                <th className="pb-3 pr-4 font-medium">E-mail</th>
                <th className="pb-3 font-medium">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((row) => (
                <tr key={row.id}>
                  <td className="py-3 pr-4 font-medium text-white">{row.name}</td>
                  <td className="py-3 pr-4 text-slate-300">{row.email}</td>
                  <td className="py-3 whitespace-nowrap text-slate-400">{formatDateTime(row.when)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
