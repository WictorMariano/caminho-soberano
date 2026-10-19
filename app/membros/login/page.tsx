import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, GraduationCap } from "lucide-react";

import { MemberLoginForm } from "@/components/membros/MemberLoginForm";
import { getMemberSession } from "@/lib/membros/session";

export const metadata: Metadata = { title: "Entrar" };

export default async function MembrosLoginPage() {
  const session = await getMemberSession();
  if (session.status === "member") redirect("/membros");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(35,100,165,0.28),transparent_55%),radial-gradient(ellipse_at_90%_90%,rgba(255,241,0,0.06),transparent_50%)]"
        aria-hidden
      />
      <div className="relative w-full max-w-md">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent"
        >
          <ArrowLeft size={16} /> Voltar para o site
        </Link>
        <div className="rounded-[1.75rem] border border-white/15 bg-[#102238]/95 p-7 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)] sm:p-9">
          <div className="flex items-center gap-3">
            <Image
              src="/images/brand/logo-mark.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <div className="leading-none">
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                Caminho Soberano
              </span>
              <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.14em]">
                Área de membros
              </span>
            </div>
          </div>
          <h1 className="mt-8 flex items-center gap-2 text-2xl font-bold tracking-tight">
            <GraduationCap size={22} className="text-accent" /> Entrar
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Materiais, videoaulas e o progresso da sua jornada.
          </p>
          <MemberLoginForm />
        </div>
      </div>
    </main>
  );
}
