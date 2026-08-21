"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { ctaNav, mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  homeHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  navLinks?: { href: string; label: string }[];
  /** Menu flutuante com glassmorphism (padrão do evento) */
  floating?: boolean;
};

export function SiteHeader({
  homeHref = "/",
  ctaHref = ctaNav.href,
  ctaLabel = ctaNav.label,
  navLinks = [...mainNav],
  floating = true,
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (floating) {
    return (
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-5 pt-3 md:px-8 md:pt-5">
        <div
          className={cn(
            "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border px-3 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 md:px-5",
            scrolled || open
              ? "border-white/20 bg-white/[0.12] backdrop-blur-2xl"
              : "border-white/15 bg-white/[0.08] backdrop-blur-xl",
          )}
        >
          <Link
            href={homeHref}
            aria-label="Ir para a página inicial"
            className="relative z-10 flex items-center gap-2.5 pl-1"
            onClick={() => {
              if (homeHref === "/" && window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Image
              src="/images/brand/logo-mark.png"
              alt="Caminho Soberano"
              width={36}
              height={36}
              className="h-8 w-auto md:h-9"
              priority
            />
            <span className="hidden leading-none sm:inline">
              <span className="block text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-white/80 md:text-[0.7rem]">
                Caminho
              </span>
              <span className="block text-xs font-semibold tracking-[0.14em] uppercase md:text-sm">
                Soberano
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={ctaHref}
              className="hidden items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition hover:brightness-95 sm:inline-flex md:px-5"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white md:hidden"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-auto mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/15 bg-[#020b16]/85 backdrop-blur-2xl transition-all duration-300 md:hidden",
            open
              ? "max-h-[70vh] opacity-100"
              : "pointer-events-none max-h-0 border-transparent opacity-0",
          )}
        >
          <nav className="flex flex-col gap-4 px-5 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-xl font-medium text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink"
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href={homeHref}
          aria-label="Ir para a página inicial"
          className="relative z-10 flex items-center gap-3"
          onClick={() => {
            if (homeHref === "/" && window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/images/brand/logo-mark.png"
            alt="Caminho Soberano"
            width={40}
            height={40}
            className="h-9 w-auto md:h-10"
            priority
          />
          <span className="hidden leading-none sm:inline">
            <span className="block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-foreground/70">
              Caminho
            </span>
            <span className="block text-sm font-semibold tracking-[0.14em] uppercase">
              Soberano
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/75 transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </nav>

        <button
          type="button"
          className="relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-16 bg-background/95 px-5 py-8 transition md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-2xl font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-fit rounded-full bg-accent px-6 py-3 text-base font-semibold text-accent-ink"
          >
            {ctaLabel}
          </Link>
        </nav>
      </div>
    </header>
  );
}
