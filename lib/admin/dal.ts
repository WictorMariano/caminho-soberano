import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { ADMIN_DEMO_COOKIE, ADMIN_DEMO_EMAIL } from "@/lib/admin/demo";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AdminSession =
  | { status: "unconfigured" }
  | { status: "anonymous" }
  | { status: "forbidden"; email: string }
  | {
      status: "admin";
      email: string;
      demo: true;
      supabase: null;
    }
  | {
      status: "admin";
      email: string;
      demo: false;
      supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>;
    };

export const getAdminSession = cache(async (): Promise<AdminSession> => {
  await connection();

  const jar = await cookies();
  if (jar.get(ADMIN_DEMO_COOKIE)?.value === "1") {
    return {
      status: "admin",
      email: ADMIN_DEMO_EMAIL,
      demo: true,
      supabase: null,
    };
  }

  if (!isSupabaseConfigured()) return { status: "unconfigured" };

  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;
  if (!userId) return { status: "anonymous" };

  const email = String(data.claims.email ?? "");
  const { data: admin } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", userId)
    .maybeSingle();

  return admin
    ? { status: "admin", email, demo: false, supabase }
    : { status: "forbidden", email };
});

export async function requireAdmin() {
  const session = await getAdminSession();
  if (session.status === "admin") return session;
  redirect(
    session.status === "forbidden"
      ? "/admin/login?erro=sem-permissao"
      : "/admin/login",
  );
}
