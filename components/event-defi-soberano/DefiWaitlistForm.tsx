"use client";

import { useActionState } from "react";

import { submitDefiWaitlist } from "@/app/eventos/defi-soberano/actions";
import {
  HoneypotField,
  SignupError,
  SignupSuccess,
} from "@/components/waitlist/SignupFeedback";
import {
  defiAvailability,
  defiEventMeta,
  defiInterests,
  defiLevels,
  defiMentorshipInterest,
} from "@/lib/event-defi-soberano";
import { brazilianStates } from "@/lib/waitlist";
import { initialSignupState } from "@/lib/waitlist-form";

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/12 bg-[#07151d] px-3.5 py-3 text-base text-white outline-none transition placeholder:text-white/35 focus:border-accent focus:ring-2 focus:ring-accent/20";
const labelClass = "block text-xs font-medium text-white/70";

export function DefiWaitlistForm() {
  const [state, formAction, pending] = useActionState(submitDefiWaitlist, initialSignupState);

  if (state.status === "success") {
    return (
      <SignupSuccess
        title={`Recebido, ${state.firstName}.`}
        text="Você entrou na lista de espera do DeFi Soberano. Avisaremos quando data, local e condições forem definidos."
      />
    );
  }

  return (
    <form action={formAction} className="relative space-y-5">
      <HoneypotField />
      <label className={labelClass}>
        Nome completo
        <input name="name" autoComplete="name" required maxLength={120} className={fieldClass} placeholder="Como podemos chamar você?" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          E-mail
          <input name="email" type="email" autoComplete="email" required maxLength={254} className={fieldClass} placeholder="voce@exemplo.com" />
        </label>
        <label className={labelClass}>
          WhatsApp com DDD
          <input name="whatsapp" type="tel" autoComplete="tel" required maxLength={24} className={fieldClass} placeholder="(11) 99999-9999" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Cidade
          <input name="city" autoComplete="address-level2" required maxLength={100} className={fieldClass} placeholder="Onde você mora" />
        </label>
        <label className={labelClass}>
          Estado
          <select name="state" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Selecione
            </option>
            {brazilianStates.map(([uf, name]) => (
              <option key={uf} value={uf}>
                {uf} — {name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Nível em DeFi
          <select name="defiLevel" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Selecione
            </option>
            {defiLevels.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Principal interesse
          <select name="mainInterest" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Selecione
            </option>
            {defiInterests.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Pode ir a São Paulo?
          <select name="spAvailability" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Selecione
            </option>
            {defiAvailability.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClass}>
          Interesse em mentoria futura?
          <select name="mentorshipInterest" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Selecione
            </option>
            {defiMentorshipInterest.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex items-start gap-3 text-sm text-white/70">
        <input type="checkbox" name="consent" required className="mt-1 rounded border-white/20 bg-transparent text-accent" />
        <span>
          Autorizo o Caminho Soberano a me contatar sobre a lista de espera do {defiEventMeta.title}.
        </span>
      </label>
      <label className="flex items-start gap-3 text-sm text-white/55">
        <input type="checkbox" name="marketing" className="mt-1 rounded border-white/20 bg-transparent text-accent" />
        <span>Quero também receber conteúdos e avisos da comunidade.</span>
      </label>

      {state.status === "error" ? <SignupError message={state.message} /> : null}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-accent-ink transition hover:brightness-105 disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Enviando..." : defiEventMeta.cta}
      </button>
    </form>
  );
}
