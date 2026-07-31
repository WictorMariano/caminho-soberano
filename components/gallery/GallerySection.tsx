"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";

import {
  ScrollXCarousel,
  ScrollXCarouselContainer,
  ScrollXCarouselWrap,
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

  return (
    <section id="galeria" className="bg-black">
      {reduceMotion ? (
        <div className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Galeria
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
              O que já aconteceu em nossos eventos?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
              Confira nossos encontros presenciais que reuniram indivíduos de
              diferentes regiões do país, todos movidos pela mesma inquietação:
              não viver sob tutela.
            </p>
          </div>
          <div className="mt-12 space-y-4">
            <AutoMarqueeRow items={rowOne} />
            <AutoMarqueeRow items={rowTwo} reverse />
          </div>
        </div>
      ) : (
        <ScrollXCarousel className="h-[260vh]">
          <ScrollXCarouselContainer className="flex h-[100svh] flex-col justify-center py-10 md:py-14">
            <div className="mx-auto w-full max-w-6xl shrink-0 px-5 md:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Galeria
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                O que já aconteceu em nossos eventos?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/75 md:text-lg">
                Confira nossos encontros presenciais que reuniram indivíduos de
                diferentes regiões do país, todos movidos pela mesma
                inquietação: não viver sob tutela.
              </p>
            </div>

            <div className="mt-10 space-y-3 md:mt-12 md:space-y-4">
              {/* Linha 1 — rola para a esquerda */}
              <div className="overflow-hidden">
                <ScrollXCarouselWrap
                  xRange={["5%", "-40%"]}
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

              {/* Linha 2 — rola para a direita */}
              <div className="overflow-hidden">
                <ScrollXCarouselWrap
                  xRange={["-40%", "5%"]}
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
          </ScrollXCarouselContainer>
        </ScrollXCarousel>
      )}
    </section>
  );
}
