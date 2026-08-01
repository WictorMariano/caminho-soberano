"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Quote,
  Shield,
  Volume1,
  Volume2,
  VolumeX,
} from "lucide-react";

import { pneTestimonials } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export function PneTestimonials() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [muted, setMuted] = useState(false);
  const [prevVolume, setPrevVolume] = useState(0.85);
  const [showVolume, setShowVolume] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [durations, setDurations] = useState<Record<string, number>>({});
  const videoRef = useRef<HTMLVideoElement>(null);
  const total = pneTestimonials.length;
  const current = pneTestimonials[active];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
    setCurrentTime(0);
  }, [active]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
    video.muted = muted || volume === 0;
  }, [volume, muted, active]);

  useEffect(() => {
    const cleanups: Array<() => void> = [];
    pneTestimonials.forEach((item) => {
      const el = document.createElement("video");
      el.preload = "metadata";
      el.src = item.video;
      const onMeta = () => {
        if (Number.isFinite(el.duration)) {
          setDurations((prev) =>
            prev[item.id] ? prev : { ...prev, [item.id]: el.duration },
          );
        }
      };
      el.addEventListener("loadedmetadata", onMeta);
      cleanups.push(() => el.removeEventListener("loadedmetadata", onMeta));
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        await video.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (muted || volume === 0) {
      setVolume(prevVolume > 0 ? prevVolume : 0.85);
      setMuted(false);
    } else {
      setPrevVolume(volume);
      setMuted(true);
    }
  };

  const onVolumeChange = (value: number) => {
    const nextVol = Math.min(1, Math.max(0, value));
    setVolume(nextVol);
    if (nextVol === 0) setMuted(true);
    else {
      setMuted(false);
      setPrevVolume(nextVol);
    }
  };

  const seek = (value: number) => {
    const video = videoRef.current;
    if (!video || !duration) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

  const VolumeIcon =
    muted || volume === 0 ? VolumeX : volume < 0.45 ? Volume1 : Volume2;
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="relative border-t border-white/8 bg-[#020b16] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Vídeos reais
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.1]">
            Depoimentos e{" "}
            <span className="text-accent">comentários</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
            Assista aos depoimentos de quem já participou. Vídeos reais, na voz
            de quem viveu a experiência.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="text-sm tabular-nums text-white/55">
              {active + 1} / {total}
            </span>
            <button
              type="button"
              onClick={prev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/55 text-accent transition hover:bg-accent hover:text-accent-ink"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/55 text-accent transition hover:bg-accent hover:text-accent-ink"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div className="mt-10 grid items-start gap-10 lg:mt-12 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12 xl:grid-cols-[minmax(0,400px)_1fr]">
          {/* Left: vertical player */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-[360px] lg:mx-0"
          >
            <div className="group relative overflow-hidden rounded-[1.35rem] border border-accent/50 bg-black shadow-[0_0_0_1px_rgba(255,241,0,0.12),0_0_42px_rgba(255,241,0,0.22)]">
              <div className="relative aspect-[9/16] w-full">
                <video
                  key={current.id}
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  src={current.video}
                  poster={current.poster}
                  playsInline
                  preload="metadata"
                  controls={false}
                  onTimeUpdate={(e) =>
                    setCurrentTime(e.currentTarget.currentTime)
                  }
                  onLoadedMetadata={(e) => {
                    const d = e.currentTarget.duration;
                    setDuration(d);
                    setDurations((prev) => ({ ...prev, [current.id]: d }));
                  }}
                  onEnded={() => setPlaying(false)}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                />

                {/* Center play — no dark filter */}
                <button
                  type="button"
                  onClick={togglePlay}
                  className="absolute inset-0 z-10 flex items-center justify-center"
                  aria-label={playing ? "Pausar" : "Reproduzir"}
                >
                  <span
                    className={cn(
                      "inline-flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full border-2 border-accent bg-black/25 text-accent shadow-[0_0_28px_rgba(255,241,0,0.35)] backdrop-blur-[2px] transition",
                      playing ? "opacity-0 group-hover:opacity-100" : "opacity-100",
                    )}
                  >
                    {playing ? (
                      <Pause size={28} fill="currentColor" />
                    ) : (
                      <Play size={30} fill="currentColor" className="ml-1" />
                    )}
                  </span>
                </button>

                {/* Caption + controls */}
                <div
                  className="absolute inset-x-0 bottom-0 z-20 px-4 pb-3.5 pt-16"
                  onClick={(e) => e.stopPropagation()}
                  onPointerDown={(e) => e.stopPropagation()}
                >
                  <div className="pointer-events-none mb-4">
                    <p className="text-[15px] font-semibold leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)] md:text-base">
                      Depoimento de{" "}
                      <span className="text-accent">{current.name}</span>
                    </p>
                    <p className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-white/85">
                      <Shield size={12} className="text-accent" />
                      <span className="text-accent">{current.label}</span>
                      <span className="text-white/40">·</span>
                      <span>Experiência no Caminho Soberano</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        onClick={() => {
                          toggleMute();
                          setShowVolume(true);
                        }}
                        onMouseEnter={() => setShowVolume(true)}
                        className="inline-flex h-8 w-8 items-center justify-center text-white transition hover:text-accent"
                        aria-label={
                          muted || volume === 0 ? "Ativar som" : "Silenciar"
                        }
                      >
                        <VolumeIcon size={18} />
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-200",
                          showVolume ? "ml-1 w-16 opacity-100" : "w-0 opacity-0",
                        )}
                        onMouseLeave={() => setShowVolume(false)}
                      >
                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.01}
                          value={muted ? 0 : volume}
                          onChange={(e) =>
                            onVolumeChange(Number.parseFloat(e.target.value))
                          }
                          className="h-1 w-16 cursor-pointer appearance-none rounded-full bg-white/25 accent-[#fff100]"
                          aria-label="Volume"
                        />
                      </div>
                    </div>

                    <input
                      type="range"
                      min={0}
                      max={duration || 0}
                      step={0.05}
                      value={currentTime}
                      onChange={(e) => seek(Number.parseFloat(e.target.value))}
                      className="h-1.5 min-w-0 flex-1 cursor-pointer appearance-none rounded-full bg-white/25 accent-[#fff100]"
                      style={{
                        background: `linear-gradient(to right, #fff100 0%, #fff100 ${progress}%, rgba(255,255,255,0.25) ${progress}%, rgba(255,255,255,0.25) 100%)`,
                      }}
                      aria-label="Progresso do vídeo"
                    />

                    <span className="shrink-0 text-[11px] tabular-nums text-white/80">
                      {formatTime(currentTime)}{" "}
                      <span className="text-white/40">/</span>{" "}
                      {formatTime(duration)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="flex min-w-0 flex-col"
          >
            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {pneTestimonials.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className="w-[108px] shrink-0 text-left"
                    aria-label={`Ver depoimento de ${item.name}`}
                    aria-current={isActive}
                  >
                    <span
                      className={cn(
                        "relative block aspect-[9/14] overflow-hidden rounded-xl border transition",
                        isActive
                          ? "border-accent shadow-[0_0_16px_rgba(255,241,0,0.3)]"
                          : "border-white/12 opacity-80 hover:opacity-100",
                      )}
                    >
                      <Image
                        src={item.poster}
                        alt=""
                        fill
                        sizes="108px"
                        className="object-cover"
                      />
                    </span>
                    {isActive ? (
                      <span className="mt-2 block h-0.5 w-full rounded-full bg-accent" />
                    ) : (
                      <span className="mt-2 block h-0.5 w-full rounded-full bg-transparent" />
                    )}
                    <span className="mt-1.5 block text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-accent">
                      {item.category}
                    </span>
                    <span className="block truncate text-sm font-semibold text-white">
                      {item.name}
                    </span>
                    <span className="block text-xs text-white/45">
                      {formatTime(durations[item.id] ?? 0)}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-5 md:px-6">
              <Quote className="text-accent" size={26} strokeWidth={1.75} />
              <p className="mt-3 text-base leading-relaxed text-white/90 md:text-lg">
                Assista aos vídeos ao lado: são depoimentos reais de quem já
                viveu a experiência, com clareza, direção e comunidade na
                prática.
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Experiências do Caminho Soberano
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
