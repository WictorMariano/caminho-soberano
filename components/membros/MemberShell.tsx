import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { MemberAvatar } from "@/components/membros/MemberAvatar";
import { MemberBottomNav } from "@/components/membros/MemberBottomNav";
import { MemberNav } from "@/components/membros/MemberNav";
import { MemberTopBar } from "@/components/membros/MemberTopBar";

export function MemberShell({
  name,
  email,
  children,
}: {
  name: string;
  email: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-[#020b16] text-white lg:grid lg:grid-cols-[280px_1fr]">
      {/* Desktop sidebar */}
      <aside className="hidden border-r border-white/10 bg-[#07182a] p-6 lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:overflow-y-auto">
        <Link href="/membros" className="flex items-center gap-2.5">
          <Image
            src="/images/brand/logo-mark.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-auto"
          />
          <span className="leading-none">
            <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">
              Caminho Soberano
            </span>
            <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Área de membros
            </span>
          </span>
        </Link>
        <div className="mt-10">
          <MemberNav />
        </div>
        <div className="mt-auto space-y-3 border-t border-white/10 pt-5">
          <Link
            href="/membros/perfil"
            className="flex items-center gap-3 rounded-xl border border-white/10 px-3 py-3 transition hover:border-accent/40"
          >
            <MemberAvatar name={name} size="sm" />
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-white">
                {name}
              </span>
              <span className="block truncate text-xs text-slate-400" title={email}>
                {email}
              </span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 px-1 text-xs text-slate-400 hover:text-accent"
          >
            <ExternalLink size={14} /> Ver o site
          </Link>
        </div>
      </aside>

      {/* Mobile + content */}
      <div className="flex min-h-dvh min-w-0 flex-col">
        <MemberTopBar name={name} />
        <main className="min-w-0 flex-1 overscroll-y-contain px-4 pb-28 pt-5 [-webkit-overflow-scrolling:touch] sm:px-5 md:px-8 md:pt-8 lg:px-10 lg:pb-10 lg:pt-10">
          {children}
        </main>
        <MemberBottomNav />
      </div>
    </div>
  );
}
