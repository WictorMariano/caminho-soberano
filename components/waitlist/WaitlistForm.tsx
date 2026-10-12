"use client";

import Link from "next/link";
import { startTransition, useActionState, type FormEvent } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { submitWaitlist } from "@/app/lista-de-espera/actions";
import { HoneypotField, SignupError, SignupSuccess } from "@/components/waitlist/SignupFeedback";
import { brazilianStates, interestOptions } from "@/lib/waitlist";
import { initialSignupState } from "@/lib/waitlist-form";

const fieldClass = "mt-2 w-full min-w-0 rounded-xl border border-white/15 bg-[#081626] px-3.5 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-accent focus:ring-2 focus:ring-accent/20";
const labelClass = "block text-xs font-medium text-slate-300";

function StateSelect({ id, name, label, autoComplete }: { id: string; name: string; label: string; autoComplete?: string }) {
  return <label htmlFor={id} className={labelClass}>{label}
    <select id={id} name={name} required autoComplete={autoComplete} defaultValue="" className={fieldClass}>
      <option value="" disabled>Selecione</option>
      {brazilianStates.map(([uf, state]) => <option key={uf} value={uf}>{state}</option>)}
    </select>
  </label>;
}

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(submitWaitlist, initialSignupState);

  // Envio manual para o React não limpar os campos quando o servidor devolver erro.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  if (state.status === "success") {
    return (
      <div id="cadastro" className="scroll-mt-28 rounded-[1.75rem] border border-white/15 bg-[#102238]/95 p-5 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)] sm:p-8">
        <SignupSuccess
          title={state.firstName ? `Você está na lista, ${state.firstName}!` : "Você está na lista!"}
          text="Seus interesses e a cidade que você escolheu vão ajudar a definir os próximos encontros. Avisaremos você por e-mail e WhatsApp quando houver novidades."
        />
      </div>
    );
  }

  return (
    <div id="cadastro" className="scroll-mt-28 rounded-[1.75rem] border border-white/15 bg-[#102238]/95 p-5 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)] sm:p-8">
      <div className="mb-7 flex items-start justify-between gap-4">
        <div><p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Seu próximo passo</p><h2 className="mt-2 text-2xl font-bold tracking-tight text-white">Faça parte da lista.</h2><p className="mt-2 text-sm leading-relaxed text-slate-400">Sua cidade e seus interesses ajudam a construir os próximos encontros.</p></div>
        <span className="shrink-0 rounded-full border border-accent/25 bg-accent/10 p-3 text-accent" aria-hidden><ArrowUpRight size={22} /></span>
      </div>
      <form onSubmit={handleSubmit} className="relative space-y-5">
        <HoneypotField />
        <fieldset className="space-y-4">
          <legend className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">01 / Sobre você</legend>
          <label htmlFor="waitlist-name" className={labelClass}>Nome completo
            <input id="waitlist-name" name="name" autoComplete="name" required maxLength={120} placeholder="Como podemos chamar você?" className={fieldClass} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="waitlist-email" className={labelClass}>E-mail
              <input id="waitlist-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="voce@exemplo.com" className={fieldClass} />
            </label>
            <label htmlFor="waitlist-phone" className={labelClass}>WhatsApp com DDD
              <input id="waitlist-phone" name="whatsapp" type="tel" autoComplete="tel" required maxLength={24} placeholder="(11) 99999-9999" className={fieldClass} />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="waitlist-city" className={labelClass}>Sua cidade
              <input id="waitlist-city" name="city" autoComplete="address-level2" required maxLength={100} placeholder="Onde você mora" className={fieldClass} />
            </label>
            <StateSelect id="waitlist-state" name="state" label="Seu estado" autoComplete="address-level1" />
          </div>
        </fieldset>
        <fieldset className="border-t border-white/10 pt-5">
          <legend className="pr-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">02 / O que você quer aprender?</legend>
          <p className="mb-3 text-xs text-slate-400">Escolha quantos temas quiser.</p>
          <div className="grid grid-cols-2 gap-2">
            {interestOptions.map((interest) => <label key={interest} className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] p-3 text-xs leading-snug text-slate-300 transition hover:border-white/30 has-checked:border-accent/60 has-checked:bg-accent/10 has-checked:text-accent">
              <input type="checkbox" name="interests" value={interest} className="h-4 w-4 shrink-0 accent-[#fff100]" />{interest}
            </label>)}
          </div>
        </fieldset>
        <fieldset className="border-t border-white/10 pt-5">
          <legend className="pr-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">03 / Leve o encontro até você</legend>
          <p className="mb-3 text-xs text-slate-400">Onde gostaria de participar de um próximo evento?</p>
          <div className="grid grid-cols-2 gap-4">
            <label htmlFor="waitlist-preferred-city" className={labelClass}>Cidade desejada
              <input id="waitlist-preferred-city" name="preferredCity" required maxLength={100} placeholder="Ex.: São Paulo" className={fieldClass} />
            </label>
            <StateSelect id="waitlist-preferred-state" name="preferredState" label="Estado desejado" />
          </div>
          <label className="mt-4 flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-slate-300"><input type="checkbox" name="octoberEvent" defaultChecked className="mt-0.5 h-4 w-4 shrink-0 accent-[#fff100]" />Tenho interesse no encontro de 31 de outubro, em São Paulo.</label>
        </fieldset>
        <label className="flex cursor-pointer items-start gap-2.5 text-[11px] leading-relaxed text-slate-400"><input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#fff100]" /><span>Quero receber novidades sobre eventos por e-mail e WhatsApp e li a <Link href="/politica-de-privacidade" className="text-slate-200 underline underline-offset-2 hover:text-accent">Política de Privacidade</Link>. Posso cancelar o recebimento a qualquer momento.</span></label>
        <div>
          {state.status === "error" ? <div className="mb-3"><SignupError message={state.message} /></div> : null}
          <button type="submit" disabled={pending} className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-5 py-4 text-sm font-bold text-accent-ink transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70">{pending ? "Enviando..." : "Entrar na lista"} <ArrowUpRight size={18} /></button>
        </div>
        <p className="flex items-center justify-center gap-2 text-[11px] text-slate-400"><ShieldCheck size={14} />Lista de interesse, sem compromisso de compra.</p>
      </form>
    </div>
  );
}
