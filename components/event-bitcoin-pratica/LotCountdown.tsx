"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

/** Virada do 1º lote — 18/08/2026 00:00 (horário de Brasília, UTC-3) */
const LOTE_DEADLINE = new Date("2026-08-18T03:00:00.000Z").getTime();

/** Azul forte — glow no estilo AccentBenefitCard da IA Divulgadora */
const GLOW = "#3b9eff";
const GLOW_RGB = "59,158,255";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
};

function getTimeLeft(now: number): TimeLeft {
  const diff = Math.max(0, LOTE_DEADLINE - now);
  if (diff === 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, expired: false };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

const units = [
  { key: "days", label: "Dias" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
] as const;

function DigitBlock({ value, label }: { value: number; label: string }) {
  const digits = pad(value);

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center gap-2.5">
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-px bg-black/40"
          aria-hidden
        />
        <p className="relative py-3.5 text-center font-mono text-[1.75rem] font-bold tabular-nums leading-none tracking-tight text-white sm:py-4 sm:text-3xl md:text-[2.5rem]">
          {digits}
        </p>
      </div>
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/45 sm:text-[0.7rem]">
        {label}
      </p>
    </div>
  );
}

function Separator() {
  return (
    <div
      className="flex shrink-0 flex-col justify-center gap-2 self-stretch pb-7 pt-1"
      aria-hidden
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          background: GLOW,
          boxShadow: `0 0 10px rgba(${GLOW_RGB},0.55)`,
        }}
      />
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{
          background: GLOW,
          boxShadow: `0 0 10px rgba(${GLOW_RGB},0.55)`,
        }}
      />
    </div>
  );
}

export function LotCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft(Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const display = timeLeft ?? {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  };

  return (
    <div className="mx-auto mt-14 max-w-2xl md:mt-16">
      <div
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md transition hover:border-white/20"
        style={{
          boxShadow: `0 0 0 1px rgba(${GLOW_RGB},0.18), 0 24px 48px -24px rgba(${GLOW_RGB},0.4)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 opacity-70"
          style={{
            background: `linear-gradient(to top, rgba(${GLOW_RGB},0.28), transparent)`,
          }}
          aria-hidden
        />

        <div className="relative z-10 px-5 py-7 sm:px-8 sm:py-9">
          <div className="mb-4 flex items-center justify-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm sm:h-11 sm:w-11"
              style={{
                borderColor: `${GLOW}66`,
                background: `rgba(${GLOW_RGB},0.16)`,
                boxShadow: `0 0 22px rgba(${GLOW_RGB},0.35)`,
              }}
            >
              <Timer
                className="h-5 w-5"
                style={{ color: GLOW }}
                strokeWidth={1.75}
              />
            </div>
          </div>

          <h3 className="text-center text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-[1.75rem]">
            {display.expired
              ? "O 1º lote encerrou"
              : "O 1º lote fecha em breve"}
          </h3>
          <p className="mx-auto mt-2.5 max-w-md text-center text-xs leading-relaxed text-white/55 sm:text-sm">
            Em{" "}
            <strong className="font-semibold text-white">18/08/2026</strong> o
            preço sobe{" "}
            <strong className="font-semibold text-accent">20%</strong>. Cada
            segundo conta para manter o valor atual.
          </p>

          <div
            className="mt-7 flex items-start justify-center gap-1.5 sm:gap-2.5"
            aria-live="polite"
            aria-atomic="true"
          >
            {units.map(({ key, label }, index) => (
              <div key={key} className="contents">
                {index > 0 ? <Separator /> : null}
                <DigitBlock value={display[key]} label={label} />
              </div>
            ))}
          </div>

          {!display.expired ? (
            <p className="mt-6 text-center text-xs font-medium tracking-wide text-white/40">
              Após a virada, o mesmo ingresso custa mais — sem exceção.
            </p>
          ) : null}
        </div>

        <div
          className="absolute inset-x-4 bottom-0 h-px rounded-full opacity-90"
          style={{
            background: `linear-gradient(90deg, transparent, ${GLOW}, transparent)`,
            boxShadow: `0 0 14px ${GLOW}`,
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
