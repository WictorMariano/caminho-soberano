import type { Metadata } from "next";

import { PageListAssign } from "@/components/admin/PageListAssign";
import { PageHeader } from "@/components/admin/AdminUi";
import { requireAdmin } from "@/lib/admin/dal";
import { captureLists, capturePages } from "@/lib/platform/demo";

export const metadata: Metadata = { title: "Páginas de captura" };

export default async function AdminPaginasPage() {
  await requireAdmin();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Páginas de captura"
        description="Atribua cada página (ou formulário) a uma lista. Quando alguém se cadastrar, o lead entra na lista certa."
      />
      <PageListAssign pages={capturePages} lists={captureLists} />
    </div>
  );
}
