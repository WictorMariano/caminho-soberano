import type { Metadata } from "next";

import { SchoolGrid } from "@/components/edu/SchoolGrid";
import { getCurriculum } from "@/lib/edu/curriculum";

export const metadata: Metadata = { title: "Edu" };

export default function EduPage() {
  const schools = getCurriculum();

  return (
    <div className="space-y-8">
      <header>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent md:text-sm">
          Educação
        </p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight md:mt-2 md:text-3xl">Edu</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">
          Nove escolas da jornada de prosperidade. Cada escola tem quatro módulos,
          do descobrir ao multiplicar. No acesso gratuito, só a Escola de
          Soberania Financeira está aberta. As outras aparecem bloqueadas.
        </p>
      </header>
      <SchoolGrid schools={schools} />
    </div>
  );
}
