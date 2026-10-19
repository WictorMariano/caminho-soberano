/** Dados fictícios da plataforma (admin + membros) para demonstração local. */

function daysAgo(days: number, hour = 10) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  d.setHours(hour, 15, 0, 0);
  return d.toISOString();
}

export type CaptureList = {
  id: string;
  name: string;
  description: string;
  color: string;
  createdAt: string;
};

export type CapturePage = {
  id: string;
  title: string;
  path: string;
  listId: string;
  status: "ativa" | "rascunho";
  signups: number;
};

export type Lead = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  state: string;
  listId: string;
  pageId: string;
  createdAt: string;
  isMember: boolean;
  memberSince?: string;
  courseProgress: { courseId: string; percent: number; lessonsDone: number; lessonsTotal: number }[];
  badges: string[];
  interests?: string[];
};

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
};

export type Quiz = {
  id: string;
  title: string;
  lessonId: string;
  questions: QuizQuestion[];
};

export type Lesson = {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  duration: string;
  order: number;
  hasMission: boolean;
  quizId?: string;
};

export type Module = {
  id: string;
  courseId: string;
  title: string;
  order: number;
  description: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  level: string;
  lessonsTotal: number;
  enrolled: number;
  completionRate: number;
  badgeId: string;
  /** Capa / poster do curso (estilo catálogo) */
  image: string;
  /** Texto curto no banner do carrossel */
  bannerTagline: string;
};

export type Badge = {
  id: string;
  name: string;
  description: string;
  icon: "bitcoin" | "shield" | "rocket" | "star" | "flame";
  courseId?: string;
  earnedCount: number;
};

export const captureLists: CaptureList[] = [
  {
    id: "list-espera",
    name: "Lista de espera · Eventos",
    description: "Quem pediu para ser avisado dos próximos encontros e temas.",
    color: "#e8c43a",
    createdAt: daysAgo(40),
  },
  {
    id: "list-whatsapp",
    name: "Comunidade WhatsApp",
    description: "Leads que pediram convite para o grupo da comunidade.",
    color: "#25D366",
    createdAt: daysAgo(35),
  },
  {
    id: "list-workshop",
    name: "Interessados Workshop PNE",
    description: "Capturas ligadas à página do Workshop Profissionais da Nova Economia.",
    color: "#3b9eff",
    createdAt: daysAgo(20),
  },
  {
    id: "list-newsletter",
    name: "Newsletter Caminho",
    description: "Assinantes de conteúdo e atualizações do projeto.",
    color: "#a78bfa",
    createdAt: daysAgo(15),
  },
];

export const capturePages: CapturePage[] = [
  {
    id: "page-espera",
    title: "Lista de espera",
    path: "/lista-de-espera",
    listId: "list-espera",
    status: "ativa",
    signups: 8,
  },
  {
    id: "page-comunidade",
    title: "Comunidade (formulário WhatsApp)",
    path: "/lista-de-espera#comunidade",
    listId: "list-whatsapp",
    status: "ativa",
    signups: 6,
  },
  {
    id: "page-workshop",
    title: "Workshop PNE",
    path: "/workshop-pne",
    listId: "list-workshop",
    status: "ativa",
    signups: 5,
  },
  {
    id: "page-home",
    title: "Home · CTA lista",
    path: "/",
    listId: "list-espera",
    status: "ativa",
    signups: 3,
  },
  {
    id: "page-draft",
    title: "Nova LP · Imersão Sul (rascunho)",
    path: "/imersao-sul",
    listId: "list-newsletter",
    status: "rascunho",
    signups: 0,
  },
];

