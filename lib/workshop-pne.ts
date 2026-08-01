export const PNE_SLUG = "programa-nova-economia" as const;
export const PNE_PATH = `/eventos/${PNE_SLUG}` as const;

/** Número comercial (editar quando houver oficial). Digits only for wa.me */
export const pneWhatsAppDigits = "5511999999999";

export const pneWhatsAppMessage =
  "Olá! Quero garantir minha vaga no Workshop Profissionais da Nova Economia.";

export function pneWhatsAppUrl(customMessage = pneWhatsAppMessage) {
  return `https://wa.me/${pneWhatsAppDigits}?text=${encodeURIComponent(customMessage)}`;
}

export const pneMeta = {
  title: "Profissionais da Nova Economia",
  shortName: "PNE",
  brandLine: "Workshop / Imersão Presencial",
  tagline:
    "Prepare seu negócio e sua carreira para as oportunidades da Nova Economia",
  location: "CDL Florianópolis — SC",
  city: "Florianópolis - SC",
  venue: "CDL Florianópolis — SC",
  region: "Sul" as const,
  dateShort: "29 de agosto",
  dateFull: "29 de agosto de 2026",
  weekday: "Sábado",
  time: "08h às 17h",
  format: "Presencial",
  capacity: 50,
  /** Contador administrável — sem fake countdown */
  remainingSeats: 50,
  description:
    "Um dia completo para você compreender o que está mudando, diagnosticar sua realidade, experimentar tecnologias emergentes e planejar os primeiros passos da sua transformação.",
  mapEmbedUrl:
    "https://www.google.com/maps?q=CDL%20Florian%C3%B3polis%20SC&hl=pt-BR&z=15&output=embed",
  audienceLine: "Para contadores, empresários e profissionais liberais.",
  ctaLabel: "Garanta sua vaga",
} as const;

export const pneHeroThemes = [
  "Bitcoin e Blockchain",
  "IA e Automação",
  "Web3 e Liquid",
  "Novos modelos de negócio",
  "Novas oportunidades profissionais",
] as const;

export const pneObserves = [
  "Conteúdo fragmentado",
  "Medo da tecnologia",
  "Dificuldade para aplicar",
  "Negócio preso a modelos tradicionais",
  "Oportunidades passando despercebidas",
] as const;

export const pnePrepares = [
  "Visão clara do novo cenário",
  "Capacidade de avaliar mudanças",
  "Experiência prática",
  "Novos serviços e possibilidades",
  "Plano inicial de transformação",
] as const;

export const pneBenefits = [
  {
    id: "contexto",
    title: "Entenda o novo contexto",
    text: "Compreenda como tecnologia, ativos digitais e novos modelos estão mudando empresas e profissões.",
    size: "large" as const,
  },
  {
    id: "realidade",
    title: "Enxergue sua realidade",
    text: "Descubra como seu negócio ou sua carreira está posicionado diante dessa transformação.",
    size: "large" as const,
  },
  {
    id: "mudanca",
    title: "Identifique o que precisa mudar",
    text: "Reconheça os pontos de maior impacto, risco e oportunidade.",
    size: "small" as const,
  },
  {
    id: "pratica",
    title: "Experimente na prática",
    text: "Tenha contato orientado com wallet, blockchain, Liquid Network, ativos digitais e transações.",
    size: "small" as const,
  },
  {
    id: "oportunidades",
    title: "Encontre novas oportunidades",
    text: "Visualize serviços, modelos de negócio e possibilidades profissionais dentro da Nova Economia.",
    size: "small" as const,
  },
  {
    id: "plano",
    title: "Comece seu plano de transformação",
    text: "Organize os primeiros passos para sair da compreensão e avançar para a ação.",
    size: "small" as const,
  },
] as const;

export const pneLearning = [
  {
    id: "bitcoin",
    title: "Bitcoin e Blockchain",
    points: [
      "Por que o Bitcoin inaugurou uma nova forma de pensar valor e propriedade.",
      "Como a blockchain registra e valida informações.",
      "Onde essas tecnologias podem impactar empresas e profissões.",
    ],
  },
  {
    id: "ia",
    title: "Inteligência Artificial e Automação",
    points: [
      "Como a IA está mudando processos e decisões.",
      "Onde a automação gera eficiência.",
      "Como analisar possibilidades de aplicação no negócio.",
    ],
  },
  {
    id: "web3",
    title: "Web3 e Liquid Network",
    points: [
      "O que diferencia a Web3 da internet tradicional.",
      "Como funcionam redes e ativos digitais.",
      "Onde a Liquid Network entra nesse ecossistema.",
    ],
  },
  {
    id: "modelos",
    title: "Novos modelos de negócio",
    points: [
      "Os 11 componentes de um modelo de negócio.",
      "Como visualizar o negócio de maneira sistêmica.",
      "Como tecnologia pode transformar a criação e a entrega de valor.",
    ],
  },
  {
    id: "diagnostico",
    title: "Diagnóstico e transformação",
    points: [
      "Como analisar a realidade atual.",
      "Como reconhecer lacunas e oportunidades.",
      "Como construir uma nova visão para o negócio ou a carreira.",
    ],
  },
  {
    id: "carreiras",
    title: "Oportunidades profissionais",
    points: [
      "Novos serviços que podem surgir.",
      "Possibilidades para empresas e profissionais.",
      "Como continuar a jornada dentro da Nova Economia.",
    ],
  },
] as const;

