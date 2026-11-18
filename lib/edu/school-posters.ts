/** Cartazes das escolas — ordem e cores do material oficial. */

export type SchoolPoster = {
  slug: string;
  posterOrder: number;
  title: string;
  summary: string;
  color: string;
  icon:
    | "brain"
    | "bitcoin"
    | "shield"
    | "globe"
    | "cpu"
    | "rocket"
    | "scale"
    | "family"
    | "landmark";
};

export const schoolPosters: SchoolPoster[] = [
  {
    slug: "soberania-pessoal",
    posterOrder: 1,
    title: "Soberania Pessoal",
    summary: "Mentalidade, propósito, valores e identidade.",
    color: "#006064",
    icon: "brain",
  },
  {
    slug: "soberania-financeira",
    posterOrder: 2,
    title: "Soberania Financeira",
    summary: "Dinheiro, Bitcoin, investimentos e economia.",
    color: "#E67E22",
    icon: "bitcoin",
  },
  {
    slug: "soberania-patrimonial",
    posterOrder: 3,
    title: "Soberania Patrimonial",
    summary: "Proteção, estruturas, sucessão e legado.",
    color: "#00796B",
    icon: "shield",
  },
  {
    slug: "soberania-internacional",
    posterOrder: 4,
    title: "Soberania Internacional",
    summary: "Liberdade geográfica, residência, cidadania e empresas globais.",
    color: "#0D47A1",
    icon: "globe",
  },
  {
    slug: "soberania-tecnologica",
    posterOrder: 5,
    title: "Soberania Tecnológica",
    summary: "IA, Blockchain, Web3 e inovação tecnológica.",
    color: "#6A1B9A",
    icon: "cpu",
  },
  {
    slug: "soberania-empreendedora",
    posterOrder: 6,
    title: "Soberania Empreendedora",
    summary: "Modelos de negócio, estratégia, gestão e crescimento.",
    color: "#D84315",
    icon: "rocket",
  },
  {
    slug: "soberania-juridica",
    posterOrder: 7,
    title: "Soberania Jurídica e Tributária",
    summary: "Direito, impostos, compliance e segurança jurídica.",
    color: "#00838F",
    icon: "scale",
  },
  {
    slug: "soberania-familiar",
    posterOrder: 8,
    title: "Soberania Familiar",
    summary: "Família, educação, valores, relações e legado.",
    color: "#AD1457",
    icon: "family",
  },
  {
    slug: "soberania-institucional",
    posterOrder: 9,
    title: "Soberania Institucional",
    summary: "Governança, ética, liderança e impacto institucional.",
    color: "#1565C0",
    icon: "landmark",
  },
];

export const foundationPosterSlugs = [
  "soberania-pessoal",
  "soberania-familiar",
  "soberania-financeira",
] as const;

export const moduleJourney = [
  {
    number: 1,
    title: "Descobrir",
    text: "Desperta a consciência e amplia a visão.",
  },
  {
    number: 2,
    title: "Compreender",
    text: "Estrutura o entendimento e aprofunda o tema.",
  },
  {
    number: 3,
    title: "Aplicar",
    text: "Coloca em prática e otimiza o que já funciona.",
  },
  {
    number: 4,
    title: "Multiplicar",
    text: "Multiplica o conhecimento e forma outras pessoas.",
  },
] as const;

export function getPoster(slug: string) {
  return schoolPosters.find((poster) => poster.slug === slug);
}
