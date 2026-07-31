"use client";

import { ArrowRight, Check } from "lucide-react";

import {
  eventMeta,
  ticketBenefits,
  tickets,
} from "@/lib/event-bitcoin-pratica";
import { cn } from "@/lib/utils";

import styles from "./ticket-holo.module.css";

const tierLabel: Record<(typeof tickets)[number]["id"], string> = {
  bronze: "BRONZE",
  prata: "PRATA",
  ouro: "OURO",
};

const tierBg: Record<(typeof tickets)[number]["id"], string> = {
  bronze: styles.tierBronze,
  prata: "",
  ouro: styles.tierOuro,
};

function TicketBumpFilter({ id }: { id: string }) {
  return (
    <svg className={styles.filter} aria-hidden>
      <filter id={id}>
        <feTurbulence
          result="noise"
          numOctaves={3}
          baseFrequency="0.7"
          type="fractalNoise"
        />
        <feSpecularLighting
          in="noise"
          result="specular"
          lightingColor="#fffffc"
          specularExponent={25}
          specularConstant="0.8"
          surfaceScale="0.15"
        >
          <fePointLight z={210} y={100} x={100} />
        </feSpecularLighting>
        <feComposite
          result="noise2"
          operator="in"
          in="specular"
          in2="SourceGraphic"
        />
        <feBlend mode="screen" in2="noise2" in="SourceGraphic" />
      </filter>
    </svg>
  );
}

export function PricingCards() {
  return (
    <div className="mt-12 grid items-start justify-items-center gap-8 lg:grid-cols-3 lg:gap-6">
      {tickets.map((ticket) => {
        const filterId = `ticket-bump-${ticket.id}`;
        return (
          <div key={ticket.id} className={styles.scene}>
            <article
              className={cn(
                styles.card,
                ticket.featured && styles.cardFeatured,
              )}
            >
              <div className={styles.notes} aria-hidden>
                ₿₿₿₿₿
              </div>
              <div className={styles.notes} aria-hidden>
                ₿₿₿₿
              </div>
              <div className={styles.notes} aria-hidden>
                ₿₿₿₿₿
              </div>

              <div className={styles.header}>
                {tierLabel[ticket.id]}
                <div className={styles.symbol} aria-hidden>
                  ✁
                </div>
              </div>

              <div className={styles.body}>
                <p className={styles.meta}>
                  {eventMeta.dateShort}
                  <br />
                  {eventMeta.location}
                </p>
                <p className={styles.meta} style={{ marginTop: "0.35rem" }}>
                  Pague via PIX
                </p>

                <ul className={styles.benefits}>
                  {ticketBenefits.map((benefit) => (
                    <li key={benefit}>
                      <Check className={styles.check} strokeWidth={2.5} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.footer}>
                <p className={styles.price}>{ticket.price}</p>
                <p className={styles.tierName}>{tierLabel[ticket.id]}</p>
                <div className={styles.barcode} aria-hidden />
                <a
                  href="https://www.instagram.com/ocaminhosoberano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buy}
                >
                  Comprar Ingresso
                  <ArrowRight size={15} />
                </a>
              </div>

              <div
                className={cn(
                  styles.bg,
                  styles.holographic,
                  tierBg[ticket.id],
                )}
                style={{ filter: `url(#${filterId})` }}
              />
              <TicketBumpFilter id={filterId} />
            </article>
          </div>
        );
      })}
    </div>
  );
}
