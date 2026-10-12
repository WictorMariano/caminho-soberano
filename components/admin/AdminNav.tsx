"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ListChecks, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/lista-de-espera", label: "Lista de espera", icon: ListChecks },
  { href: "/admin/grupo-whatsapp", label: "Grupo do WhatsApp", icon: MessageCircle },
] as const;

export function AdminNav({ activeHref }: { activeHref?: string }) {
  const currentPath = usePathname();
  const pathname = activeHref ?? currentPath;

  return (
    <nav className="flex gap-1 overflow-x-auto lg:flex-col">
      {links.map(({ href, label, icon: Icon }) => {
        const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm font-medium transition",
              active ? "bg-accent text-accent-ink" : "text-slate-300 hover:bg-white/5 hover:text-white",
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
