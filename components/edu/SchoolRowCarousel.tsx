"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { SchoolPosterCard } from "@/components/edu/SchoolPosterCard";
import type { EduSchool } from "@/lib/edu/curriculum";
import type { SchoolPoster } from "@/lib/edu/school-posters";

export function SchoolRowCarousel({
  title,
  subtitle,
  posters,
  schools,
}: {
  title: string;
  subtitle?: string;
  posters: SchoolPoster[];
  schools: EduSchool[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: -1 | 1) {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.min(360, node.clientWidth * 0.75);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="space-y-3">
      <div className="flex items-end justify-between gap-3 px-1">
        <div className="min-w-0">
          <h2 className="text-lg font-bold tracking-tight text-white md:text-xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
          ) : null}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            aria-label="Rolar para a esquerda"
            onClick={() => scrollBy(-1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-accent/40 hover:text-accent"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Rolar para a direita"
            onClick={() => scrollBy(1)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-accent/40 hover:text-accent"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-3 overflow-x-auto pb-2 pl-1 pr-4 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory sm:gap-4 [&::-webkit-scrollbar]:hidden"
      >
        {posters.map((poster) => (
          <SchoolPosterCard
            key={poster.slug}
            poster={poster}
            school={schools.find((school) => school.slug === poster.slug)}
          />
        ))}
      </div>
    </section>
  );
}
