import { EVENT_PATH } from "@/lib/event-bitcoin-pratica";

/** Links do menu — apenas páginas reais do site */
export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/eventos", label: "Eventos" },
  { href: "/conteudo", label: "Conteúdo" },
  { href: "/sobre", label: "Sobre" },
] as const;

export const footerNav = [
  { href: "/sobre", label: "Sobre" },
  { href: "/eventos", label: "Eventos" },
  { href: "/conteudo", label: "Conteúdo" },
  { href: "/faq", label: "FAQ" },
  { href: "/politica-de-privacidade", label: "Privacidade" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
] as const;

export const ctaNav = {
  href: EVENT_PATH,
  label: "Garanta sua vaga",
} as const;

export const socialLinks = {
  instagram: "https://www.instagram.com/ocaminhosoberano/",
  x: "https://x.com/",
  youtube: "https://www.youtube.com/",
  /** Comunidade gratuita — conteúdo semanal e lives */
  whatsappCommunity: "https://chat.whatsapp.com/",
} as const;

export const siteContact = {
  email: "contato@caminhosoberano.com.br",
  supportPhone: "+55 11 99999-9999",
  supportPhoneHref: "tel:+5511999999999",
} as const;

export const legalLinks = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
] as const;

export const educationProducts = [
  {
    id: "imersao-bitcoin",
    title: "Imersão Bitcoin na Prática",
    description:
      "Do zero à autocustódia: wallets, segurança, operação real e os erros que mais custam caro.",
    tag: "Presencial",
    href: EVENT_PATH,
  },
  {
    id: "trilha-autocustodia",
    title: "Trilha de Autocustódia",
    description:
      "Passo a passo para guardar seus próprios bitcoin com segurança — sem depender de corretoras.",
    tag: "Treinamento",
    href: "/conteudo#educacao",
  },
  {
    id: "soberania-patrimonial",
    title: "Soberania Patrimonial",
    description:
      "Estratégias para proteger patrimônio, reduzir exposição a bloqueios e pensar em liberdade de longo prazo.",
    tag: "Formação",
    href: "/conteudo#educacao",
  },
  {
    id: "lives-semanais",
    title: "Lives e Conteúdo Semanal",
    description:
      "Atualizações, alertas e aulas ao vivo na comunidade — para manter o aprendizado em movimento.",
    tag: "Comunidade",
    href: "https://chat.whatsapp.com/",
    external: true,
  },
] as const;

export const siteFaqs = [
  {
    question: "Como faço para participar dos eventos?",
    answer:
      'Basta clicar no botão "Inscreva-se Agora" e preencher o formulário com seus dados.',
  },
  {
    question: "Os eventos são presenciais ou online?",
    answer:
      "Nossos eventos são presenciais, realizados mensalmente em locais estratégicos.",
  },
  {
    question: "Existe algum pré-requisito para participar?",
    answer:
      "Não. Qualquer pessoa interessada em liberdade e soberania pode participar.",
  },
  {
    question: "Qual o valor de inscrição?",
    answer:
      "Os valores variam de R$500,00 a R$5.000,00, dependendo do tipo de evento.",
  },
  {
    question: "Como o Caminho Soberano se diferencia de outros eventos?",
    answer:
      "Oferecemos uma experiência única de aprendizado e conexões profundas com um networking de altíssimo nível.",
  },
];
