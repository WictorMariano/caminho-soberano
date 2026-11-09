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
    { src: "/images/gallery/gallery-01.png", alt: "Evento Caminho Soberano" },
    { src: "/images/gallery/gallery-04.png", alt: "Plateia em palestra" },
    { src: "/images/gallery/gallery-07.jpg", alt: "Workshop presencial" },
    { src: "/images/gallery/gallery-10.webp", alt: "Encontro presencial" },
  ],
  [
    { src: "/images/gallery/gallery-02.png", alt: "Palestra presencial" },
    { src: "/images/gallery/gallery-05.png", alt: "Participantes" },
    { src: "/images/gallery/gallery-08.jpg", alt: "Networking" },
    { src: "/images/gallery/gallery-11.webp", alt: "Público reunido" },
  ],
  [
    { src: "/images/gallery/gallery-03.png", alt: "Participantes" },
    { src: "/images/gallery/gallery-06.jpg", alt: "Público do evento" },
    { src: "/images/gallery/gallery-09.jpg", alt: "Imersão presencial" },
    { src: "/images/gallery/gallery-12.jpg", alt: "Comunidade" },
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

export function DefiGallery() {
  return (
    <section id="galeria" className="relative bg-[#061018]">
      <ContainerStagger className="relative z-10 mx-auto max-w-3xl px-5 pb-6 pt-16 text-center md:px-8 md:pt-20">
        <ContainerAnimated>
          <h2 className="mx-auto max-w-[14em] text-balance text-3xl font-bold tracking-tight md:text-4xl">
            O clima dos encontros presenciais
          </h2>
        </ContainerAnimated>
        <ContainerAnimated>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/65">
            A mesma energia dos eventos do Caminho Soberano: conteúdo, prática e
            gente decidida a operar com soberania.
          </p>
        </ContainerAnimated>
      </ContainerStagger>

      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {columns[0].map((photo) => (
                <Photo key={photo.src} {...photo} />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {columns[1].map((photo) => (
                <Photo key={photo.src} {...photo} />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {columns[2].map((photo) => (
                <Photo key={photo.src} {...photo} />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
      <div className="h-28 bg-[#061018] md:h-40" />
    </section>
  );
}
