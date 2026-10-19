import type { NextRequest } from "next/server";

import { requireAdmin } from "@/lib/admin/dal";
import { fetchCommunitySignups, fetchWaitlistSignups } from "@/lib/admin/data";
import {
  demoCommunitySignups,
  demoWaitlistSignups,
} from "@/lib/admin/demo";
import {
  communityCsv,
  filterCommunity,
  filterWaitlist,
  parseCommunityFilters,
  parseWaitlistFilters,
  waitlistCsv,
} from "@/lib/admin/filters";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ lista: string }> },
) {
  const session = await requireAdmin();
  const { lista } = await params;
  const query = Object.fromEntries(request.nextUrl.searchParams);
  const today = new Date().toISOString().slice(0, 10);

  let csv: string;
  if (lista === "lista-de-espera") {
    const source = session.demo
      ? demoWaitlistSignups
      : await fetchWaitlistSignups(session.supabase);
    csv = waitlistCsv(filterWaitlist(source, parseWaitlistFilters(query)));
  } else if (lista === "grupo-whatsapp") {
    const source = session.demo
      ? demoCommunitySignups
      : await fetchCommunitySignups(session.supabase);
    csv = communityCsv(filterCommunity(source, parseCommunityFilters(query)));
  } else {
    return new Response("Lista não encontrada", { status: 404 });
  }

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${lista}-${today}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
