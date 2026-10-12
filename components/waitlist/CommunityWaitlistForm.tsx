"use client";

import Link from "next/link";
import { startTransition, useActionState, type FormEvent } from "react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { submitCommunity } from "@/app/lista-de-espera/actions";
import { HoneypotField, SignupError, SignupSuccess } from "@/components/waitlist/SignupFeedback";
import { brazilianRegions } from "@/lib/waitlist";
import { initialSignupState } from "@/lib/waitlist-form";

const fieldClass = "mt-2 w-full min-w-0 rounded-xl border border-white/15 bg-[#081626] px-3.5 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-accent focus:ring-2 focus:ring-accent/20";
const labelClass = "block text-xs font-medium text-slate-300";

export function CommunityWaitlistForm() {
  const [state, formAction, pending] = useActionState(submitCommunity, initialSignupState);

  // Envio manual para o React não limpar os campos quando o servidor devolver erro.
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    startTransition(() => formAction(formData));
  }

  return (
    <div id="cadastro-comunidade" className="scroll-mt-28 rounded-[1.75rem] border border-white/15 bg-[#102238]/95 p-5 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.8)] sm:p-8">
      {state.status === "success" ? (
        <SignupSuccess
          title={state.firstName ? `Você está na lista, ${state.firstName}!` : "Você está na lista!"}
          text="Em breve você será convidado para o grupo da comunidade Caminho Soberano no WhatsApp, pelo número que você informou."
        />
      ) : (
        <>
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Lista de espera</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Entre para o grupo.</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">Preencha seus dados e receba o convite para a comunidade no WhatsApp.</p>
            </div>
            <span className="shrink-0 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 p-3 text-[#5ee08f]" aria-hidden><MessageCircle size={22} /></span>
          </div>
          <form onSubmit={handleSubmit} className="relative space-y-5">
            <HoneypotField />
            <label htmlFor="community-name" className={labelClass}>Nome completo
              <input id="community-name" name="name" autoComplete="name" required maxLength={120} placeholder="Como podemos chamar você?" className={fieldClass} />
            </label>
            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="community-phone" className={labelClass}>WhatsApp com DDD
                <input id="community-phone" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" required maxLength={24} placeholder="(11) 99999-9999" className={fieldClass} />
              </label>
              <label htmlFor="community-email" className={labelClass}>E-mail
                <input id="community-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="voce@exemplo.com" className={fieldClass} />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="community-city" className={labelClass}>Sua cidade
                <input id="community-city" name="city" autoComplete="address-level2" required maxLength={100} placeholder="Onde você mora" className={fieldClass} />
              </label>
              <label htmlFor="community-region" className={labelClass}>Sua região
                <select id="community-region" name="region" required defaultValue="" className={fieldClass}>
                  <option value="" disabled>Selecione</option>
                  {brazilianRegions.map((region) => <option key={region} value={region}>{region}</option>)}
                </select>
              </label>
            </div>
            <label className="flex cursor-pointer items-start gap-2.5 text-[11px] leading-relaxed text-slate-400"><input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#fff100]" /><span>Quero receber o convite para o grupo e novidades sobre eventos por e-mail e WhatsApp, e li a <Link href="/politica-de-privacidade" className="text-slate-200 underline underline-offset-2 hover:text-accent">Política de Privacidade</Link>. Posso sair a qualquer momento.</span></label>
            {state.status === "error" ? <SignupError message={state.message} /> : null}
            <button type="submit" disabled={pending} className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-5 py-4 text-sm font-bold text-accent-ink transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70">{pending ? "Enviando..." : "Quero entrar no grupo"} <ArrowRight size={18} /></button>
            <p className="flex items-center justify-center gap-2 text-[11px] text-slate-400"><ShieldCheck size={14} />Gratuito e sem compromisso de compra.</p>
          </form>
        </>
      )}
    </div>
  );
}
