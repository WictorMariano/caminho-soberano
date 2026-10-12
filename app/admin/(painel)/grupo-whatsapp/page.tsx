import type { Metadata } from "next";

import { DataError, PageHeader } from "@/components/admin/AdminUi";
import { CommunityListView } from "@/components/admin/CommunityListView";
import { requireAdmin } from "@/lib/admin/dal";
import { fetchCommunitySignups, type CommunitySignup } from "@/lib/admin/data";
import { parseCommunityFilters } from "@/lib/admin/filters";

export const metadata: Metadata = { title: "Grupo do WhatsApp" };

export default async function AdminCommunityPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { supabase } = await requireAdmin();
  const filters = parseCommunityFilters(await searchParams);

  let rows: CommunitySignup[] | null = null;
  try {
    rows = await fetchCommunitySignups(supabase);
  } catch (error) {
    console.error("AdminCommunityPage", error);
  }

  if (!rows) {
    return (
      <>
        <PageHeader title="Grupo do WhatsApp" />
        <DataError />
      </>
    );
  }

  return <CommunityListView rows={rows} filters={filters} />;
}
