"use client";

import Image from "next/image";
import { useState } from "react";
import { useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const columnA = [
  {
    src: "/images/founder/tarcisio-machado-pne.png",
    alt: "Tarcísio Machado",
    tall: true,
  },
  {
    src: "/images/gallery/gallery-07.jpg",
    alt: "Workshop Caminho Soberano",
    tall: false,
  },
  {
    src: "/images/events/dominando-bitcoin/benefits/networking.jpg",
    alt: "Networking",
    tall: true,
  },
  {
    src: "/images/gallery/gallery-06.jpg",
    alt: "Evento presencial",
    tall: false,
  },
  {
    src: "/images/events/dominando-bitcoin/benefits/immersion.jpg",
    alt: "Imersão",
    tall: true,
  },
  {
    src: "/images/gallery/gallery-08.jpg",
    alt: "Comunidade",
    tall: false,
  },
] as const;

const columnB = [
  {
    src: "/images/gallery/gallery-09.jpg",
    alt: "Participantes",
    tall: false,
  },
  {
    src: "/images/founder/tarcisio-machado-expert.png",
    alt: "Especialista",
    tall: true,
  },
  {
    src: "/images/events/dominando-bitcoin/benefits/strategy.jpg",
    alt: "Estratégia",
    tall: false,
  },
  {
    src: "/images/gallery/gallery-01.png",
    alt: "Experiência",
    tall: true,
  },
  {
    src: "/images/events/dominando-bitcoin/benefits/bitcoin-practice.jpg",
    alt: "Prática",
    tall: false,
  },
  {
    src: "/images/gallery/gallery-03.png",
    alt: "Encontro",
    tall: true,
  },
] as const;

function MarqueeColumn({
  items,
  reverse = false,
  duration = 42,
  paused = false,
}: {
  items: readonly { src: string; alt: string; tall: boolean }[];
  reverse?: boolean;
  duration?: number;
  paused?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="relative h-full flex-1 overflow-hidden">
      <div
        className={cn(
          "flex flex-col gap-2.5 will-change-transform md:gap-3",
          reverse ? "pne-hero-marquee-track--reverse" : "pne-hero-marquee-track",
          paused && "pne-hero-marquee-track--paused",
        )}
        style={{ animationDuration: `${duration}s` }}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className={cn(
              "relative w-full shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5",
              item.tall ? "aspect-[3/4]" : "aspect-[4/3]",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 45vw, 240px"
              className="object-cover"
              priority={i < 2}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

type PneHeroPhotoMarqueeProps = {
  className?: string;
};

export function PneHeroPhotoMarquee({ className }: PneHeroPhotoMarqueeProps) {
  const reduce = useReducedMotion();
  const [pausedByClick, setPausedByClick] = useState(false);
  const paused = !!reduce || pausedByClick;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={pausedByClick}
      aria-label={
        pausedByClick
          ? "Retomar carrossel de fotos"
          : "Pausar carrossel de fotos"
      }
      onClick={() => {
        if (reduce) return;
        setPausedByClick((v) => !v);
      }}
      onKeyDown={(e) => {
        if (reduce) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setPausedByClick((v) => !v);
        }
      }}
      className={cn(
        "pne-hero-marquee relative w-full cursor-pointer overflow-hidden",
        "h-[min(300px,42svh)] md:h-full md:min-h-0",
        className,
      )}
    >
      <div className="flex h-full gap-2.5 px-1 md:gap-3">
        <MarqueeColumn items={columnA} duration={48} paused={paused} />
        <MarqueeColumn
          items={columnB}
          reverse
          duration={56}
          paused={paused}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-14 bg-gradient-to-b from-[#020b16] via-[#020b16]/75 to-transparent md:h-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#020b16] via-[#020b16]/80 to-transparent md:h-32"
        aria-hidden
      />
    </div>
  );
}
