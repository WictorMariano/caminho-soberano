"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { waitlistHeroPhotos } from "@/lib/waitlist";

const AUTOPLAY_MS = 5000;

export function WaitlistHero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = waitlistHeroPhotos.length;

  const go = useCallback(
    (step: number) => setIndex((current) => (current + step + total) % total),
    [total],
  );

  useEffect(() => {
    if (reduce || paused) return;
    const timer = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [go, paused, reduce]);

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay },
        };

  return (
    <section className="relative overflow-hidden bg-[#020b16] pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_25%,rgba(35,100,165,0.25),transparent_55%),radial-gradient(ellipse_at_100%_80%,rgba(35,100,165,0.12),transparent_50%)]" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <motion.p {...fadeUp(0)} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            O próximo encontro começa com você
          </motion.p>
          <motion.h1 {...fadeUp(0.05)} className="mt-6 text-[2.9rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]">
            Novas ideias.
            <br />
            Novas conexões.
            <br />
            <span className="text-accent">Seu próximo passo.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
            Bitcoin, inteligência artificial e soberania. Encontros para ampliar sua visão e transformar conhecimento em prática.
          </motion.p>
          <motion.p {...fadeUp(0.16)} className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">
            Para contadores, empreendedores e pessoas que querem entender a Nova Economia. Escolha os temas e ajude a definir os próximos destinos.
          </motion.p>
          <a href="#cadastro" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent lg:hidden">
            Conheça a lista de espera <ArrowDown size={16} />
          </a>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative mt-9 pb-16 sm:pb-12"
          >
            <div
              role="region"
              aria-roledescription="carrossel"
              aria-label="Fotos de eventos do Caminho Soberano"
              className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-[0_40px_100px_-40px_rgba(0,0,0,0.9)]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <div className="relative aspect-[4/3]">
                {waitlistHeroPhotos.map((photo, i) => (
                  <div
                    key={photo.src}
                    aria-hidden={i !== index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      preload={i === 0}
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className={`object-cover transition-transform ease-out ${reduce ? "" : "duration-[6000ms]"} ${i === index && !reduce ? "scale-100" : "scale-[1.06]"}`}
                    />
                  </div>
                ))}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020b16]/80 via-transparent to-[#020b16]/20" aria-hidden />
              </div>

              <div className="absolute right-4 top-4 flex gap-2 md:right-5 md:top-5">
                <button type="button" onClick={() => go(-1)} aria-label="Foto anterior" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#020b16]/55 text-white backdrop-blur transition hover:border-accent hover:text-accent">
                  <ChevronLeft size={18} />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Próxima foto" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-[#020b16]/55 text-white backdrop-blur transition hover:border-accent hover:text-accent">
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-3 md:bottom-5 md:right-5">
                <span className="text-xs font-semibold tabular-nums text-white/80" aria-live="polite">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
                <div className="flex gap-1.5">
                  {waitlistHeroPhotos.map((photo, i) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Ver foto ${i + 1}`}
                      aria-current={i === index}
                      className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-accent" : "w-1.5 bg-white/45 hover:bg-white/80"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <figure className="absolute bottom-0 left-4 w-[34%] max-w-[190px] sm:left-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border-4 border-[#020b16] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
                <Image
                  src="/images/founder/tarcisio-machado-expert.png"
                  alt="Tarcísio Machado"
                  fill
                  sizes="190px"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="mt-2 rounded-xl border border-white/10 bg-[#061426]/90 px-3 py-2 backdrop-blur">
                <span className="block text-sm font-bold text-white">Tarcísio Machado</span>
                <span className="block text-[11px] text-accent">Caminho Soberano</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
}
