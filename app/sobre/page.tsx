import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { EVENT_PATH } from "@/lib/event-bitcoin-pratica";

export const metadata: Metadata = {
  title: "Sobre | Caminho Soberano",
  description:
    "Conheça Tarcísio, o Caminho Soberano e a missão de formar pessoas soberanas através do Bitcoin.",
};

const valores = [
  {
    title: "Liberdade",
    text: "Acreditamos que o indivíduo deve ter autonomia sobre seu tempo, seu dinheiro e suas decisões — sem tutela desnecessária.",
  },
  {
    title: "Responsabilidade",
    text: "Soberania exige disciplina: autocustódia, estudo contínuo e decisões conscientes sobre patrimônio.",
  },
  {
    title: "Prática",
    text: "Conhecimento só vale quando vira ação. Priorizamos imersões, demonstrações e networking real.",
  },
  {
    title: "Comunidade",
    text: "Ninguém caminha sozinho. Construímos uma rede de pessoas alinhadas à soberania e à independência financeira.",
  },
];

const pilares = [
  {
    title: "Eventos presenciais",
    text: "Imersões intensivas com palestras, prática e networking em cidades estratégicas do Brasil.",
  },
  {
    title: "Conteúdo contínuo",
    text: "Instagram, lives e comunidade no WhatsApp para manter o aprendizado vivo entre os encontros.",
  },
  {
    title: "Formação educacional",
    text: "Treinamentos e trilhas que aprofundam autocustódia, proteção patrimonial e uso real do Bitcoin.",
  },
];

export default function SobrePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sobre"
        title="Caminho Soberano"
        description="Um projeto com propósito: capacitar pessoas a retomarem o controle do próprio patrimônio e construírem independência financeira real."
      />

      {/* Projeto */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              O projeto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Mais do que eventos. Um movimento.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/75 md:text-lg">
              O Caminho Soberano nasceu para reunir quem busca liberdade fora
              das amarras estatais e bancárias. Através de imersões presenciais,
              conteúdo prático e uma comunidade alinhada, formamos pessoas
              capazes de operar Bitcoin com segurança, proteger patrimônio e
              viver com mais autonomia.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/75 md:text-lg">
              Aqui, conhecimento não fica na teoria: é prática, networking e
              decisão. Cada encontro é um passo concreto na direção da soberania
              individual.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/events/dominando-bitcoin/ocean.jpg"
              alt="Caminho Soberano"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Missão */}
      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Missão
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Qual o objetivo do projeto
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/75 md:text-lg">
            Formar uma geração de pessoas soberanas — financeiramente
            independentes, tecnicamente preparadas e conectadas a uma rede que
            valoriza liberdade, responsabilidade e patrimônio de longo prazo.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Educar na prática",
                text: "Ensinar Bitcoin, autocustódia e proteção patrimonial de forma aplicável, sem atalhos perigosos.",
              },
              {
                title: "Conectar soberanos",
                text: "Criar encontros presenciais onde empresários, profissionais e pró-liberdade se fortalecem juntos.",
              },
              {
                title: "Expandir autonomia",
                text: "Ajudar cada participante a separar seu dinheiro do Estado e viver com mais liberdade real.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-accent/40 pt-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 md:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Valores
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            O que guia cada decisão
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {valores.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-border bg-black/25 p-6 md:p-8"
              >
                <h3 className="text-xl font-semibold text-accent">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como atuamos */}
      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Como atuamos
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
            Três pilares do ecossistema
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {pilares.map((item, index) => (
              <div key={item.title}>
                <span className="text-sm font-semibold text-accent">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/eventos"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              Ver eventos
            </Link>
            <Link
              href="/conteudo"
              className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Explorar conteúdo
            </Link>
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/founder/tarcisio-portrait.jpg"
              alt="Tarcísio, fundador do Caminho Soberano"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Fundador
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Quem é Tarcísio?
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80 md:text-lg">
              Engenheiro, empresário e fundador do{" "}
              <strong className="font-semibold text-white">
                Caminho Soberano
              </strong>
              . Movido pela fé e pela visão de uma sociedade mais justa, ele
              ensina como alcançar a verdadeira independência financeira fora
              das amarras estatais e bancárias.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              Através do Bitcoin e de soluções descentralizadas, Tarcísio
              capacita indivíduos a retomarem o controle de seu dinheiro,
              transformando-o em uma ferramenta de liberdade e autonomia
              absoluta.
            </p>
            <Link
              href={EVENT_PATH}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              Participar do próximo evento
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Convite */}
      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Pronto para dar o próximo passo?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
            Entre na comunidade, acompanhe o conteúdo e participe dos encontros
            presenciais. A soberania começa com uma decisão.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/conteudo"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              Acessar conteúdo
            </Link>
            <Link
              href="/faq"
              className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              Ver FAQ
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
