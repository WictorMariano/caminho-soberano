import type { Metadata } from "next";

import { AnnouncementCarousel } from "@/components/membros/AnnouncementCarousel";
import { MemberDashboard } from "@/components/membros/MemberDashboard";
import { requireMember } from "@/lib/membros/session";

export const metadata: Metadata = { title: "Início" };

export default async function MembrosHomePage() {
  const { name } = await requireMember();

  return (
    <div className="space-y-6 md:space-y-8">
      <AnnouncementCarousel />
      <MemberDashboard name={name} />
    </div>
  );
}
