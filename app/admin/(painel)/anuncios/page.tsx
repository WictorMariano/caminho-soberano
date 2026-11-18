import type { Metadata } from "next";

import { AnnouncementsAdminPanel } from "@/components/admin/CommsAdminPanels";
import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";

export const metadata: Metadata = { title: "Anúncios" };

export default async function AdminAnunciosPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Anúncios (carrossel)"
        description="Banners que aparecem no topo do dashboard dos membros. Ideal para eventos, lançamentos e avisos da plataforma."
      />
      <AnnouncementsAdminPanel />
    </div>
  );
}
