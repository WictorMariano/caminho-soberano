import { socialLinks } from "@/lib/site";

export const COMUNIDADE_PATH = "/comunidade" as const;

export const comunidadeMeta = {
  title: "Comunidade Gratuita",
  tagline: "Lives, eventos e masterclasses exclusivas",
  description:
    "Entre na comunidade gratuita do Caminho Soberano para acompanhar lives, eventos e conteúdos gratuitos, e receber masterclasses exclusivas que não podem ser veiculadas nas redes sociais comuns.",
  ctaLabel: "Entrar na comunidade",
  whatsappHref: socialLinks.whatsappCommunity,
} as const;

export const comunidadeBenefits = [
  {
    id: "lives",
    title: "Lives e alertas",
    text: "Acompanhe encontros ao vivo, avisos e atualizações sobre Bitcoin e soberania financeira.",
  },
  {
    id: "eventos",
    title: "Eventos e oportunidades",
    text: "Saiba em primeira mão das imersões presenciais, workshops e aberturas de turma.",
  },
  {
    id: "conteudo",
    title: "Conteúdo gratuito",
    text: "Receba materiais, bastidores e orientações práticas sem custo, direto na comunidade.",
  },
  {
    id: "masterclass",
    title: "Masterclasses exclusivas",
    text: "Acesse aulas e conversas que não podem ser veiculadas em redes sociais comuns.",
  },
] as const;
