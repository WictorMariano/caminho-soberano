"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Clock3,
  Compass,
  Gamepad2,
  Lightbulb,
  Map,
  ScanSearch,
  Utensils,
  Wallet,
} from "lucide-react";

import { PneCtaLink } from "@/components/workshop/pne/PneCtaLink";
import { pneMeta, pneSchedule, type ScheduleItem } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

const stageIcons = [
  Compass,
  Gamepad2,
  ScanSearch,
  Utensils,
  Map,
  Wallet,
  Lightbulb,
] as const;

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const n = Number.parseInt(full, 16);
  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
  };
}

function ScheduleCard({
  item,
  index,
  isActive,
  alignEnd,
  reduce,
}: {
  item: ScheduleItem;
  index: number;
  isActive: boolean;
  alignEnd: boolean;
  reduce: boolean | null;
}) {
  const Icon = stageIcons[index] ?? Clock3;
  const { r, g, b } = hexToRgb(item.color);
  const rgb = `${r},${g},${b}`;

  return (
    <motion.article
      animate={
        reduce
          ? undefined
          : {
              y: isActive ? -6 : 0,
              scale: isActive ? 1.015 : 0.99,
              opacity: isActive ? 1 : 0.48,
            }
      }
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-md transition-[border-color,box-shadow] duration-700",
        isActive && "border-white/20",
      )}
      style={{
        boxShadow: isActive
          ? `0 0 0 1px rgba(${rgb},0.28), 0 24px 48px -20px rgba(${rgb},0.55), 0 0 40px rgba(${rgb},0.18)`
          : `0 0 0 1px rgba(${rgb},0.08), 0 16px 32px -24px rgba(0,0,0,0.6)`,
      }}
    >
      {/* Bottom glow wash */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 transition-opacity duration-700"
        style={{
          opacity: isActive ? 0.85 : 0.35,
          background: `linear-gradient(to top, rgba(${rgb},0.32), transparent)`,
        }}
        aria-hidden
      />

      {/* Soft top highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-40"
        style={{
          background: `linear-gradient(to bottom, rgba(${rgb},0.12), transparent)`,
        }}
        aria-hidden
      />

      <div className="relative z-10 p-5 md:p-6">
        <div
          className={cn(
            "flex flex-wrap items-center gap-3",
            alignEnd && "md:flex-row-reverse",
          )}
        >
          <div
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border backdrop-blur-sm transition duration-700"
            style={{
              borderColor: `rgba(${rgb},${isActive ? 0.55 : 0.28})`,
              background: `rgba(${rgb},${isActive ? 0.2 : 0.1})`,
              boxShadow: isActive ? `0 0 22px rgba(${rgb},0.45)` : undefined,
            }}
          >
            <Icon
              className="h-5 w-5"
              style={{ color: item.color }}
              strokeWidth={1.75}
            />
          </div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]"
            style={{
              color: item.color,
              borderColor: `rgba(${rgb},0.35)`,
              background: `rgba(${rgb},0.1)`,
            }}
          >
            <Clock3 size={12} />
            {item.time}
          </span>
        </div>

        <h3
          className={cn(
            "mt-4 text-lg font-bold tracking-tight text-white md:text-xl",
            alignEnd && "md:text-right",
          )}
        >
          {item.title}
        </h3>
        <p
          className={cn(
            "mt-1.5 text-sm text-white/55",
            alignEnd && "md:text-right",
          )}
        >
          Objetivo: {item.objective}
        </p>

        <ul className="mt-4 space-y-2.5">
          {item.contents.map((topic, topicIndex) => (
            <motion.li
              key={topic}
              initial={false}
              animate={
                reduce
                  ? undefined
                  : {
                      opacity: isActive ? 1 : 0.55,
                      x: isActive ? 0 : alignEnd ? 6 : -6,
                    }
              }
              transition={{
                duration: 0.55,
                delay: isActive ? topicIndex * 0.06 : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "flex items-start gap-2.5 text-sm text-white/80 md:text-[15px]",
                alignEnd && "md:flex-row-reverse md:text-right",
              )}
            >
              <span
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition duration-700"
                style={{
                  borderColor: `rgba(${rgb},0.45)`,
                  background: `rgba(${rgb},0.14)`,
                  boxShadow: isActive
                    ? `0 0 10px rgba(${rgb},0.35)`
                    : undefined,
                }}
              >
                <Check
                  size={12}
                  strokeWidth={2.75}
                  style={{ color: item.color }}
                />
              </span>
              <span>{topic}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Bottom light line */}
      <div
        className="absolute inset-x-4 bottom-0 h-px rounded-full transition-opacity duration-700"
        style={{
          opacity: isActive ? 0.95 : 0.35,
          background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
          boxShadow: `0 0 16px ${item.color}`,
        }}
        aria-hidden
      />
    </motion.article>
  );
}

