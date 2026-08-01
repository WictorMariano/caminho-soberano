import Link from "next/link";
import Image from "next/image";

import { legalLinks, siteContact, socialLinks } from "@/lib/site";

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
    <footer className="border-t border-transparent bg-black">
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-12">
        {/* Linha superior: marca | contato + links | redes */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/brand/logo-mark.png"
              alt="Caminho Soberano"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span className="leading-none">
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/75">
                Caminho
              </span>
              <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-white">
                Soberano
              </span>
            </span>
          </Link>

          <div className="grid flex-1 gap-8 sm:grid-cols-2 md:max-w-xl md:justify-self-center lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                Contato
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
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
                    Suporte: {siteContact.supportPhone}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
                Links úteis
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {legalLinks.map((link) => (
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

          <div className="flex shrink-0 items-center gap-5 md:pt-1">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/80 transition hover:text-accent"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        {/* Linha inferior: copyright | agência */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-end sm:justify-between">
          <p>Copyright © {year}. Todos os direitos reservados</p>
          <div className="sm:text-right">
            <p className="uppercase tracking-[0.16em]">Agência Machado Digital</p>
            <p className="mt-1">26.098.577/0001-71</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
