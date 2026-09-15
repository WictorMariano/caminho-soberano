import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { WAITLIST_PATH, nextGathering } from "@/lib/waitlist";

const title = "Próximos encontros · Fila de espera";
const description = "Conheça a fila de espera dos eventos Caminho Soberano. Próximo encontro em 31 de outubro de 2026, em São Paulo. Bitcoin, autocustódia, IA e Nova Economia.";

export const metadata: Metadata = {
  title, description,
  alternates: { canonical: WAITLIST_PATH },
  openGraph: { title, description, url: WAITLIST_PATH, images: [{ url: nextGathering.image, alt: "Encontro Caminho Soberano" }] },
  twitter: { card: "summary_large_image", title, description, images: [nextGathering.image] },
};

const themes = [
  { number: "01", title: "Bitcoin & autocustódia", text: "Conhecimento para compreender o Bitcoin e dar os primeiros passos na custódia dos seus ativos.", image: "/images/gallery/gallery-07.jpg", alt: "Participantes aprendendo em workshop prático" },
  { number: "02", title: "IA & Nova Economia", text: "Novas ferramentas, modelos de negócio e possibilidades para contadores, empresários e profissionais.", image: "/images/gallery/gallery-12.jpg", alt: "Encontro de profissionais do Caminho Soberano" },
  { number: "03", title: "Soberania & patrimônio", text: "Educação para tomar decisões conscientes sobre autonomia financeira e organização patrimonial.", image: "/images/gallery/gallery-06.jpg", alt: "Registro de encontro da comunidade Caminho Soberano" },
];

export default function WaitlistPage() {
  return (
    <PageShell flushHero>
      <section className="relative overflow-hidden bg-[#020b16] pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_25%,rgba(35,100,165,0.25),transparent_55%),radial-gradient(ellipse_at_100%_80%,rgba(35,100,165,0.12),transparent_50%)]" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <Link href="/eventos" className="text-xs text-slate-400 transition hover:text-accent">Eventos / Próximos encontros</Link>
            <p className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />O próximo encontro começa com você</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-200">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-3 py-2"><CalendarDays size={14} className="text-accent" />31 de outubro de 2026</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2"><MapPin size={14} className="text-accent" />São Paulo, SP</span>
            </div>
            <h1 className="mt-5 text-[2.9rem] font-extrabold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-[4.1rem]">Novas ideias.<br />Novas conexões.<br /><span className="text-accent">Seu próximo passo.</span></h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">Bitcoin, inteligência artificial e soberania. Encontros para ampliar sua visão e transformar conhecimento em prática.</p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400">Para contadores, empreendedores e pessoas que querem entender a Nova Economia. Escolha os temas e ajude a definir os próximos destinos.</p>
            <a href="#cadastro" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent lg:hidden">Conheça a lista de espera <ArrowDown size={16} /></a>
            <div className="relative mt-9 overflow-hidden rounded-[1.75rem] border border-white/15">
              <div className="relative aspect-[16/10]">
                <Image src={nextGathering.image} alt="Participantes de um encontro anterior do Caminho Soberano" fill preload sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-transparent to-transparent" aria-hidden />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#020b16]/65 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">Encontros Caminho Soberano</span>
              </div>
              <div className="relative -mt-10 flex items-center gap-5 bg-gradient-to-t from-[#061426] via-[#061426] to-transparent px-5 pb-6 pt-8 sm:px-7">
                <div className="shrink-0 border-r border-white/15 pr-5 text-center"><span className="block text-5xl font-extrabold leading-none text-accent">31</span><span className="mt-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white">Out / 2026</span></div>
                <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">Reserve a data</p><h2 className="mt-1 text-xl font-bold text-white">Nos vemos em São Paulo.</h2><p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400"><MapPin size={13} />São Paulo, SP · Local a divulgar</p></div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">Foto de encontro anterior. A programação e o local de 31/10 serão divulgados em breve.</p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0b1f38] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Uma comunidade. Muitas possibilidades.</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">Qual será o seu próximo encontro?</h2></div><p className="max-w-xs text-sm leading-relaxed text-slate-400">Seus interesses ajudam a orientar os próximos workshops e programas.</p></div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {themes.map((theme) => <article key={theme.number} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#08192c]">
              <div className="relative aspect-[16/10] overflow-hidden"><Image src={theme.image} alt={theme.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#08192c] to-transparent" aria-hidden /><span className="absolute bottom-4 left-5 text-xs font-semibold text-accent">{theme.number} / EXPLORE</span></div>
              <div className="p-6 pt-2"><h3 className="text-xl font-semibold text-white">{theme.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-400">{theme.text}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#061426] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
          <div><CalendarDays className="text-accent" size={28} /><h2 className="mt-5 text-3xl font-bold tracking-tight text-white">Antes do próximo passo.</h2><p className="mt-4 text-sm leading-relaxed text-slate-400">Tudo o que você precisa saber sobre a fila de espera.</p><Link href="/eventos" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">Explore todos os eventos <ArrowUpRight size={16} /></Link></div>
          <div className="divide-y divide-white/10">
            {[
              ["A lista garante minha vaga no evento?", "A lista registra seu interesse. A participação será confirmada separadamente, quando as inscrições e as condições do evento forem divulgadas."],
              ["Posso sugerir um evento na minha cidade?", "Sim. O formulário tem espaço para sua cidade desejada e seus temas de interesse. Essas preferências vão ajudar a planejar novas edições."],
              ["Quando poderei me cadastrar?", "A abertura dos cadastros será divulgada em breve. Por enquanto, o formulário apresenta as informações que serão solicitadas e não envia nem armazena dados."],
            ].map(([question, answer]) => <details key={question} className="group py-5 first:pt-0"><summary className="cursor-pointer text-base font-semibold text-white marker:text-accent">{question}</summary><p className="mt-3 text-sm leading-relaxed text-slate-400">{answer}</p></details>)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
