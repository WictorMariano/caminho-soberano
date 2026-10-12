import { MessageCircle } from "lucide-react";

import { PageHeader } from "@/components/admin/AdminUi";
import { ListToolbar, TableShell, tdClass, thClass } from "@/components/admin/ListToolbar";
import { formatDateTime, whatsappLink, type CommunitySignup } from "@/lib/admin/data";
import { filterCommunity, toQueryString, type CommunityFilters } from "@/lib/admin/filters";
import { brazilianRegions } from "@/lib/waitlist";

export function CommunityListView({ rows, filters }: { rows: CommunitySignup[]; filters: CommunityFilters }) {
  const filtered = filterCommunity(rows, filters);

  return (
    <>
      <PageHeader title="Grupo do WhatsApp" description="Pessoas que pediram para entrar no grupo da comunidade, na seção Comunidade da página Lista de espera." />
      <ListToolbar
        q={filters.q}
        basePath="/admin/grupo-whatsapp"
        exportHref={`/admin/exportar/grupo-whatsapp${toQueryString(filters)}`}
        hasFilters={Boolean(filters.q || filters.regiao)}
        selects={[
          { name: "regiao", label: "Região", value: filters.regiao, options: brazilianRegions.map((region) => ({ value: region, label: region })) },
        ]}
      />
      <TableShell empty={filtered.length === 0} count={filtered.length} total={rows.length}>
        <thead>
          <tr>
            <th className={thClass}>Data</th>
            <th className={thClass}>Nome</th>
            <th className={thClass}>E-mail</th>
            <th className={thClass}>WhatsApp</th>
            <th className={thClass}>Cidade</th>
            <th className={thClass}>Região</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((row) => (
            <tr key={row.id} className="hover:bg-white/[0.02]">
              <td className={`${tdClass} whitespace-nowrap text-slate-400`}>{formatDateTime(row.created_at)}</td>
              <td className={`${tdClass} font-medium text-white`}>{row.name}</td>
              <td className={tdClass}><a href={`mailto:${row.email}`} className="hover:text-accent">{row.email}</a></td>
              <td className={tdClass}>
                <a href={whatsappLink(row.whatsapp)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 whitespace-nowrap text-[#5ee08f] hover:underline">
                  <MessageCircle size={14} /> {row.whatsapp}
                </a>
              </td>
              <td className={tdClass}>{row.city}</td>
              <td className={tdClass}>{row.region}</td>
            </tr>
          ))}
        </tbody>
      </TableShell>
    </>
  );
}
