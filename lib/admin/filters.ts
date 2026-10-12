import {
  formatDateTime,
  matchesSearch,
  type CommunitySignup,
  type WaitlistSignup,
} from "@/lib/admin/data";

export type WaitlistFilters = { q: string; tema: string; estado: string };
export type CommunityFilters = { q: string; regiao: string };

type RawParams = Record<string, string | string[] | undefined>;

function param(params: RawParams, key: string) {
  const value = params[key];
  return (Array.isArray(value) ? value[0] : value ?? "").trim().slice(0, 100);
}

export function parseWaitlistFilters(params: RawParams): WaitlistFilters {
  return { q: param(params, "q"), tema: param(params, "tema"), estado: param(params, "estado") };
}

export function parseCommunityFilters(params: RawParams): CommunityFilters {
  return { q: param(params, "q"), regiao: param(params, "regiao") };
}

export function filterWaitlist(rows: WaitlistSignup[], { q, tema, estado }: WaitlistFilters) {
  return rows.filter(
    (row) =>
      matchesSearch(q, row.name, row.email, row.city, row.preferred_city, row.whatsapp) &&
      (!tema || row.interests.includes(tema)) &&
      (!estado || row.preferred_state === estado),
  );
}

export function filterCommunity(rows: CommunitySignup[], { q, regiao }: CommunityFilters) {
  return rows.filter(
    (row) =>
      matchesSearch(q, row.name, row.email, row.city, row.whatsapp) &&
      (!regiao || row.region === regiao),
  );
}

function csvCell(value: string) {
  const safe = /^[=+\-@]/.test(value) ? `'${value}` : value;
  return `"${safe.replace(/"/g, '""')}"`;
}

/** Separador ";" e BOM para o Excel em português abrir acentos e colunas corretamente. */
function toCsv(header: string[], rows: string[][]) {
  return "\uFEFF" + [header, ...rows].map((line) => line.map(csvCell).join(";")).join("\r\n");
}

export function waitlistCsv(rows: WaitlistSignup[]) {
  return toCsv(
    ["Data", "Nome", "E-mail", "WhatsApp", "Cidade", "Estado", "Temas", "Cidade desejada", "Estado desejado", "Interesse 31/10"],
    rows.map((row) => [
      formatDateTime(row.created_at),
      row.name,
      row.email,
      row.whatsapp,
      row.city,
      row.state,
      row.interests.join(", "),
      row.preferred_city,
      row.preferred_state,
      row.october_event ? "Sim" : "Não",
    ]),
  );
}

export function communityCsv(rows: CommunitySignup[]) {
  return toCsv(
    ["Data", "Nome", "E-mail", "WhatsApp", "Cidade", "Região"],
    rows.map((row) => [formatDateTime(row.created_at), row.name, row.email, row.whatsapp, row.city, row.region]),
  );
}

export function toQueryString(filters: Record<string, string>) {
  const search = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value) search.set(key, value);
  });
  const query = search.toString();
  return query ? `?${query}` : "";
}
