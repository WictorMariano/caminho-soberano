import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdmin } from "@/lib/admin/dal";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const { email } = await requireAdmin();
  return <AdminShell email={email}>{children}</AdminShell>;
}
