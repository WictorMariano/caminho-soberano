"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { MEMBER_DEMO_COOKIE } from "@/lib/membros/demo";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AuthState = { error: string | null };
export type AccountState = { error: string | null; message: string | null };

const initialAccount: AccountState = { error: null, message: null };

function readName(value: FormDataEntryValue | null) {
  return String(value ?? "").trim().replace(/\s+/g, " ");
}

function readEmail(value: FormDataEntryValue | null) {
  return String(value ?? "").trim().toLowerCase();
}

export async function cadastrarMembro(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) {
    return { error: "O cadastro ainda não está ligado ao banco." };
  }

  const name = readName(formData.get("name"));
  const email = readEmail(formData.get("email"));
  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");

  if (name.length < 2 || name.length > 120) {
    return { error: "Informe seu nome com pelo menos 2 letras." };
  }
  if (!email.includes("@") || email.length > 254) {
    return { error: "Informe um e-mail válido." };
  }
  if (password.length < 8) {
    return { error: "A senha precisa ter pelo menos 8 caracteres." };
  }
  if (password !== confirm) {
    return { error: "As senhas não coincidem." };
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { name },
  });

  if (error || !data.user) {
    const message = error?.message.toLowerCase() ?? "";
    if (message.includes("already") || message.includes("registered") || message.includes("exists")) {
      return { error: "Já existe uma conta com esse e-mail. Entre com a senha." };
    }
    return { error: "Não foi possível criar a conta. Tente outro e-mail." };
  }

  const { error: profileError } = await admin.from("members").upsert({
    user_id: data.user.id,
    email,
    name,
  });
  if (profileError) {
    return { error: "A conta foi criada, mas o perfil não foi salvo. Tente entrar." };
  }

  const supabase = await createSupabaseServerClient();
  const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
  if (signInError) {
    return { error: "Conta criada. Entre com o e-mail e a senha." };
  }

  const jar = await cookies();
  jar.delete(MEMBER_DEMO_COOKIE);
  redirect("/membros");
}

export async function loginMembro(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!isSupabaseConfigured()) {
    return { error: "O login ainda não está ligado ao banco." };
  }

  const email = readEmail(formData.get("email"));
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Informe e-mail e senha." };

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) return { error: "E-mail ou senha incorretos." };

  const admin = createSupabaseAdminClient();
  const { data: existing } = await admin
    .from("members")
    .select("user_id")
    .eq("user_id", data.user.id)
    .maybeSingle();
  if (existing) {
    await admin.from("members").update({ email }).eq("user_id", data.user.id);
  } else {
    await admin.from("members").insert({
      user_id: data.user.id,
      email,
      name: displayNameFromUser(data.user.user_metadata?.name, email),
    });
  }

  const jar = await cookies();
  jar.delete(MEMBER_DEMO_COOKIE);
  redirect("/membros");
}

export async function atualizarEmailMembro(
  _prev: AccountState,
  formData: FormData,
): Promise<AccountState> {
  if (!isSupabaseConfigured()) return { error: "O banco não está ligado.", message: null };

  const email = readEmail(formData.get("email"));
  if (!email.includes("@") || email.length > 254) {
    return { error: "Informe um e-mail válido.", message: null };
  }

  const supabase = await createSupabaseServerClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;
  if (!userId) return { error: "Entre de novo para alterar o e-mail.", message: null };

  const { data, error } = await supabase.auth.updateUser({ email });
  if (error || !data.user) {
    return { error: "Não foi possível trocar o e-mail.", message: null };
  }

  if (data.user.email?.toLowerCase() === email) {
    const admin = createSupabaseAdminClient();
    await admin.from("members").update({ email }).eq("user_id", userId);
    return { error: null, message: "E-mail atualizado." };
  }

  return { error: null, message: "Enviamos a confirmação para o novo e-mail." };
}

export async function atualizarSenhaMembro(
  _prev: AccountState,
  formData: FormData,
): Promise<AccountState> {
  if (!isSupabaseConfigured()) return { error: "O banco não está ligado.", message: null };

  const current = String(formData.get("current") ?? "");
  const next = String(formData.get("next") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  if (!current || !next) return { error: "Informe a senha atual e a nova senha.", message: null };
  if (next.length < 8) return { error: "A nova senha precisa ter pelo menos 8 caracteres.", message: null };
  if (next !== confirm) return { error: "A confirmação não coincide com a nova senha.", message: null };

  const supabase = await createSupabaseServerClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const email = String(claimsData?.claims?.email ?? "").trim().toLowerCase();
  if (!email) return { error: "Entre de novo para alterar a senha.", message: null };

  const { error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password: current,
  });
  if (signInError) return { error: "A senha atual está incorreta.", message: null };

  const { error } = await supabase.auth.updateUser({ password: next });
  if (error) return { error: "Não foi possível trocar a senha.", message: null };
  return { ...initialAccount, message: "Senha atualizada." };
}

export async function logoutMembro() {
  const jar = await cookies();
  jar.delete(MEMBER_DEMO_COOKIE);
  if (isSupabaseConfigured()) {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  }
  redirect("/membros/login");
}

function displayNameFromUser(value: unknown, email: string) {
  const name = String(value ?? "").trim();
  if (name.length >= 2) return name.slice(0, 120);
  const fromEmail = email.split("@")[0] ?? "";
  return fromEmail.length >= 2 ? fromEmail.slice(0, 120) : "Membro";
}
