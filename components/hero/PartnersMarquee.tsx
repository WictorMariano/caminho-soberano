"use client";

import Image from "next/image";

const partners = [
  {
    name: "Parceiro",
    src: "/images/partners/pb-mark.svg",
    width: 110,
    height: 44,
    className: "h-8 w-auto object-contain opacity-90 md:h-9",
  },
  {
    name: "Machado Digital",
    src: "/images/brand/machado-digital.png",
    width: 160,
    height: 48,
    className:
      "h-10 w-auto object-contain object-center opacity-90 brightness-0 invert md:h-11",
  },
] as const;

function PartnerRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex h-14 shrink-0 items-center justify-center px-10 md:px-16"
        >
          <Image
            src={partner.src}
            alt={ariaHidden ? "" : partner.name}
            width={partner.width}
            height={partner.height}
            className={partner.className}
          />
        </div>
      ))}
    </div>
  );
}

export function PartnersMarquee() {
  return (
    <div
      className="partners-marquee relative w-full overflow-hidden border-t border-white/10 bg-black/35 py-3 backdrop-blur-[2px] md:py-3.5"
      aria-label="Empresas parceiras"
    >
      <div className="partners-marquee-track">
        <PartnerRow />
        <PartnerRow ariaHidden />
        <PartnerRow ariaHidden />
        <PartnerRow ariaHidden />
      </div>
    </div>
  );
}
