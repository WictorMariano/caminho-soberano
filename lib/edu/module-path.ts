import type { EduLesson, EduSchool } from "@/lib/edu/curriculum";
import { getPoster, schoolPosters } from "@/lib/edu/school-posters";

export type ModulePathStep = {
  number: 1 | 2 | 3 | 4;
  slug: string;
  title: string;
  shortTitle: string;
  journey: string;
  promise: string;
  color: string;
  icon: "lightbulb" | "book" | "target" | "users";
};

export const modulePathSteps: ModulePathStep[] = [
  {
    number: 1,
    slug: "descobrir",
    title: "Descobrir",
    shortTitle: "Passo 1",
    journey: "Nível de informação",
    promise: "Abra a visão: conceitos, contexto e o porquê de cada escola.",
    color: "#D4AF37",
    icon: "lightbulb",
  },
  {
    number: 2,
    slug: "compreender",
    title: "Compreender",
    shortTitle: "Passo 2",
    journey: "Nível de conhecimento",
    promise: "Estruture o saber: sistemas, habilidades e fundamentos sólidos.",
    color: "#2F80ED",
    icon: "book",
  },
  {
    number: 3,
    slug: "aplicar",
    title: "Aplicar / Otimizar",
    shortTitle: "Passo 3",
    journey: "Nível de competência",
    promise: "Coloque em prática: execução, ajuste e alto desempenho.",
    color: "#9B51E0",
    icon: "target",
  },
  {
    number: 4,
    slug: "multiplicar",
    title: "Multiplicar",
    shortTitle: "Passo 4",
    journey: "Nível de liderança",
    promise: "Escale o impacto: liderança, mentoria e legado.",
    color: "#1ABC9C",
    icon: "users",
  },
];

export type ModuleSchoolBundle = {
  schoolSlug: string;
  schoolTitle: string;
  schoolColor: string;
  schoolOrder: number;
  free: boolean;
  moduleSlug: string;
  lessons: EduLesson[];
};

export type ModuleLessonItem = {
  index: number;
  lesson: EduLesson;
  schoolSlug: string;
  schoolTitle: string;
  schoolColor: string;
  schoolOrder: number;
  free: boolean;
  moduleSlug: string;
  href: string;
};

/** Ordem do diagrama: de cima para baixo nas escolas 1–9. */
export function getModulePathBundles(
  schools: EduSchool[],
  moduleNumber: 1 | 2 | 3 | 4,
): ModuleSchoolBundle[] {
  const bySlug = new Map(schools.map((school) => [school.slug, school]));

  return schoolPosters
    .map((poster) => {
      const school = bySlug.get(poster.slug);
      if (!school) return null;
      const module = school.modules.find((item) => item.number === moduleNumber);
      if (!module) return null;
      return {
        schoolSlug: school.slug,
        schoolTitle: poster.title,
        schoolColor: poster.color,
        schoolOrder: poster.posterOrder,
        free: school.free,
        moduleSlug: module.slug,
        lessons: module.lessons,
      } satisfies ModuleSchoolBundle;
    })
    .filter(Boolean) as ModuleSchoolBundle[];
}

/** Sequência numerada de consumo: escola 1 → 9, aulas na ordem de cada célula. */
export function getModuleLessonSequence(
  schools: EduSchool[],
  moduleNumber: 1 | 2 | 3 | 4,
): ModuleLessonItem[] {
  const items: ModuleLessonItem[] = [];
  let index = 1;

  for (const bundle of getModulePathBundles(schools, moduleNumber)) {
    for (const lesson of bundle.lessons) {
      items.push({
        index,
        lesson,
        schoolSlug: bundle.schoolSlug,
        schoolTitle: bundle.schoolTitle,
        schoolColor: bundle.schoolColor,
        schoolOrder: bundle.schoolOrder,
        free: bundle.free,
        moduleSlug: bundle.moduleSlug,
        href: `/membros/edu/${bundle.schoolSlug}/${bundle.moduleSlug}/${lesson.slug}`,
      });
      index += 1;
    }
  }

  return items;
}

export function countModuleLessons(
  schools: EduSchool[],
  moduleNumber: 1 | 2 | 3 | 4,
) {
  return getModuleLessonSequence(schools, moduleNumber).length;
}

export function getPosterLabel(slug: string) {
  return getPoster(slug)?.title ?? slug;
}
