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
                    href={siteContact.supportPhoneHref}
                    className="transition hover:text-accent"
                  >
                    {siteContact.supportPhone}
                  </a>
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
