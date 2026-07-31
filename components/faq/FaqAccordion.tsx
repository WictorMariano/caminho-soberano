"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

import { siteFaqs } from "@/lib/site";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items?: typeof siteFaqs;
  className?: string;
};

export function FaqAccordion({
  items = siteFaqs,
  className,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((faq, index) => {
        const open = openIndex === index;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border border-border bg-surface-elevated/80 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              aria-expanded={open}
            >
              <span className="text-base font-medium md:text-lg">
                {faq.question}
              </span>
              <span
                className={cn(
                  "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border transition",
                  open && "rotate-45 border-accent text-accent",
                )}
              >
                <Plus size={16} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <p className="border-t border-border px-5 pb-5 pt-3 text-sm leading-relaxed text-foreground/75 md:px-6 md:text-base">
                    {faq.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
