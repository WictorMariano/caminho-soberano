import type { Metadata } from "next";
import { FileText } from "lucide-react";

import { memberMaterials } from "@/lib/membros/demo";

export const metadata: Metadata = { title: "Materiais" };

export default function MembrosMateriaisPage() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Biblioteca
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Materiais</h1>
        <p className="mt-3 max-w-2xl text-sm text-slate-400 md:text-base">
          Conteúdos didáticos de exemplo. Depois cada material fica ligado ao
          que a pessoa adquiriu.
        </p>
      </header>

      <ul className="grid gap-4 md:grid-cols-2">
        {memberMaterials.map((item) => (
          <li
            key={item.id}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <FileText size={18} />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">
                  {item.module} · {item.type}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
                <button
                  type="button"
                  className="mt-4 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80 transition hover:border-accent hover:text-accent"
                >
                  Baixar (demo)
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
