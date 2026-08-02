import { pneCtaUrl, pneMeta } from "@/lib/workshop-pne";
import { cn } from "@/lib/utils";

type PneCtaLinkProps = {
  className?: string;
  size?: "md" | "lg";
};

export function PneCtaLink({ className, size = "lg" }: PneCtaLinkProps) {
  return (
    <a
      href={pneCtaUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-accent font-bold text-accent-ink transition hover:brightness-105",
        size === "lg" && "px-7 py-3.5 text-base",
        size === "md" && "px-5 py-2.5 text-sm",
        className,
      )}
    >
      {pneMeta.ctaLabel}
    </a>
  );
}
