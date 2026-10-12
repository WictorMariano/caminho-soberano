import type { NextRequest } from "next/server";

import { requireAdmin } from "@/lib/admin/dal";
import { fetchCommunitySignups, fetchWaitlistSignups } from "@/lib/admin/data";
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
  const { supabase } = await requireAdmin();
  const { lista } = await params;
  const query = Object.fromEntries(request.nextUrl.searchParams);
  const today = new Date().toISOString().slice(0, 10);

  let csv: string;
  if (lista === "lista-de-espera") {
    const rows = filterWaitlist(await fetchWaitlistSignups(supabase), parseWaitlistFilters(query));
    csv = waitlistCsv(rows);
  } else if (lista === "grupo-whatsapp") {
    const rows = filterCommunity(await fetchCommunitySignups(supabase), parseCommunityFilters(query));
    csv = communityCsv(rows);
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
