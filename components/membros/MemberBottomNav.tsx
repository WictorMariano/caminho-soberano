"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  GraduationCap,
  Flag,
  House,
  Route,
  UserRound,
} from "lucide-react";

import { cn } from "@/lib/utils";

const tabs = [
  { href: "/membros", label: "Início", icon: House, exact: true },
  { href: "/membros/edu", label: "Edu", icon: GraduationCap },
  { href: "/membros/desafios", label: "Desafios", icon: Flag },
  { href: "/membros/trilhas", label: "Trilhas", icon: Route },
  { href: "/membros/perfil", label: "Perfil", icon: UserRound },
] as const;

export function MemberBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#07182a]/95 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Navegação principal"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-1">
        {tabs.map(({ href, label, icon: Icon, ...rest }) => {
          const exact = "exact" in rest && rest.exact;
          const active = exact
            ? pathname === href
            : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-[56px] flex-col items-center justify-center gap-0.5 rounded-xl px-1 py-1.5 text-[10px] font-medium transition active:scale-95",
                  active ? "text-accent" : "text-slate-400",
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center rounded-full transition",
                    active ? "bg-accent/15" : "bg-transparent",
                  )}
                >
                  <Icon size={20} strokeWidth={active ? 2.4 : 2} />
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
