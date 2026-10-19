import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  BookOpen,
  ChevronRight,
  ExternalLink,
  LogOut,
  Trophy,
} from "lucide-react";

import { MemberAvatar } from "@/components/membros/MemberAvatar";
import { ProfileAccountForms } from "@/components/membros/ProfileAccountForms";
import { BadgeIcon } from "@/components/platform/BadgeIcon";
import { logoutMembro } from "@/app/membros/actions";
import { memberLevels } from "@/lib/membros/demo";
import { requireMember } from "@/lib/membros/session";
import { demoMemberState, getBadge } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Perfil" };

const shortcuts = [
  { href: "/membros/materiais", label: "Materiais", icon: BookOpen },
  { href: "/membros/progresso", label: "Progresso", icon: Trophy },
  { href: "/membros/insignias", label: "Insígnias", icon: Award },
  { href: "/", label: "Ver o site", icon: ExternalLink },
] as const;

export default async function MembrosPerfilPage() {
  const { name, email } = await requireMember();
  const level = memberLevels.find((l) => l.current);
  const badges = demoMemberState.earnedBadgeIds
    .map((id) => getBadge(id))
    .filter(Boolean);
  const xpPct = Math.min(
    100,
    Math.round((demoMemberState.xp / demoMemberState.nextLevelXp) * 100),
  );

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <header className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5">
        <div className="flex items-center gap-4">
          <MemberAvatar name={name} size="lg" />
          <div className="min-w-0">
            <h1 className="truncate text-2xl font-bold tracking-tight">{name}</h1>
            <p className="truncate text-sm text-slate-400">{email}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {level?.name ?? "Membro"}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-between text-xs text-slate-400">
            <span>
              {demoMemberState.xp} / {demoMemberState.nextLevelXp} XP
            </span>
            <span>{xpPct}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${xpPct}%` }}
            />
          </div>
        </div>
      </header>

      <section className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold">Conquistas</h2>
          <Link
            href="/membros/insignias"
            className="text-sm font-semibold text-accent"
          >
            Ver todas
          </Link>
        </div>
        {badges.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            Complete cursos e desafios para ganhar insígnias.
          </p>
        ) : (
          <ul className="mt-4 flex flex-wrap gap-2">
            {badges.map((badge) =>
              badge ? (
                <li
                  key={badge.id}
                  className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent"
                >
                  <BadgeIcon icon={badge.icon} size={14} />
                  {badge.name}
                </li>
              ) : null,
            )}
          </ul>
        )}
      </section>

      <section className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c30]">
        <h2 className="px-5 pt-5 text-base font-semibold">Atalhos</h2>
        <ul className="mt-2 divide-y divide-white/10">
          {shortcuts.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                className="flex min-h-12 items-center gap-3 px-5 py-3.5 text-sm font-medium text-white transition active:bg-white/5"
              >
                <Icon size={18} className="text-accent" />
                <span className="flex-1">{label}</span>
                <ChevronRight size={16} className="text-white/30" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ProfileAccountForms email={email} />

      <form action={logoutMembro}>
        <button
          type="submit"
          className="flex w-full min-h-12 items-center justify-center gap-2 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3.5 text-sm font-semibold text-red-200 transition active:scale-[0.99]"
        >
          <LogOut size={17} /> Sair da conta
        </button>
      </form>
    </div>
  );
}
