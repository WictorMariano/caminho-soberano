import Image from "next/image";

import { eventBenefits } from "@/lib/event-bitcoin-pratica";

const tutorialTitles = [
  "Bitcoin na prática",
  "Proteção patrimonial",
  "Conteúdo estratégico",
] as const;

export function BitcoinTutorials() {
  const items = tutorialTitles
    .map((title) => eventBenefits.find((item) => item.title === title))
    .filter((item): item is (typeof eventBenefits)[number] => Boolean(item));

  return (
    <section id="tutoriais" className="relative overflow-hidden border-t border-white/10 py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-16 h-72 w-[min(90%,860px)] -translate-x-1/2 rounded-full bg-[#f7931a]/18 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Tutoriais e conteúdo
          </p>
          <h2 className="mt-3 max-w-[16em] text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Carteira e autocustódia na prática
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#141414] shadow-[0_24px_60px_-28px_rgba(247,147,26,0.55)]"
            >
              <div
                className="pointer-events-none absolute -left-10 -top-16 h-40 w-48 rounded-full bg-[#f7931a]/30 blur-3xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
                aria-hidden
              />
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/70"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
