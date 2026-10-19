import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CoursePoster } from "@/components/membros/CoursePoster";
import { getTrail } from "@/lib/membros/catalog";
import { courses } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Trilha" };

export default async function MembrosTrilhaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trail = getTrail(slug);
  if (!trail) notFound();

  const trailCourses = courses.filter((c) => trail.courseIds.includes(c.id));

  return (
    <div className="space-y-8">
      <Link href="/membros/trilhas" className="text-sm text-accent hover:underline">
        ← Trilhas
      </Link>

      <section className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
        <div className="relative aspect-[21/9] min-h-[220px]">
          <Image
            src={trail.image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b16] via-[#020b16]/75 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: trail.accent }}
            >
              {trail.subtitle}
            </p>
            <h1 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {trail.title}
            </h1>
            <p className="mt-3 max-w-xl text-sm text-white/75 md:text-base">
              {trail.description}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold">Cursos desta trilha</h2>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {trailCourses.map((course) => (
            <CoursePoster key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
