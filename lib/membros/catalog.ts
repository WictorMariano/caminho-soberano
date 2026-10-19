/** Catálogo visual da área de membros: trilhas e desafios. */

export type Trail = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  courseIds: string[];
  accent: string;
};

export type ChallengeMission = {
  id: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
  done?: boolean;
};

export type ChallengeLevel = {
  id: string;
  order: number;
  title: string;
  summary: string;
  missions: ChallengeMission[];
};

export type Challenge = {
  id: string;
  slug: string;
  title: string;
  purpose: string;
  order: number;
  image: string;
  status: "disponivel" | "em_breve";
  levels: ChallengeLevel[];
};

export const trails: Trail[] = [
  {
    id: "trail-soberano",
    slug: "tornar-se-soberano",
    title: "Trilha para se tornar soberano",
    subtitle: "Teoria das Cinco Bandeiras",
    description:
      "Um caminho guiado para organizar residência, negócios, ativos, cidadania e playground com soberania.",
    image: "/images/events/banners/soberania.jpg",
    courseIds: ["course-fundamentos", "course-negocio"],
    accent: "#e8c43a",
  },
  {
    id: "trail-autocustodia",
    slug: "autocustodia",
    title: "Trilha da autocustódia",
    subtitle: "Você no controle das chaves",
    description:
      "Do zero à prática: wallet, seed, segurança e uso consciente de Bitcoin e Liquid.",
    image: "/images/events/banners/protect.jpg",
    courseIds: ["course-pratica", "course-fundamentos"],
    accent: "#3b9eff",
  },
  {
    id: "trail-patrimonial",
    slug: "associacao-patrimonial",
    title: "Trilha da associação patrimonial",
    subtitle: "Estrutura que protege o que você constrói",
    description:
      "Como pensar holdings, proteção e organização patrimonial com visão internacional.",
    image: "/images/gallery/gallery-12.jpg",
    courseIds: ["course-negocio"],
    accent: "#a78bfa",
  },
  {
    id: "trail-internacional",
    slug: "internacionalizacao",
    title: "Trilha da internacionalização",
    subtitle: "Contas, jurisdições e mobilidade",
    description:
      "Passos para operar além de um único país: contas, estrutura e renda multi-jurisdição.",
    image: "/images/gallery/gallery-13.jpg",
    courseIds: ["course-negocio", "course-pratica"],
    accent: "#34d399",
  },
];

