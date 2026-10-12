import type { LucideIcon } from "lucide-react";

import type { DayPoint, RankItem } from "@/lib/admin/stats";

export function PageHeader({ title, description, children }: { title: string; description?: string; children?: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div>
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
        {description ? <p className="mt-2 text-sm text-slate-400">{description}</p> : null}
      </div>
      {children}
    </div>
  );
}

export function Panel({ title, description, children, className = "" }: { title?: string; description?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-white/10 bg-[#081a2e] p-5 md:p-6 ${className}`}>
      {title ? <h2 className="text-base font-semibold text-white">{title}</h2> : null}
      {description ? <p className="mt-1 text-xs text-slate-400">{description}</p> : null}
      <div className={title || description ? "mt-5" : ""}>{children}</div>
    </section>
  );
}

export function StatCard({ icon: Icon, label, value, hint }: { icon: LucideIcon; label: string; value: number; hint?: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-medium uppercase tracking-[0.12em] text-slate-400">{label}</span>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
          <Icon size={17} />
        </span>
      </div>
      <p className="mt-3 text-3xl font-extrabold tabular-nums">{value.toLocaleString("pt-BR")}</p>
      {hint ? <p className="mt-1 text-xs text-slate-400">{hint}</p> : null}
    </div>
  );
}

export function RankList({ items, emptyLabel = "Ainda sem dados." }: { items: RankItem[]; emptyLabel?: string }) {
  if (items.length === 0) return <p className="text-sm text-slate-500">{emptyLabel}</p>;
  const max = items[0].count;
  return (
    <ol className="space-y-3">
      {items.map((item) => (
        <li key={item.label}>
          <div className="flex items-baseline justify-between gap-3 text-sm">
            <span className="truncate text-slate-200">{item.label}</span>
            <span className="shrink-0 font-semibold tabular-nums text-white">{item.count}</span>
          </div>
          <div className="mt-1.5 h-1.5 rounded-full bg-white/5">
            <div className="h-full rounded-full bg-accent" style={{ width: `${Math.max(4, (item.count / max) * 100)}%` }} />
          </div>
        </li>
      ))}
    </ol>
  );
}

export function DailyChart({ days }: { days: DayPoint[] }) {
  const max = Math.max(1, ...days.map((day) => day.waitlist + day.community));
  return (
    <div>
      <div className="flex h-44 items-end gap-1">
        {days.map((day) => {
          const total = day.waitlist + day.community;
          return (
            <div key={day.day} className="group relative flex h-full flex-1 flex-col justify-end" title={`${day.label}: ${day.waitlist} lista de espera, ${day.community} grupo do WhatsApp`}>
              <div className="flex flex-col justify-end overflow-hidden rounded-t" style={{ height: `${(total / max) * 100}%` }}>
                <div className="bg-[#25D366]" style={{ height: total ? `${(day.community / total) * 100}%` : 0 }} />
                <div className="flex-1 bg-accent" />
              </div>
              {total === 0 ? <div className="h-px bg-white/10" /> : null}
            </div>
          );
        })}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-slate-500">
        <span>{days[0]?.label}</span>
        <span>{days[Math.floor(days.length / 2)]?.label}</span>
        <span>{days[days.length - 1]?.label}</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-300">
        <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-accent" /> Lista de espera</span>
        <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-sm bg-[#25D366]" /> Grupo do WhatsApp</span>
      </div>
    </div>
  );
}

export function DataError() {
  return (
    <p role="alert" className="mt-8 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
      Não foi possível carregar os dados do banco agora. Confira se o arquivo supabase/schema.sql foi executado no Supabase e tente novamente.
    </p>
  );
}