export const badges: Badge[] = [
  {
    id: "badge-fundamentos",
    name: "Observador Soberano",
    description: "Concluiu o curso Fundamentos da Nova Economia.",
    icon: "bitcoin",
    courseId: "course-fundamentos",
    earnedCount: 42,
  },
  {
    id: "badge-pratica",
    name: "Mãos na Wallet",
    description: "Concluiu o curso Prática com Bitcoin e Liquid.",
    icon: "shield",
    courseId: "course-pratica",
    earnedCount: 18,
  },
  {
    id: "badge-negocio",
    name: "Construtor de Modelo",
    description: "Concluiu o diagnóstico de negócio na Nova Economia.",
    icon: "rocket",
    courseId: "course-negocio",
    earnedCount: 9,
  },
  {
    id: "badge-streak",
    name: "Consistência 7 dias",
    description: "Estudou em 7 dias seguidos.",
    icon: "flame",
    earnedCount: 27,
  },
  {
    id: "badge-quiz",
    name: "Mente Afiação",
    description: "Acertou 100% em três quizzes seguidos.",
    icon: "star",
    earnedCount: 14,
  },
];

export const courses: Course[] = [
  {
    id: "course-fundamentos",
    slug: "fundamentos-nova-economia",
    title: "Fundamentos da Nova Economia",
    subtitle: "Contexto, Bitcoin e o fim dos modelos antigos.",
    level: "Iniciante",
    lessonsTotal: 4,
    enrolled: 128,
    completionRate: 61,
    badgeId: "badge-fundamentos",
    image: "/images/events/banners/nova-economia.jpg",
    bannerTagline: "Entenda o cenário e comece sua jornada com clareza.",
  },
  {
    id: "course-pratica",
    slug: "pratica-bitcoin-liquid",
    title: "Prática com Bitcoin e Liquid",
    subtitle: "Wallet, autocustódia e primeiros movimentos.",
    level: "Intermediário",
    lessonsTotal: 4,
    enrolled: 74,
    completionRate: 38,
    badgeId: "badge-pratica",
    image: "/images/events/banners/protect.jpg",
    bannerTagline: "Mãos na massa: wallet, segurança e primeiros passos.",
  },
  {
    id: "course-negocio",
    slug: "negocio-na-nova-economia",
    title: "Negócio na Nova Economia",
    subtitle: "Diagnóstico, modelo e oportunidades profissionais.",
    level: "Avançado",
    lessonsTotal: 3,
    enrolled: 41,
    completionRate: 24,
    badgeId: "badge-negocio",
    image: "/images/events/banners/soberania.jpg",
    bannerTagline: "Transforme conhecimento em plano para o seu negócio.",
  },
];

export const modules: Module[] = [
  {
    id: "mod-f1",
    courseId: "course-fundamentos",
    title: "O mundo já mudou",
    order: 1,
    description: "Cenário global e o papel do profissional.",
  },
  {
    id: "mod-f2",
    courseId: "course-fundamentos",
    title: "Bitcoin sem mistério",
    order: 2,
    description: "Valor, propriedade e blockchain na prática.",
  },
  {
    id: "mod-p1",
    courseId: "course-pratica",
    title: "Autocustódia",
    order: 1,
    description: "Configurar e proteger sua wallet.",
  },
  {
    id: "mod-p2",
    courseId: "course-pratica",
    title: "Liquid Network",
    order: 2,
    description: "Ativos digitais e primeiros swaps.",
  },
  {
    id: "mod-n1",
    courseId: "course-negocio",
    title: "Diagnóstico",
    order: 1,
    description: "BT Model e leitura da realidade atual.",
  },
  {
    id: "mod-n2",
    courseId: "course-negocio",
    title: "Transformação",
    order: 2,
    description: "Do diagnóstico ao plano de ação.",
  },
];

