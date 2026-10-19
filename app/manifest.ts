import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Caminho Soberano",
    short_name: "Soberano",
    description:
      "Área de membros do Caminho Soberano: cursos, trilhas, desafios e soberania financeira.",
    start_url: "/membros",
    display: "standalone",
    background_color: "#020b16",
    theme_color: "#020b16",
    lang: "pt-BR",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/brand/logo-mark.png",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
