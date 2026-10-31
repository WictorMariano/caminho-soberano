import Image from "next/image";

import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from "@/components/event-bitcoin-pratica/gallery-scroll";

const columns = [
  [
    { src: "/images/gallery/gallery-01.png", alt: "Evento anterior do Caminho Soberano" },
    { src: "/images/gallery/gallery-04.png", alt: "Plateia em palestra" },
    { src: "/images/gallery/gallery-07.jpg", alt: "Workshop Caminho Soberano" },
    { src: "/images/gallery/gallery-10.webp", alt: "Encontro presencial" },
  ],
  [
    { src: "/images/gallery/gallery-02.png", alt: "Palestra presencial" },
    { src: "/images/gallery/gallery-05.png", alt: "Participantes" },
    { src: "/images/gallery/gallery-08.jpg", alt: "Networking no evento" },
    { src: "/images/gallery/gallery-11.webp", alt: "Público reunido" },
  ],
  [
    { src: "/images/gallery/gallery-03.png", alt: "Participantes em encontro" },
    { src: "/images/gallery/gallery-06.jpg", alt: "Público do evento" },
    { src: "/images/gallery/gallery-09.jpg", alt: "Imersão presencial" },
    { src: "/images/gallery/gallery-12.jpg", alt: "Encontro da comunidade" },
  ],
] as const;

function Photo({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={900}
      height={506}
      sizes="33vw"
      className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
    />
  );
}

export function PastEventsGallery() {
  return (
    <section id="galeria" className="relative bg-[#120904]">
      <ContainerStagger className="relative z-10 mx-auto max-w-3xl px-5 pb-6 pt-16 text-center md:px-8 md:pt-20">
        <ContainerAnimated>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            18 a 21 de novembro
          </p>
        </ContainerAnimated>
        <ContainerAnimated className="my-4">
          <h2 className="mx-auto max-w-[14em] text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Quem busca soberania se encontra aqui
          </h2>
        </ContainerAnimated>
        <ContainerAnimated>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70">
            Quatro dias em São Paulo para juntar quem quer custódia,
            patrimônio protegido e uma rede que continua depois do evento.
          </p>
        </ContainerAnimated>
      </ContainerStagger>

      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {columns[0].map((photo) => (
                <Photo key={photo.src} src={photo.src} alt={photo.alt} />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {columns[1].map((photo) => (
                <Photo key={photo.src} src={photo.src} alt={photo.alt} />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {columns[2].map((photo) => (
                <Photo key={photo.src} src={photo.src} alt={photo.alt} />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
      <div className="h-28 bg-[#120904] md:h-40" aria-hidden />
    </section>
  );
}
