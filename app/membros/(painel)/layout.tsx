import { MemberShell } from "@/components/membros/MemberShell";
import { requireMember } from "@/lib/membros/session";

export default async function MembrosPainelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { name, email } = await requireMember();
  return (
    <MemberShell name={name} email={email}>
      {children}
    </MemberShell>
  );
}
