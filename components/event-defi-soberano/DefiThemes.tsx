"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { defiThemes } from "@/lib/event-defi-soberano";

export function DefiThemes() {
  return (
    <section className="relative border-t border-white/8 bg-[#08141c] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Temas e experiência
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
            Um dia presencial para unir fundamentos, método e operação guiada.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {defiThemes.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 ${
                index === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 ? "min-h-[320px] md:min-h-full" : "aspect-[16/11]"}`}>
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                  <h3 className={`font-bold text-white ${index === 0 ? "text-2xl md:text-3xl" : "text-lg"}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-2 text-white/75 ${index === 0 ? "max-w-md text-base" : "text-sm"}`}>
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
