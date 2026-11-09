import { gradeSheet } from "@/lib/edu/sheet";

export type LessonStatus = "Concluído" | "Em Produção" | "Revisão" | "Não Iniciado";

export type EduLesson = {
  slug: string;
  title: string;
  status: LessonStatus;
  level: string;
  track: string;
  origin: "planilha" | "grade";
  published: boolean;
};

export type EduModule = {
  number: 1 | 2 | 3 | 4;
  slug: string;
  title: string;
  journey: string;
  summary: string;
  lessons: EduLesson[];
};

export type EduSchool = {
  order: number;
  slug: string;
  title: string;
  summary: string;
  color: string;
  free: boolean;
  modules: EduModule[];
};

const MODULES: Omit<EduModule, "lessons">[] = [
  {
    number: 1,
    slug: "descobrir",
    title: "Descobrir",
    journey: "Nível de informação",
    summary: "Desperta a consciência e amplia a visão.",
  },
  {
    number: 2,
    slug: "compreender",
    title: "Compreender",
    journey: "Nível de conhecimento",
    summary: "Estrutura o entendimento e aprofunda o tema.",
  },
  {
    number: 3,
    slug: "aplicar",
    title: "Aplicar / Otimizar",
    journey: "Nível de competência",
    summary: "Coloca em prática e ajusta o que já funciona.",
  },
  {
    number: 4,
    slug: "multiplicar",
    title: "Multiplicar",
    journey: "Nível de liderança",
    summary: "Multiplica o conhecimento e forma outras pessoas.",
  },
];

const FREE_SCHOOL = "soberania-financeira";

const TRACK_SCHOOL: Record<string, string> = {
  "Mentalidade Soberana": "soberania-pessoal",
  "Economia & Bitcoin": "soberania-financeira",
  "Autocustódia & Wallets": "soberania-financeira",
  "Segurança & Privacidade": "soberania-tecnologica",
  "Inteligência Artificial": "soberania-tecnologica",
  "Finanças & Alocação": "soberania-financeira",
  "Negócios Digitais": "soberania-empreendedora",
  Internacionalização: "soberania-internacional",
  "Comunidade & Governança": "soberania-institucional",
};

const GRADE_TOPICS: Record<string, Record<number, string[]>> = {
  "soberania-patrimonial": {
    1: ["Construção de patrimônio", "Riscos e ameaças", "Proteção patrimonial"],
    2: ["Holdings e estruturas", "Trusts e sucessão", "Family Office"],
    3: ["Planejamento patrimonial", "Estruturação de ativos", "Governança patrimonial"],
    4: ["Consultoria patrimonial", "Mentoria patrimonial", "Gestão de legado"],
  },
  "soberania-juridica": {
    1: ["Noções de direito", "Impostos e sistema tributário", "Obrigações e riscos"],
    2: ["Planejamento tributário", "Estruturas jurídicas", "Compliance e regulação"],
    3: ["Redução legal de impostos", "Estruturação societária", "Gestão fiscal inteligente"],
    4: ["Consultoria jurídica e tributária", "Planejamento avançado", "Formação de especialistas"],
  },
  "soberania-familiar": {
    1: ["Princípios e valores familiares", "Educação dos filhos", "Finanças da família"],
    2: ["Comunicação familiar", "Gestão de conflitos", "Planejamento sucessório"],
    3: ["Conselho de família", "Protocolo familiar", "Estrutura de legado"],
    4: ["Mentoria familiar", "Formação de líderes familiares", "Legado entre gerações"],
  },
};

const SCHOOLS: Omit<EduSchool, "modules" | "free">[] = [
  {
    order: 1,
    slug: "soberania-pessoal",
    title: "Escola da Soberania Pessoal",
    summary: "Mentalidade, propósito e identidade para decidir com autonomia.",
    color: "#e8a317",
  },
  {
    order: 2,
    slug: "soberania-financeira",
    title: "Escola da Soberania Financeira",
    summary: "Dinheiro, Bitcoin, custódia e alocação. Aberta no acesso gratuito.",
    color: "#f5d90a",
  },
  {
    order: 3,
    slug: "soberania-patrimonial",
    title: "Escola da Soberania Patrimonial",
    summary: "Proteção, estruturas e o legado do que você constrói.",
    color: "#2f9e8f",
  },
  {
    order: 4,
    slug: "soberania-internacional",
    title: "Escola da Soberania Internacional",
    summary: "Bandeiras, residência, cidadania e vida em mais de um país.",
    color: "#3b82f6",
  },
  {
    order: 5,
    slug: "soberania-tecnologica",
    title: "Escola da Soberania Tecnológica",
    summary: "IA, Web3, segurança digital e as ferramentas da nova economia.",
    color: "#8b5cf6",
  },
  {
    order: 6,
    slug: "soberania-empreendedora",
    title: "Escola da Soberania Empreendedora",
    summary: "Oferta, audiência e a operação de um negócio soberano.",
    color: "#ec4899",
  },
  {
    order: 7,
    slug: "soberania-juridica",
    title: "Escola da Soberania Jurídica e Tributária",
    summary: "Direito, tributos e estruturas em conformidade com a lei.",
    color: "#22c55e",
  },
  {
    order: 8,
    slug: "soberania-familiar",
    title: "Escola da Soberania Familiar",
    summary: "Valores, finanças da família e sucessão entre gerações.",
    color: "#f43f5e",
  },
  {
    order: 9,
    slug: "soberania-institucional",
    title: "Escola da Soberania Institucional",
    summary: "Governança, comunidade e formação de novas lideranças.",
    color: "#38bdf8",
  },
];

