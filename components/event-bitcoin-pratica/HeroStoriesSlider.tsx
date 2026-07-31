"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

export type HeroStory = {
  id: string;
  /** Caminho em /public — quando existir, o vídeo toca */
  videoSrc?: string;
  /** Poster / fallback enquanto não há vídeo */
  posterSrc: string;
  label?: string;
};

type HeroStoriesSliderProps = {
  stories: HeroStory[];
};

export function HeroStoriesSlider({ stories }: HeroStoriesSliderProps) {
  const [active, setActive] = useState(0);
  const count = stories.length;

  useEffect(() => {
    if (count < 2) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 4500);
    return () => window.clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  const offsets = [-1, 0, 1] as const;

  return (
    <div className="relative mx-auto flex w-full max-w-[420px] flex-col items-center lg:max-w-none">
      <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]">
        {offsets.map((offset) => {
          const index = (active + offset + count) % count;
          const story = stories[index];
          if (!story) return null;
          const isCenter = offset === 0;

          return (
            <motion.div
              key={`${story.id}-${offset}`}
              className={cn(
                "absolute left-1/2 top-1/2 origin-center",
                isCenter ? "z-20" : "z-10",
              )}
              initial={false}
              animate={{
                x: `calc(-50% + ${offset * 78}px)`,
                y: `calc(-50% + ${Math.abs(offset) * 10}px)`,
                rotate: offset * -11,
                scale: isCenter ? 1 : 0.88,
                opacity: isCenter ? 1 : 0.55,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
            >
              <StoryPhone
                story={story}
                active={isCenter}
                onSelect={() => setActive(index)}
              />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-2">
        {stories.map((story, index) => (
          <button
            key={story.id}
            type="button"
            aria-label={`Ver story ${index + 1}`}
            onClick={() => setActive(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              index === active
                ? "w-7 bg-[#fff100]"
                : "w-1.5 bg-white/30 hover:bg-white/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function StoryPhone({
  story,
  active,
  onSelect,
}: {
  story: HeroStory;
  active: boolean;
  onSelect: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      void video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [active, story.videoSrc]);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "relative block h-[340px] w-[190px] overflow-hidden rounded-[1.65rem] border border-white/20 bg-[#071525] shadow-[0_25px_60px_rgba(0,0,0,0.45)] outline-none sm:h-[400px] sm:w-[220px] lg:h-[460px] lg:w-[250px]",
        active && "ring-2 ring-[#fff100]/70",
      )}
    >
      {story.videoSrc ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={story.videoSrc}
          poster={story.posterSrc}
          muted
          playsInline
          loop
          preload="metadata"
        />
      ) : (
        <Image
          src={story.posterSrc}
          alt={story.label ?? "Story do evento"}
          fill
          sizes="250px"
          className="object-cover"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />

      <div className="pointer-events-none absolute inset-x-3 top-3 flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={cn(
              "h-0.5 flex-1 rounded-full",
              active && i === 0 ? "bg-white" : "bg-white/35",
            )}
          />
        ))}
      </div>

      {!story.videoSrc ? (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur">
            <Play size={18} fill="currentColor" />
          </span>
        </span>
      ) : null}

      {story.label ? (
        <span className="absolute inset-x-3 bottom-4 truncate text-left text-xs font-semibold text-white">
          {story.label}
        </span>
      ) : null}
    </button>
  );
}

