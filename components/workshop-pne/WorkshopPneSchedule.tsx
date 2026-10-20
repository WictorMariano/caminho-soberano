import { Clock, MapPin } from "lucide-react";

import {
  workshopPneJourney,
  workshopPneMeta,
  workshopPneObjective,
  workshopPneSchedule,
} from "@/lib/workshop-pne-tickets";

export function WorkshopPneSchedule() {
  return (
    <section
      id="programacao"
      className="border-t border-white/10 bg-[#020b16] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Programação
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Cronograma do dia
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            {workshopPneObjective}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/65">
          <span className="inline-flex items-center gap-2">
            <Clock size={16} className="text-accent" aria-hidden />
            {workshopPneMeta.dateFull} · {workshopPneMeta.time}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-accent" aria-hidden />
            {workshopPneMeta.venue}, SP
          </span>
        </div>

        <ol className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white">
          {workshopPneJourney.map((step, index) => (
            <li key={step} className="inline-flex items-center gap-2">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3.5 py-1.5 text-accent">
                {step}
              </span>
              {index < workshopPneJourney.length - 1 ? (
                <span className="text-white/30" aria-hidden>
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>

        <ol className="mx-auto mt-12 max-w-4xl space-y-3">
          {workshopPneSchedule.map((item) => (
            <li
              key={item.id}
              className={`grid gap-2 rounded-2xl border px-4 py-4 sm:grid-cols-[9.5rem_1fr] sm:gap-6 sm:px-6 sm:py-5 ${
                item.isBreak
                  ? "border-white/8 bg-white/[0.03]"
                  : "border-white/10 bg-[#081a2e]"
              }`}
            >
              <p className="text-sm font-bold tabular-nums text-accent">
                {item.time}
              </p>
              <div>
                <h3 className="text-base font-semibold text-white md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-white/55">{item.speaker}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
