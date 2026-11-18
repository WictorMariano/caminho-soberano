import Link from "next/link";
import {
  Bitcoin,
  Brain,
  Cpu,
  Globe2,
  Landmark,
  Lock,
  Rocket,
  Scale,
  Shield,
  Users,
} from "lucide-react";

import type { EduSchool } from "@/lib/edu/curriculum";
import type { SchoolPoster } from "@/lib/edu/school-posters";

const icons = {
  brain: Brain,
  bitcoin: Bitcoin,
  shield: Shield,
  globe: Globe2,
  cpu: Cpu,
  rocket: Rocket,
  scale: Scale,
  family: Users,
  landmark: Landmark,
} as const;

export function SchoolPosterCard({
  poster,
  school,
  compact = false,
  badgeNumber,
}: {
  poster: SchoolPoster;
  school?: EduSchool;
  compact?: boolean;
  badgeNumber?: number;
}) {
  const Icon = icons[poster.icon];
  const locked = school ? !school.free : poster.slug !== "soberania-financeira";
  const lessons =
    school?.modules.reduce((sum, module) => sum + module.lessons.length, 0) ?? 0;
  const number = badgeNumber ?? poster.posterOrder;

  return (
    <Link
      href={`/membros/edu/${poster.slug}`}
      className={`group relative shrink-0 snap-start overflow-hidden rounded-[1.35rem] text-white shadow-[0_18px_40px_-22px_rgba(0,0,0,0.85)] transition duration-300 hover:-translate-y-1 hover:brightness-110 ${
        compact
          ? "h-[17.5rem] w-[11.5rem] sm:h-[19rem] sm:w-[12.5rem]"
          : "h-[19.5rem] w-[13rem] sm:h-[21rem] sm:w-[14rem] md:h-[22rem] md:w-[15rem]"
      }`}
      style={{
        background: `linear-gradient(165deg, ${poster.color} 0%, ${poster.color} 42%, #041018 120%)`,
      }}
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.35),transparent_42%)]" />
      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-extrabold text-[#0b1220]">
            {number}
          </span>
          {locked ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-black/25 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/85 backdrop-blur">
              <Lock size={11} /> Bloqueada
            </span>
          ) : (
            <span className="rounded-full bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-accent-ink">
              Aberta
            </span>
          )}
        </div>

        <div className="mt-8 flex flex-1 flex-col items-center justify-center text-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/10 backdrop-blur-sm sm:h-16 sm:w-16">
            <Icon size={compact ? 28 : 32} strokeWidth={1.6} />
          </span>
          <h3 className="mt-5 text-[0.95rem] font-extrabold uppercase leading-tight tracking-[0.04em] sm:text-[1.05rem]">
            {poster.title}
          </h3>
          <p className="mt-2 text-[0.72rem] leading-snug text-white/80 sm:text-xs">
            {poster.summary}
          </p>
        </div>

        <p className="mt-auto pt-3 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-white/55">
          {school ? `${school.modules.length} módulos · ${lessons} conteúdos` : "4 módulos"}
        </p>
      </div>
    </Link>
  );
}
