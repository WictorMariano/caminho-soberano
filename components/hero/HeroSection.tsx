"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const play = () => {
      void video.play().catch(() => {
        /* autoplay pode ser bloqueado em alguns browsers */
      });
    };

    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("loadeddata", play, { once: true });
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#020b16]"
    >
      <div className="absolute inset-0 bg-[#020b16]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Vídeo do treinamento presencial Caminho Soberano"
        >
          <source src="/videos/treinamento-presencial.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-end">
        <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.65)] sm:text-5xl md:text-6xl lg:text-7xl">
                Alcance liberdade financeira real
              </h1>
              <a
                href="#comunidade"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink transition hover:brightness-95"
              >
                Participe Agora
                <span aria-hidden>→</span>
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="max-w-md text-base leading-relaxed text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] md:justify-self-end md:text-right md:text-lg"
            >
              Participe de eventos exclusivos, amplie seu networking e proteja
              seu patrimônio com soluções digitais inteligentes
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
