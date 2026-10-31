import { ArrowUpRight } from "lucide-react";

import { ticketCheckoutUrl } from "@/lib/event-bitcoin-pratica";

export function OnlineAttendanceSection() {
  return (
    <section id="online" className="relative border-t border-white/10 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Ao vivo
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Acompanhe o evento online
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
          Não precisa estar em São Paulo para participar. Você acompanha a
          imersão ao vivo, nos quatro dias, de onde estiver. Compre o ingresso
          e entre na transmissão.
        </p>
        <a
          href={ticketCheckoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-ink transition hover:brightness-105"
        >
          Garanta seu ingresso aqui
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
