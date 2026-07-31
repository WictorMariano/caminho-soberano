import type { Metadata } from "next";

import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como o Caminho Soberano coleta, usa e protege seus dados pessoais.",
};

const sections = [
  {
    title: "1. Quem somos",
    body: [
      "Esta Política de Privacidade descreve como o Caminho Soberano (“nós”, “nosso”) trata dados pessoais quando você acessa nossos sites, formulários, páginas de eventos e canais oficiais de comunicação.",
      "Ao utilizar nossos serviços ou nos enviar informações, você declara ter lido e compreendido esta política.",
    ],
  },
  {
    title: "2. Dados que podemos coletar",
    body: [
      "Podemos coletar dados que você nos fornece voluntariamente, como nome, e-mail, telefone, cidade e mensagens enviadas por formulários ou redes sociais.",
      "Também podemos coletar dados técnicos de navegação, como endereço IP, tipo de dispositivo, navegador, páginas visitadas e cookies necessários ao funcionamento do site.",
    ],
  },
  {
    title: "3. Como usamos seus dados",
    body: [
      "Utilizamos os dados para: responder contatos; enviar informações sobre eventos e comunidade; processar interesses de inscrição; melhorar a experiência do site; cumprir obrigações legais; e proteger direitos e segurança da comunidade.",
      "Não vendemos seus dados pessoais a terceiros.",
    ],
  },
  {
    title: "4. Compartilhamento",
    body: [
      "Podemos compartilhar dados com prestadores de serviço essenciais (hospedagem, e-mail, ferramentas de formulário ou pagamento), apenas na medida necessária para operar o projeto.",
      "Também poderemos divulgar informações quando exigido por lei ou para proteger direitos, segurança e integridade do Caminho Soberano e de seus participantes.",
    ],
  },
  {
    title: "5. Cookies e tecnologias similares",
    body: [
      "Nosso site pode utilizar cookies e tecnologias semelhantes para funcionamento básico, preferências e análise de uso. Você pode gerenciar cookies nas configurações do seu navegador.",
    ],
  },
  {
    title: "6. Retenção e segurança",
    body: [
      "Mantemos os dados pelo tempo necessário para as finalidades descritas nesta política ou conforme exigido por lei.",
      "Adotamos medidas razoáveis de segurança para proteger informações contra acesso não autorizado, perda ou uso indevido. Nenhum sistema, porém, é absolutamente seguro.",
    ],
  },
  {
    title: "7. Seus direitos",
    body: [
      "Nos termos da legislação aplicável (incluindo a LGPD), você pode solicitar acesso, correção, atualização, exclusão ou demais direitos relacionados aos seus dados pessoais.",
      "Para exercer esses direitos, entre em contato pelos canais oficiais do Caminho Soberano, como o Instagram @ocaminhosoberano.",
    ],
  },
  {
    title: "8. Alterações",
    body: [
      "Podemos atualizar esta Política de Privacidade periodicamente. A versão vigente estará sempre publicada nesta página, com a data da última atualização.",
    ],
  },
  {
    title: "9. Contato",
    body: [
      "Dúvidas sobre privacidade: fale conosco pelo Instagram oficial @ocaminhosoberano ou pelos canais indicados nas páginas de eventos.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <PageShell>
      <article className="pb-20 pt-8 md:pb-28 md:pt-12">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Legal
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-4 text-sm text-foreground/55">
            Última atualização: 20 de julho de 2026
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/75">
            Esta página explica de forma clara como tratamos informações
            pessoais no ecossistema Caminho Soberano.
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
