export const WORKSHOP_PNE_PAGE_PATH = "/workshop-pne" as const;

/** Checkout oficial (Greenn): os três ingressos levam ao mesmo link */
export const workshopPneCheckoutUrl =
  "https://payfast.greenn.com.br/pre-checkout/c22mg5f?ch_id=21807";

export const workshopPneMeta = {
  title: "Workshop Profissionais da Nova Economia",
  shortTitle: "Workshop PNE",
  dateFull: "31 de outubro de 2026",
  dateShort: "31 de outubro",
  dateCompact: "31/10/2026",
  day: "31",
  monthAbbr: "OUT",
  weekday: "Sábado",
  time: "8h às 18h",
  startsAt: "2026-10-31",
  city: "Barueri, SP",
  venue: "Olimpo Experience Alphaville",
  venueFull: "Olimpo Experience Alphaville, Barueri (SP)",
  address:
    "Alameda Mamoré, 503, Alphaville Centro Industrial e Empresarial, Barueri, São Paulo",
  format: "Presencial e online",
  description:
    "Workshop presencial no Olimpo Experience Alphaville, em Barueri (SP), e online, em 31 de outubro de 2026, das 8h às 18h. Um dia de imersão para entender o que está mudando na economia, experimentar ferramentas práticas e planejar os próximos passos do seu negócio e da sua carreira. Escolha entre Online, Presencial ou Presencial com Jantar de Negócios VIP.",
} as const;

export const workshopPneJourney = [
  "Descobrir",
  "Experimentar",
  "Jogar",
  "Inovar",
] as const;

export const workshopPneObjective =
  "Conectar os participantes às transformações da Nova Economia por meio de experiências práticas com tecnologias Web3, investimentos descentralizados, gamificação e inovação de modelos de negócio.";

export type WorkshopScheduleItem = {
  id: string;
  time: string;
  title: string;
  speaker: string;
  isBreak?: boolean;
};

export const workshopPneSchedule: WorkshopScheduleItem[] = [
  {
    id: "abertura",
    time: "08h30 às 08h50",
    title: "Abertura e contextualização da Nova Economia",
    speaker: "Tarcísio (Caminho Soberano)",
  },
  {
    id: "pratica",
    time: "08h50 às 12h00",
    title:
      "Nova Economia na prática: Bitcoin, blockchain, Web3, carteiras digitais, LiqPay e Deflow",
    speaker: "Tarcísio (Caminho Soberano) e Elídio (Blindado)",
  },
  {
    id: "almoco",
    time: "12h00 às 13h30",
    title: "Almoço",
    speaker: "Intervalo",
    isBreak: true,
  },
  {
    id: "defi",
    time: "13h30 às 14h00",
    title: "Investimentos DeFi: oportunidades na Web3 e demonstração prática",
    speaker: "Rafael Marques",
  },
  {
    id: "bt-game",
    time: "14h00 às 16h30",
    title: "BT Game: experiência gamificada sobre Bitcoin e Nova Economia",
    speaker: "Alê Pacheco (Caminho Soberano)",
  },
  {
    id: "bt-model",
    time: "16h30 às 16h45",
    title: "BT Model: visão sistêmica dos negócios e Cartas de Inovação",
    speaker: "Alê Pacheco (Caminho Soberano)",
  },
  {
    id: "desafio",
    time: "16h45 às 17h25",
    title:
      "Desafio de Inovação: novos negócios ou inovação em negócios existentes",
    speaker: "Equipes participantes",
  },
  {
    id: "propostas",
    time: "17h25 às 17h55",
    title:
      "Apresentação das propostas: 3 a 4 componentes principais do BT Model",
    speaker: "Equipes participantes",
  },
  {
    id: "encerramento",
    time: "17h55 às 18h00",
    title: "Encerramento e próximos passos",
    speaker: "Tarcísio e Alê Pacheco (Caminho Soberano)",
  },
];

export type WorkshopSpeaker = {
  id: string;
  name: string;
  role: string;
  badge: string;
  image: string;
  /** CSS object-position para enquadrar o rosto */
  imagePosition: string;
  bio: string;
  tags: string[];
  quote: string;
};

