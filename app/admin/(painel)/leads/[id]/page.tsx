import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/admin/AdminUi";
import { BadgeIcon } from "@/components/platform/BadgeIcon";
import { requireAdmin } from "@/lib/admin/dal";
import { formatDateTime, whatsappLink } from "@/lib/admin/data";
import {
  getBadge,
  getCourse,
  getLead,
  getList,
  getPage,
} from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Lead" };

export default async function AdminLeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const lead = getLead(id);
  if (!lead) notFound();

  const list = getList(lead.listId);
  const page = getPage(lead.pageId);

  return (
    <div className="space-y-8">
      <PageHeader title={lead.name} description={lead.email}>
        <Link href="/admin/leads" className="text-sm text-accent hover:underline">
          ← Todos os leads
        </Link>
      </PageHeader>

      <div className="grid gap-4 lg:grid-cols-3">
        <section className="rounded-2xl border border-white/10 bg-[#081a2e] p-5 lg:col-span-2">
          <h2 className="text-base font-semibold">Origem do lead</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Lista
              </dt>
              <dd className="mt-1.5">
                <Link
                  href={`/admin/listas/${list?.id}`}
                  className="font-medium text-accent hover:underline"
                >
                  {list?.name}
                </Link>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Página de captura
              </dt>
              <dd className="mt-1.5 text-white">
                {page?.title}
                <span className="ml-2 text-slate-500">{page?.path}</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Cidade
              </dt>
              <dd className="mt-1.5">
                {lead.city}/{lead.state}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Cadastro
              </dt>
              <dd className="mt-1.5">{formatDateTime(lead.createdAt)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">
                WhatsApp
              </dt>
              <dd className="mt-1.5">
                <a
                  href={whatsappLink(lead.whatsapp)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {lead.whatsapp}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.14em] text-slate-500">
                Interesses
              </dt>
              <dd className="mt-1.5 text-slate-300">
                {lead.interests?.join(", ") || "—"}
              </dd>
            </div>
          </dl>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
          <h2 className="text-base font-semibold">Status na plataforma</h2>
          <p
            className={`mt-4 inline-flex rounded-full px-3 py-1.5 text-sm font-semibold ${
              lead.isMember
                ? "bg-accent/20 text-accent"
                : "bg-white/10 text-slate-300"
            }`}
          >
            {lead.isMember ? "É membro" : "Ainda não é membro"}
          </p>
          {lead.memberSince ? (
            <p className="mt-3 text-sm text-slate-400">
              Membro desde {formatDateTime(lead.memberSince)}
            </p>
          ) : (
            <p className="mt-3 text-sm text-slate-500">
              Este lead ainda não acessou a área de membros.
            </p>
          )}
        </section>
      </div>

      <section className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
        <h2 className="text-base font-semibold">Progresso nos cursos</h2>
        {lead.courseProgress.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">Sem progresso ainda.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {lead.courseProgress.map((item) => {
              const course = getCourse(item.courseId);
              return (
                <li key={item.courseId}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{course?.title}</span>
                    <span className="text-slate-400">
                      {item.lessonsDone}/{item.lessonsTotal} aulas · {item.percent}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
        <h2 className="text-base font-semibold">Insígnias</h2>
        {lead.badges.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500">Nenhuma insígnia ainda.</p>
        ) : (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {lead.badges.map((badgeId) => {
              const badge = getBadge(badgeId);
              if (!badge) return null;
              return (
                <li
                  key={badge.id}
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <BadgeIcon icon={badge.icon} />
                  </span>
                  <div>
                    <p className="font-medium">{badge.name}</p>
                    <p className="text-xs text-slate-500">{badge.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
