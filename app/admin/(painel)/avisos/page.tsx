import type { Metadata } from "next";

import { NoticesAdminPanel } from "@/components/admin/CommsAdminPanels";
import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";

export const metadata: Metadata = { title: "Avisos" };

export default async function AdminAvisosPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Avisos rápidos"
        description="Mensagens curtas que chegam no sininho da área de membros — como notificações do Instagram."
      />
      <NoticesAdminPanel />
    </div>
  );
}
