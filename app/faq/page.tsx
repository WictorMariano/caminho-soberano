import type { Metadata } from "next";
import Link from "next/link";

import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { PageShell } from "@/components/PageShell";
import { EVENT_PATH } from "@/lib/event-bitcoin-pratica";

export const metadata: Metadata = {
  title: "FAQ | Caminho Soberano",
  description:
    "Perguntas frequentes sobre o Caminho Soberano, eventos, inscrição e comunidade.",
};

export default function FaqPage() {
  return (
    <PageShell>
      <section className="pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            FAQ
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Perguntas frequentes
          </h1>
          <p className="mt-4 text-base leading-relaxed text-foreground/70 md:text-lg">
            Tire dúvidas sobre o projeto, os eventos e como participar.
          </p>

          <div className="mt-12">
            <FaqAccordion />
          </div>

          <p className="mt-12 text-center text-sm text-foreground/60">
            Não encontrou o que procura?{" "}
            <a
              href="https://www.instagram.com/ocaminhosoberano/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-2 hover:underline"
            >
              Fale conosco no Instagram
            </a>{" "}
            ou{" "}
            <Link
              href={EVENT_PATH}
              className="text-accent underline-offset-2 hover:underline"
            >
              veja o próximo evento
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
