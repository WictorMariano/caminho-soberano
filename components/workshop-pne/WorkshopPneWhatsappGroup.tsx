"use client";

import { BellRing, BookOpen, MessageCircle, Users } from "lucide-react";

import { ScrollExpandMedia } from "@/components/event-bitcoin-pratica/ScrollExpandMedia";
import { TicketsCta } from "@/components/workshop-pne/TicketsCta";

const benefits = [
  {
    icon: BellRing,
    title: "Comunicados antes do evento",
    text: "Programação, orientações de acesso e avisos importantes chegam primeiro no grupo, sem você precisar procurar.",
  },
  {
    icon: BookOpen,
    title: "Conteúdos complementares",
    text: "Materiais e conteúdos relacionados ao workshop para chegar preparado e continuar aprendendo depois.",
  },
  {
    icon: Users,
    title: "Online e presencial juntos",
    text: "Quem participa em Alphaville e quem acompanha online faz parte da mesma comunidade, trocando experiências.",
  },
  {
    icon: MessageCircle,
    title: "Networking que continua",
    text: "O contato com participantes e especialistas não termina no fim do dia. As conexões seguem vivas no grupo.",
  },
];

export function WorkshopPneWhatsappGroup() {
  return (
    <section id="grupo-whatsapp" className="bg-background">
      <ScrollExpandMedia
        mediaSrc="/videos/treinamento-presencial.mp4"
        posterSrc="/images/events/dominando-bitcoin/hero.png"
        bgImageSrc="/images/events/dominando-bitcoin/ocean.jpg"
        eyebrow="Comunidade no WhatsApp"
        title="Grupo Exclusivo"
        scrollHint="Role para expandir"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5ee08f]">
            <MessageCircle size={14} />
            Acesso exclusivo para participantes
          </span>
          <h3 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Grupo exclusivo no WhatsApp
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            Ao garantir seu ingresso, você entra no grupo dos participantes do
            Workshop PNE. Um espaço reservado para receber comunicados,
            conteúdos e manter contato com a comunidade antes, durante e depois
            do evento.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-left">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <h4 className="mt-3 text-lg font-semibold text-white md:text-xl">
                {title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-white/65 md:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>

        <TicketsCta className="mt-10" label="Quero fazer parte do grupo" />
      </ScrollExpandMedia>
    </section>
  );
}
