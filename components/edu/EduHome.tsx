import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Compass, Layers3, Sparkles } from "lucide-react";

import { ModulePathSection } from "@/components/edu/ModulePathSection";
import { SchoolPosterCard } from "@/components/edu/SchoolPosterCard";
import { SchoolRowCarousel } from "@/components/edu/SchoolRowCarousel";
import type { EduSchool } from "@/lib/edu/curriculum";
import {
  foundationPosterSlugs,
  getPoster,
  schoolPosters,
} from "@/lib/edu/school-posters";

export function EduHome({ schools }: { schools: EduSchool[] }) {
  const foundationPosters = foundationPosterSlugs
    .map((slug) => getPoster(slug))
    .filter(Boolean);
  const openSchool = schools.find((school) => school.free);

  return (
    <div className="space-y-9 md:space-y-11">
      <header className="space-y-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent md:text-sm">
            Educação
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight md:mt-2 md:text-4xl">
            Edu
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            Escolha a escola que quer estudar agora ou siga o caminho
            recomendado: comece pela Fundação e avance módulo a módulo —
            Descobrir, Compreender, Aplicar e Multiplicar.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <PathCard
            icon={<Sparkles size={16} />}
            title="Recomendado"
            text="Comece pela Fundação: Pessoal, Familiar e Financeira."
          />
          <PathCard
            icon={<Compass size={16} />}
            title="Escolha livre"
            text="Entre em qualquer escola liberada e estude no seu ritmo."
          />
          <PathCard
            icon={<Layers3 size={16} />}
            title="4 passos"
            text="Descobrir, Compreender, Aplicar e Multiplicar — a rota para 100%."
          />
        </div>
      </header>

      <section className="overflow-hidden rounded-[1.75rem] border border-[#E67E22]/30 bg-[#0b1c30]">
        <div
          className="px-5 py-5 md:px-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(230,126,34,0.28), rgba(230,126,34,0.08) 55%, transparent)",
          }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E67E22]">
            Recomendação básica
          </p>
          <h2 className="mt-1 text-xl font-bold text-white md:text-2xl">
            Fundação · a base da pessoa
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            O caminho que recomendamos: construa mentalidade, família e
            finanças antes de avançar para Construção e Legado.
          </p>
          {openSchool ? (
            <Link
              href={`/membros/edu/${openSchool.slug}`}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-ink"
            >
              Continuar na Financeira <ArrowRight size={15} />
            </Link>
          ) : null}
        </div>
        <div className="flex gap-3 overflow-x-auto px-4 py-5 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:gap-4 md:px-6 [&::-webkit-scrollbar]:hidden">
          {foundationPosters.map((poster, index) =>
            poster ? (
              <SchoolPosterCard
                key={poster.slug}
                poster={poster}
                school={schools.find((school) => school.slug === poster.slug)}
                badgeNumber={index + 1}
                compact
              />
            ) : null,
          )}
        </div>
      </section>

      <ModulePathSection schools={schools} />

      <SchoolRowCarousel
        title="Todas as escolas"
        subtitle="Carrossel horizontal — escolha a escola e entre no card."
        posters={schoolPosters}
        schools={schools}
      />
    </div>
  );
}

function PathCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b1c30] p-4">
      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
        {icon}
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">{text}</p>
    </div>
  );
}
