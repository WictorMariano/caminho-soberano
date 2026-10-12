import Image from "next/image";
import Link from "next/link";
import { ExternalLink, LogOut } from "lucide-react";

import { logout } from "@/app/admin/actions";
import { AdminNav } from "@/components/admin/AdminNav";

export function AdminShell({
  email,
  activeHref,
  children,
}: {
  email: string;
  activeHref?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="lg:grid lg:min-h-screen lg:grid-cols-[260px_1fr]">
      <aside className="border-b border-white/10 bg-[#061426] p-4 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:border-b-0 lg:border-r lg:p-6">
        <div className="flex items-center justify-between gap-3 lg:block">
          <Link href="/admin" className="flex items-center gap-2.5">
            <Image src="/images/brand/logo-mark.png" alt="" width={36} height={36} className="h-9 w-auto" />
            <span className="leading-none">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">Caminho Soberano</span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-accent">Admin</span>
            </span>
          </Link>
          <form action={logout} className="lg:hidden">
            <button type="submit" className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-xs text-slate-300 hover:text-white">
              <LogOut size={14} /> Sair
            </button>
          </form>
        </div>
        <div className="mt-4 lg:mt-10">
          <AdminNav activeHref={activeHref} />
        </div>
        <div className="mt-auto hidden space-y-3 border-t border-white/10 pt-5 lg:block">
          <p className="truncate text-xs text-slate-400" title={email}>{email}</p>
          <Link href="/" className="flex items-center gap-2 text-xs text-slate-400 hover:text-accent">
            <ExternalLink size={14} /> Ver o site
          </Link>
          <form action={logout}>
            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 px-3 py-2.5 text-sm text-slate-200 transition hover:border-accent hover:text-accent">
              <LogOut size={16} /> Sair
            </button>
          </form>
        </div>
      </aside>
      <main className="min-w-0 px-5 py-8 md:px-8 lg:px-10 lg:py-10">{children}</main>
    </div>
  );
}
