"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

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
      className="relative overflow-hidden bg-black py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--cs-glow),_transparent_55%)]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Comunidade
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Receba informações estratégicas em primeira mão
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Fique por dentro dos principais alertas, movimentos e eventos sobre
            o Bitcoin antes da maioria.
          </p>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-10 space-y-4 rounded-[2rem] border border-border bg-surface p-6 text-left md:p-8"
        >
          <label className="block">
            <span className="mb-2 block text-sm text-foreground/70">Nome</span>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
              className="w-full rounded-2xl border border-border bg-black px-4 py-3.5 text-sm outline-none transition placeholder:text-muted focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-foreground/70">E-mail</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
              className="w-full rounded-2xl border border-border bg-black px-4 py-3.5 text-sm outline-none transition placeholder:text-muted focus:border-accent"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-foreground/70">Estado</span>
            <select
              required
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-border bg-black px-4 py-3.5 text-sm outline-none transition focus:border-accent"
            >
              <option value="">Selecionar Estado...</option>
              {estados.map((uf) => (
                <option key={uf} value={uf}>
                  {uf}
                </option>
              ))}
            </select>
          </label>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
          >
            Enviar
          </button>

          {sent ? (
            <p className="text-center text-sm text-accent" role="status">
              Recebido! Em breve você terá novidades do Caminho Soberano.
            </p>
          ) : null}
        </motion.form>
      </div>
    </section>
  );
}
