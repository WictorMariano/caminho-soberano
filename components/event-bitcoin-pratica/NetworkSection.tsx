"use client";

import {
  ArrowLeftRight,
  BriefcaseBusiness,
  Handshake,
  ShieldCheck,
} from "lucide-react";

import { ScrollExpandMedia } from "@/components/event-bitcoin-pratica/ScrollExpandMedia";

const benefits = [
  {
    icon: BriefcaseBusiness,
    title: "Rede de contatos de negócios",
    text: "Conecte com empresários, profissionais liberais e investidores alinhados à soberania: relações que geram oportunidades reais.",
  },
  {
    icon: ShieldCheck,
    title: "P2P de confiança",
    text: "Construa uma rede peer-to-peer baseada em reputação e presença: menos intermediários, mais autonomia nas suas trocas.",
  },
  {
    icon: ArrowLeftRight,
    title: "Troca de serviços e produtos",
    text: "Encontre quem oferece e quem precisa: serviços, produtos e parcerias dentro de um ecossistema que valoriza liberdade econômica.",
  },
  {
    icon: Handshake,
    title: "Parcerias de longo prazo",
    text: "Networking presencial que vira colaboração contínua: mentoria, joint ventures e apoio entre soberanos.",
  },
];

export function NetworkSection({
  exitToBlack = false,
}: {
  exitToBlack?: boolean;
}) {
  return (
    <section id="network" className={exitToBlack ? "bg-black" : "bg-background"}>
      <ScrollExpandMedia
        mediaSrc="/videos/treinamento-presencial.mp4"
        posterSrc="/images/events/dominando-bitcoin/hero.png"
        bgImageSrc="/images/events/dominando-bitcoin/ocean.jpg"
        eyebrow="Networking"
        title="Rede Soberana"
        scrollHint="Role para expandir"
        exitToBlack={exitToBlack}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Networking
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Benefícios do network no Caminho Soberano
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            Aqui o networking não é cartão de visita jogado no chão. É uma rede
            viva de contatos de negócios, confiança mútua e troca real de valor,
            o tipo de conexão que o algoritmo nunca entrega.
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
      </ScrollExpandMedia>
    </section>
  );
}
