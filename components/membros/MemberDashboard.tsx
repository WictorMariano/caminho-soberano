import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Crown,
  Flame,
  Flag,
  Lock,
  Route,
  Sparkles,
  Star,
  Timer,
} from "lucide-react";

import {
  demoDashboardMetrics,
  ecosystemPillars,
  evolutionBadges,
  type EvolutionBadge,
} from "@/lib/membros/ecosystem";
import { trails } from "@/lib/membros/catalog";
import { courses, getBadge } from "@/lib/platform/demo";
import { BadgeIcon } from "@/components/platform/BadgeIcon";

const toneStyles: Record<
  EvolutionBadge["tone"],
  { ring: string; fill: string; text: string }
> = {
  bronze: {
    ring: "border-[#CD7F32]/50",
    fill: "bg-[#CD7F32]/20 text-[#E8A85A]",
    text: "text-[#E8A85A]",
  },
  prata: {
    ring: "border-[#C0C0C0]/45",
    fill: "bg-[#C0C0C0]/15 text-[#E8E8E8]",
    text: "text-[#D8D8D8]",
  },
  ouro: {
    ring: "border-[#D4AF37]/55",
    fill: "bg-[#D4AF37]/20 text-[#F0D060]",
    text: "text-[#F0D060]",
  },
  elite: {
    ring: "border-[#F5D76E]/60",
    fill: "bg-[#F5D76E]/25 text-[#FFE9A0]",
    text: "text-[#FFE9A0]",
  },
};

