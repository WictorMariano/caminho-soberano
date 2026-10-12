import Link from "next/link";
import { Download, Search, X } from "lucide-react";

const fieldClass = "w-full rounded-xl border border-white/15 bg-[#081626] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-accent focus:ring-2 focus:ring-accent/20";

type Select = { name: string; label: string; value: string; options: { value: string; label: string }[] };

export function ListToolbar({
  q,
  selects,
  basePath,
  exportHref,
  hasFilters,
}: {
  q: string;
  selects: Select[];
  basePath: string;
  exportHref: string;
  hasFilters: boolean;
}) {
  return (
    <div className="mt-8 flex flex-col gap-3 xl:flex-row xl:items-end xl:justify-between">
      <form method="get" action={basePath} className="grid flex-1 gap-3 sm:grid-cols-2 lg:flex lg:items-end">
        <label className="block text-xs font-medium text-slate-300 lg:w-72">
          Buscar
          <span className="relative mt-1.5 block">
            <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input name="q" defaultValue={q} placeholder="Nome, e-mail, cidade ou WhatsApp" className={`${fieldClass} pl-9`} />
          </span>
        </label>
        {selects.map((select) => (
          <label key={select.name} className="block text-xs font-medium text-slate-300 lg:w-52">
            {select.label}
            <select name={select.name} defaultValue={select.value} className={`${fieldClass} mt-1.5`}>
              <option value="">Todos</option>
              {select.options.map((option) => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        ))}
        <div className="flex gap-2">
          <button type="submit" className="rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-accent-ink hover:brightness-95">Filtrar</button>
          {hasFilters ? (
            <Link href={basePath} className="inline-flex items-center gap-1 rounded-xl border border-white/15 px-3 py-2.5 text-sm text-slate-300 hover:text-white">
              <X size={14} /> Limpar
            </Link>
          ) : null}
        </div>
      </form>
      <a href={exportHref} className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent/40 px-4 py-2.5 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-ink">
        <Download size={16} /> Exportar CSV
      </a>
    </div>
  );
}

export function TableShell({ children, empty, count, total }: { children: React.ReactNode; empty: boolean; count: number; total: number }) {
  return (
    <div className="mt-6">
      <p className="mb-3 text-xs text-slate-400">
        {count === total ? `${total.toLocaleString("pt-BR")} inscritos` : `${count.toLocaleString("pt-BR")} de ${total.toLocaleString("pt-BR")} inscritos`}
      </p>
      {empty ? (
        <p className="rounded-2xl border border-white/10 bg-[#081a2e] px-5 py-10 text-center text-sm text-slate-400">Nenhum inscrito encontrado.</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#081a2e]">
          <table className="w-full min-w-[900px] text-left text-sm">{children}</table>
        </div>
      )}
    </div>
  );
}

export const thClass = "border-b border-white/10 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-slate-400";
export const tdClass = "border-b border-white/5 px-4 py-3 align-top text-slate-200";