export const pneJourney = [
  {
    id: "entenda",
    label: "Entenda",
    title: "BT Game e contexto",
    text: "Compreenda o novo cenário e os componentes de um modelo de negócio na Nova Economia.",
  },
  {
    id: "aprenda",
    label: "Aprenda",
    title: "Aprendizado orientado",
    text: "Conceitos complexos traduzidos para linguagem empresarial, estratégica e aplicável.",
  },
  {
    id: "diagnostique",
    label: "Diagnostique",
    title: "BT Model",
    text: "Modele sua empresa ou carreira e visualize a realidade atual (AS-IS).",
  },
  {
    id: "caminho",
    label: "Veja o caminho",
    title: "FT Model e FT View",
    text: "Compare onde está, onde precisa chegar e o caminho entre os dois pontos.",
  },
  {
    id: "experimente",
    label: "Experimente",
    title: "Prática tecnológica",
    text: "Contato orientado com wallet, blockchain, Liquid, ativos digitais e transações.",
  },
  {
    id: "transforme",
    label: "Transforme",
    title: "Oportunidades",
    text: "Transforme conhecimento em possibilidades para o negócio e a carreira.",
  },
] as const;

export const pneExperienceElements = [
  {
    title: "BT Game",
    text: "Dinâmica prática para compreender os componentes e relações de um modelo de negócio.",
  },
  {
    title: "BT Model",
    text: "Metodologia para modelar sua empresa ou carreira e visualizar a realidade atual.",
  },
  {
    title: "FT Model",
    text: "Leitura das dimensões necessárias para transformar o negócio.",
  },
  {
    title: "FT View",
    text: "Nova visão sobre o ponto atual, o destino desejado e o caminho entre eles.",
  },
  {
    title: "Experimentação tecnológica",
    text: "Contato orientado com ferramentas e tecnologias da Nova Economia.",
  },
  {
    title: "Networking",
    text: "Conexão com participantes que também estão preparando seus negócios e carreiras.",
  },
] as const;

export type ScheduleItem = {
  id: string;
  time: string;
  title: string;
  objective: string;
  contents: string[];
  visual: string;
  color: string;
  isBreak?: boolean;
};

export const pneSchedule: ScheduleItem[] = [
  {
    id: "e1",
    time: "08h às 09h",
    title: "O mundo já mudou",
    objective: "Compreender o novo contexto.",
    contents: [
      "Novo cenário econômico global",
      "Bitcoin, blockchain, IA e Web3",
      "O fim dos modelos tradicionais",
      "O papel do profissional na Nova Economia",
    ],
    visual: "Globo digital sendo formado por pontos conectados.",
    color: "#3b9eff",
  },
  {
    id: "e2",
    time: "09h às 10h30",
    title: "Aprenda o modelo jogando",
    objective: "Aprender o modelo.",
    contents: [
      "BT Game",
      "Dinâmica prática",
      "Os 11 componentes do modelo de negócio",
      "Visão sistêmica e estratégica",
      "Aprendizado em equipe",
    ],
    visual: "Peças de jogo se posicionando sobre um tabuleiro.",
    color: "#34d399",
  },
  {
    id: "e3",
    time: "10h30 às 12h30",
    title: "Descubra como está seu negócio hoje",
    objective: "Diagnosticar sua realidade.",
    contents: [
      "BT Model",
      "Diagnóstico individual",
      "Análise dos 11 componentes",
      "Relatório AS-IS",
      "Realidade atual revelada",
    ],
    visual: "Gráfico sendo preenchido progressivamente.",
    color: "#a78bfa",
  },
  {
    id: "break",
    time: "12h30 às 13h30",
    title: "Almoço e networking",
    objective: "Conectar-se com outros profissionais.",
    contents: ["Troca de experiências", "Networking entre participantes"],
    visual: "Avatares se conectando.",
    color: "#fb923c",
    isBreak: true,
  },
  {
    id: "e4",
    time: "13h30 às 14h30",
    title: "Descubra o caminho da transformação",
    objective: "Visualizar onde está e onde precisa chegar.",
    contents: [
      "FT Model",
      "Cinco dimensões da transformação",
      "FT View",
      "Nova visão do negócio",
      "Principais impactos e oportunidades",
    ],
    visual: "Ponte ligando “Onde estou” e “Onde quero chegar”.",
    color: "#2dd4bf",
  },
  {
    id: "e5",
    time: "14h30 às 16h",
    title: "Coloque a mão na massa",
    objective: "Experimentar na prática.",
    contents: [
      "Wallet e autocustódia",
      "Blockchain e Liquid Network",
      "Ativos digitais",
      "PIX",
      "Swaps e transações",
      "Aplicações no negócio",
    ],
    visual: "Smartphone com wallet e transação na rede.",
    color: "#38bdf8",
  },
  {
    id: "e6",
    time: "16h às 17h",
    title: "Descubra novas oportunidades",
    objective: "Transformar conhecimento em possibilidades.",
    contents: [
      "Oportunidades para empresas",
      "Carreiras e serviços na Nova Economia",
      "Uso da LiqPay como ferramenta",
      "Benefícios, critérios e seleção",
      "Continuidade da jornada no Caminho Soberano",
    ],
    visual: "Gráfico de oportunidades e novos caminhos.",
    color: "#e8c43a",
  },
];