export const lessons: Lesson[] = [
  {
    id: "les-f1",
    courseId: "course-fundamentos",
    moduleId: "mod-f1",
    title: "O novo cenário econômico",
    duration: "18 min",
    order: 1,
    hasMission: true,
    quizId: "quiz-f1",
  },
  {
    id: "les-f2",
    courseId: "course-fundamentos",
    moduleId: "mod-f1",
    title: "Onde a tecnologia muda o jogo",
    duration: "22 min",
    order: 2,
    hasMission: false,
  },
  {
    id: "les-f3",
    courseId: "course-fundamentos",
    moduleId: "mod-f2",
    title: "Bitcoin em linguagem clara",
    duration: "24 min",
    order: 3,
    hasMission: true,
    quizId: "quiz-f3",
  },
  {
    id: "les-f4",
    courseId: "course-fundamentos",
    moduleId: "mod-f2",
    title: "Blockchain e registro de valor",
    duration: "20 min",
    order: 4,
    hasMission: false,
  },
  {
    id: "les-p1",
    courseId: "course-pratica",
    moduleId: "mod-p1",
    title: "Criando sua primeira wallet",
    duration: "27 min",
    order: 1,
    hasMission: true,
    quizId: "quiz-p1",
  },
  {
    id: "les-p2",
    courseId: "course-pratica",
    moduleId: "mod-p1",
    title: "Erros comuns de segurança",
    duration: "16 min",
    order: 2,
    hasMission: false,
  },
  {
    id: "les-p3",
    courseId: "course-pratica",
    moduleId: "mod-p2",
    title: "Primeiros passos na Liquid",
    duration: "25 min",
    order: 3,
    hasMission: true,
    quizId: "quiz-p3",
  },
  {
    id: "les-p4",
    courseId: "course-pratica",
    moduleId: "mod-p2",
    title: "Swaps e aplicações no negócio",
    duration: "21 min",
    order: 4,
    hasMission: false,
  },
  {
    id: "les-n1",
    courseId: "course-negocio",
    moduleId: "mod-n1",
    title: "Os 11 componentes do modelo",
    duration: "30 min",
    order: 1,
    hasMission: true,
    quizId: "quiz-n1",
  },
  {
    id: "les-n2",
    courseId: "course-negocio",
    moduleId: "mod-n1",
    title: "Lendo sua realidade atual",
    duration: "19 min",
    order: 2,
    hasMission: false,
  },
  {
    id: "les-n3",
    courseId: "course-negocio",
    moduleId: "mod-n2",
    title: "Do diagnóstico ao plano",
    duration: "28 min",
    order: 3,
    hasMission: true,
    quizId: "quiz-n3",
  },
];

