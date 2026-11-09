"use client";

import { useActionState, useState } from "react";

import {
  atualizarEmailMembro,
  atualizarSenhaMembro,
  type AccountState,
} from "@/app/membros/actions";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-white/15 bg-[#061426] px-3.5 py-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-accent focus:ring-2 focus:ring-accent/20";

const initialState: AccountState = { error: null, message: null };

export function ProfileAccountForms({ email }: { email: string }) {
  const [emailState, emailAction, emailPending] = useActionState(atualizarEmailMembro, initialState);
  const [passwordState, passwordAction, passwordPending] = useActionState(atualizarSenhaMembro, initialState);
  const [notify, setNotify] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5">
        <h2 className="text-base font-semibold text-white">Conta</h2>
        <p className="mt-1 text-sm text-slate-400">
          E-mail atual: <span className="text-slate-200">{email}</span>
        </p>

        <form action={emailAction} className="mt-5 space-y-3">
          <label className="block text-xs font-medium text-slate-300">
            Trocar e-mail
            <input
              type="email"
              name="email"
              defaultValue={email}
              className={fieldClass}
              required
            />
          </label>
          <button
            type="submit"
            disabled={emailPending}
            className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-bold text-accent-ink active:scale-[0.99] disabled:opacity-70 sm:w-auto"
          >
            {emailPending ? "Salvando..." : "Salvar e-mail"}
          </button>
          {emailState.error ? <p className="text-sm text-red-300">{emailState.error}</p> : null}
          {emailState.message ? <p className="text-sm text-accent">{emailState.message}</p> : null}
        </form>

        <form action={passwordAction} className="mt-8 space-y-3 border-t border-white/10 pt-6">
          <label className="block text-xs font-medium text-slate-300">
            Senha atual
            <input
              type="password"
              name="current"
              autoComplete="current-password"
              required
              className={fieldClass}
            />
          </label>
          <label className="block text-xs font-medium text-slate-300">
            Nova senha
            <input
              type="password"
              name="next"
              autoComplete="new-password"
              required
              minLength={8}
              className={fieldClass}
            />
          </label>
          <label className="block text-xs font-medium text-slate-300">
            Confirmar nova senha
            <input
              type="password"
              name="confirm"
              autoComplete="new-password"
              required
              minLength={8}
              className={fieldClass}
            />
          </label>
          <button
            type="submit"
            disabled={passwordPending}
            className="w-full rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:border-accent hover:text-accent active:scale-[0.99] disabled:opacity-70 sm:w-auto"
          >
            {passwordPending ? "Salvando..." : "Trocar senha"}
          </button>
          {passwordState.error ? <p className="text-sm text-red-300">{passwordState.error}</p> : null}
          {passwordState.message ? <p className="text-sm text-accent">{passwordState.message}</p> : null}
        </form>
      </section>

      <section className="rounded-2xl border border-white/10 bg-[#0b1c30] p-5">
        <h2 className="text-base font-semibold text-white">Configurações</h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-white">Notificações</p>
              <p className="text-xs text-slate-500">Avisos de desafios e aulas</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={notify}
              onClick={() => setNotify((v) => !v)}
              className={`relative h-7 w-12 rounded-full transition ${notify ? "bg-accent" : "bg-white/15"}`}
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition ${notify ? "left-5" : "left-0.5"}`}
              />
            </button>
          </li>
          <li className="flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-white">Reduzir movimento</p>
              <p className="text-xs text-slate-500">Menos animação no app</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={reduceMotion}
              onClick={() => setReduceMotion((v) => !v)}
              className={`relative h-7 w-12 rounded-full transition ${reduceMotion ? "bg-accent" : "bg-white/15"}`}
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white transition ${reduceMotion ? "left-5" : "left-0.5"}`}
              />
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}