export const pneBonuses = [
  {
    id: "vip",
    title: "Grupo VIP no WhatsApp",
    text: "Acesso ao grupo exclusivo dos participantes do PNE para receber comunicados, conteúdos relacionados à experiência e manter contato com a comunidade.",
    badge: "Acesso exclusivo para participantes",
    tone: "blue" as const,
  },
  {
    id: "p2p",
    title: "Benefício P2P por 90 dias",
    text: "Condições especiais de desconto, durante 90 dias, no serviço P2P utilizado para aquisição de ativos digitais — conforme os termos da oferta.",
    badge: "90 dias de benefício",
    tone: "gold" as const,
    disclaimer:
      "O benefício comercial não constitui recomendação de investimento.",
  },
] as const;

export const pneExpert = {
  name: "Tarcísio Machado",
  role: "CEO e idealizador do Caminho Soberano",
  heroImage: "/images/founder/tarcisio-machado-pne.png",
  image: "/images/founder/tarcisio-machado-expert.png",
  bio: "Tarcísio conduzirá o workshop conectando tecnologia, novos modelos de negócio, estratégia e oportunidades profissionais a partir da visão do Caminho Soberano: Soberania, Propósito e Transformação. Ao longo da imersão, ajudará os participantes a compreender o novo contexto, analisar sua realidade e experimentar ferramentas da Nova Economia de forma orientada e aplicável.",
  quote:
    "Prepare-se hoje para prosperar no futuro. O futuro não acontece, é construído.",
  pillars: ["Soberania", "Propósito", "Transformação"] as const,
} as const;

export const pneFaqs = [
  {
    question: "Preciso conhecer Bitcoin ou blockchain?",
    answer:
      "Não. O conteúdo parte dos fundamentos e traduz os temas para uma linguagem prática e empresarial.",
  },
  {
    question: "É um curso de investimento?",
    answer:
      "Não. O foco está na transformação dos negócios, nas tecnologias da Nova Economia e nas oportunidades profissionais.",
  },
  {
    question: "Haverá atividades práticas?",
    answer:
      "Sim. O workshop inclui BT Game, diagnóstico, modelagem e experimentação orientada.",
  },
  {
    question: "Quem pode participar?",
    answer:
      "Contadores, empresários, profissionais liberais e pessoas interessadas em preparar seus negócios ou carreiras para a Nova Economia.",
  },
  {
    question: "Como funciona a inscrição?",
    answer:
      "Clique em “Garanta sua vaga” e fale com o time comercial pelo WhatsApp. As condições e a confirmação da inscrição são feitas no atendimento.",
  },
  {
    question: "Qual é o investimento?",
    answer:
      "As condições serão apresentadas durante o atendimento comercial.",
  },
  {
    question: "O WhatsApp reserva automaticamente minha vaga?",
    answer:
      "A confirmação é feita pelo time comercial. Como existem apenas 50 vagas, quanto antes o contato, melhor.",
  },
  {
    question: "Onde será o evento?",
    answer:
      "Na CDL Florianópolis — SC. O endereço completo será informado aos participantes.",
  },
  {
    question: "Quais são os bônus?",
    answer:
      "Acesso ao grupo VIP do WhatsApp e benefício de desconto por 90 dias no serviço P2P para aquisição de ativos digitais, conforme os termos da oferta.",
  },
] as const;

/** Mantido para compatibilidade com listagens da home/eventos */
export const pneAudience = [
  {
    title: "Contadores",
    text: "Profissionais que querem compreender a Nova Economia e orientar clientes com visão prática.",
  },
  {
    title: "Empresários",
    text: "Donos de negócio que precisam de clareza operacional e estratégias aplicáveis no mesmo dia.",
  },
  {
    title: "Profissionais liberais",
    text: "Quem fatura pelo próprio trabalho e quer estruturar finanças com mais autonomia e segurança.",
  },
] as const;
