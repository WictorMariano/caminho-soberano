import Link from "next/link";
import { ArrowUpRight, CalendarCheck, ListChecks, MessageCircle, TrendingUp } from "lucide-react";

import { DailyChart, PageHeader, Panel, RankList, StatCard } from "@/components/admin/AdminUi";
import type { DashboardStats } from "@/lib/admin/stats";

export function DashboardView({ stats }: { stats: DashboardStats }) {
  const { totals } = stats;

  return (
    <>
      <PageHeader title="Dashboard" description="Resumo das inscrições na lista de espera e no grupo do WhatsApp." />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={ListChecks} label="Lista de espera" value={totals.waitlist} hint={`${totals.waitlistLast30} nos últimos 30 dias`} />
        <StatCard icon={MessageCircle} label="Grupo do WhatsApp" value={totals.community} hint={`${totals.communityLast30} nos últimos 30 dias`} />
        <StatCard icon={TrendingUp} label="Últimos 7 dias" value={totals.waitlistLast7 + totals.communityLast7} hint={`${totals.waitlistLast7} na lista, ${totals.communityLast7} no grupo`} />
        <StatCard icon={CalendarCheck} label="Interesse em 31/10" value={totals.octoberEvent} hint="Marcaram interesse no encontro de outubro" />
      </div>

      <Panel title="Inscrições por dia" description="Últimos 30 dias, somando as duas listas." className="mt-6">
        <DailyChart days={stats.days} />
      </Panel>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Panel title="Temas mais escolhidos" description="O que as pessoas da lista de espera querem aprender.">
          <RankList items={stats.interests} />
        </Panel>
        <Panel title="Onde querem o próximo evento" description="Cidades desejadas na lista de espera.">
          <RankList items={stats.preferredCities} />
        </Panel>
        <Panel title="Estados desejados para o próximo evento">
          <RankList items={stats.preferredStates} />
        </Panel>
        <Panel title="Onde moram" description="Estado de residência de quem entrou na lista de espera.">
          <RankList items={stats.residenceStates} />
        </Panel>
        <Panel title="Regiões do grupo do WhatsApp">
          <RankList items={stats.communityRegions} />
        </Panel>
        <Panel title="Cidades do grupo do WhatsApp">
          <RankList items={stats.communityCities} />
        </Panel>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/admin/lista-de-espera" className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-5 py-2.5 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-ink">
          Ver lista de espera <ArrowUpRight size={16} />
        </Link>
        <Link href="/admin/grupo-whatsapp" className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 px-5 py-2.5 text-sm font-semibold text-[#5ee08f] hover:bg-[#25D366] hover:text-[#031b0d]">
          Ver grupo do WhatsApp <ArrowUpRight size={16} />
        </Link>
      </div>
    </>
  );
}
