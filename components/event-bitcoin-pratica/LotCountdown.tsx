"use client";

import { useEffect, useState } from "react";
import { Timer } from "lucide-react";

/** 1º lote — 15/11/2026 00:00 (horário de Brasília, UTC-3) */
const FIRST_LOT = new Date("2026-11-15T03:00:00.000Z").getTime();
/** 2º lote — 17/11/2026 00:00 (horário de Brasília, UTC-3) */
const SECOND_LOT = new Date("2026-11-17T03:00:00.000Z").getTime();

/** Azul forte — glow no estilo AccentBenefitCard da IA Divulgadora */
const GLOW = "#f7931a";
const GLOW_RGB = "247,147,26";

type LotPhase = "first" | "second" | "closed";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  phase: LotPhase;
};

function getTimeLeft(now: number): TimeLeft {
  const phase: LotPhase =
    now < FIRST_LOT ? "first" : now < SECOND_LOT ? "second" : "closed";
  const deadline = phase === "second" ? SECOND_LOT : FIRST_LOT;
  const diff = phase === "closed" ? 0 : Math.max(0, deadline - now);
  if (diff === 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, phase };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds, phase };
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
    <div className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
      <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div
          className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-px bg-black/40"
          aria-hidden
        />
        <p className="relative py-2 text-center font-mono text-xl font-bold tabular-nums leading-none tracking-tight text-white sm:text-2xl">
          {digits}
        </p>
      </div>
      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-white/45">
        {label}
      </p>
    </div>
  );
}

function Separator() {
  return (
    <div
      className="flex shrink-0 flex-col justify-center gap-1.5 self-stretch pb-5 pt-0.5"
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
    phase: "first" as const,
  };

  return (
    <div className="mx-auto mt-6 max-w-xl">
      <div
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md transition hover:border-white/20"
        style={{
          boxShadow: `0 0 0 1px rgba(${GLOW_RGB},0.18), 0 16px 32px -20px rgba(${GLOW_RGB},0.4)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 opacity-70"
          style={{
            background: `linear-gradient(to top, rgba(${GLOW_RGB},0.28), transparent)`,
          }}
          aria-hidden
        />

        <div className="relative z-10 px-4 py-4 sm:px-5 sm:py-4">
          <div className="flex items-center justify-center gap-3">
            <h3 className="text-center text-base font-semibold leading-snug tracking-tight text-white sm:text-lg">
              {display.phase === "closed"
                ? "O 2º lote encerrou"
                : display.phase === "second"
                  ? "O 2º lote fecha em breve"
                  : "O 1º lote fecha em breve"}
            </h3>
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border"
              style={{
                borderColor: `${GLOW}66`,
                background: `rgba(${GLOW_RGB},0.16)`,
                boxShadow: `0 0 16px rgba(${GLOW_RGB},0.3)`,
              }}
            >
              <Timer
                className="h-4 w-4"
                style={{ color: GLOW }}
                strokeWidth={1.75}
              />
            </div>
          </div>
          <p className="mx-auto mt-1.5 max-w-md text-center text-[0.7rem] leading-relaxed text-white/55 sm:text-xs">
            {display.phase === "first" ? (
              <>
                Em{" "}
                <strong className="font-semibold text-white">15/11/2026</strong>{" "}
                o preço sobe{" "}
                <strong className="font-semibold text-accent">20%</strong>. O
                2º lote encerra em 17/11/2026.
              </>
            ) : (
              <>
                O 2º lote encerra em{" "}
                <strong className="font-semibold text-white">17/11/2026</strong>
                .
              </>
            )}
          </p>

          <div
            className="mt-3.5 flex items-start justify-center gap-1.5 sm:gap-2"
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

          {display.phase !== "closed" ? (
            <p className="mt-3 text-center text-[0.65rem] font-medium tracking-wide text-white/40">
              Após a virada, o mesmo ingresso custa mais, sem exceção.
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
