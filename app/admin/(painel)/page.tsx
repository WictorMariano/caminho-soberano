import type { Metadata } from "next";

import { DataError, PageHeader } from "@/components/admin/AdminUi";
import { DashboardView } from "@/components/admin/DashboardView";
import { requireAdmin } from "@/lib/admin/dal";
import { fetchCommunitySignups, fetchWaitlistSignups } from "@/lib/admin/data";
import { computeDashboardStats } from "@/lib/admin/stats";

export const metadata: Metadata = { title: "Dashboard" };

export default async function AdminDashboardPage() {
  const { supabase } = await requireAdmin();

  let stats;
  try {
    const [waitlist, community] = await Promise.all([
      fetchWaitlistSignups(supabase),
      fetchCommunitySignups(supabase),
    ]);
    stats = computeDashboardStats(waitlist, community);
  } catch (error) {
    console.error("AdminDashboardPage", error);
  }

  if (!stats) {
    return (
      <>
        <PageHeader title="Dashboard" />
        <DataError />
      </>
    );
  }

  return <DashboardView stats={stats} />;
}
