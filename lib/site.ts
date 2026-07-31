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
  /** Comunidade gratuita — conteúdo semanal e lives */
  whatsappCommunity: "https://chat.whatsapp.com/",
} as const;

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
      "Acompanhe os anúncios no Instagram @ocaminhosoberano ou acesse a página do evento desejado. Quando as vagas abrirem, você encontra o link de inscrição e as orientações de pagamento.",
  },
  {
    question: "Os eventos são presenciais ou online?",
    answer:
      "Os encontros principais do Caminho Soberano são presenciais, para networking e prática. Alguns conteúdos e alertas também circulam online para quem está na comunidade.",
  },
  {
    question: "Existe algum pré-requisito para participar?",
    answer:
      "Não é necessário ser especialista. Basta interesse genuíno em Bitcoin, soberania financeira e disposição para aprender na prática.",
  },
  {
    question: "Qual o valor de inscrição?",
    answer:
      "O valor varia conforme o evento, a cidade e o tipo de ingresso. Os detalhes e condições atuais são divulgados na página de cada edição.",
  },
  {
    question: "Como o Caminho Soberano se diferencia de outros eventos?",
    answer:
      "Foco em prática, soberania e comunidade: imersões presenciais, networking real e conteúdo voltado a retomar o controle do próprio patrimônio — fora das amarras estatais e bancárias.",
  },
  {
    question: "O que é o Caminho Soberano?",
    answer:
      "É um projeto com propósito: capacitar pessoas a alcançarem independência financeira real através do Bitcoin e de soluções descentralizadas, com formação prática e comunidade.",
  },
  {
    question: "Como entrar em contato?",
    answer:
      "Pelo Instagram oficial @ocaminhosoberano ou pelos canais divulgados nas páginas de cada evento.",
  },
];
