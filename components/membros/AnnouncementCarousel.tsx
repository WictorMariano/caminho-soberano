"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import {
  ANNOUNCEMENTS_STORAGE_KEY,
  defaultAnnouncements,
  parseAnnouncements,
  type MemberAnnouncement,
} from "@/lib/membros/comms";

export function AnnouncementCarousel() {
  const [items, setItems] = useState<MemberAnnouncement[]>(
    defaultAnnouncements.filter((item) => item.active),
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const sync = () => {
      const next = parseAnnouncements(
        window.localStorage.getItem(ANNOUNCEMENTS_STORAGE_KEY),
      ).filter((item) => item.active);
      setItems(next);
      setIndex(0);
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("cs-announcements-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("cs-announcements-updated", sync);
    };
  }, []);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, items.length]);

  if (items.length === 0) return null;
  const current = items[index] ?? items[0];
  if (!current) return null;

  return (
    <section
      aria-label="Anúncios da plataforma"
      className="relative overflow-hidden rounded-[1.5rem] border border-white/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[16/9] min-h-[168px] w-full sm:aspect-[21/8] sm:min-h-[190px]">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={item.image}
              alt=""
              fill
              priority={i === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1100px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#020b16] via-[#020b16]/75 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020b16] via-transparent to-[#020b16]/25" />
          </div>
        ))}

        <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-7">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
            Aviso da plataforma
          </p>
          <h2 className="mt-1.5 max-w-xl text-lg font-extrabold tracking-tight text-white sm:text-xl md:text-2xl">
            {current.title}
          </h2>
          <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-white/75">
            {current.text}
          </p>
          {current.ctaHref && current.ctaLabel ? (
            <Link
              href={current.ctaHref}
              className="mt-3 inline-flex w-fit items-center rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-ink transition hover:brightness-95"
            >
              {current.ctaLabel}
            </Link>
          ) : null}
        </div>

        {items.length > 1 ? (
          <>
            <div className="absolute bottom-4 right-4 hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Anúncio anterior"
                onClick={() =>
                  setIndex((current) => (current - 1 + items.length) % items.length)
                }
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Próximo anúncio"
                onClick={() => setIndex((current) => (current + 1) % items.length)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 sm:left-auto sm:right-28 sm:translate-x-0">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Ir para anúncio ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition ${
                    i === index ? "w-5 bg-accent" : "w-1.5 bg-white/35"
                  }`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
