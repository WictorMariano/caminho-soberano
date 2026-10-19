"use client";

import { useTransition } from "react";
import { UserRound } from "lucide-react";

import { entrarComoMembroConvidado } from "@/app/membros/actions";

export function MemberLoginForm() {
  const [pending, start] = useTransition();

  return (
    <div className="mt-7 space-y-4">
      <button
        type="button"
        disabled={pending}
        onClick={() => start(() => entrarComoMembroConvidado())}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-accent-ink transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70"
      >
        <UserRound size={17} />
        {pending ? "Abrindo..." : "Entrar como convidado"}
      </button>
      <p className="text-center text-xs leading-relaxed text-slate-400">
        Versão local de demonstração. O login com e-mail e as compras reais
        entram quando o banco e a área de membros forem ligados de verdade.
      </p>
    </div>
  );
}
