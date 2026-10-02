import Link from "next/link";
import Image from "next/image";

import {
  footerLegalPages,
  siteContact,
  sitePages,
  socialLinks,
} from "@/lib/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.258 5.686L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  );
}

function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.05 21.5h-.01a9.43 9.43 0 0 1-4.81-1.32l-.34-.2-3.58.94.96-3.49-.23-.36a9.42 9.42 0 0 1-1.44-5.03c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.38 9.38 0 0 1 2.77 6.68c0 5.2-4.24 9.45-9.44 9.45Zm8.04-17.49A11.3 11.3 0 0 0 12.05.68C5.78.68.68 5.78.68 12.05c0 2 .52 3.96 1.52 5.69L.58 23.32l5.7-1.5a11.33 11.33 0 0 0 5.77 1.47c6.27 0 11.37-5.1 11.37-11.37 0-3.04-1.18-5.89-3.33-8.04Z" />
    </svg>
  );
}

const socials = [
  {
    href: socialLinks.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: socialLinks.x,
    label: "X / Twitter",
    icon: XIcon,
  },
  {
    href: socialLinks.youtube,
    label: "YouTube",
    icon: YoutubeIcon,
  },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050b1a]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,_rgba(70,160,255,0.12),_transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/images/brand/logo-mark.png"
                alt="Caminho Soberano"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="leading-none">
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Caminho
                </span>
                <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-white">
                  Soberano
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Liberdade financeira com Bitcoin: eventos presenciais, conteúdo
              prático e comunidade para quem busca soberania de verdade.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/80 transition hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Páginas
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm text-white/75 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-1">
                {sitePages.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Contato
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/75">
                <li>
                  <a
                    href={`mailto:${siteContact.email}`}
                    className="transition hover:text-accent"
                  >
                    {siteContact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteContact.supportWhatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-[#062b14] shadow-[0_10px_24px_-12px_rgba(37,211,102,0.7)] transition hover:brightness-95"
                  >
                    <WhatsappIcon className="h-[18px] w-[18px]" />
                    Falar no WhatsApp
                  </a>
                  <p className="mt-2 text-xs text-white/55">
                    Suporte: {siteContact.supportPhone}
                  </p>
                </li>
                <li>
                  <Link
                    href="/lista-de-espera"
                    className="inline-flex items-center gap-1.5 font-medium text-white transition hover:text-accent"
                  >
                    Próximos encontros
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Legal
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                {footerLegalPages.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {year} Caminho Soberano. Todos os direitos reservados.</p>
          <div className="sm:text-right">
            <p className="uppercase tracking-[0.16em]">Agência Machado Digital</p>
            <p className="mt-1">26.098.577/0001-71</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
