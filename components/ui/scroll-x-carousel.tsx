"use client";

import * as React from "react";
import {
  type HTMLMotionProps,
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface ScrollXCarouselContextValue {
  scrollYProgress: MotionValue<number>;
}

const ScrollXCarouselContext =
  React.createContext<ScrollXCarouselContextValue | null>(null);

function useScrollXCarousel() {
  const context = React.useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error("useScrollXCarousel must be used within a ScrollXCarousel");
  }
  return context;
}

export function ScrollXCarousel({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ["start start", "end end"],
  });

  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div
        ref={carouselRef}
        className={cn("relative w-full", className)}
        {...props}
      >
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("sticky left-0 top-0 w-full overflow-hidden", className)}
      {...props}
    />
  );
}

export function ScrollXCarouselWrap({
  className,
  style,
  xRange = ["0%", "-45%"],
  xRagnge,
  ...props
}: HTMLMotionProps<"div"> & {
  xRange?: string[];
  /** @deprecated use xRange */
  xRagnge?: string[];
}) {
  const { scrollYProgress } = useScrollXCarousel();
  const range = xRagnge ?? xRange;
  const x = useTransform(scrollYProgress, [0, 1], range);

  return (
    <motion.div
      className={cn("flex w-max will-change-transform", className)}
      style={{ x, ...style }}
      {...props}
    />
  );
}

export function ScrollXCarouselProgress({
  className,
  style,
  progressStyle,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { progressStyle?: string }) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={cn("max-w-full overflow-hidden", className)} {...props}>
      <motion.div
        className={cn("origin-left", progressStyle)}
        style={{ scaleX, ...style }}
      />
    </div>
  );
}
