import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";

export function TicketsCta({
  label = "Garantir meu ingresso",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center sm:gap-5",
        className,
      )}
    >
      <a
        href="#ingressos"
        className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-bold text-accent-ink shadow-[0_12px_32px_-10px_rgba(255,241,0,0.45)] transition hover:gap-4 hover:brightness-95"
      >
        {label}
        <ArrowDown size={17} />
      </a>
      <span className="text-sm text-white/60">
        Online, Presencial ou VIP · a partir de{" "}
        <strong className="font-semibold text-white">R$ 197</strong>
      </span>
    </div>
  );
}
