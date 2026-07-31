"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselWrap,
  useScrollXCarousel,
} from "@/components/ui/scroll-x-carousel";
import { cn } from "@/lib/utils";

const rowOne = [
  { src: "/images/gallery/gallery-01.png", alt: "Participantes em evento" },
  { src: "/images/gallery/gallery-07.jpg", alt: "Sala de imersão" },
  { src: "/images/gallery/gallery-06.jpg", alt: "Workshop Bitcoin" },
  { src: "/images/gallery/gallery-08.jpg", alt: "Networking no evento" },
  { src: "/images/gallery/gallery-05.png", alt: "Encontro presencial" },
  { src: "/images/gallery/gallery-03.png", alt: "Comunidade reunida" },
];

const rowTwo = [
  { src: "/images/gallery/gallery-09.jpg", alt: "Apresentação técnica" },
  { src: "/images/gallery/gallery-02.png", alt: "Momento do evento" },
  { src: "/images/gallery/gallery-04.png", alt: "Público no evento" },
  { src: "/images/gallery/gallery-10.webp", alt: "Bastidores do evento" },
  { src: "/images/gallery/gallery-11.webp", alt: "Imersão Caminho Soberano" },
  { src: "/images/gallery/gallery-01.png", alt: "Participantes reunidos" },
];

function GalleryCard({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-44 w-64 shrink-0 overflow-hidden rounded-2xl border border-white/10 sm:h-52 sm:w-80 md:h-60 md:w-[22rem] lg:h-64 lg:w-[26rem]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 416px"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    </div>
  );
}

function GalleryHeadingStatic() {
  return (
    <div className="mx-auto w-full max-w-6xl shrink-0 px-5 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        Galeria
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        O que já aconteceu em nossos eventos?
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
        Confira nossos encontros presenciais que reuniram indivíduos de
        diferentes regiões do país, todos movidos pela mesma inquietação: não
        viver sob tutela.
      </p>
    </div>
  );
}

/** Título desce e subtítulo some de forma suave; só volta ao subir */
function GalleryHeadingAnimated() {
  const { scrollYProgress } = useScrollXCarousel();
  const lockedRef = useRef(false);
  const effectiveProgress = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Colapso completo — trava até o usuário voltar ao topo da seção
    if (progress >= 0.42) {
      lockedRef.current = true;
      effectiveProgress.set(0.42);
      return;
    }

    if (lockedRef.current) {
      if (progress <= 0.05) {
        lockedRef.current = false;
        effectiveProgress.set(progress);
      } else {
        effectiveProgress.set(0.42);
      }
      return;
    }

    effectiveProgress.set(progress);
  });

  const smoothProgress = useSpring(effectiveProgress, {
    stiffness: 55,
    damping: 28,
    mass: 0.45,
    restDelta: 0.001,
  });

  const eyebrowOpacity = useTransform(
    smoothProgress,
    [0, 0.18, 0.42],
    [1, 0.4, 0],
  );
  const eyebrowY = useTransform(smoothProgress, [0, 0.42], [0, -14]);

  const titleY = useTransform(smoothProgress, [0, 0.42], [0, 78]);
  const titleScale = useTransform(smoothProgress, [0, 0.42], [1, 0.97]);

  const subtitleOpacity = useTransform(
    smoothProgress,
    [0, 0.14, 0.36, 0.42],
    [1, 0.55, 0.08, 0],
  );
  const subtitleY = useTransform(smoothProgress, [0, 0.42], [0, 20]);

  return (
    <div className="relative mx-auto w-full max-w-6xl shrink-0 px-5 md:px-8">
      <div className="relative min-h-[11.5rem] md:min-h-[13rem] lg:min-h-[14.5rem]">
        <motion.p
          className="text-sm font-semibold uppercase tracking-[0.2em] text-accent will-change-transform"
          style={{ opacity: eyebrowOpacity, y: eyebrowY }}
        >
          Galeria
        </motion.p>

        <motion.h2
          className="mt-3 max-w-2xl origin-left text-3xl font-bold tracking-tight text-white will-change-transform md:text-4xl lg:text-5xl"
          style={{ y: titleY, scale: titleScale }}
        >
          O que já aconteceu em nossos eventos?
        </motion.h2>

        <motion.p
          className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 will-change-transform md:text-lg"
          style={{ opacity: subtitleOpacity, y: subtitleY }}
        >
          Confira nossos encontros presenciais que reuniram indivíduos de
          diferentes regiões do país, todos movidos pela mesma inquietação: não
          viver sob tutela.
        </motion.p>
      </div>
    </div>
  );
}

function AutoMarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof rowOne;
  reverse?: boolean;
}) {
  const loop = [...items, ...items, ...items];

  return (
    <div
      className={cn(
        "gallery-marquee overflow-hidden",
        reverse && "gallery-marquee--reverse",
      )}
    >
      <div className="gallery-marquee-track flex w-max gap-3 md:gap-4">
        {loop.map((item, index) => (
          <GalleryCard
            key={`${item.src}-${index}`}
            src={item.src}
            alt={item.alt}
          />
        ))}
      </div>
    </div>
  );
}

export function GallerySection() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <section id="galeria" className="relative bg-background py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--cs-glow),_transparent_55%)] opacity-40" />
        <div className="relative">
          <GalleryHeadingStatic />
          <div className="mt-12 space-y-4">
            <AutoMarqueeRow items={rowOne} />
            <AutoMarqueeRow items={rowTwo} reverse />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="galeria" className="relative bg-background">
      <ScrollXCarousel className="h-[280vh]">
        <ScrollXCarouselContainer className="flex h-[100svh] flex-col justify-center bg-background py-10 md:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--cs-glow),_transparent_55%)] opacity-40" />
          <div className="relative z-10">
            <GalleryHeadingAnimated />

            <div className="mt-8 space-y-3 md:mt-10 md:space-y-4">
              <div className="overflow-hidden">
                <ScrollXCarouselWrap
                  xRange={["8%", "-55%"]}
                  className="gap-3 px-5 md:gap-4 md:px-8"
                >
                  {[...rowOne, ...rowOne].map((item, index) => (
                    <GalleryCard
                      key={`r1-${item.src}-${index}`}
                      src={item.src}
                      alt={item.alt}
                    />
                  ))}
                </ScrollXCarouselWrap>
              </div>

              <div className="overflow-hidden">
                <ScrollXCarouselWrap
                  xRange={["-55%", "8%"]}
                  className="gap-3 px-5 md:gap-4 md:px-8"
                >
                  {[...rowTwo, ...rowTwo].map((item, index) => (
                    <GalleryCard
                      key={`r2-${item.src}-${index}`}
                      src={item.src}
                      alt={item.alt}
                    />
                  ))}
                </ScrollXCarouselWrap>
              </div>
            </div>
          </div>
        </ScrollXCarouselContainer>
      </ScrollXCarousel>
    </section>
  );
}
