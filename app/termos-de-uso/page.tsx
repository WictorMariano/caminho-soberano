import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Termos de Uso | Caminho Soberano",
  description:
    "Termos e condições de uso do site e dos serviços do Caminho Soberano.",
};

const sections = [
  {
    title: "1. Aceitação dos termos",
    body: [
      "Ao acessar o site do Caminho Soberano, suas páginas de eventos e demais canais digitais oficiais, você concorda com estes Termos de Uso. Se não concordar, não utilize nossos serviços.",
    ],
  },
  {
    title: "2. Sobre o Caminho Soberano",
    body: [
      "O Caminho Soberano é um projeto educacional e comunitário voltado a soberania financeira, Bitcoin e formação prática. Conteúdos publicados têm caráter informativo e educacional.",
      "Nada neste site constitui aconselhamento financeiro, jurídico, contábil ou de investimento personalizado. Decisões de investimento e gestão de patrimônio são de responsabilidade exclusiva do usuário.",
    ],
  },
  {
    title: "3. Eventos e ingressos",
    body: [
      "Informações de data, local, programação, valores e benefícios podem ser atualizadas. Em caso de alteração relevante, comunicaremos pelos canais oficiais sempre que possível.",
      "A compra ou reserva de ingresso está sujeita às condições específicas de cada edição, incluindo política de cancelamento, transferência e disponibilidade de vagas.",
    ],
  },
  {
    title: "4. Conduta do usuário",
    body: [
      "Você concorda em utilizar o site e os eventos de forma lícita, respeitosa e compatível com os valores da comunidade. É vedado uso abusivo, fraude, tentativa de acesso não autorizado ou divulgação de conteúdos ofensivos ou ilegais.",
    ],
  },
  {
    title: "5. Propriedade intelectual",
    body: [
      "Marcas, logos, textos, imagens, vídeos e materiais do Caminho Soberano são protegidos por direitos de propriedade intelectual. É proibida a reprodução sem autorização prévia, salvo uso pessoal e não comercial permitido por lei.",
    ],
  },
  {
    title: "6. Links de terceiros",
    body: [
      "Podemos indicar links para sites, mapas, planilhas ou redes sociais de terceiros. Não nos responsabilizamos pelo conteúdo, políticas ou práticas desses serviços externos.",
    ],
  },
  {
    title: "7. Limitação de responsabilidade",
    body: [
      "Empregamos esforços razoáveis para manter informações corretas e o site disponível, sem garantir ausência de erros, interrupções ou atualizações imediatas.",
      "Na máxima extensão permitida pela lei, o Caminho Soberano não se responsabiliza por danos indiretos, lucros cessantes ou perdas decorrentes do uso das informações ou da participação em eventos.",
    ],
  },
  {
    title: "8. Privacidade",
    body: [
      "O tratamento de dados pessoais é regido pela nossa Política de Privacidade, disponível em /politica-de-privacidade.",
    ],
  },
  {
    title: "9. Alterações destes termos",
    body: [
      "Podemos atualizar estes Termos de Uso a qualquer momento. A versão vigente será publicada nesta página com a data da última atualização.",
    ],
  },
  {
    title: "10. Contato",
    body: [
      "Para dúvidas sobre estes termos, utilize os canais oficiais do Caminho Soberano, como o Instagram @ocaminhosoberano.",
    ],
  },
];

export default function TermosPage() {
  return (
    <PageShell>
      <article className="pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Termos de Uso
          </h1>
          <p className="mt-4 text-sm text-foreground/55">
            Última atualização: 20 de julho de 2026
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/75">
            Estes termos regulam o uso do site e a relação com os serviços
            digitais do Caminho Soberano. Leia também nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-accent underline-offset-2 hover:underline"
            >
              Política de Privacidade
            </Link>
            .
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold md:text-2xl">
                  {section.title}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-3 text-base leading-relaxed text-foreground/70"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
