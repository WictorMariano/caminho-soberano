import { Quote } from "lucide-react";

import { eventTestimonials } from "@/lib/event-bitcoin-pratica";

export function EventTestimonials() {
  return (
    <section id="depoimentos" className="relative py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Depoimentos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Quem conduz a imersão
          </h2>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {eventTestimonials.map((item) => (
            <li
              key={item.name}
              className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-[#1c1008] p-6"
            >
              <Quote className="text-accent" size={22} aria-hidden />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80 md:text-base">
                {item.quote}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-white/50">{item.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
