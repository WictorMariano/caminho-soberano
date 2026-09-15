export const WAITLIST_PATH = "/lista-de-espera";

export const nextGathering = {
  id: "encontro-outubro-sp",
  title: "Nova Economia · Encontro em São Paulo",
  location: "São Paulo, SP",
  date: "31 de outubro de 2026",
  startsAt: "2026-10-31",
  region: "Sudeste" as const,
  image: "/images/gallery/gallery-12.jpg",
  href: WAITLIST_PATH,
  badge: "Fila de espera · em breve",
};

export const interestOptions = [
  "Programa Nova Economia",
  "Bitcoin na prática",
  "Autocustódia",
  "IA para negócios",
  "Soberania patrimonial",
  "Outros programas",
] as const;

export const brazilianStates = [
  ["AC", "Acre"], ["AL", "Alagoas"], ["AP", "Amapá"], ["AM", "Amazonas"],
  ["BA", "Bahia"], ["CE", "Ceará"], ["DF", "Distrito Federal"], ["ES", "Espírito Santo"],
  ["GO", "Goiás"], ["MA", "Maranhão"], ["MT", "Mato Grosso"], ["MS", "Mato Grosso do Sul"],
  ["MG", "Minas Gerais"], ["PA", "Pará"], ["PB", "Paraíba"], ["PR", "Paraná"],
  ["PE", "Pernambuco"], ["PI", "Piauí"], ["RJ", "Rio de Janeiro"], ["RN", "Rio Grande do Norte"],
  ["RS", "Rio Grande do Sul"], ["RO", "Rondônia"], ["RR", "Roraima"], ["SC", "Santa Catarina"],
  ["SP", "São Paulo"], ["SE", "Sergipe"], ["TO", "Tocantins"],
] as const;
