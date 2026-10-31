"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";

import { speakers } from "@/lib/event-bitcoin-pratica";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.258 5.686L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

export function SpeakerDialogGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleId = useId();
  const speaker = openIndex === null ? null : speakers[openIndex];

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [openIndex]);

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((item, index) => (
          <button
            key={item.name}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#1c1008] text-left transition hover:border-accent/50"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-lg font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Ver perfil
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {speaker ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-3 sm:items-center sm:p-6">
          <button
            type="button"
            aria-label="Fechar"
            className="absolute inset-0 bg-black/45 backdrop-blur-md"
            onClick={() => setOpenIndex(null)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#1a0e06] shadow-2xl sm:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="relative min-h-[220px] sm:min-h-full">
              <Image
                src={speaker.image}
                alt=""
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
            <div className="relative max-h-[70vh] overflow-y-auto p-6 sm:max-h-[80vh] sm:p-8">
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white hover:border-accent hover:text-accent"
                aria-label="Fechar perfil"
              >
                <X size={18} />
              </button>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Palestrante
              </p>
              <h3 id={titleId} className="mt-2 pr-10 text-2xl font-bold text-white">
                {speaker.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                {speaker.bio}
              </p>
              <div className="mt-6 flex gap-3">
                <a
                  href={speaker.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram de ${speaker.name}`}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white hover:border-accent hover:text-accent"
                >
                  <InstagramIcon className="h-[18px] w-[18px]" />
                </a>
                {speaker.twitter ? (
                  <a
                    href={speaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`X de ${speaker.name}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white hover:border-accent hover:text-accent"
                  >
                    <XIcon className="h-[16px] w-[16px]" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
