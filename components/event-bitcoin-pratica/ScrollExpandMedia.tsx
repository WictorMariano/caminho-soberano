"use client";

import Image from "next/image";
import {
  useReducedMotion,
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ScrollExpandMediaProps = {
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title: string;
  eyebrow?: string;
  scrollHint?: string;
  children?: ReactNode;
  className?: string;
  /** No fim do scroll, escurece até preto absoluto antes da próxima seção */
  exitToBlack?: boolean;
};

export function ScrollExpandMedia({
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  eyebrow,
  scrollHint = "Role para expandir",
  children,
  className,
  exitToBlack = false,
}: ScrollExpandMediaProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [contentInteractive, setContentInteractive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Fase 1 (0 → 0.4): retângulo vertical centrado → horizontal
  const mediaWidth = useTransform(scrollYProgress, [0, 0.4], [280, 1180]);
  const mediaHeight = useTransform(scrollYProgress, [0, 0.4], [430, 620]);
  const mediaRadius = useTransform(scrollYProgress, [0, 0.4], [28, 20]);
  const mediaScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.55, 0.7],
    [1, 1, 0.94, 0.88],
  );

  // Fase 2: vídeo some e permanece sumido até o fim
  const mediaOpacity = useTransform(
    scrollYProgress,
    [0.45, 0.65, 1],
    [1, 0, 0],
  );
  const mediaBlur = useTransform(scrollYProgress, [0.45, 0.65], [0, 14]);
  const mediaFilter = useTransform(mediaBlur, (v) => `blur(${v}px)`);

  const bgDim = useTransform(
    scrollYProgress,
    exitToBlack ? [0.35, 0.65, 0.84, 1] : [0.35, 0.65, 1],
    exitToBlack ? [0.1, 0.45, 0.55, 1] : [0.1, 0.55, 0.55],
  );
  const bgImageOpacity = useTransform(
    scrollYProgress,
    exitToBlack ? [0.78, 0.92, 1] : [0, 1],
    exitToBlack ? [1, 0.4, 0] : [1, 1],
  );

  const titleShift = useTransform(scrollYProgress, [0, 0.4], [0, 160]);
  const titleShiftNeg = useTransform(scrollYProgress, [0, 0.4], [0, -160]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.62],
    [1, 1, 0.35, 0],
  );

  const hintOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.38],
    [1, 0.55, 0],
  );

  // Fase 3: texto aparece e permanece visível (só o fundo escurece no exitToBlack)
  const contentOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.7, 1],
    [0, 1, 1],
  );
  const contentY = useTransform(scrollYProgress, [0.55, 0.7, 1], [40, 0, 0]);
  const contentScale = useTransform(
    scrollYProgress,
    [0.55, 0.7, 1],
    [0.97, 1, 1],
  );

  useMotionValueEvent(contentOpacity, "change", (value) => {
    setContentInteractive(value > 0.45);
  });
  const words = title.trim().split(/\s+/);
  const mid = Math.ceil(words.length / 2);
  const leftTitle = words.slice(0, mid).join(" ");
  const rightTitle = words.slice(mid).join(" ");

  if (reduceMotion) {
    return (
      <div className={cn("relative bg-background py-20 md:py-28", className)}>
        <div className="absolute inset-0">
          <Image
            src={bgImageSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 text-center md:px-8">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white drop-shadow-lg md:text-5xl">
            {title}
          </h2>
          <div className="relative mt-8 aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
            <video
              src={mediaSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
              controls={false}
            />
          </div>
          <div className="mt-10 w-full text-left">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={sectionRef}
      className={cn(
        "relative",
        exitToBlack ? "h-[380vh] bg-black" : "h-[360vh] bg-background",
        className,
      )}
    >
      <div
        className={cn(
          "sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden",
          exitToBlack && "bg-black",
        )}
      >
        <div className="absolute inset-0 z-0">
          <motion.div className="absolute inset-0" style={{ opacity: bgImageOpacity }}>
            <Image
              src={bgImageSrc}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: bgDim }}
          />
        </div>

        <motion.div
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-4"
          style={{ opacity: mediaOpacity, filter: mediaFilter }}
        >
          <div className="relative flex w-full flex-col items-center justify-center">
            {eyebrow ? (
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent drop-shadow">
                {eyebrow}
              </p>
            ) : null}

            <div className="relative flex items-center justify-center">
              <motion.div
                className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center gap-3"
                style={{ opacity: titleOpacity }}
              >
                <motion.h2
                  className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ x: titleShiftNeg }}
                >
                  {leftTitle}
                </motion.h2>
                {rightTitle ? (
                  <motion.h2
                    className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{ x: titleShift }}
                  >
                    {rightTitle}
                  </motion.h2>
                ) : null}
              </motion.div>

              <motion.div
                className="relative z-10 overflow-hidden border border-white/25 shadow-[0_30px_80px_-18px_rgba(0,0,0,0.7)]"
                style={{
                  width: mediaWidth,
                  height: mediaHeight,
                  borderRadius: mediaRadius,
                  scale: mediaScale,
                  maxWidth: "92vw",
                  maxHeight: "72vh",
                }}
              >
                <video
                  src={mediaSrc}
                  poster={posterSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  controls={false}
                  disablePictureInPicture
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </div>

            <motion.p
              className="mt-5 text-sm font-medium text-white/90 drop-shadow md:text-base"
              style={{ opacity: hintOpacity }}
            >
              {scrollHint}
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className={cn(
            "absolute inset-0 z-30 flex items-center justify-center overflow-y-auto py-10",
            contentInteractive ? "pointer-events-auto" : "pointer-events-none",
          )}
          style={{
            opacity: contentOpacity,
            y: contentY,
            scale: contentScale,
          }}
        >
          <div className="my-auto mx-auto w-full max-w-6xl px-5 md:px-8">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