export const quizzes: Quiz[] = [
  {
    id: "quiz-f1",
    title: "Missão · Novo cenário",
    lessonId: "les-f1",
    questions: [
      {
        id: "q1",
        prompt: "Qual é o papel principal do profissional na Nova Economia?",
        options: [
          "Ignorar a tecnologia até ela amadurecer",
          "Compreender o contexto e decidir com clareza",
          "Terceirizar todas as decisões financeiras",
          "Focar apenas em especulação de curto prazo",
        ],
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: "O que melhor descreve a mudança em curso?",
        options: [
          "Só uma moda passageira de apps",
          "Uma mudança estrutural de valor, confiança e modelos",
          "Um problema exclusivo de grandes bancos",
          "Algo irrelevante para negócios tradicionais",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "quiz-f3",
    title: "Missão · Bitcoin",
    lessonId: "les-f3",
    questions: [
      {
        id: "q1",
        prompt: "Bitcoin inaugurou principalmente uma nova forma de pensar:",
        options: ["Marketing digital", "Valor e propriedade", "Design de produto", "Gestão de pessoas"],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "quiz-p1",
    title: "Missão · Wallet",
    lessonId: "les-p1",
    questions: [
      {
        id: "q1",
        prompt: "Autocustódia significa:",
        options: [
          "Deixar tudo na corretora",
          "Você controla as chaves do seu ativo",
          "Não usar internet nunca",
          "Compartilhar a seed com o suporte",
        ],
        correctIndex: 1,
      },
      {
        id: "q2",
        prompt: "A seed phrase deve ser:",
        options: [
          "Salva na nuvem pública",
          "Enviada por WhatsApp para backup",
          "Guardada offline com cuidado",
          "Postada no Discord da turma",
        ],
        correctIndex: 2,
      },
    ],
  },
  {
    id: "quiz-p3",
    title: "Missão · Liquid",
    lessonId: "les-p3",
    questions: [
      {
        id: "q1",
        prompt: "A Liquid Network entra no ecossistema como:",
        options: [
          "Uma rede para ativos digitais e transferências mais ágeis",
          "Um banco central digital",
          "Um substituto do PIX nacional",
          "Um aplicativo de redes sociais",
        ],
        correctIndex: 0,
      },
    ],
  },
  {
    id: "quiz-n1",
    title: "Missão · Modelo",
    lessonId: "les-n1",
    questions: [
      {
        id: "q1",
        prompt: "Olhar o negócio pelos 11 componentes ajuda a:",
        options: [
          "Decorar jargões",
          "Ver o sistema completo e achar lacunas",
          "Evitar qualquer mudança",
          "Substituir o time comercial",
        ],
        correctIndex: 1,
      },
    ],
  },
  {
    id: "quiz-n3",
    title: "Missão · Plano",
    lessonId: "les-n3",
    questions: [
      {
        id: "q1",
        prompt: "Um bom próximo passo depois do diagnóstico é:",
        options: [
          "Ignorar os gaps encontrados",
          "Transformar leitura em plano com prioridades",
          "Trocar de carreira no mesmo dia",
          "Esperar o mercado estabilizar por 10 anos",
        ],
        correctIndex: 1,
      },
    ],
  },
];

export const leads: Lead[] = [
  {
    id: "lead-1",
    name: "Ana Paula Ferreira",
    email: "ana.ferreira@email.com",
    whatsapp: "11987654321",
    city: "São Paulo",
    state: "SP",
    listId: "list-espera",
    pageId: "page-espera",
    createdAt: daysAgo(1, 9),
    isMember: true,
    memberSince: daysAgo(20),
    courseProgress: [
      { courseId: "course-fundamentos", percent: 100, lessonsDone: 4, lessonsTotal: 4 },
      { courseId: "course-pratica", percent: 50, lessonsDone: 2, lessonsTotal: 4 },
    ],
    badges: ["badge-fundamentos", "badge-streak"],
    interests: ["Bitcoin e Blockchain", "IA e Automação"],
  },
  {
    id: "lead-2",
    name: "Bruno Costa",
    email: "bruno.costa@email.com",
    whatsapp: "21999887766",
    city: "Rio de Janeiro",
    state: "RJ",
    listId: "list-espera",
    pageId: "page-home",
    createdAt: daysAgo(1, 14),
    isMember: false,
    courseProgress: [],
    badges: [],
    interests: ["Novos modelos de negócio"],
  },
  {
    id: "lead-3",
    name: "Camila Ribeiro",
    email: "camila.r@email.com",
    whatsapp: "47991234567",
    city: "Joinville",
    state: "SC",
    listId: "list-workshop",
    pageId: "page-workshop",
    createdAt: daysAgo(2, 11),
    isMember: true,
    memberSince: daysAgo(12),
    courseProgress: [
      { courseId: "course-fundamentos", percent: 75, lessonsDone: 3, lessonsTotal: 4 },
    ],
    badges: ["badge-quiz"],
    interests: ["Bitcoin e Blockchain", "Web3 e Liquid"],
  },
  {
    id: "lead-4",
    name: "Diego Martins",
    email: "diego.martins@email.com",
    whatsapp: "31988776655",
    city: "Belo Horizonte",
    state: "MG",
    listId: "list-whatsapp",
    pageId: "page-comunidade",
    createdAt: daysAgo(3, 16),
    isMember: false,
    courseProgress: [],
    badges: [],
  },
  {
    id: "lead-5",
    name: "Elisa Nogueira",
    email: "elisa.n@email.com",
    whatsapp: "61998112233",
    city: "Brasília",
    state: "DF",
    listId: "list-workshop",
    pageId: "page-workshop",
    createdAt: daysAgo(4, 8),
    isMember: true,
    memberSince: daysAgo(30),
    courseProgress: [
      { courseId: "course-fundamentos", percent: 100, lessonsDone: 4, lessonsTotal: 4 },
      { courseId: "course-pratica", percent: 100, lessonsDone: 4, lessonsTotal: 4 },
      { courseId: "course-negocio", percent: 33, lessonsDone: 1, lessonsTotal: 3 },
    ],
    badges: ["badge-fundamentos", "badge-pratica", "badge-streak", "badge-quiz"],
  },
  {
    id: "lead-6",
    name: "Fábio Almeida",
    email: "fabio.almeida@email.com",
    whatsapp: "41997654321",
    city: "Curitiba",
    state: "PR",
    listId: "list-newsletter",
    pageId: "page-draft",
    createdAt: daysAgo(5, 13),
    isMember: false,
    courseProgress: [],
    badges: [],
  },
  {
    id: "lead-7",
    name: "Gabriela Souza",
    email: "gabriela.s@email.com",
    whatsapp: "85991239876",
    city: "Fortaleza",
    state: "CE",
    listId: "list-whatsapp",
    pageId: "page-comunidade",
    createdAt: daysAgo(6, 10),
    isMember: true,
    memberSince: daysAgo(8),
    courseProgress: [
      { courseId: "course-fundamentos", percent: 25, lessonsDone: 1, lessonsTotal: 4 },
    ],
    badges: [],
  },
  {
    id: "lead-8",
    name: "Henrique Lopes",
    email: "henrique.lopes@email.com",
    whatsapp: "51993445566",
    city: "Porto Alegre",
    state: "RS",
    listId: "list-espera",
    pageId: "page-espera",
    createdAt: daysAgo(8, 15),
    isMember: false,
    courseProgress: [],
    badges: [],
    interests: ["Web3 e Liquid", "Nova economia"],
  },
];

export function getList(id: string) {
  return captureLists.find((l) => l.id === id);
}

export function getPage(id: string) {
  return capturePages.find((p) => p.id === id);
}

export function getLead(id: string) {
  return leads.find((l) => l.id === id);
}

export function getCourse(id: string) {
  return courses.find((c) => c.id === id);
}

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug);
}

export function getBadge(id: string) {
  return badges.find((b) => b.id === id);
}

export function getQuiz(id: string) {
  return quizzes.find((q) => q.id === id);
}

export function leadsInList(listId: string) {
  return leads.filter((l) => l.listId === listId);
}

export function modulesForCourse(courseId: string) {
  return modules
    .filter((m) => m.courseId === courseId)
    .sort((a, b) => a.order - b.order);
}

export function lessonsForCourse(courseId: string) {
  return lessons
    .filter((l) => l.courseId === courseId)
    .sort((a, b) => a.order - b.order);
}

export function lessonsForModule(moduleId: string) {
  return lessons
    .filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.order - b.order);
}

export function platformStats() {
  const members = leads.filter((l) => l.isMember).length;
  const avgCompletion =
    courses.reduce((sum, c) => sum + c.completionRate, 0) / courses.length;
  return {
    totalLeads: leads.length,
    members,
    lists: captureLists.length,
    pages: capturePages.filter((p) => p.status === "ativa").length,
    courses: courses.length,
    avgCompletion: Math.round(avgCompletion),
    badgesEarned: leads.reduce((sum, l) => sum + l.badges.length, 0),
  };
}

/** Progresso do membro demo logado */
export const demoMemberState = {
  name: "Convidado",
  email: "membro@local",
  activeCourseId: "course-fundamentos",
  completedLessonIds: ["les-f1", "les-f2"],
  earnedBadgeIds: ["badge-streak"],
  xp: 140,
  nextLevelXp: 250,
};