export function PneSchedule() {
  const reduce = useReducedMotion();
  const listRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll("[data-schedule-card]"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = Number(
            (visible[0].target as HTMLElement).dataset.index ?? 0,
          );
          setActive(idx);
        }
      },
      {
        root: null,
        // Zona central mais estreita → cada card exige mais scroll para ativar
        threshold: [0.2, 0.4, 0.55, 0.7],
        rootMargin: "-28% 0px -42% 0px",
      },
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;

    let raf = 0;
    let current = 0;

    const onScroll = () => {
      const rect = root.getBoundingClientRect();
      const viewH = window.innerHeight;
      const start = viewH * 0.88;
      const end = viewH * -0.2;
      const span = start - end + rect.height * 1.15;
      const target = Math.min(1, Math.max(0, (start - rect.top) / span));

      cancelAnimationFrame(raf);
      const tick = () => {
        current += (target - current) * 0.06;
        if (Math.abs(target - current) < 0.001) current = target;
        setLineProgress(current);
        if (current !== target) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-t border-white/8 bg-[#03111f] py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(59,158,255,0.12), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Cronograma do dia
          </h2>
          <p className="mt-3 text-base text-white/65 md:text-lg">
            {pneMeta.time} · sete momentos para compreender, diagnosticar e
            experimentar.
          </p>
        </motion.div>

        <div ref={listRef} className="relative mt-12 md:mt-16">
          {/* Timeline track */}
          <div className="absolute bottom-4 left-[15px] top-4 w-px bg-white/10 md:left-1/2 md:-translate-x-px" />
          <div
            className="absolute left-[15px] top-4 w-px origin-top bg-gradient-to-b from-[#3b9eff] via-[#2dd4bf] to-[#e8c43a] transition-[height] duration-700 ease-out md:left-1/2 md:-translate-x-px"
            style={{ height: `${lineProgress * 100}%` }}
          />

          <ol className="space-y-16 md:space-y-24">
            {pneSchedule.map((item, i) => {
              const isActive = active === i;
              const left = i % 2 === 0;
              const { r, g, b } = hexToRgb(item.color);
              const rgb = `${r},${g},${b}`;

              return (
                <li
                  key={item.id}
                  data-schedule-card
                  data-index={i}
                  className="relative grid md:grid-cols-2 md:gap-12"
                >
                  {/* Node on spine */}
                  <motion.div
                    animate={
                      reduce
                        ? undefined
                        : {
                            scale: isActive ? 1.28 : 1,
                          }
                    }
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute left-[7px] top-7 z-10 flex h-[18px] w-[18px] items-center justify-center rounded-full border-2 md:left-1/2 md:-translate-x-1/2"
                    style={{
                      borderColor: isActive ? "#fff" : `rgba(${rgb},0.55)`,
                      backgroundColor: isActive ? item.color : "#03111f",
                      boxShadow: isActive
                        ? `0 0 0 4px rgba(${rgb},0.22), 0 0 22px rgba(${rgb},0.75)`
                        : `0 0 10px rgba(${rgb},0.25)`,
                      transition:
                        "background-color 0.65s ease, border-color 0.65s ease, box-shadow 0.65s ease",
                    }}
                  />

                  <div
                    className={cn(
                      "pl-10 md:pl-0",
                      left
                        ? "md:pr-14 md:text-right"
                        : "md:col-start-2 md:pl-14",
                    )}
                  >
                    <ScheduleCard
                      item={item}
                      index={i}
                      isActive={isActive}
                      alignEnd={left}
                      reduce={reduce}
                    />
                  </div>

                  {left ? <div className="hidden md:block" /> : null}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 text-center">
          <PneCtaLink />
        </div>
      </div>
    </section>
  );
}
