"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

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

function PhoneVideo() {
  return (
    <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[240px]">
      <div className="relative mx-auto aspect-[9/19] w-full rounded-[2.2rem] border-[3px] border-[#1e2a3a] bg-[#071525] p-2 shadow-[0_40px_80px_-24px_rgba(0,20,40,0.85)]">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-black">
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
        <div className="absolute -left-[5px] top-24 h-8 w-[3px] rounded-l bg-[#1e2a3a]" />
        <div className="absolute -left-[5px] top-36 h-12 w-[3px] rounded-l bg-[#1e2a3a]" />
        <div className="absolute -right-[5px] top-32 h-14 w-[3px] rounded-r bg-[#1e2a3a]" />
      </div>
    </div>
  );
}

export function ConteudoHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-4 md:pb-24 md:pt-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="ocean-hero-bg absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(70,160,255,0.16),_transparent_58%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:px-8 lg:gap-16">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          >
            Conteúdo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[2.75rem] lg:text-6xl"
          >
            Aprenda soberania onde você já está
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
          >
            Redes sociais, comunidade gratuita e treinamentos para quem quer
            dominar Bitcoin na prática, com clareza e consistência. Tutoriais
            reais, como o de hard wallet ao lado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
              Seguir no Instagram
            </a>
            <a
              href={socialLinks.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-accent hover:text-accent"
            >
              <MessageCircle size={18} />
              Entrar na comunidade
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center md:justify-end"
        >
          <PhoneVideo />
        </motion.div>
      </div>
    </section>
  );
}
