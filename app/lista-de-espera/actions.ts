"use server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { brazilianRegions, brazilianStates, interestOptions } from "@/lib/waitlist";
import { HONEYPOT_FIELD, type SignupFormState } from "@/lib/waitlist-form";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const stateCodes = new Set<string>(brazilianStates.map(([uf]) => uf));
const regionSet = new Set<string>(brazilianRegions);
const interestSet = new Set<string>(interestOptions);

const GENERIC_ERROR = "Não foi possível concluir seu cadastro agora. Tente novamente em alguns minutos.";

function text(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

function firstName(name: string) {
  return name.split(/\s+/)[0] ?? "";
}

type Common = { name: string; email: string; whatsapp: string; city: string };

function validateCommon(formData: FormData): Common | string {
  const name = text(formData, "name", 120);
  const email = text(formData, "email", 254).toLowerCase();
  const whatsapp = text(formData, "whatsapp", 24);
  const city = text(formData, "city", 100);
  const digits = whatsapp.replace(/\D/g, "");

  if (name.length < 2) return "Informe seu nome completo.";
  if (!EMAIL_PATTERN.test(email)) return "Informe um e-mail válido.";
  if (digits.length < 10 || digits.length > 13) return "Informe um WhatsApp válido, com DDD.";
  if (city.length < 2) return "Informe sua cidade.";
  if (formData.get("consent") !== "on") return "Confirme o consentimento para continuar.";
  return { name, email, whatsapp, city };
}

function isBot(formData: FormData) {
  return String(formData.get(HONEYPOT_FIELD) ?? "").length > 0;
}

export async function submitWaitlist(
  _prev: SignupFormState,
  formData: FormData,
): Promise<SignupFormState> {
  const common = validateCommon(formData);
  if (typeof common === "string") return { status: "error", message: common };
  if (isBot(formData)) return { status: "success", firstName: firstName(common.name) };

  const state = text(formData, "state", 2).toUpperCase();
  const preferredCity = text(formData, "preferredCity", 100);
  const preferredState = text(formData, "preferredState", 2).toUpperCase();
  const interests = formData
    .getAll("interests")
    .map(String)
    .filter((interest) => interestSet.has(interest));

  if (!stateCodes.has(state)) return { status: "error", message: "Selecione seu estado." };
  if (preferredCity.length < 2) return { status: "error", message: "Informe a cidade desejada para o próximo evento." };
  if (!stateCodes.has(preferredState)) return { status: "error", message: "Selecione o estado desejado para o próximo evento." };

  try {
    const { error } = await createSupabaseAdminClient().from("waitlist_signups").insert({
      name: common.name,
      email: common.email,
      whatsapp: common.whatsapp,
      city: common.city,
      state,
      interests,
      preferred_city: preferredCity,
      preferred_state: preferredState,
      october_event: formData.get("octoberEvent") === "on",
      consent: true,
    });
    if (error) throw error;
  } catch (error) {
    console.error("submitWaitlist", error);
    return { status: "error", message: GENERIC_ERROR };
  }

  return { status: "success", firstName: firstName(common.name) };
}

export async function submitCommunity(
  _prev: SignupFormState,
  formData: FormData,
): Promise<SignupFormState> {
  const common = validateCommon(formData);
  if (typeof common === "string") return { status: "error", message: common };
  if (isBot(formData)) return { status: "success", firstName: firstName(common.name) };

  const region = text(formData, "region", 40);
  if (!regionSet.has(region)) return { status: "error", message: "Selecione sua região." };

  try {
    const { error } = await createSupabaseAdminClient().from("community_signups").insert({
      name: common.name,
      email: common.email,
      whatsapp: common.whatsapp,
      city: common.city,
      region,
      consent: true,
    });
    if (error) throw error;
  } catch (error) {
    console.error("submitCommunity", error);
    return { status: "error", message: GENERIC_ERROR };
  }

  return { status: "success", firstName: firstName(common.name) };
}