export function MemberDashboard({ name }: { name: string }) {
  const metrics = demoDashboardMetrics;
  const xpPercent = Math.min(
    100,
    Math.round((metrics.xp / metrics.nextLevelXp) * 100),
  );
  const weeklyPercent = Math.min(
    100,
    Math.round((metrics.weeklyMinutes / metrics.weeklyGoalMinutes) * 100),
  );

  const completedCourses = courses.filter((course) =>
    metrics.completedCourseIds.includes(course.id),
  );
  const inProgressCourses = courses.filter((course) =>
    metrics.inProgressCourseIds.includes(course.id),
  );
  const earnedCourseBadges = completedCourses
    .map((course) => getBadge(course.badgeId))
    .filter(Boolean);

  const fundacao = ecosystemPillars.find((pillar) => pillar.id === "fundacao")!;
  const otherPillars = ecosystemPillars.filter(
    (pillar) => pillar.id !== "fundacao",
  );

  return (
    <div className="space-y-7 md:space-y-9">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent md:text-sm">
            Dashboard
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight md:mt-2 md:text-4xl">
            Olá, {name}
          </h1>
          <p className="mt-1.5 max-w-xl text-sm text-slate-400">
            Desempenho, Fundação e conquistas da sua jornada nas Escolas de
            Soberania.
          </p>
        </div>
        <div className="min-w-[11rem] rounded-2xl border border-accent/30 bg-accent/10 px-4 py-3">
          <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            <Sparkles size={14} /> Nível {metrics.levelName}
          </p>
          <p className="mt-1 text-lg font-bold text-white">
            {metrics.xp}{" "}
            <span className="text-sm font-medium text-slate-400">
              / {metrics.nextLevelXp} XP
            </span>
          </p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${xpPercent}%` }}
            />
          </div>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          icon={<BookOpen size={16} />}
          label="Cursos concluídos"
          value={`${metrics.coursesCompleted}/${metrics.coursesTotal}`}
          hint={`${metrics.lessonsCompleted} aulas feitas`}
        />
        <MetricCard
          icon={<Route size={16} />}
          label="Trilhas"
          value={`${metrics.trailsCompleted}/${metrics.trailsTotal}`}
          hint="Em andamento nas trilhas"
        />
        <MetricCard
          icon={<Award size={16} />}
          label="Certificações"
          value={String(metrics.certifications)}
          hint="Para Soberano Bronze"
        />
        <MetricCard
          icon={<Flame size={16} />}
          label="Sequência"
          value={`${metrics.studyStreakDays} dias`}
          hint={`${metrics.weeklyMinutes} min esta semana`}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5 md:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Desempenho
              </p>
              <h2 className="mt-1 text-lg font-bold text-white">
                Progresso da semana
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              <Timer size={13} /> Meta {metrics.weeklyGoalMinutes} min
            </span>
          </div>

          <div className="mt-5">
            <div className="flex items-end justify-between gap-3">
              <p className="text-3xl font-bold text-white">
                {metrics.weeklyMinutes}
                <span className="ml-1 text-base font-medium text-slate-400">
                  min
                </span>
              </p>
              <p className="text-sm font-semibold text-accent">{weeklyPercent}%</p>
            </div>
            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-accent"
                style={{ width: `${weeklyPercent}%` }}
              />
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {ecosystemPillars.map((pillar) => {
              const progress = metrics.pillarProgress[pillar.id];
              return (
                <div
                  key={pillar.id}
                  className="rounded-xl border border-white/10 bg-black/20 p-3.5"
                >
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: pillar.color }}
                  >
                    {pillar.label}
                  </p>
                  <p className="mt-2 text-2xl font-bold text-white">{progress}%</p>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress}%`,
                        background: pillar.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5 md:p-6">
          <div className="flex items-center gap-2">
            <Crown size={18} className="text-[#F0D060]" />
            <h2 className="text-lg font-bold text-white">
              Reconhecimento da evolução
            </h2>
          </div>
          <p className="mt-2 text-sm text-slate-400">
            Insígnias conquistadas por certificações, escolas e impacto.
          </p>
          <ul className="mt-5 space-y-3">
            {evolutionBadges.map((badge) => {
              const style = toneStyles[badge.tone];
              return (
                <li
                  key={badge.id}
                  className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 ${
                    badge.earned
                      ? `${style.ring} bg-white/[0.03]`
                      : "border-white/10 opacity-55"
                  }`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${style.ring} ${style.fill}`}
                  >
                    {badge.tone === "elite" ? (
                      <Crown size={18} />
                    ) : (
                      <Star size={18} />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-sm font-semibold ${style.text}`}>
                      {badge.name}
                    </p>
                    <p className="text-xs text-slate-400">{badge.requirement}</p>
                  </div>
                  {badge.earned ? (
                    <CheckCircle2 size={16} className="shrink-0 text-accent" />
                  ) : (
                    <Lock size={14} className="shrink-0 text-slate-500" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden rounded-[1.75rem] border border-[#E87722]/35 bg-[#0b1c30]">
        <div
          className="px-5 py-4 md:px-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(232,119,34,0.28), rgba(232,119,34,0.08) 55%, transparent)",
          }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E87722]">
            Fundação · 3 pilares
          </p>
          <h2 className="mt-1 text-xl font-bold text-white md:text-2xl">
            {fundacao.tagline}
          </h2>
          <p className="mt-1 text-sm text-slate-300">
            A base da pessoa: Pessoal, Familiar e Financeira.
          </p>
        </div>
        <div className="grid gap-0 border-t border-white/10 md:grid-cols-3">
          {fundacao.schools.map((school) => {
            const progress = metrics.schoolProgress[school.slug] ?? 0;
            const open = school.slug === "soberania-financeira";
            return (
              <Link
                key={school.slug}
                href={`/membros/edu/${school.slug}`}
                className="group border-white/10 p-5 transition hover:bg-white/[0.03] md:border-r md:last:border-r-0"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E87722]/20 text-sm font-bold text-[#E87722]">
                    {school.order}
                  </span>
                  {open ? (
                    <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
                      Aberta
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      <Lock size={11} /> Bloqueada
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-[#E87722]">
                  {school.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {school.summary}
                </p>
                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="text-slate-500">Progresso</span>
                    <span className="font-semibold text-[#E87722]">
                      {progress}%
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#E87722]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {otherPillars.map((pillar) => (
          <div
            key={pillar.id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b1c30]"
          >
            <div
              className="px-5 py-3.5"
              style={{
                background: `linear-gradient(90deg, ${pillar.color}40, transparent)`,
              }}
            >
              <p
                className="text-[11px] font-bold uppercase tracking-[0.16em]"
                style={{ color: pillar.color }}
              >
                {pillar.label} · {metrics.pillarProgress[pillar.id]}%
              </p>
              <h3 className="mt-1 text-base font-bold text-white">
                {pillar.tagline}
              </h3>
            </div>
            <ul className="divide-y divide-white/10">
              {pillar.schools.map((school) => {
                const progress = metrics.schoolProgress[school.slug] ?? 0;
                return (
                  <li key={school.slug}>
                    <Link
                      href={`/membros/edu/${school.slug}`}
                      className="flex items-center gap-3 px-5 py-3.5 transition hover:bg-white/[0.03]"
                    >
                      <span
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ background: pillar.color }}
                      >
                        {school.order}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-white">
                          {school.title}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                          {school.summary}
                        </p>
                      </div>
                      <span
                        className="text-xs font-semibold"
                        style={{ color: pillar.color }}
                      >
                        {progress}%
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5 md:p-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white">Cursos</h2>
              <p className="mt-1 text-sm text-slate-400">
                Concluídos e em andamento.
              </p>
            </div>
            <Link
              href="/membros/cursos"
              className="text-sm font-semibold text-accent hover:underline"
            >
              Ver cursos
            </Link>
          </div>

          <div className="mt-5 space-y-3">
            {completedCourses.map((course) => (
              <Link
                key={course.id}
                href={`/membros/cursos/${course.slug}`}
                className="flex items-center gap-3 rounded-xl border border-emerald-400/25 bg-emerald-500/10 px-3.5 py-3"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-300">
                  <CheckCircle2 size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">
                    {course.title}
                  </p>
                  <p className="text-xs text-emerald-200/80">Concluído · 100%</p>
                </div>
              </Link>
            ))}
            {inProgressCourses.map((course) => (
              <Link
                key={course.id}
                href={`/membros/cursos/${course.slug}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 px-3.5 py-3 transition hover:border-accent/40"
              >
                <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={course.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">
                    {course.title}
                  </p>
                  <p className="text-xs text-slate-400">Em andamento · 45%</p>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[45%] rounded-full bg-accent" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {earnedCourseBadges.length > 0 ? (
            <div className="mt-5 border-t border-white/10 pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                Insígnias de cursos
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {earnedCourseBadges.map((badge) =>
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
            </div>
          ) : null}
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5 md:p-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white">Trilhas</h2>
              <p className="mt-1 text-sm text-slate-400">
                Progresso por caminho temático.
              </p>
            </div>
            <Link
              href="/membros/trilhas"
              className="text-sm font-semibold text-accent hover:underline"
            >
              Ver trilhas
            </Link>
          </div>
          <ul className="mt-5 space-y-3">
            {trails.map((trail, index) => {
              const progress = [35, 55, 18, 10][index] ?? 10;
              const done = metrics.completedTrailIds.includes(trail.id);
              return (
                <li key={trail.id}>
                  <Link
                    href={`/membros/trilhas/${trail.slug}`}
                    className="block rounded-xl border border-white/10 px-3.5 py-3 transition hover:border-accent/35"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">
                          {trail.title}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                          {trail.subtitle}
                        </p>
                      </div>
                      <span
                        className="shrink-0 text-xs font-semibold"
                        style={{ color: trail.accent }}
                      >
                        {done ? "100%" : `${progress}%`}
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${done ? 100 : progress}%`,
                          background: trail.accent,
                        }}
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flag className="text-accent" size={18} />
            <h2 className="text-lg font-bold text-white">Próximo passo</h2>
          </div>
          <Link
            href="/membros/edu/soberania-financeira"
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-ink"
          >
            Continuar na Fundação <ArrowRight size={15} />
          </Link>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">
          Sua jornada começa na Fundação. Avance nas escolas Pessoal, Familiar e
          Financeira, conquiste certificações e liberte as próximas etapas de
          Construção e Legado.
        </p>
      </section>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  hint,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1c30] p-4">
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        <span className="text-accent">{icon}</span>
        {label}
      </p>
      <p className="mt-2 text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{hint}</p>
    </div>
  );
}
