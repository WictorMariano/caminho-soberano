import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ctaNav, mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

type PageShellProps = {
  children: ReactNode;
  /** Usa tema oceano (fundo navy) nas páginas internas */
  ocean?: boolean;
  /**
   * Sem padding-top no main: a primeira seção (hero) ocupa 100svh
   * e o menu flutua por cima, como no Dominando o Bitcoin.
   */
  flushHero?: boolean;
  className?: string;
};

export function PageShell({
  children,
  ocean = true,
  flushHero = false,
  className,
}: PageShellProps) {
  return (
    <div className={cn(ocean && "theme-ocean", "min-h-full", className)}>
      <SiteHeader
        floating
        homeHref="/"
        ctaHref={ctaNav.href}
        ctaLabel={ctaNav.label}
        navLinks={[...mainNav]}
      />
      <main className={cn(!flushHero && "pt-[7.5rem] md:pt-36")}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
