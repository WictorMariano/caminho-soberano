import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import {
  MEMBER_DEMO_COOKIE,
  MEMBER_DEMO_EMAIL,
  MEMBER_DEMO_NAME,
} from "@/lib/membros/demo";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type MemberSession =
  | { status: "anonymous" }
  | { status: "member"; email: string; name: string; demo: true }
  | { status: "member"; email: string; name: string; demo: false; userId: string };

function displayName(value: string) {
  const name = value.trim();
  if (name.length >= 2) return name.slice(0, 120);
  return "Membro";
}

export const getMemberSession = cache(async (): Promise<MemberSession> => {
  await connection();

  if (isSupabaseConfigured()) {
    const supabase = await createSupabaseServerClient();
    const { data } = await supabase.auth.getClaims();
    const userId = data?.claims?.sub;
    const email = String(data?.claims?.email ?? "").trim().toLowerCase();

    if (userId && email) {
      const { data: existing } = await supabase
        .from("members")
        .select("name, email")
        .eq("user_id", userId)
        .maybeSingle();

      if (existing?.name && existing.email) {
        return {
          status: "member",
          email: existing.email,
          name: existing.name,
          demo: false,
          userId,
        };
      }

      const claims = data?.claims as { user_metadata?: { name?: string } } | undefined;
      const name = displayName(String(claims?.user_metadata?.name ?? email.split("@")[0] ?? ""));
      try {
        const admin = createSupabaseAdminClient();
        await admin.from("members").upsert({
          user_id: userId,
          email,
          name,
        });
      } catch {
        // A conta autenticada entra mesmo se a tabela de perfis ainda não existir.
      }
      return { status: "member", email, name, demo: false, userId };
    }
  }

  const jar = await cookies();
  if (jar.get(MEMBER_DEMO_COOKIE)?.value === "1") {
    return {
      status: "member",
      email: MEMBER_DEMO_EMAIL,
      name: MEMBER_DEMO_NAME,
      demo: true,
    };
  }

  return { status: "anonymous" };
});

export async function requireMember() {
  const session = await getMemberSession();
  if (session.status === "member") return session;
  redirect("/membros/login");
}
