"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BookOpen,
  Clapperboard,
  Flag,
  LayoutDashboard,
  Route,
  Trophy,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { href: "/membros", label: "Início", icon: LayoutDashboard },
  { href: "/membros/cursos", label: "Cursos", icon: Clapperboard },
  { href: "/membros/trilhas", label: "Trilhas", icon: Route },
  { href: "/membros/desafios", label: "Desafios", icon: Flag },
  { href: "/membros/materiais", label: "Materiais", icon: BookOpen },
  { href: "/membros/insignias", label: "Insígnias", icon: Award },
  { href: "/membros/progresso", label: "Progresso", icon: Trophy },
  { href: "/membros/perfil", label: "Perfil", icon: UserRound },
] as const;

/** Navegação da sidebar (desktop). No mobile usamos MemberBottomNav. */
export function MemberNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden flex-col gap-1 lg:flex">
      {links.map(({ href, label, icon: Icon }) => {
        const active =
          href === "/membros" ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition",
              active
                ? "bg-accent text-accent-ink"
                : "text-slate-300 hover:bg-white/5 hover:text-white",
            )}
          >
            <Icon size={17} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
