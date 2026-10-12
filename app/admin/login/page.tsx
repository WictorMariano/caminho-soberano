import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, Lock } from "lucide-react";

import { LoginForm } from "@/components/admin/LoginForm";
import { getAdminSession } from "@/lib/admin/dal";

export const metadata: Metadata = { title: "Entrar" };

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ erro?: string }>;
}) {
  const session = await getAdminSession();
  if (session.status === "admin") redirect("/admin");

  const { erro } = await searchParams;
  const notice =
    session.status === "unconfigured"
      ? "A área administrativa ainda não foi conectada ao banco de dados. Configure as variáveis do Supabase para liberar o acesso."
      : erro === "sem-permissao" || session.status === "forbidden"
        ? "Seu usuário entrou, mas não tem permissão de administrador. Peça para incluírem seu e-mail na lista de administradores."
        : null;

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(35,100,165,0.28),transparent_55%),radial-gradient(ellipse_at_90%_90%,rgba(255,241,0,0.06),transparent_50%)]" aria-hidden />
      <div className="relative w-full max-w-md">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-accent">
          <ArrowLeft size={16} /> Voltar para o site
        </Link>
        <div className="rounded-[1.75rem] border border-white/15 bg-[#102238]/95 p-7 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)] sm:p-9">
          <div className="flex items-center gap-3">
            <Image src="/images/brand/logo-mark.png" alt="" width={40} height={40} className="h-10 w-auto" />
            <div className="leading-none">
              <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/70">Caminho Soberano</span>
              <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.14em]">Área administrativa</span>
            </div>
          </div>
          <h1 className="mt-8 flex items-center gap-2 text-2xl font-bold tracking-tight">
            <Lock size={20} className="text-accent" /> Entrar
          </h1>
          <p className="mt-2 text-sm text-slate-400">Acesso restrito aos administradores do Caminho Soberano.</p>
          {notice ? (
            <p role="alert" className="mt-6 rounded-xl border border-amber-300/40 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
              {notice}
            </p>
          ) : null}
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
