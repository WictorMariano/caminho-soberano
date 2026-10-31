"use client";

import { ArrowUpRight, Check, Crown, Shield, Star } from "lucide-react";

import {
  ticketCheckoutUrl,
  tickets,
} from "@/lib/event-bitcoin-pratica";
import { cn } from "@/lib/utils";

const ticketIcons = {
  bronze: Shield,
  prata: Star,
  ouro: Crown,
} as const;

export function PricingCards() {
  return (
    <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
      {tickets.map((ticket) => {
        const Icon = ticketIcons[ticket.id];
        return (
          <article
            key={ticket.id}
            className={cn(
              "pne-project-card group relative flex h-full flex-col rounded-[1.75rem] border",
              ticket.featured &&
                "!border-accent/60 shadow-[0_0_0_1px_rgba(247,147,26,0.22),0_30px_70px_-30px_rgba(247,147,26,0.4)] lg:-mt-3 lg:mb-3",
            )}
          >
            <div className="pne-project-card__shine" aria-hidden />
            <div className="relative flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  {ticket.featured ? (
                    <span className="mb-3 inline-flex rounded-full bg-accent px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent-ink">
                      1º lote
                    </span>
                  ) : null}
                  <h3 className="text-xl font-semibold leading-snug text-white">
                    {ticket.name}
                  </h3>
                </div>
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80">
                  <Icon size={20} />
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {ticket.tagline}
              </p>

              <div className="mt-6">
                <p className="text-4xl font-extrabold tracking-tight text-white">
                  {ticket.price}
                </p>
                <p className="mt-1.5 text-sm text-white/60">Valor do 1º lote</p>
              </div>

              <ul className="mt-6 flex-1 space-y-3 border-t border-white/10 pt-6">
                {ticket.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm leading-relaxed text-white/80"
                  >
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden
                    />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                href={ticketCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition",
                  ticket.featured
                    ? "bg-accent text-accent-ink hover:brightness-95"
                    : "border border-white/20 text-white hover:border-accent hover:text-accent",
                )}
              >
                Comprar ingresso
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}
