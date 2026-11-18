/** Ecossistema Caminho Soberano — pilares, cores e métricas do dashboard. */

export const pillarColors = {
  fundacao: "#E87722",
  construcao: "#2E7D4F",
  legado: "#1E4A8A",
} as const;

export type EcosystemPillar = {
  id: "fundacao" | "construcao" | "legado";
  label: string;
  tagline: string;
  color: string;
  schools: {
    order: number;
    slug: string;
    title: string;
    summary: string;
  }[];
};

export const ecosystemPillars: EcosystemPillar[] = [
  {
    id: "fundacao",
    label: "Fundação",
    tagline: "Construindo a base da pessoa",
    color: pillarColors.fundacao,
    schools: [
      {
        order: 1,
        slug: "soberania-pessoal",
        title: "Soberania Pessoal",
        summary: "Mentalidade, propósito, valores e identidade.",
      },
      {
        order: 2,
        slug: "soberania-familiar",
        title: "Soberania Familiar",
        summary: "Família, educação, valores, relações e legado.",
      },
      {
        order: 3,
        slug: "soberania-financeira",
        title: "Soberania Financeira",
        summary: "Dinheiro, Bitcoin, investimentos e economia.",
      },
    ],
  },
  {
    id: "construcao",
    label: "Construção",
    tagline: "Construindo patrimônio e gerando valor",
    color: pillarColors.construcao,
    schools: [
      {
        order: 4,
        slug: "soberania-patrimonial",
        title: "Soberania Patrimonial",
        summary: "Proteção, estruturas, sucessão e legado.",
      },
      {
        order: 5,
        slug: "soberania-empreendedora",
        title: "Soberania Empreendedora",
        summary: "Modelos de negócio, estratégia e crescimento.",
      },
      {
        order: 6,
        slug: "soberania-tecnologica",
        title: "Soberania Tecnológica",
        summary: "IA, Blockchain, Web3 e inovação.",
      },
    ],
  },
  {
    id: "legado",
    label: "Legado",
    tagline: "Escalando para organizações e influência",
    color: pillarColors.legado,
    schools: [
      {
        order: 7,
        slug: "soberania-juridica",
        title: "Soberania Jurídica e Tributária",
        summary: "Direito, impostos, compliance e segurança jurídica.",
      },
      {
        order: 8,
        slug: "soberania-internacional",
        title: "Soberania Internacional",
        summary: "Residência, cidadania e negócios globais.",
      },
      {
        order: 9,
        slug: "soberania-institucional",
        title: "Soberania Institucional",
        summary: "Governança, ética, liderança e impacto.",
      },
    ],
  },
];

export type EvolutionBadge = {
  id: string;
  name: string;
  requirement: string;
  tone: "bronze" | "prata" | "ouro" | "elite";
  earned: boolean;
};

export const evolutionBadges: EvolutionBadge[] = [
  {
    id: "soberano-bronze",
    name: "Soberano Bronze",
    requirement: "3 certificações profissionais",
    tone: "bronze",
    earned: true,
  },
  {
    id: "soberano-prata",
    name: "Soberano Prata",
    requirement: "6 certificações profissionais",
    tone: "prata",
    earned: false,
  },
  {
    id: "soberano-ouro",
    name: "Soberano Ouro",
    requirement: "Escolas essenciais concluídas",
    tone: "ouro",
    earned: false,
  },
  {
    id: "soberano-elite",
    name: "Soberano Elite",
    requirement: "Liderança, impacto e mentoria",
    tone: "elite",
    earned: false,
  },
];

export type DashboardMetrics = {
  xp: number;
  nextLevelXp: number;
  levelName: string;
  coursesCompleted: number;
  coursesTotal: number;
  lessonsCompleted: number;
  lessonsTotal: number;
  trailsCompleted: number;
  trailsTotal: number;
  certifications: number;
  studyStreakDays: number;
  weeklyMinutes: number;
  weeklyGoalMinutes: number;
  pillarProgress: Record<EcosystemPillar["id"], number>;
  schoolProgress: Record<string, number>;
  completedCourseIds: string[];
  inProgressCourseIds: string[];
  completedTrailIds: string[];
};

/** Progresso demo do convidado — dashboard com dados reais de UI. */
export const demoDashboardMetrics: DashboardMetrics = {
  xp: 140,
  nextLevelXp: 250,
  levelName: "Aprendiz",
  coursesCompleted: 1,
  coursesTotal: 3,
  lessonsCompleted: 6,
  lessonsTotal: 11,
  trailsCompleted: 0,
  trailsTotal: 4,
  certifications: 3,
  studyStreakDays: 7,
  weeklyMinutes: 95,
  weeklyGoalMinutes: 120,
  pillarProgress: {
    fundacao: 42,
    construcao: 12,
    legado: 4,
  },
  schoolProgress: {
    "soberania-pessoal": 28,
    "soberania-familiar": 10,
    "soberania-financeira": 68,
    "soberania-patrimonial": 15,
    "soberania-empreendedora": 8,
    "soberania-tecnologica": 12,
    "soberania-juridica": 0,
    "soberania-internacional": 8,
    "soberania-institucional": 0,
  },
  completedCourseIds: ["course-fundamentos"],
  inProgressCourseIds: ["course-pratica"],
  completedTrailIds: [],
};
