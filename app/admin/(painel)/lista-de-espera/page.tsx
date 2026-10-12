import type { Metadata } from "next";

import { DataError, PageHeader } from "@/components/admin/AdminUi";
import { WaitlistListView } from "@/components/admin/WaitlistListView";
import { requireAdmin } from "@/lib/admin/dal";
import { fetchWaitlistSignups, type WaitlistSignup } from "@/lib/admin/data";
import { parseWaitlistFilters } from "@/lib/admin/filters";

export const metadata: Metadata = { title: "Lista de espera" };

export default async function AdminWaitlistPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { supabase } = await requireAdmin();
  const filters = parseWaitlistFilters(await searchParams);

  let rows: WaitlistSignup[] | null = null;
  try {
    rows = await fetchWaitlistSignups(supabase);
  } catch (error) {
    console.error("AdminWaitlistPage", error);
  }

  if (!rows) {
    return (
      <>
        <PageHeader title="Lista de espera" />
        <DataError />
      </>
    );
  }

  return <WaitlistListView rows={rows} filters={filters} />;
}
