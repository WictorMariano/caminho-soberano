import type { Metadata } from "next";

import { PageHeader } from "@/components/admin/AdminUi";
import { BadgeIcon } from "@/components/platform/BadgeIcon";
import { requireAdmin } from "@/lib/admin/dal";
import { badges, getCourse } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Insígnias" };

export default async function AdminInsigniasPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Insígnias"
        description="Recompensas visuais quando o membro conclui um curso ou atinge um marco. Ícones ilustrativos para a demonstração."
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {badges.map((badge) => {
          const course = badge.courseId ? getCourse(badge.courseId) : null;
          return (
            <article
              key={badge.id}
              className="rounded-2xl border border-white/10 bg-[#081a2e] p-5"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <BadgeIcon icon={badge.icon} size={26} />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{badge.name}</h2>
              <p className="mt-2 text-sm text-slate-400">{badge.description}</p>
              <p className="mt-4 text-xs text-white/45">
                {course
                  ? `Curso: ${course.title}`
                  : "Marco de comportamento"}
                {" · "}
                {badge.earnedCount} membros conquistaram
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
