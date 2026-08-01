"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { socialLinks } from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.258 5.686L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

const socials = [
  {
    href: socialLinks.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: socialLinks.x,
    label: "X",
    icon: XIcon,
  },
  {
    href: socialLinks.youtube,
    label: "YouTube",
    icon: YoutubeIcon,
  },
] as const;

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="relative mx-auto w-full max-w-[280px]"
    >
      <div className="relative mx-auto aspect-[9/19] w-full rounded-[2.35rem] border-[3px] border-[#1e2a3a] bg-[#071525] p-2.5 shadow-[0_40px_80px_-24px_rgba(0,20,40,0.9)]">
        <div className="absolute left-1/2 top-3.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

        <div className="relative h-full w-full overflow-hidden rounded-[1.85rem] bg-black">
          <video
            src="/videos/hardwallet.mp4"
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Tutorial sobre hard wallet"
          />
        </div>

        <div className="absolute -left-[5px] top-28 h-8 w-[3px] rounded-l bg-[#1e2a3a]" />
        <div className="absolute -left-[5px] top-40 h-12 w-[3px] rounded-l bg-[#1e2a3a]" />
        <div className="absolute -right-[5px] top-36 h-14 w-[3px] rounded-r bg-[#1e2a3a]" />
      </div>
    </motion.div>
  );
}

export function ContentSection() {
  return (
    <section
      id="conteudo-home"
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(255,255,255,0.04),_transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Conteúdo
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Materiais práticos para maximizar sua vida
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
            Nas nossas redes sociais você encontra tutoriais práticos,
            estratégias aplicáveis e conteúdos que aceleram sua jornada rumo à
            soberania financeira. Do básico ao avançado: wallets, segurança,
            autocustódia e decisões que protegem o que é seu.
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
            Acompanhe o Caminho Soberano e transforme informação em ação, no
            seu ritmo, com clareza e propósito.
          </p>

          <div className="mt-7 flex items-center gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:border-accent hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              Seguir nas redes
              <ArrowUpRight size={16} />
            </a>
            <Link
              href="/conteudo"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent"
            >
              Explorar conteúdos
            </Link>
          </div>
        </motion.div>

        <PhoneMockup />
      </div>
    </section>
  );
}
