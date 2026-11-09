export const DEFI_EVENT_SLUG = "defi-soberano" as const;
export const DEFI_EVENT_PATH = `/eventos/${DEFI_EVENT_SLUG}`;

export const defiEventMeta = {
  title: "DeFi Soberano",
  shortTitle: "DeFi Soberano",
  location: "São Paulo - SP",
  dateLabel: "Data a definir",
  format: "Imersão presencial",
  partners: "Caminho Soberano + Rafael Marques",
  headline: "Entenda o DeFi e aprenda a operar com consciência dos riscos.",
  subheadline:
    "Uma imersão presencial em São Paulo com Rafael Marques e Caminho Soberano, combinando fundamentos, método, prática guiada e conexões.",
  cta: "Quero entrar na lista de espera",
  notice:
    "Cadastro gratuito, sem compromisso de compra. Data, local, vagas e condições comerciais serão comunicados depois.",
};

export const defiLevels = [
  { value: "iniciante", label: "Iniciante" },
  { value: "intermediario", label: "Intermediário" },
  { value: "avancado", label: "Avançado" },
] as const;

export const defiInterests = [
  { value: "fundamentos", label: "Fundamentos" },
  { value: "alavancagem", label: "Alavancagem" },
  { value: "gestao-de-riscos", label: "Gestão de riscos" },
  { value: "pratica-operacional", label: "Prática operacional" },
  { value: "mentoria", label: "Mentoria" },
] as const;

export const defiAvailability = [
  { value: "sim", label: "Sim" },
  { value: "talvez", label: "Talvez" },
  { value: "nao", label: "Não" },
] as const;

export const defiMentorshipInterest = [
  { value: "sim", label: "Sim" },
  { value: "nao", label: "Não" },
] as const;

export const defiAudiences = [
  {
    label: "Iniciantes em DeFi",
    icon: "compass" as const,
    description: "Quem quer sair do marketing e entender protocolos de verdade.",
  },
  {
    label: "Operadores",
    icon: "chart" as const,
    description: "Quem já opera e precisa de método, risco e disciplina.",
  },
  {
    label: "Empresários",
    icon: "briefcase" as const,
    description: "Quem busca soberania financeira com decisão consciente.",
  },
  {
    label: "Investidores",
    icon: "shield" as const,
    description: "Quem quer operar sem depender de promessas fáceis.",
  },
  {
    label: "Pró-liberdade",
    icon: "unlock" as const,
    description: "Quem quer autonomia real sobre o próprio capital.",
  },
];

export const defiBenefits = [
  {
    title: "Fundamentos sem narrativa vazia",
    description:
      "Conceitos teóricos e filosóficos para enxergar o mercado com clareza, não com impulso.",
    icon: "book" as const,
    image: "/images/gallery/gallery-06.jpg",
    tags: ["Protocolos", "Visão", "Contexto"],
  },
  {
    title: "Alavancagem com consciência",
    description:
      "Entenda onde a alavancagem ajuda, onde ela destrói capital e como ler o risco real.",
    icon: "layers" as const,
    image: "/images/events/dominando-bitcoin/benefits/strategy.jpg",
    tags: ["Risco", "Posição", "Disciplina"],
  },
  {
    title: "Método na prática",
    description:
      "Do conceito à operação: wallet, empréstimo, montagem de posição e gestão com planilha.",
    icon: "wrench" as const,
    image: "/images/events/dominando-bitcoin/benefits/bitcoin-practice.jpg",
    tags: ["Wallet", "Prática", "Planilha"],
  },
  {
    title: "Networking soberano",
    description:
      "Conexões reais com quem está no mesmo caminho — dúvidas práticas, troca e rede.",
    icon: "network" as const,
    image: "/images/events/dominando-bitcoin/benefits/networking.jpg",
    tags: ["Rede", "Imersão", "Troca"],
  },
];

export const defiThemes = [
  {
    title: "Fundamentos e visão",
    text: "Conceitos teóricos e filosóficos para operar com clareza.",
    image: "/images/gallery/gallery-01.png",
  },
  {
    title: "Mercado de alavancagem",
    text: "Como a alavancagem funciona, onde ajuda e onde custa caro.",
    image: "/images/gallery/gallery-04.png",
  },
  {
    title: "Método na prática",
    text: "Introdução, vivência e aprofundamento do método.",
    image: "/images/gallery/gallery-07.jpg",
  },
  {
    title: "Operação guiada",
    text: "Wallet, empréstimo, posição e gestão com planilha.",
    image: "/images/gallery/gallery-09.jpg",
  },
  {
    title: "Conexões reais",
    text: "Networking, jantar e espaço para dúvidas práticas.",
    image: "/images/gallery/gallery-12.jpg",
  },
];

export const defiAgenda = [
  {
    id: "abertura",
    moment: "Abertura",
    title: "Boas-vindas",
    text: "Apresentação do dia e alinhamento da imersão.",
  },
  {
    id: "manha-1",
    moment: "Manhã",
    title: "Conceitos e filosofia",
    text: "Base teórica para entender DeFi sem romantizar risco.",
  },
  {
    id: "manha-2",
    moment: "Manhã",
    title: "Alavancagem e método",
    text: "Mercado de alavancagem e introdução ao método.",
  },
  {
    id: "almoco",
    moment: "Almoço",
    title: "Integração",
    text: "Refeição, descanso e conversa entre participantes.",
  },
  {
    id: "tarde-1",
    moment: "Tarde",
    title: "Aprofundamento",
    text: "Vivência do método e ancoragem operacional.",
  },
  {
    id: "tarde-2",
    moment: "Tarde",
    title: "Prática guiada",
    text: "Wallet, empréstimo, posição e planilha.",
  },
  {
    id: "noite",
    moment: "Noite",
    title: "Networking",
    text: "Happy hour, jantar e dúvidas práticas.",
  },
] as const;

export const defiHosts = [
  {
    name: "Rafael Marques",
    role: "Especialista em DeFi e operação",
    bio: "Conduz a imersão com foco em fundamentos, método e prática operacional, sempre com atenção aos riscos reais do mercado.",
    image: "/images/events/banners/protect.jpg",
    pillars: ["Método", "Risco", "Operação"],
  },
  {
    name: "Caminho Soberano",
    role: "Realização",
    bio: "Comunidade e escola de soberania financeira que reúne formação, encontros presenciais e uma rede de pessoas decididas a retomar o controle do próprio dinheiro.",
    image: "/images/founder/tarcisio-machado-expert.png",
    pillars: ["Soberania", "Comunidade", "Prática"],
  },
];

export const defiFaqs = [
  {
    q: "Já posso comprar ingresso?",
    a: "Ainda não. Nesta etapa estamos só abrindo a lista de espera para medir interesse e definir data, local e condições.",
  },
  {
    q: "O cadastro tem custo?",
    a: "Não. O cadastro é gratuito e sem compromisso de compra.",
  },
  {
    q: "Onde será o evento?",
    a: "Em São Paulo. O espaço e a data serão comunicados depois, com base na lista de espera.",
  },
  {
    q: "Preciso já saber DeFi?",
    a: "Não. A lista recebe iniciantes, intermediários e avançados. O formulário ajuda a entender o seu nível.",
  },
  {
    q: "Entrar na lista garante vaga?",
    a: "Não. A lista não garante vaga. Quando o lançamento for definido, avisaremos quem se cadastrou.",
  },
];
