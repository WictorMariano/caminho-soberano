export const MEMBER_DEMO_COOKIE = "cs_member_demo";
export const MEMBER_DEMO_EMAIL = "membro@local";
export const MEMBER_DEMO_NAME = "Convidado";

export type MemberMaterial = {
  id: string;
  title: string;
  description: string;
  type: "PDF" | "Planilha" | "Checklist";
  module: string;
};

export type MemberLesson = {
  id: string;
  title: string;
  module: string;
  duration: string;
  youtubeId: string;
  done: boolean;
};

export type MemberLevel = {
  id: string;
  name: string;
  description: string;
  xpRequired: number;
  unlocked: boolean;
  current: boolean;
};

export const memberMaterials: MemberMaterial[] = [
  {
    id: "m1",
    title: "Mapa da Nova Economia",
    description: "Visão geral dos blocos que movem valor, tecnologia e soberania.",
    type: "PDF",
    module: "Fundamentos",
  },
  {
    id: "m2",
    title: "Checklist de autocustódia",
    description: "Passos práticos para configurar e proteger sua wallet.",
    type: "Checklist",
    module: "Prática",
  },
  {
    id: "m3",
    title: "Modelo de negócio em 11 componentes",
    description: "Planilha para diagnosticar sua empresa ou carreira.",
    type: "Planilha",
    module: "Diagnóstico",
  },
  {
    id: "m4",
    title: "Glossário Bitcoin e Liquid",
    description: "Termos essenciais sem jargão desnecessário.",
    type: "PDF",
    module: "Fundamentos",
  },
];

export const memberLessons: MemberLesson[] = [
  {
    id: "l1",
    title: "O mundo já mudou",
    module: "Fundamentos",
    duration: "18 min",
    youtubeId: "dQw4w9WgXcQ",
    done: true,
  },
  {
    id: "l2",
    title: "Bitcoin sem mistério",
    module: "Fundamentos",
    duration: "24 min",
    youtubeId: "dQw4w9WgXcQ",
    done: true,
  },
  {
    id: "l3",
    title: "IA no negócio do dia a dia",
    module: "Prática",
    duration: "21 min",
    youtubeId: "dQw4w9WgXcQ",
    done: false,
  },
  {
    id: "l4",
    title: "Wallet e autocustódia",
    module: "Prática",
    duration: "27 min",
    youtubeId: "dQw4w9WgXcQ",
    done: false,
  },
  {
    id: "l5",
    title: "Diagnóstico com BT Model",
    module: "Diagnóstico",
    duration: "32 min",
    youtubeId: "dQw4w9WgXcQ",
    done: false,
  },
  {
    id: "l6",
    title: "Próximos passos da jornada",
    module: "Transformação",
    duration: "16 min",
    youtubeId: "dQw4w9WgXcQ",
    done: false,
  },
];

export const memberLevels: MemberLevel[] = [
  {
    id: "lv1",
    name: "Observador",
    description: "Começou a jornada e entendeu o novo contexto.",
    xpRequired: 0,
    unlocked: true,
    current: false,
  },
  {
    id: "lv2",
    name: "Aprendiz",
    description: "Concluiu os fundamentos e iniciou a prática.",
    xpRequired: 100,
    unlocked: true,
    current: true,
  },
  {
    id: "lv3",
    name: "Construtor",
    description: "Aplicou ferramentas e montou o primeiro diagnóstico.",
    xpRequired: 250,
    unlocked: false,
    current: false,
  },
  {
    id: "lv4",
    name: "Soberano",
    description: "Transformou conhecimento em plano e comunidade.",
    xpRequired: 500,
    unlocked: false,
    current: false,
  },
];

export const memberProgress = {
  xp: 140,
  nextLevelXp: 250,
  lessonsDone: memberLessons.filter((l) => l.done).length,
  lessonsTotal: memberLessons.length,
  materialsTotal: memberMaterials.length,
};
