import { ArrowRight, CheckCircle2 } from "lucide-react";

import { HONEYPOT_FIELD } from "@/lib/waitlist-form";

export function SignupSuccess({ title, text }: { title: string; text: string }) {
  return (
    <div role="status" className="flex flex-col items-center py-8 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366]/15 text-[#5ee08f]">
        <CheckCircle2 size={32} strokeWidth={1.75} />
      </span>
      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Cadastro recebido</p>
      <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">{title}</h3>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">{text}</p>
      <a href="#proximos-eventos" className="mt-7 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/5 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-accent-ink">
        Ver próximos eventos <ArrowRight size={16} />
      </a>
    </div>
  );
}

export function SignupError({ message }: { message: string }) {
  return (
    <p role="alert" className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
      {message}
    </p>
  );
}

/** Campo invisível para pessoas; robôs que o preenchem são descartados no servidor. */
export function HoneypotField() {
  return (
    <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
      <label>
        Não preencha este campo
        <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
