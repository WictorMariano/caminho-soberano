"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, ChevronDown } from "lucide-react";

const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

function PhoneMock({
  src,
  alt,
  className,
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay }}
      className={className}
    >
      <div className="relative mx-auto aspect-[9/19] w-[160px] rounded-[2rem] border-[3px] border-[#2a2a2a] bg-[#0a0a0a] p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] sm:w-[190px] md:w-[210px]">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.55rem] bg-[#111]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="210px"
            className="object-cover object-top"
          />
        </div>
        {/* Side buttons */}
        <div className="absolute -left-[5px] top-24 h-8 w-[3px] rounded-l bg-[#2a2a2a]" />
        <div className="absolute -left-[5px] top-36 h-12 w-[3px] rounded-l bg-[#2a2a2a]" />
        <div className="absolute -right-[5px] top-32 h-14 w-[3px] rounded-r bg-[#2a2a2a]" />
      </div>
    </motion.div>
  );
}

export function CommunityForm() {
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!estado || !email) return;
    setSent(true);
  }

  return (
    <section
      id="comunidade"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--cs-glow),_transparent_50%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(70,160,255,0.12),_transparent_55%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-10 md:px-8 lg:gap-16">
        {/* Celulares com prints da comunidade */}
        <div className="relative mx-auto flex h-[420px] w-full max-w-md items-center justify-center order-2 md:order-1 sm:h-[480px] md:max-w-none">
          <PhoneMock
            src="/images/events/story-2.jpg"
            alt="Comunidade Caminho Soberano no WhatsApp, grupos por cidade"
            delay={0.05}
            className="absolute left-[6%] top-[8%] z-0 -rotate-[18deg] scale-95 opacity-90 sm:left-[10%]"
          />
          <PhoneMock
            src="/images/events/story-1.jpg"
            alt="Aviso da comunidade Caminho Soberano sobre Bitcoin"
            delay={0.15}
            className="absolute right-[8%] top-[4%] z-10 -rotate-[8deg] sm:right-[12%]"
          />
        </div>

        {/* Texto + formulário */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="order-1 md:order-2"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/85">
            <Users size={14} className="text-white/70" />
            Comunidade
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Receba informações estratégicas em primeira mão
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/70 md:text-lg">
            Fique por dentro dos principais alertas, movimentos e eventos sobre
            o Bitcoin antes da maioria.
          </p>

          <form
            onSubmit={onSubmit}
            className="ocean-panel mt-8 space-y-3 rounded-[1.75rem] border p-5 md:p-6"
          >
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu Nome"
              className="w-full rounded-2xl border-0 bg-[#d9d9d9] px-4 py-3.5 text-sm text-black outline-none placeholder:text-black/45 focus:ring-2 focus:ring-accent"
            />

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor Email"
              className="w-full rounded-2xl border-0 bg-[#d9d9d9] px-4 py-3.5 text-sm text-black outline-none placeholder:text-black/45 focus:ring-2 focus:ring-accent"
            />

            <div className="relative">
              <select
                required
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                className="w-full appearance-none rounded-2xl border-0 bg-[#d9d9d9] px-4 py-3.5 pr-10 text-sm text-black outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="">Selecionar Estado...</option>
                {estados.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={16}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black/50"
              />
            </div>

            <button
              type="submit"
              className="mt-1 w-full rounded-2xl bg-accent py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              Enviar
            </button>

            {sent ? (
              <p className="text-center text-sm text-accent" role="status">
                Recebido! Em breve você terá novidades do Caminho Soberano.
              </p>
            ) : null}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
