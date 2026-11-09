"use client";

import { useActionState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cadastrarMembro, type AuthState } from "@/app/membros/actions";

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/15 bg-[#081626] px-3.5 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-accent focus:ring-2 focus:ring-accent/20";

const initialState: AuthState = { error: null };

export function MemberSignupForm() {
  const [state, formAction, pending] = useActionState(cadastrarMembro, initialState);

  return (
    <form action={formAction} className="mt-7 space-y-5">
      <label htmlFor="signup-name" className="block text-xs font-medium text-slate-300">
        Nome
        <input
          id="signup-name"
          name="name"
          autoComplete="name"
          required
          minLength={2}
          maxLength={120}
          className={fieldClass}
          placeholder="Como podemos chamar você?"
        />
      </label>
      <label htmlFor="signup-email" className="block text-xs font-medium text-slate-300">
        E-mail
        <input
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
          placeholder="voce@email.com"
        />
      </label>
      <label htmlFor="signup-password" className="block text-xs font-medium text-slate-300">
        Senha
        <input
          id="signup-password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          className={fieldClass}
        />
      </label>
      <label htmlFor="signup-confirm" className="block text-xs font-medium text-slate-300">
        Confirmar senha
        <input
          id="signup-confirm"
          name="confirm"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          className={fieldClass}
        />
      </label>
      {state.error ? (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {state.error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-accent-ink transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Criando conta..." : "Criar conta"} <ArrowRight size={17} />
      </button>
      <p className="text-center text-sm text-slate-400">
        Já tem conta?{" "}
        <Link href="/membros/login" className="font-semibold text-accent hover:underline">
          Entrar
        </Link>
      </p>
    </form>
  );
}
