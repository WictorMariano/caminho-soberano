import { normalize, type CommunitySignup, type WaitlistSignup } from "@/lib/admin/data";
import { brazilianStates } from "@/lib/waitlist";

export type RankItem = { label: string; count: number };
export type DayPoint = { day: string; label: string; waitlist: number; community: number };

const stateNames = new Map<string, string>(brazilianStates.map(([uf, name]) => [uf, name]));
const DAY_MS = 24 * 60 * 60 * 1000;

const dayKeyFormat = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/Sao_Paulo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

function dayKey(date: Date) {
  return dayKeyFormat.format(date);
}

function rank(values: string[], limit = 8): RankItem[] {
  const counts = new Map<string, RankItem>();
  for (const raw of values) {
    const label = raw.trim();
    if (!label) continue;
    const key = normalize(label);
    const current = counts.get(key);
    if (current) current.count += 1;
    else counts.set(key, { label, count: 1 });
  }
  return [...counts.values()].sort((a, b) => b.count - a.count).slice(0, limit);
}

function countSince(rows: { created_at: string }[], days: number, now: number) {
  const since = now - days * DAY_MS;
  return rows.filter((row) => new Date(row.created_at).getTime() >= since).length;
}

export function computeDashboardStats(
  waitlist: WaitlistSignup[],
  community: CommunitySignup[],
  now = Date.now(),
) {
  const days: DayPoint[] = [];
  for (let i = 29; i >= 0; i -= 1) {
    const date = new Date(now - i * DAY_MS);
    const day = dayKey(date);
    days.push({ day, label: `${day.slice(8, 10)}/${day.slice(5, 7)}`, waitlist: 0, community: 0 });
  }
  const byDay = new Map(days.map((point) => [point.day, point]));
  for (const row of waitlist) {
    const point = byDay.get(dayKey(new Date(row.created_at)));
    if (point) point.waitlist += 1;
  }
  for (const row of community) {
    const point = byDay.get(dayKey(new Date(row.created_at)));
    if (point) point.community += 1;
  }

  const stateLabel = (uf: string) => stateNames.get(uf) ?? uf;

  return {
    totals: {
      waitlist: waitlist.length,
      community: community.length,
      waitlistLast7: countSince(waitlist, 7, now),
      communityLast7: countSince(community, 7, now),
      waitlistLast30: countSince(waitlist, 30, now),
      communityLast30: countSince(community, 30, now),
      octoberEvent: waitlist.filter((row) => row.october_event).length,
    },
    days,
    interests: rank(waitlist.flatMap((row) => row.interests), 10),
    preferredCities: rank(waitlist.map((row) => `${row.preferred_city} (${row.preferred_state})`)),
    preferredStates: rank(waitlist.map((row) => stateLabel(row.preferred_state))),
    residenceStates: rank(waitlist.map((row) => stateLabel(row.state))),
    communityRegions: rank(community.map((row) => row.region)),
    communityCities: rank(community.map((row) => row.city)),
  };
}

export type DashboardStats = ReturnType<typeof computeDashboardStats>;
