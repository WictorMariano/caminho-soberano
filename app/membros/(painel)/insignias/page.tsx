import type { Metadata } from "next";

import { BadgeIcon } from "@/components/platform/BadgeIcon";
import { badges, demoMemberState } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Insígnias" };

export default function MembrosInsigniasPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Conquistas
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Insígnias</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
          Complete cursos e missões para desbloquear. As que você já tem
          aparecem destacadas.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {badges.map((badge) => {
          const earned = demoMemberState.earnedBadgeIds.includes(badge.id);
          return (
            <article
              key={badge.id}
              className={`rounded-2xl border p-5 ${
                earned
                  ? "border-accent/40 bg-accent/10"
                  : "border-white/10 bg-white/[0.03] opacity-70"
              }`}
            >
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                  earned ? "bg-accent text-accent-ink" : "bg-white/10 text-white/50"
                }`}
              >
                <BadgeIcon icon={badge.icon} size={26} />
              </span>
              <h2 className="mt-4 text-lg font-semibold">{badge.name}</h2>
              <p className="mt-2 text-sm text-slate-400">{badge.description}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-white/45">
                {earned ? "Conquistada" : "Bloqueada"}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
