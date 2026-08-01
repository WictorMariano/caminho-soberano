"use client";

import { useEffect, useState } from "react";

import { PneCtaLink } from "@/components/workshop/pne/PneCtaLink";

type PneStickyCtaProps = {
  closingId?: string;
};

export function PneStickyCta({ closingId = "pne-fechamento" }: PneStickyCtaProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("pne-hero");
    const closing = document.getElementById(closingId);
    if (!hero) return;

    const update = () => {
      const pastHero = window.scrollY > hero.offsetHeight * 0.65;
      const closingRect = closing?.getBoundingClientRect();
      const closingInView =
        !!closingRect &&
        closingRect.top < window.innerHeight * 0.85 &&
        closingRect.bottom > 0;
      setVisible(pastHero && !closingInView);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [closingId]);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#020b16]/95 p-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto max-w-lg">
        <PneCtaLink className="w-full" size="md" />
      </div>
    </div>
  );
}
