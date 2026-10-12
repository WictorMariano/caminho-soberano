import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BellRing, CalendarDays, MessageCircle, Network, Sparkles } from "lucide-react";
import { WorkshopPneEventCard } from "@/components/events/EventsSection";
import { PageShell } from "@/components/PageShell";
import { CommunityWaitlistForm } from "@/components/waitlist/CommunityWaitlistForm";
import { WaitlistHero } from "@/components/waitlist/WaitlistHero";
import { WAITLIST_PATH } from "@/lib/waitlist";

const title = "Próximos encontros · Fila de espera";
const description = "Conheça a fila de espera dos eventos Caminho Soberano e entre para a comunidade no WhatsApp. Bitcoin, autocustódia, IA e Nova Economia.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: WAITLIST_PATH },
  openGraph: { title, description, url: WAITLIST_PATH, images: [{ url: "/images/gallery/gallery-12.jpg", alt: "Encontro Caminho Soberano" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/gallery/gallery-12.jpg"] },
};

const communityBenefits = [
  { icon: BellRing, title: "Novidades em primeira mão", text: "Saiba antes de todo mundo sobre novos eventos, lotes de ingressos e cidades confirmadas." },
  { icon: Sparkles, title: "Conteúdo que vale a pena", text: "Bitcoin, autocustódia, IA e Nova Economia em uma linguagem prática, para aplicar no dia a dia." },
  { icon: Network, title: "Conexões de verdade", text: "Converse com contadores, empreendedores e profissionais que estão no mesmo caminho que você." },
  { icon: CalendarDays, title: "Encontros perto de você", text: "Sua cidade e sua região ajudam a decidir onde acontecem os próximos eventos." },
];

const faqs = [
  ["A lista garante minha vaga no evento?", "A lista registra seu interesse. A participação será confirmada separadamente, quando as inscrições e as condições do evento forem divulgadas."],
  ["Posso sugerir um evento na minha cidade?", "Sim. O formulário tem espaço para sua cidade desejada e seus temas de interesse. Essas preferências vão ajudar a planejar novas edições."],
  ["Como meus dados são usados?", "Seu nome, contato, cidade e preferências ficam guardados com segurança e são usados apenas pela equipe do Caminho Soberano para planejar os próximos encontros e avisar você sobre eles. Você pode pedir a remoção a qualquer momento."],
  ["Quando vou receber o convite para o grupo do WhatsApp?", "Depois de preencher o formulário da comunidade, você será convidado em breve pelo WhatsApp que informou. Confira se o número está correto, com DDD."],
];

export default function WaitlistPage() {
  return (
    <PageShell flushHero>
      <WaitlistHero />

      <section id="proximos-eventos" className="scroll-mt-24 border-y border-white/10 bg-[#0b1f38] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Próximos eventos</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Qual será o seu próximo encontro?</h2>
            </div>
            <Link href="/eventos" className="inline-flex items-center gap-2 text-sm font-semibold text-accent">Ver todos os eventos <ArrowUpRight size={16} /></Link>
          </div>
          <WorkshopPneEventCard className="mt-10" />
        </div>
      </section>

      <section id="comunidade" className="relative scroll-mt-24 overflow-hidden bg-[#020b16] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_100%_20%,rgba(37,211,102,0.08),transparent_50%),radial-gradient(ellipse_at_0%_90%,rgba(35,100,165,0.18),transparent_55%)]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-start gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#5ee08f]">
              <MessageCircle size={14} />
              Comunidade no WhatsApp
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">Faça parte da comunidade Caminho Soberano.</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">Um grupo no WhatsApp para quem quer aprender, trocar experiências e acompanhar de perto os próximos passos da comunidade.</p>
            <div className="mt-10 grid gap-7 sm:grid-cols-2">
              {communityBenefits.map(({ icon: Icon, title, text }) => (
                <div key={title}>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent"><Icon size={18} strokeWidth={1.75} /></span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <CommunityWaitlistForm />
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#061426] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div><MessageCircle className="text-accent" size={28} /><h2 className="mt-5 text-3xl font-bold tracking-tight text-white">Antes do próximo passo.</h2><p className="mt-4 text-sm leading-relaxed text-slate-400">Tudo o que você precisa saber sobre a lista de espera e o grupo.</p><a href="#cadastro" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">Entrar na lista <ArrowUpRight size={16} /></a></div>
          <div className="divide-y divide-white/10">
            {faqs.map(([question, answer]) => <details key={question} className="group py-5 first:pt-0"><summary className="cursor-pointer text-base font-semibold text-white marker:text-accent">{question}</summary><p className="mt-3 text-sm leading-relaxed text-slate-400">{answer}</p></details>)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
