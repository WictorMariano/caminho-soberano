import Image from "next/image";
import Link from "next/link";

import { MemberAvatar } from "@/components/membros/MemberAvatar";

export function MemberTopBar({ name }: { name: string }) {
  return (
    <header
      className="sticky top-0 z-40 border-b border-white/10 bg-[#07182a]/92 backdrop-blur-xl lg:hidden"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="flex h-14 items-center justify-between gap-3 px-4">
        <Link href="/membros" className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/images/brand/logo-mark.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="truncate text-sm font-semibold tracking-tight text-white">
            Caminho Soberano
          </span>
        </Link>
        <Link
          href="/membros/perfil"
          aria-label="Abrir perfil"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full transition active:scale-95"
        >
          <MemberAvatar name={name} size="sm" />
        </Link>
      </div>
    </header>
  );
}
