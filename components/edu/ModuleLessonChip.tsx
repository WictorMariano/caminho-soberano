import Link from "next/link";
import { Lock } from "lucide-react";

import type { ModuleLessonItem } from "@/lib/edu/module-path";

export function ModuleLessonChip({
  item,
}: {
  item: ModuleLessonItem;
  stepColor?: string;
}) {
  const body = (
    <>
      <span
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
        style={{ background: item.schoolColor }}
      >
        {item.index}
      </span>
      <span className="min-w-0 flex-1">
        <span
          className="inline-flex max-w-full items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{
            color: item.schoolColor,
            background: `${item.schoolColor}22`,
          }}
        >
          <span className="opacity-80">{item.schoolOrder}.</span>
          <span className="truncate">{item.schoolTitle}</span>
        </span>
        <span className="mt-1.5 block text-sm font-semibold leading-snug text-white">
          {item.lesson.title}
        </span>
      </span>
      {!item.free ? (
        <Lock size={14} className="mt-1 shrink-0 text-slate-500" />
      ) : null}
    </>
  );

  const className =
    "flex w-full items-start gap-3 rounded-2xl border border-white/10 bg-[#07182a] px-3.5 py-3 text-left transition hover:border-white/25 hover:bg-[#0a1f35]";

  if (item.free) {
    return (
      <Link href={item.href} className={className}>
        {body}
      </Link>
    );
  }

  return (
    <div className={`${className} opacity-80`} title="Escola bloqueada no plano atual">
      {body}
    </div>
  );
}
