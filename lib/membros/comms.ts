export type MemberAnnouncement = {
  id: string;
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: string;
  active: boolean;
};

export type MemberNotice = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
  read?: boolean;
};

export const ANNOUNCEMENTS_STORAGE_KEY = "cs_member_announcements_v1";
export const NOTICES_STORAGE_KEY = "cs_member_notices_v1";

export const defaultAnnouncements: MemberAnnouncement[] = [
  {
    id: "anuncio-defi",
    title: "Lista de espera · DeFi Soberano",
    text: "Imersão presencial em São Paulo com Rafael Marques. Entre na lista e seja avisado do lançamento.",
    ctaLabel: "Ver evento",
    ctaHref: "/eventos/defi-soberano",
    image: "/images/gallery/gallery-13.jpg",
    active: true,
  },
  {
    id: "anuncio-edu",
    title: "Edu · Escola Financeira aberta",
    text: "Comece pela Fundação: a Escola de Soberania Financeira já está liberada no seu plano gratuito.",
    ctaLabel: "Abrir Edu",
    ctaHref: "/membros/edu/soberania-financeira",
    image: "/images/events/banners/soberania.jpg",
    active: true,
  },
  {
    id: "anuncio-comunidade",
    title: "Comunidade no WhatsApp",
    text: "Receba avisos rápidos, conteúdos e novidades da jornada Caminho Soberano.",
    ctaLabel: "Entrar na lista",
    ctaHref: "/lista-de-espera#comunidade",
    image: "/images/gallery/gallery-07.jpg",
    active: true,
  },
];

export const defaultNotices: MemberNotice[] = [
  {
    id: "aviso-1",
    title: "Bem-vindo à área de membros",
    body: "Explore o dashboard, a Fundação e o Edu. Qualquer novidade aparece aqui no sininho.",
    createdAt: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    read: false,
  },
  {
    id: "aviso-2",
    title: "Nova trilha em destaque",
    body: "A Trilha da autocustódia foi atualizada com novos materiais de apoio.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    read: false,
  },
  {
    id: "aviso-3",
    title: "Lembrete de estudo",
    body: "Você está a 25 minutos da meta semanal. Um módulo curto já conta.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    read: true,
  },
];

export function parseAnnouncements(raw: string | null): MemberAnnouncement[] {
  if (!raw) return defaultAnnouncements;
  try {
    const parsed = JSON.parse(raw) as MemberAnnouncement[];
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultAnnouncements;
    return parsed;
  } catch {
    return defaultAnnouncements;
  }
}

export function parseNotices(raw: string | null): MemberNotice[] {
  if (!raw) return defaultNotices;
  try {
    const parsed = JSON.parse(raw) as MemberNotice[];
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultNotices;
    return parsed;
  } catch {
    return defaultNotices;
  }
}

export function formatNoticeTime(iso: string) {
  const date = new Date(iso);
  const diffMs = Date.now() - date.getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 60) return `${Math.max(1, mins)} min`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} h`;
  const days = Math.floor(hours / 24);
  return `${days} d`;
}
