export function EventInviteSection() {
  return (
    <section id="convite" className="relative overflow-hidden bg-[#f6f1e8] text-[#1a0e06]">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c46a00]">
            18 a 21 de novembro
          </p>
          <h2 className="mt-3 max-w-[12em] text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Venha segurar a sua própria carteira
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#1a0e06]/75 md:text-lg">
            Quatro dias em São Paulo para sair da teoria. Você vê a hardware
            wallet na mão, entende o que protege o patrimônio e pratica o
            Bitcoin com quem já faz isso todo dia.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#1a0e06]/75 md:text-lg">
            Não é palestra para anotar e esquecer. É convite para custódia,
            segurança e uma rede que continua depois do evento.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-[2rem] border border-[#1a0e06]/10 bg-[#1a0e06] shadow-[0_30px_60px_-30px_rgba(26,14,6,0.45)]">
            <video
              src="/videos/hardwallet.mp4"
              className="aspect-[9/16] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Tarcísio mostrando uma hardware wallet"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
