import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarHeart,
  GraduationCap,
  MessageCircle,
  Radio,
} from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import {
  educationProducts,
  socialLinks,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Conteúdo | Caminho Soberano",
  description:
    "Conteúdo nas redes, comunidade gratuita no WhatsApp e treinamentos educacionais do Caminho Soberano.",
};

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

const communityBenefits = [
  {
    icon: CalendarHeart,
    title: "Conteúdo semanal",
    text: "Materiais, alertas e insights para manter o aprendizado em ritmo constante.",
  },
  {
    icon: Radio,
    title: "Lives semanais",
    text: "Encontros ao vivo para tirar dúvidas, aprofundar temas e acompanhar o mercado.",
  },
  {
    icon: MessageCircle,
    title: "Comunidade ativa",
    text: "Troca direta com pessoas alinhadas à soberania financeira e ao Bitcoin.",
  },
];

export default function ConteudoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Conteúdo"
        title="Aprenda soberania onde você já está"
        description="Redes sociais, comunidade gratuita e treinamentos para quem quer dominar Bitcoin na prática — com clareza e consistência."
      >
        <div className="flex flex-wrap gap-3">
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
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
          >
            <MessageCircle size={18} />
            Entrar na comunidade
          </a>
        </div>
      </PageHero>

      {/* Redes — Instagram */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Redes sociais
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Conteúdo diário no Instagram
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">
              No{" "}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent underline-offset-2 hover:underline"
              >
                @ocaminhosoberano
              </a>{" "}
              você encontra bastidores dos eventos, aulas rápidas, alertas e
              reflexões sobre soberania financeira — direto no feed e nos
              stories.
            </p>
            <ul className="mt-6 space-y-3 text-base text-foreground/75">
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                Bastidores e recortes dos encontros presenciais
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                Explicações práticas sobre Bitcoin e autocustódia
              </li>
              <li className="flex gap-2">
                <span className="text-accent">→</span>
                Avisos de lives, eventos e aberturas de turma
              </li>
            </ul>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              Abrir Instagram
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_center,_rgba(255,241,0,0.12),_transparent_70%)]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-black/40 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15">
                  <Image
                    src="/images/brand/logo-mark.png"
                    alt=""
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">ocaminhosoberano</p>
                  <p className="text-xs text-foreground/55">Instagram</p>
                </div>
              </div>
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/events/story-1.jpg"
                  alt="Conteúdo do Caminho Soberano no Instagram"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/90">
                  Siga e acompanhe o conteúdo que prepara você para a próxima
                  imersão.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp community */}
      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Comunidade gratuita
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              WhatsApp com conteúdo e lives semanais
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/70 md:text-lg">
              Entre na comunidade gratuita do Caminho Soberano e receba
              conteúdo semanal, avisos de lives e um ambiente para caminhar
              junto com quem busca soberania de verdade.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {communityBenefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[1.5rem] border border-border bg-black/25 p-6 md:p-7"
              >
                <Icon className="h-7 w-7 text-accent" strokeWidth={1.75} />
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70 md:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={socialLinks.whatsappCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              <MessageCircle size={18} />
              Entrar na comunidade do WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Educação e Treinamentos */}
      <section
        id="educacao"
        className="scroll-mt-32 border-t border-border py-16 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Educação e treinamentos
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Produtos educacionais para aprofundar
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
                Trilhas e imersões pensadas para quem quer ir além do feed —
                com método, prática e foco em resultado.
              </p>
            </div>
            <GraduationCap
              className="hidden h-12 w-12 text-accent/80 md:block"
              strokeWidth={1.5}
            />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {educationProducts.map((product) => {
              const isExternal = "external" in product && product.external;
              const className =
                "group flex flex-col rounded-[1.75rem] border border-border bg-black/30 p-6 transition hover:border-accent/45 md:p-7";

              const body = (
                <>
                  <span className="inline-flex w-fit rounded-full border border-accent/35 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    {product.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
                    {product.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70 md:text-base">
                    {product.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    {isExternal ? "Entrar agora" : "Saiba mais"}
                    <ArrowUpRight
                      size={16}
                      className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </>
              );

              if (isExternal) {
                return (
                  <a
                    key={product.id}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {body}
                  </a>
                );
              }

              return (
                <Link key={product.id} href={product.href} className={className}>
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Do conteúdo à imersão presencial
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
            Acompanhe as redes, entre na comunidade e, quando estiver pronto,
            viva a experiência completa nos eventos do Caminho Soberano.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/eventos"
              className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-95"
            >
              Ver eventos
            </Link>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-border px-6 py-3 text-sm font-semibold transition hover:border-accent hover:text-accent"
            >
              Seguir @ocaminhosoberano
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
