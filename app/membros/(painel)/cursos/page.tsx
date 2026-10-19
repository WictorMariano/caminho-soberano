import type { Metadata } from "next";
import Link from "next/link";

import { CoursePoster } from "@/components/membros/CoursePoster";
import { HeroCarousel } from "@/components/membros/HeroCarousel";
import { courses, getBadge } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Cursos" };

export default function MembrosCursosPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent md:text-sm">
          Catálogo
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight md:mt-2 md:text-3xl">
          Cursos
        </h1>
        <p className="mt-2 hidden max-w-2xl text-sm text-slate-400 sm:block md:text-base">
          Navegue como em uma plataforma de séries: banners em destaque e
          posters dos cursos.
        </p>
      </header>

      <HeroCarousel courses={courses} />

      <section>
        <h2 className="text-xl font-bold">Todos os cursos</h2>
        <div className="-mx-4 mt-4 flex gap-3 overflow-x-auto px-4 pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
          {courses.map((course) => (
            <CoursePoster key={course.id} course={course} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5">
        <h2 className="text-base font-semibold">Insígnia ao concluir</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {courses.map((course) => {
            const badge = getBadge(course.badgeId);
            return (
              <li key={course.id} className="flex justify-between gap-3">
                <Link
                  href={`/membros/cursos/${course.slug}`}
                  className="hover:text-accent"
                >
                  {course.title}
                </Link>
                <span className="text-slate-500">{badge?.name}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