export const challenges: Challenge[] = [
  {
    id: "chal-blindagem",
    slug: "blindagem-financeira",
    title: "Blindagem financeira",
    purpose:
      "Primeiro passo da soberania: proteger patrimônio e reduzir dependência de sistemas frágeis.",
    order: 1,
    image: "/images/events/banners/protect.jpg",
    status: "disponivel",
    levels: [
      {
        id: "bl-l1",
        order: 1,
        title: "Nível 1 · Base soberana",
        summary:
          "Conta internacional, cripto em autocustódia e operação prática fora do circuito tradicional.",
        missions: [
          {
            id: "bl-l1-m1",
            title: "Abrir conta internacional",
            description:
              "Tenha um meio de receber e movimentar recursos fora do sistema bancário doméstico único.",
            links: [
              {
                label: "Guia de contas internacionais (demo)",
                href: "/membros/materiais",
              },
            ],
            done: true,
          },
          {
            id: "bl-l1-m2",
            title: "Usar cripto em autocustódia",
            description:
              "Configure wallet própria e movimente valor sem depender só de corretora.",
            links: [
              {
                label: "Curso Prática com Bitcoin e Liquid",
                href: "/membros/cursos/pratica-bitcoin-liquid",
              },
            ],
            done: true,
          },
          {
            id: "bl-l1-m3",
            title: "Conta no Paraguai",
            description:
              "Estruture uma conta em jurisdição vizinha para diversificar acesso e recebimentos.",
            links: [
              {
                label: "Como receber Pix no Paraguai (conteúdo de apoio)",
                href: "https://www.google.com/search?q=receber+pix+paraguai",
              },
            ],
          },
          {
            id: "bl-l1-m4",
            title: "Cartão para gastar com cripto",
            description:
              "Use um cartão que permita depositar cripto e gastar no dia a dia com mais privacidade.",
            links: [
              {
                label: "nobody.cards · cartão anônimo",
                href: "https://nobody.cards",
              },
            ],
          },
        ],
      },
      {
        id: "bl-l2",
        order: 2,
        title: "Nível 2 · Estrutura internacional",
        summary:
          "LLC e holding patrimonial fora do país para organizar ativos com mais proteção.",
        missions: [
          {
            id: "bl-l2-m1",
            title: "Constituir uma LLC",
            description:
              "Monte uma empresa internacional simples para separar risco pessoal e operacional.",
            links: [
              {
                label: "Trilha da internacionalização",
                href: "/membros/trilhas/internacionalizacao",
              },
            ],
          },
          {
            id: "bl-l2-m2",
            title: "Holding patrimonial no exterior",
            description:
              "Organize patrimônio em estrutura offshore alinhada ao seu perfil e objetivos.",
            links: [
              {
                label: "Trilha da associação patrimonial",
                href: "/membros/trilhas/associacao-patrimonial",
              },
            ],
          },
        ],
      },
      {
        id: "bl-l3",
        order: 3,
        title: "Nível 3 · Cinco bandeiras",
        summary:
          "Holding fora e dentro do país, aplicando a teoria das cinco bandeiras na vida real.",
        missions: [
          {
            id: "bl-l3-m1",
            title: "Holding no exterior + no Brasil",
            description:
              "Combine estruturas doméstica e internacional de forma coerente com seu mapa soberano.",
            links: [
              {
                label: "Trilha para se tornar soberano",
                href: "/membros/trilhas/tornar-se-soberano",
              },
            ],
          },
          {
            id: "bl-l3-m2",
            title: "Aplicar as Cinco Bandeiras",
            description:
              "Defina residência, negócios, ativos, cidadania e playground com intenção — não por improviso.",
            links: [
              {
                label: "Curso Fundamentos da Nova Economia",
                href: "/membros/cursos/fundamentos-nova-economia",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "chal-independencia",
    slug: "independencia-financeira",
    title: "Independência financeira",
    purpose:
      "Segundo passo: renda e autonomia que não dependem de um único emprego, cliente ou país.",
    order: 2,
    image: "/images/events/banners/nova-economia.jpg",
    status: "disponivel",
    levels: [
      {
        id: "ind-l1",
        order: 1,
        title: "Nível 1 · Renda própria",
        summary:
          "Criar pelo menos uma fonte de receita sob seu controle, não só salário.",
        missions: [
          {
            id: "ind-l1-m1",
            title: "Mapear fontes de renda atuais",
            description:
              "Liste o que entra hoje e o quanto depende de um único país ou empregador.",
            links: [
              {
                label: "Modelo de negócio · materiais",
                href: "/membros/materiais",
              },
            ],
            done: true,
          },
          {
            id: "ind-l1-m2",
            title: "Lançar uma oferta própria",
            description:
              "Serviço, produto digital ou consultoria que você controla de ponta a ponta.",
            links: [
              {
                label: "Curso Negócio na Nova Economia",
                href: "/membros/cursos/negocio-na-nova-economia",
              },
            ],
          },
        ],
      },
      {
        id: "ind-l2",
        order: 2,
        title: "Nível 2 · Renda multi-país",
        summary:
          "Receber de mais de uma jurisdição e reduzir risco de concentração.",
        missions: [
          {
            id: "ind-l2-m1",
            title: "Cliente ou receita internacional",
            description:
              "Feche pelo menos uma fonte de receita que não dependa só do mercado local.",
            links: [
              {
                label: "Trilha da internacionalização",
                href: "/membros/trilhas/internacionalizacao",
              },
            ],
          },
          {
            id: "ind-l2-m2",
            title: "Receber em cripto ou conta externa",
            description:
              "Tenha um fluxo de recebimento que não passe exclusivamente pelo sistema doméstico.",
            links: [
              {
                label: "nobody.cards",
                href: "https://nobody.cards",
              },
            ],
          },
        ],
      },
      {
        id: "ind-l3",
        order: 3,
        title: "Nível 3 · Autonomia soberana",
        summary:
          "Renda diversificada + estrutura patrimonial alinhada à sua soberania.",
        missions: [
          {
            id: "ind-l3-m1",
            title: "Três fontes de renda",
            description:
              "Mantenha pelo menos três origens de receita, com uma delas internacional.",
            links: [
              {
                label: "Trilha para se tornar soberano",
                href: "/membros/trilhas/tornar-se-soberano",
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getTrail(slug: string) {
  return trails.find((t) => t.slug === slug);
}

export function getChallenge(slug: string) {
  return challenges.find((c) => c.slug === slug);
}

export function challengeProgress(challenge: Challenge) {
  const missions = challenge.levels.flatMap((l) => l.missions);
  const done = missions.filter((m) => m.done).length;
  return {
    done,
    total: missions.length,
    percent: missions.length
      ? Math.round((done / missions.length) * 100)
      : 0,
  };
}