const STATUSES = new Set<LessonStatus>(["Concluído", "Em Produção", "Revisão", "Não Iniciado"]);

type Draft = {
  track: string;
  moduleNumber: 1 | 2 | 3 | 4;
  level: string;
  title: string;
  status: LessonStatus;
  origin: "planilha" | "grade";
};

let cached: EduSchool[] | null = null;

export function getCurriculum(): EduSchool[] {
  if (!cached) cached = buildCurriculum();
  return cached;
}

export function getSchool(slug: string) {
  return getCurriculum().find((school) => school.slug === slug);
}

export function getModule(schoolSlug: string, moduleSlug: string) {
  const school = getSchool(schoolSlug);
  const module = school?.modules.find((item) => item.slug === moduleSlug);
  if (!school || !module) return null;
  return { school, module };
}

export function getLesson(schoolSlug: string, moduleSlug: string, lessonSlug: string) {
  const found = getModule(schoolSlug, moduleSlug);
  const lesson = found?.module.lessons.find((item) => item.slug === lessonSlug);
  if (!found || !lesson) return null;
  return { ...found, lesson };
}

export function isSchoolOpen(school: Pick<EduSchool, "free">) {
  return school.free;
}

export function curriculumStats(schools = getCurriculum()) {
  const lessons = schools.flatMap((school) => school.modules.flatMap((module) => module.lessons));
  const count = (status: LessonStatus) => lessons.filter((lesson) => lesson.status === status).length;
  return {
    schools: schools.length,
    lessons: lessons.length,
    published: lessons.filter((lesson) => lesson.published).length,
    concluido: count("Concluído"),
    producao: count("Em Produção"),
    revisao: count("Revisão"),
    naoIniciado: count("Não Iniciado"),
  };
}

function buildCurriculum(): EduSchool[] {
  const drafts = new Map<string, Draft[]>();
  for (const school of SCHOOLS) drafts.set(school.slug, []);

  for (const row of readSheet()) {
    const track = row.school.replace(/^\d+\.\s*/, "").trim();
    const schoolSlug = TRACK_SCHOOL[track];
    if (!schoolSlug) continue;
    const moduleNumber = moduleNumberFrom(row.module);
    const status = STATUSES.has(row.status as LessonStatus) ? (row.status as LessonStatus) : "Não Iniciado";
    drafts.get(schoolSlug)?.push({
      track,
      moduleNumber,
      level: row.level,
      title: row.title,
      status,
      origin: "planilha",
    });
  }

  for (const [slug, topics] of Object.entries(GRADE_TOPICS)) {
    const bucket = drafts.get(slug);
    if (!bucket || bucket.length > 0) continue;
    for (const [number, titles] of Object.entries(topics)) {
      const moduleNumber = Number(number) as 1 | 2 | 3 | 4;
      const journey = MODULES.find((item) => item.number === moduleNumber);
      for (const title of titles) {
        bucket.push({
          track: "Grade visual",
          moduleNumber,
          level: journey?.journey ?? "",
          title,
          status: "Não Iniciado",
          origin: "grade",
        });
      }
    }
  }

  return SCHOOLS.map((school) => ({
    ...school,
    free: school.slug === FREE_SCHOOL,
    modules: MODULES.map((module) => {
      const used = new Set<string>();
      const lessons = (drafts.get(school.slug) ?? [])
        .filter((draft) => draft.moduleNumber === module.number)
        .map((draft) => ({
          slug: uniqueSlug(draft.title, used),
          title: draft.title,
          status: draft.status,
          level: draft.level,
          track: draft.track,
          origin: draft.origin,
          published: draft.status === "Concluído",
        }));
      return { ...module, lessons };
    }),
  }));
}

function readSheet() {
  const rows = parseCsv(gradeSheet.replace(/^\uFEFF/, ""));
  const header = rows.findIndex((row) => row[1] === "Escola" && row[4] === "Conteúdo");
  if (header < 0) return [];
  return rows.slice(header + 1).flatMap((row) => {
    const school = (row[1] ?? "").trim();
    const title = (row[4] ?? "").trim();
    if (!/^\d+\./.test(school) || !title) return [];
    return [
      {
        school,
        module: (row[2] ?? "").trim(),
        level: (row[3] ?? "").trim(),
        title,
        status: (row[5] ?? "").trim(),
      },
    ];
  });
}

function moduleNumberFrom(value: string): 1 | 2 | 3 | 4 {
  const match = value.match(/(\d)/);
  const number = Number(match?.[1] ?? 1);
  if (number < 1 || number > 4) return 1;
  return number as 1 | 2 | 3 | 4;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function uniqueSlug(title: string, used: Set<string>) {
  const base = slugify(title) || "aula";
  let slug = base;
  let n = 2;
  while (used.has(slug)) {
    slug = `${base}-${n}`;
    n += 1;
  }
  used.add(slug);
  return slug;
}

function parseCsv(text: string) {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          cell += '"';
          i += 1;
        } else {
          quoted = false;
        }
      } else {
        cell += char;
      }
      continue;
    }
    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }

  if (cell.length > 0 || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }
  return rows;
}
