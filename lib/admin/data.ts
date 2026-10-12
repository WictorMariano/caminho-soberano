import type { AdminSession } from "@/lib/admin/dal";

type AdminClient = Extract<AdminSession, { status: "admin" }>["supabase"];

export type WaitlistSignup = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  state: string;
  interests: string[];
  preferred_city: string;
  preferred_state: string;
  october_event: boolean;
};

export type CommunitySignup = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  whatsapp: string;
  city: string;
  region: string;
};

const MAX_ROWS = 10000;

export async function fetchWaitlistSignups(supabase: AdminClient): Promise<WaitlistSignup[]> {
  const { data, error } = await supabase
    .from("waitlist_signups")
    .select("id, created_at, name, email, whatsapp, city, state, interests, preferred_city, preferred_state, october_event")
    .order("created_at", { ascending: false })
    .limit(MAX_ROWS);
  if (error) throw error;
  return (data ?? []) as WaitlistSignup[];
}

export async function fetchCommunitySignups(supabase: AdminClient): Promise<CommunitySignup[]> {
  const { data, error } = await supabase
    .from("community_signups")
    .select("id, created_at, name, email, whatsapp, city, region")
    .order("created_at", { ascending: false })
    .limit(MAX_ROWS);
  if (error) throw error;
  return (data ?? []) as CommunitySignup[];
}

const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function formatDateTime(iso: string) {
  return dateTimeFormat.format(new Date(iso));
}

export function whatsappLink(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const withCountry = digits.length <= 11 ? `55${digits}` : digits;
  return `https://wa.me/${withCountry}`;
}

export function matchesSearch(query: string, ...values: string[]) {
  if (!query) return true;
  const needle = normalize(query);
  return values.some((value) => normalize(value).includes(needle));
}

export function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
