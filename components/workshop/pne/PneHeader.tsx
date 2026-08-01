"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { PneCtaLink } from "@/components/workshop/pne/PneCtaLink";
import { pneMeta } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

export function PneHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-[#020b16]/90 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/images/brand/logo-mark.png"
            alt="Caminho Soberano"
            width={140}
            height={36}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        <div className="hidden items-center gap-3 sm:flex">
          <span className="text-sm text-white/70">
            {pneMeta.dateShort} · {pneMeta.weekday}
          </span>
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {pneMeta.capacity} vagas
          </span>
        </div>

        <PneCtaLink size="md" className="shrink-0" />
      </div>
    </header>
  );
}
