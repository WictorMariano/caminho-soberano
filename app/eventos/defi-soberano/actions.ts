"use server";

import {
  defiAvailability,
  defiInterests,
  defiLevels,
  defiMentorshipInterest,
} from "@/lib/event-defi-soberano";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { brazilianStates } from "@/lib/waitlist";
import { HONEYPOT_FIELD, type SignupFormState } from "@/lib/waitlist-form";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const stateCodes = new Set(brazilianStates.map(([uf]) => uf));
const levelSet = new Set(defiLevels.map((item) => item.value));
const interestSet = new Set(defiInterests.map((item) => item.value));
const availabilitySet = new Set(defiAvailability.map((item) => item.value));
const mentorshipSet = new Set(defiMentorshipInterest.map((item) => item.value));

const GENERIC_ERROR =
  "Não foi possível concluir seu cadastro agora. Tente novamente em alguns minutos.";

function text(formData: FormData, key: string, max: number) {
  return String(formData.get(key) ?? "").trim().slice(0, max);
}

function firstName(name: string) {
  return name.split(/\s+/)[0] ?? "";
}

export async function submitDefiWaitlist(
  _prev: SignupFormState,
  formData: FormData,
): Promise<SignupFormState> {
  const name = text(formData, "name", 120);
  const email = text(formData, "email", 254).toLowerCase();
  const whatsapp = text(formData, "whatsapp", 24);
  const city = text(formData, "city", 100);
  const state = text(formData, "state", 2).toUpperCase();
  const defiLevel = text(formData, "defiLevel", 40);
  const mainInterest = text(formData, "mainInterest", 40);
  const spAvailability = text(formData, "spAvailability", 20);
  const mentorshipInterest = text(formData, "mentorshipInterest", 10);
  const digits = whatsapp.replace(/\D/g, "");

  if (String(formData.get(HONEYPOT_FIELD) ?? "").length > 0) {
    return { status: "success", firstName: firstName(name || "amigo") };
  }

  if (name.length < 2) return { status: "error", message: "Informe seu nome completo." };
  if (!EMAIL_PATTERN.test(email)) return { status: "error", message: "Informe um e-mail válido." };
  if (digits.length < 10 || digits.length > 13) {
    return { status: "error", message: "Informe um WhatsApp válido, com DDD." };
  }
  if (city.length < 2) return { status: "error", message: "Informe sua cidade." };
  if (!stateCodes.has(state as (typeof brazilianStates)[number][0])) {
    return { status: "error", message: "Selecione seu estado." };
  }
  if (!levelSet.has(defiLevel as (typeof defiLevels)[number]["value"])) {
    return { status: "error", message: "Selecione seu nível em DeFi." };
  }
  if (!interestSet.has(mainInterest as (typeof defiInterests)[number]["value"])) {
    return { status: "error", message: "Selecione seu principal interesse." };
  }
  if (!availabilitySet.has(spAvailability as (typeof defiAvailability)[number]["value"])) {
    return { status: "error", message: "Informe se você pode ir a São Paulo." };
  }
  if (!mentorshipSet.has(mentorshipInterest as (typeof defiMentorshipInterest)[number]["value"])) {
    return { status: "error", message: "Informe se tem interesse em mentoria." };
  }
  if (formData.get("consent") !== "on") {
    return { status: "error", message: "Confirme o consentimento para continuar." };
  }

  try {
    const { error } = await createSupabaseAdminClient().from("defi_waitlist_signups").insert({
      name,
      email,
      whatsapp,
      city,
      state,
      defi_level: defiLevel,
      main_interest: mainInterest,
      sp_availability: spAvailability,
      mentorship_interest: mentorshipInterest,
      marketing_opt_in: formData.get("marketing") === "on",
      consent: true,
    });
    if (error) throw error;
  } catch (error) {
    console.error("submitDefiWaitlist", error);
    return { status: "error", message: GENERIC_ERROR };
  }

  return { status: "success", firstName: firstName(name) };
}
