"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BookOpen,
  FileText,
  LayoutDashboard,
  ListChecks,
  MessageCircle,
  Users,
  Clapperboard,
  Flag,
  HelpCircle,
  Layers,
} from "lucide-react";

import { cn } from "@/lib/utils";

const groups = [
  {
    label: "Visão geral",
    links: [{ href: "/admin", label: "Dashboard", icon: LayoutDashboard }],
  },
  {
    label: "Leads e listas",
    links: [
      { href: "/admin/listas", label: "Listas", icon: Layers },
      { href: "/admin/leads", label: "Leads", icon: Users },
      { href: "/admin/paginas", label: "Páginas de captura", icon: FileText },
      { href: "/admin/lista-de-espera", label: "Lista de espera", icon: ListChecks },
      { href: "/admin/grupo-whatsapp", label: "Grupo WhatsApp", icon: MessageCircle },
    ],
  },
  {
    label: "Área de membros",
    links: [
      { href: "/admin/cursos", label: "Cursos", icon: Clapperboard },
      { href: "/admin/desafios", label: "Desafios", icon: Flag },
      { href: "/admin/quizzes", label: "Quizzes", icon: HelpCircle },
      { href: "/admin/insignias", label: "Insígnias", icon: Award },
      { href: "/admin/materiais", label: "Materiais", icon: BookOpen },
    ],
  },
] as const;

export function AdminNav({ activeHref }: { activeHref?: string }) {
  const currentPath = usePathname();
  const pathname = activeHref ?? currentPath;

  return (
    <nav className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-5">
      {groups.map((group) => (
        <div key={group.label} className="flex gap-1 lg:flex-col">
          <p className="mb-1 hidden px-3.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35 lg:block">
            {group.label}
          </p>
          {group.links.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/admin" ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition",
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
        </div>
      ))}
    </nav>
  );
}
