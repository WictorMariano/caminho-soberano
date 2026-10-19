"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

import type { Course } from "@/lib/platform/demo";

export function HeroCarousel({ courses }: { courses: Course[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const current = courses[index] ?? courses[0];

  useEffect(() => {
    if (paused || courses.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % courses.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, courses.length]);

  if (!current) return null;

  return (
    <section
      className="relative overflow-hidden rounded-[1.75rem] border border-white/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/5] min-h-[300px] w-full sm:aspect-[16/10] sm:min-h-[280px] md:aspect-[21/9] md:min-h-[360px]">
        {courses.map((course, i) => (
          <div
            key={course.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={course.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020b16] via-[#020b16]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b16] via-transparent to-[#020b16]/30" />
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent sm:text-[11px]">
            Em destaque · {current.level}
          </p>
          <h2 className="mt-1.5 max-w-xl text-xl font-extrabold tracking-tight text-white sm:mt-2 sm:text-2xl md:text-4xl">
            {current.title}
          </h2>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75 md:mt-3 md:text-base">
            {current.bannerTagline}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5 sm:gap-3">
            <Link
              href={`/membros/cursos/${current.slug}`}
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink transition active:scale-95 hover:brightness-95"
            >
              <Play size={16} fill="currentColor" /> Assistir
            </Link>
            <Link
              href={`/membros/cursos/${current.slug}`}
              className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition active:scale-95 hover:bg-white/15"
            >
              Ver detalhes
            </Link>
          </div>
        </div>

        <div className="absolute bottom-5 right-5 hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() =>
              setIndex((i) => (i - 1 + courses.length) % courses.length)
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur hover:bg-black/60"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Próximo"
            onClick={() => setIndex((i) => (i + 1) % courses.length)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur hover:bg-black/60"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="flex gap-1.5 bg-[#07182a] px-5 py-3">
        {courses.map((course, i) => (
          <button
            key={course.id}
            type="button"
            aria-label={`Ir para ${course.title}`}
            onClick={() => setIndex(i)}
            className={`h-1 flex-1 rounded-full transition ${
              i === index ? "bg-accent" : "bg-white/15 hover:bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
