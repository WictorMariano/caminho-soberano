"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { ADMIN_DEMO_COOKIE } from "@/lib/admin/demo";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type LoginState = { error: string | null };

const demoCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
};

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  if (!isSupabaseConfigured()) {
    return {
      error:
        "O login com e-mail ainda precisa do Supabase. Use Entrar como convidado para ver o painel local.",
    };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Informe e-mail e senha." };

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error || !data.user) return { error: "E-mail ou senha incorretos." };

  const { data: admin } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", data.user.id)
    .maybeSingle();

  if (!admin) {
    await supabase.auth.signOut();
    return { error: "Este usuário não tem permissão de administrador." };
  }

  const jar = await cookies();
  jar.delete(ADMIN_DEMO_COOKIE);
  redirect("/admin");
}

export async function entrarComoConvidado() {
  const jar = await cookies();
  jar.set(ADMIN_DEMO_COOKIE, "1", demoCookieOptions);
  redirect("/admin");
}

export async function logout() {
  const jar = await cookies();
  jar.delete(ADMIN_DEMO_COOKIE);

  if (isSupabaseConfigured()) {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  }
  redirect("/admin/login");
}