export const workshopPneSpeakers: WorkshopSpeaker[] = [
  {
    id: "tarcisio",
    name: "Tarcísio Machado",
    role: "CEO e idealizador do Caminho Soberano",
    badge: "Palestrante",
    image: "/images/founder/tarcisio-machado-expert.png",
    imagePosition: "center 15%",
    bio: "Tarcísio conduz o workshop conectando tecnologia, novos modelos de negócio, estratégia e oportunidades profissionais a partir da visão do Caminho Soberano. Ao longo da imersão, ajuda os participantes a compreender o novo contexto, analisar sua realidade e experimentar ferramentas da Nova Economia de forma orientada e aplicável.",
    tags: ["Soberania", "Propósito", "Transformação"],
    quote:
      "Prepare hoje para prosperar no futuro. O futuro não acontece, é construído.",
  },
  {
    id: "alessandro-pacheco",
    name: "Alessandro Pacheco",
    role: "Fundador e Coordenador Geral do Projeto Nova Economia",
    badge: "Palestrante",
    image: "/images/speakers/alessandro-pacheco.jpg",
    imagePosition: "35% center",
    bio: "Experiência executiva em inovação, estratégia e transformação organizacional. Co-desenvolvedor do BT Model, metodologia de análise e transformação de negócios, e do BT Game, ferramenta de simulação estratégica aplicada. Dedica-se à pesquisa dos impactos da evolução da infraestrutura financeira sobre empresas, mercados e profissões.",
    tags: ["BT Model", "BT Game", "Estratégia"],
    quote:
      "Toda transformação financeira cria novos líderes. O Projeto Nova Economia nasce para ajudar a formar os próximos.",
  },
];

export type WorkshopTicket = {
  id: "online" | "presencial" | "vip";
  name: string;
  tagline: string;
  /** Valor em reais (inteiro) */
  price: number;
  priceLabel: string;
  /** Parcela no cartão, ex.: "R$ 20,25" (em até 12x) */
  installmentLabel: string;
  badge?: string;
  featured?: boolean;
  image: { src: string; alt: string };
  benefits: string[];
  ctaLabel: string;
};

export const workshopPneTickets: WorkshopTicket[] = [
  {
    id: "online",
    name: "Workshop PNE · Online",
    tagline: "Participe de onde estiver, com o mesmo conteúdo.",
    price: 197,
    priceLabel: "R$ 197",
    installmentLabel: "R$ 20,25",
    image: {
      src: "/images/events/dominando-bitcoin/benefits/strategy.jpg",
      alt: "Planejamento estratégico para a Nova Economia",
    },
    benefits: [
      "Acesso ao vivo a todo o conteúdo do workshop",
      "Participação remota com interação durante o encontro",
      "Materiais de apoio do workshop",
      "Visão prática de Bitcoin, IA e novos modelos de negócio",
    ],
    ctaLabel: "Quero participar online",
  },
  {
    id: "presencial",
    name: "Workshop PNE · Presencial",
    tagline: "A experiência completa, lado a lado com a comunidade.",
    price: 997,
    priceLabel: "R$ 997",
    installmentLabel: "R$ 102,51",
    badge: "Mais escolhido",
    featured: true,
    image: {
      src: "/images/gallery/gallery-07.jpg",
      alt: "Participantes em workshop presencial do Caminho Soberano",
    },
    benefits: [
      "Imersão presencial com dinâmicas e prática guiada",
      "Networking com contadores, empresários e profissionais liberais",
      "Materiais impressos e digitais do workshop",
      "Acompanhamento direto durante as atividades",
      "Tudo o que está incluído no ingresso Online",
    ],
    ctaLabel: "Garantir vaga presencial",
  },
  {
    id: "vip",
    name: "Workshop PNE + Jantar de Negócios",
    tagline: "O workshop e uma noite de conexões estratégicas.",
    price: 1997,
    priceLabel: "R$ 1.997",
    installmentLabel: "R$ 205,32",
    badge: "VIP",
    image: {
      src: "/images/gallery/gallery-12.jpg",
      alt: "Profissionais reunidos em evento do Caminho Soberano",
    },
    benefits: [
      "Participação presencial completa no workshop",
      "Jantar de Negócios com acesso a uma mesa seleta",
      "Networking de alto nível em ambiente reservado",
      "Prioridade em oportunidades e novidades do Caminho Soberano",
      "Tudo o que está incluído no ingresso Presencial",
    ],
    ctaLabel: "Quero a experiência VIP",
  },
];
