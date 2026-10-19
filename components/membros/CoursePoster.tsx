import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/lib/platform/demo";

export function CoursePoster({ course }: { course: Course }) {
  return (
    <Link
      href={`/membros/cursos/${course.slug}`}
      className="group relative block w-[42vw] max-w-[160px] shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-[#0b1c30] transition active:scale-[0.98] hover:border-accent/50 sm:w-[180px] sm:max-w-none md:w-[200px] md:hover:scale-[1.03]"
    >
      <div className="relative aspect-[2/3] w-full">
        <Image
          src={course.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            {course.level}
          </p>
          <h3 className="mt-1 text-sm font-bold leading-snug text-white">
            {course.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
