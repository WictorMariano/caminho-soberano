"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";

import { cn } from "@/lib/utils";

export type SpeakerFlipCardProps = {
  name: string;
  image: string;
  instagram: string;
  twitter?: string;
  bio: string;
};

const MAX_TILT = 10;
const MOVE_THRESHOLD = 8;

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.258 5.686L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

export function SpeakerFlipCard({
  name,
  image,
  instagram,
  twitter,
  bio,
}: SpeakerFlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [tilting, setTilting] = useState(false);
  const reduceMotion = useReducedMotion();
  const pointerStart = useRef<{ x: number; y: number } | null>(null);

  const onPointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (reduceMotion || flipped) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const px = ((event.clientX - rect.left) / rect.width) * 100;
      const py = ((event.clientY - rect.top) / rect.height) * 100;
      setTilt({
        x: ((50 - py) / 50) * MAX_TILT,
        y: ((px - 50) / 50) * MAX_TILT,
      });
    },
    [flipped, reduceMotion],
  );

  const resetTilt = useCallback(() => {
    setTilting(false);
    setTilt({ x: 0, y: 0 });
  }, []);

  const toggleFlip = useCallback(() => {
    resetTilt();
    setFlipped((value) => !value);
  }, [resetTilt]);

  const onCardClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement;
      if (target.closest("a")) return;

      const start = pointerStart.current;
      pointerStart.current = null;
      if (start) {
        const moved =
          Math.abs(event.clientX - start.x) > MOVE_THRESHOLD ||
          Math.abs(event.clientY - start.y) > MOVE_THRESHOLD;
        if (moved) return;
      }

      toggleFlip();
    },
    [toggleFlip],
  );

  const onCardKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleFlip();
    },
    [toggleFlip],
  );

  const cardTransform = reduceMotion
    ? undefined
    : flipped
      ? "rotateY(180deg)"
      : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`;

  const cardStyle = {
    transform: cardTransform,
    transition: flipped
      ? "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)"
      : tilting
        ? "transform 120ms ease-out"
        : "transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)",
  } satisfies CSSProperties;

  return (
    <div className="speaker-flip-scene px-0.5 py-2">
      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={
          flipped
            ? `Fechar biografia de ${name}`
            : `Ver biografia de ${name}`
        }
        className={cn(
          "speaker-flip-card relative aspect-[3/4] w-full cursor-pointer will-change-transform outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]",
          flipped && "is-flipped",
        )}
        style={cardStyle}
        onPointerDown={(event) => {
          pointerStart.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerMove={onPointerMove}
        onPointerEnter={() => {
          if (!reduceMotion && !flipped) setTilting(true);
        }}
        onPointerLeave={resetTilt}
        onClick={onCardClick}
        onKeyDown={onCardKeyDown}
      >
        {/* Frente */}
        <article
          className={cn(
            "speaker-flip-face pointer-events-none absolute inset-0 overflow-hidden rounded-2xl border border-white/[0.14] bg-[#06121f] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.85)]",
            reduceMotion && flipped && "opacity-0",
          )}
        >
          <div className="absolute inset-0 [transform:translate3d(0,0,1px)]">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 p-5 md:p-6 [transform:translate3d(0,0,48px)]">
            <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] md:text-[1.65rem]">
              {name}
            </h3>
            <span className="mt-4 block text-base font-semibold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
              ver mais
            </span>
          </div>
        </article>

        {/* Verso */}
        <article
          className={cn(
            "speaker-flip-face speaker-flip-face--back absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-white/[0.14] bg-[#0a1424] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.85)]",
            reduceMotion && !flipped && "pointer-events-none opacity-0",
            reduceMotion && flipped && "opacity-100",
            !reduceMotion && !flipped && "pointer-events-none",
          )}
        >
          <div className="relative z-10 flex h-full flex-col p-5 md:p-6 [transform:translate3d(0,0,40px)]">
            <header className="pointer-events-none flex items-center gap-3 [transform:translate3d(0,0,24px)]">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-white/15 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.8)] md:h-12 md:w-12">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-base font-semibold tracking-[-0.03em] text-white md:text-lg">
                {name}
              </h3>
            </header>

            <p className="pointer-events-none mt-4 flex-1 overflow-y-auto text-sm font-medium leading-relaxed text-white/85 md:mt-5 md:text-[0.9375rem] md:leading-[1.55] [transform:translate3d(0,0,18px)]">
              {bio}
            </p>

            <footer className="mt-4 flex items-center justify-between gap-3 border-t border-white/12 pt-3.5 [transform:translate3d(0,0,28px)]">
              <div className="pointer-events-auto flex items-center gap-3.5">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram de ${name}`}
                  className="text-white/75 transition hover:text-accent"
                  onClick={(event) => event.stopPropagation()}
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                {twitter ? (
                  <a
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`X / Twitter de ${name}`}
                    className="text-white/75 transition hover:text-accent"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <XIcon className="h-[17px] w-[17px]" />
                  </a>
                ) : (
                  <span className="text-white/35" aria-hidden>
                    <XIcon className="h-[17px] w-[17px]" />
                  </span>
                )}
              </div>

              <span className="pointer-events-none inline-flex items-center gap-1 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/95">
                voltar
                <span aria-hidden>&gt;</span>
              </span>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}
