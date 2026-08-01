"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeftRight,
  BriefcaseBusiness,
  Handshake,
  Play,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const clips = [
  {
    id: "presencial",
    src: "/videos/treinamento-presencial.mp4",
    poster: "/images/events/dominando-bitcoin/hero.png",
    label: "Presencial",
    caption: "Encontros reais, não feeds",
  },
  {
    id: "pratica",
    src: "/videos/hardwallet.mp4",
    poster: "/images/events/dominando-bitcoin/benefits/bitcoin-practice.jpg",
    label: "Prática",
    caption: "Aprender fazendo, lado a lado",
  },
  {
    id: "comunidade",
    src: "/videos/pne/dep-elidio.mp4",
    poster: "/videos/pne/dep-elidio.jpg",
    label: "Comunidade",
    caption: "Quem já caminha junto",
  },
  {
    id: "conexao",
    src: "/videos/pne/dep-luis-sampaio.mp4",
    poster: "/videos/pne/dep-luis-sampaio.jpg",
    label: "Conexão",
    caption: "Relações que geram valor",
  },
] as const;

const benefits = [
  {
    icon: BriefcaseBusiness,
    title: "Rede de negócios",
    text: "Empresários, profissionais e investidores alinhados à soberania.",
  },
  {
    icon: ShieldCheck,
    title: "P2P de confiança",
    text: "Trocas peer-to-peer com reputação construída presencialmente.",
  },
  {
    icon: ArrowLeftRight,
    title: "Troca de valor",
    text: "Serviços, produtos e parcerias dentro do ecossistema.",
  },
  {
    icon: Handshake,
    title: "Parcerias longas",
    text: "Networking que vira colaboração contínua depois do evento.",
  },
] as const;

function ClipTile({
  clip,
  className,
  featured = false,
}: {
  clip: (typeof clips)[number];
  className?: string;
  featured?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().then(() => setPlaying(true)).catch(() => {});
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/12 bg-[#071525]",
        className,
      )}
    >
      <video
        ref={videoRef}
        src={clip.src}
        poster={clip.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className={cn(
          "h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]",
          featured ? "min-h-[320px] md:min-h-[420px]" : "min-h-[160px] md:min-h-[200px]",
        )}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020b16]/90 via-[#020b16]/15 to-transparent" />
      {!playing && !reduce ? (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/50 bg-black/35 text-accent backdrop-blur-sm">
            <Play size={18} fill="currentColor" className="ml-0.5" />
          </span>
        </span>
      ) : null}
      <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-accent">
          {clip.label}
        </p>
        <p
          className={cn(
            "mt-1 font-semibold text-white",
            featured ? "text-lg md:text-xl" : "text-sm md:text-base",
          )}
        >
          {clip.caption}
        </p>
      </figcaption>
    </motion.figure>
  );
}

export function RedeSoberanaSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="network"
      className="relative overflow-hidden bg-[#020b16] py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "5px 5px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, #000 20%, transparent 75%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[rgba(70,160,255,0.12)] blur-[80px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/4 h-80 w-80 rounded-full bg-[rgba(255,241,0,0.06)] blur-[90px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Networking
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            Rede <span className="text-accent">Soberana</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            Pessoas reais, no mesmo lugar, com o mesmo propósito. O tipo de
            conexão que o algoritmo nunca entrega.
          </p>
        </motion.div>

        {/* Mosaic: 1 featured + 3 tiles */}
        <div className="mt-12 grid gap-3 md:mt-14 md:grid-cols-12 md:gap-4">
          <ClipTile
            clip={clips[0]}
            featured
            className="md:col-span-7 md:row-span-2"
          />
          <ClipTile clip={clips[1]} className="md:col-span-5" />
          <div className="grid grid-cols-2 gap-3 md:col-span-5 md:gap-4">
            <ClipTile clip={clips[2]} />
            <ClipTile clip={clips[3]} />
          </div>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="text-left"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <h3 className="mt-3 text-base font-semibold text-white md:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
