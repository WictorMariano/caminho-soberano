"use client";

import { FormEvent, useState, type InputHTMLAttributes } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, MessageCircle, User } from "lucide-react";

import { comunidadeMeta } from "@/lib/comunidade";

const memberAvatars = [
  "/images/gallery/gallery-06.jpg",
  "/images/gallery/gallery-08.jpg",
  "/images/gallery/gallery-09.jpg",
  "/images/gallery/gallery-07.jpg",
  "/images/gallery/gallery-12.jpg",
] as const;

function FormField({
  icon: Icon,
  label,
  ...props
}: {
  icon: typeof User;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <span className="relative block">
        <Icon
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30"
          aria-hidden
        />
        <input
          {...props}
          className="w-full rounded-lg border border-white/[0.08] bg-[#0a1628]/80 py-3 pl-10 pr-3.5 text-sm text-white outline-none placeholder:text-white/32 transition focus:border-[rgba(70,140,210,0.35)] focus:ring-1 focus:ring-[rgba(70,140,210,0.2)]"
        />
      </span>
    </label>
  );
}

export function ComunidadeHero() {
  const reduce = useReducedMotion();
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!nome.trim() || !whatsapp.trim() || !email.trim()) return;
    setSent(true);
    window.open(comunidadeMeta.whatsappHref, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      id="inscricao"
      className="comunidade-capture-bg relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: "url(/images/events/dominando-bitcoin/noise.png)",
          backgroundSize: "180px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
        <div className="grid w-full items-stretch gap-8 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:gap-10 lg:gap-12">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[400px] overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-[#081220] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.75)] md:mx-0 md:max-w-none"
          >
            <div
              className="comunidade-gold-edge absolute bottom-0 left-0 top-0 z-10 w-[4px] rounded-l-[1.35rem]"
              aria-hidden
            />
            <Image
              src="/images/founder/tarcisio-2.png"
              alt="Tarcísio Machado, fundador do Caminho Soberano"
              fill
              priority
              sizes="(max-width: 768px) 400px, 460px"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050b1a] via-[#050b1a]/75 to-transparent px-5 pb-4 pt-16">
              <p className="text-[0.95rem] font-semibold text-white">
                Tarcísio Machado
              </p>
              <p className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                Fundador · Caminho Soberano
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="flex h-full flex-col justify-center gap-4 md:gap-5"
          >
            <div>
              <span className="comunidade-gold-chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.13em]">
                <MessageCircle size={13} />
                Comunidade Gratuita · WhatsApp
              </span>

              <h1 className="mt-4 text-[1.85rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2rem] md:mt-3.5 md:text-[2.15rem] lg:text-[2.35rem]">
                <span className="block text-white">Lives, eventos e</span>
                <span className="block">
                  <span className="text-accent">masterclasses</span>
                  <span className="text-white"> exclusivas</span>
                </span>
              </h1>

              <p className="mt-3 max-w-md text-[0.92rem] leading-relaxed text-white/60 md:text-[0.95rem]">
                Entre para lista de espera da nossa comunidade gratuita do
                WhatsApp.
              </p>
            </div>

            <div>
              <form
                onSubmit={onSubmit}
                className="comunidade-form-panel space-y-2.5 rounded-xl p-4 md:p-4"
              >
              <FormField
                icon={User}
                label="Nome"
                type="text"
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                autoComplete="name"
              />

              <FormField
                icon={MessageCircle}
                label="WhatsApp"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Seu WhatsApp"
                autoComplete="tel"
                inputMode="tel"
              />

              <FormField
                icon={Mail}
                label="E-mail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                autoComplete="email"
              />

              <button
                type="submit"
                className="mt-0.5 w-full rounded-lg bg-accent py-3 text-sm font-semibold text-accent-ink shadow-[0_10px_28px_-8px_rgba(255,241,0,0.5)] transition hover:brightness-95"
              >
                Confirmar inscrição
              </button>

              {sent ? (
                <p className="pt-0.5 text-center text-xs text-accent" role="status">
                  Dados recebidos. Abrindo a comunidade no WhatsApp…
                </p>
              ) : null}
              </form>

              <div className="mt-3 flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {memberAvatars.map((src, index) => (
                    <div
                      key={src}
                      className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-[#050b1a] bg-[#081220]"
                      style={{ zIndex: memberAvatars.length - index }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/55 md:text-[0.82rem]">
                  <span className="font-semibold text-white/80">259</span>{" "}
                  membros na comunidade
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
