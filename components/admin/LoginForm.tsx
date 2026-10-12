"use client";

import { useActionState } from "react";
import { ArrowRight } from "lucide-react";

import { login, type LoginState } from "@/app/admin/actions";

const fieldClass = "mt-2 w-full rounded-xl border border-white/15 bg-[#081626] px-3.5 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-accent focus:ring-2 focus:ring-accent/20";

const initialState: LoginState = { error: null };

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form action={formAction} className="mt-7 space-y-5">
      <label htmlFor="admin-email" className="block text-xs font-medium text-slate-300">
        E-mail
        <input id="admin-email" name="email" type="email" autoComplete="username" required className={fieldClass} placeholder="voce@caminhosoberano.com.br" />
      </label>
      <label htmlFor="admin-password" className="block text-xs font-medium text-slate-300">
        Senha
        <input id="admin-password" name="password" type="password" autoComplete="current-password" required className={fieldClass} />
      </label>
      {state.error ? (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {state.error}
        </p>
      ) : null}
      <button type="submit" disabled={pending} className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-accent-ink transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70">
        {pending ? "Entrando..." : "Entrar"} <ArrowRight size={17} />
      </button>
    </form>
  );
}
