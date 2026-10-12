import { PageHeader } from "@/components/admin/AdminUi";
import { ListToolbar, TableShell, tdClass, thClass } from "@/components/admin/ListToolbar";
import { formatDateTime, whatsappLink, type WaitlistSignup } from "@/lib/admin/data";
import { filterWaitlist, toQueryString, type WaitlistFilters } from "@/lib/admin/filters";
import { brazilianStates, interestOptions } from "@/lib/waitlist";

export function WaitlistListView({ rows, filters }: { rows: WaitlistSignup[]; filters: WaitlistFilters }) {
  const filtered = filterWaitlist(rows, filters);

  return (
    <>
      <PageHeader title="Lista de espera" description="Pessoas que preencheram o formulário principal da página Lista de espera." />
      <ListToolbar
        q={filters.q}
        basePath="/admin/lista-de-espera"
        exportHref={`/admin/exportar/lista-de-espera${toQueryString(filters)}`}
        hasFilters={Boolean(filters.q || filters.tema || filters.estado)}
        selects={[
          { name: "tema", label: "Tema", value: filters.tema, options: interestOptions.map((option) => ({ value: option, label: option })) },
          { name: "estado", label: "Estado desejado", value: filters.estado, options: brazilianStates.map(([uf, name]) => ({ value: uf, label: name })) },
        ]}
      />
      <TableShell empty={filtered.length === 0} count={filtered.length} total={rows.length}>
        <thead>
          <tr>
            <th className={thClass}>Data</th>
            <th className={thClass}>Nome</th>
            <th className={thClass}>Contato</th>
            <th className={thClass}>Mora em</th>
            <th className={thClass}>Temas</th>
            <th className={thClass}>Próximo evento em</th>
            <th className={thClass}>31/10</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row) => (
            <tr key={row.id} className="hover:bg-white/[0.02]">
              <td className={`${tdClass} whitespace-nowrap text-slate-400`}>{formatDateTime(row.created_at)}</td>
              <td className={`${tdClass} font-medium text-white`}>{row.name}</td>
              <td className={tdClass}>
                <a href={`mailto:${row.email}`} className="block hover:text-accent">{row.email}</a>
                <a href={whatsappLink(row.whatsapp)} target="_blank" rel="noopener noreferrer" className="mt-1 block text-[#5ee08f] hover:underline">{row.whatsapp}</a>
              </td>
              <td className={`${tdClass} whitespace-nowrap`}>{row.city} ({row.state})</td>
              <td className={tdClass}>
                <div className="flex max-w-xs flex-wrap gap-1">
                  {row.interests.length ? row.interests.map((interest) => (
                    <span key={interest} className="rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[11px] text-accent">{interest}</span>
                  )) : <span className="text-slate-500">Nenhum</span>}
                </div>
              </td>
              <td className={`${tdClass} whitespace-nowrap`}>{row.preferred_city} ({row.preferred_state})</td>
              <td className={tdClass}>{row.october_event ? "Sim" : "Não"}</td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </>
  );
}
