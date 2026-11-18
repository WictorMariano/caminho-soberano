"use client";

import { useEffect, useState } from "react";
import { Megaphone, BellRing, Plus, Trash2 } from "lucide-react";

import {
  ANNOUNCEMENTS_STORAGE_KEY,
  NOTICES_STORAGE_KEY,
  defaultAnnouncements,
  defaultNotices,
  parseAnnouncements,
  parseNotices,
  type MemberAnnouncement,
  type MemberNotice,
} from "@/lib/membros/comms";

export function AnnouncementsAdminPanel() {
  const [items, setItems] = useState<MemberAnnouncement[]>(defaultAnnouncements);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setItems(
      parseAnnouncements(window.localStorage.getItem(ANNOUNCEMENTS_STORAGE_KEY)),
    );
  }, []);

  function persist(next: MemberAnnouncement[]) {
    setItems(next);
    window.localStorage.setItem(ANNOUNCEMENTS_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("cs-announcements-updated"));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  }

  function update(id: string, patch: Partial<MemberAnnouncement>) {
    persist(items.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  }

  function addItem() {
    const id = `anuncio-${Date.now()}`;
    persist([
      {
        id,
        title: "Novo anúncio",
        text: "Escreva o texto do banner para os membros.",
        ctaLabel: "Saiba mais",
        ctaHref: "/membros",
        image: "/images/gallery/gallery-12.jpg",
        active: true,
      },
      ...items,
    ]);
  }

  function removeItem(id: string) {
    persist(items.filter((item) => item.id !== id));
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-slate-400">
          Os banners ativos aparecem no carrossel da home dos membros.
        </p>
        <button
          type="button"
          onClick={addItem}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-ink"
        >
          <Plus size={16} /> Novo banner
        </button>
      </div>
      {saved ? (
        <p className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
          Anúncios salvos neste navegador (demo).
        </p>
      ) : null}
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="rounded-2xl border border-white/10 bg-[#081a2e] p-5"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                <Megaphone size={16} /> Banner
              </p>
              <div className="flex items-center gap-3">
                <label className="inline-flex items-center gap-2 text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={item.active}
                    onChange={(event) =>
                      update(item.id, { active: event.target.checked })
                    }
                    className="accent-[#fff100]"
                  />
                  Ativo
                </label>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-slate-400 hover:text-red-300"
                  aria-label="Remover anúncio"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Field
                label="Título"
                value={item.title}
                onChange={(value) => update(item.id, { title: value })}
              />
              <Field
                label="Imagem (caminho)"
                value={item.image}
                onChange={(value) => update(item.id, { image: value })}
              />
              <Field
                label="CTA"
                value={item.ctaLabel ?? ""}
                onChange={(value) => update(item.id, { ctaLabel: value })}
              />
              <Field
                label="Link do CTA"
                value={item.ctaHref ?? ""}
                onChange={(value) => update(item.id, { ctaHref: value })}
              />
            </div>
            <label className="mt-3 block text-xs text-slate-400">
              Texto
              <textarea
                value={item.text}
                onChange={(event) => update(item.id, { text: event.target.value })}
                rows={3}
                className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#061222] px-3 py-2.5 text-sm text-white outline-none focus:border-accent"
              />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NoticesAdminPanel() {
  const [items, setItems] = useState<MemberNotice[]>(defaultNotices);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setItems(parseNotices(window.localStorage.getItem(NOTICES_STORAGE_KEY)));
  }, []);

  function persist(next: MemberNotice[]) {
    setItems(next);
    window.localStorage.setItem(NOTICES_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("cs-notices-updated"));
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1600);
  }

  function sendNotice() {
    const cleanTitle = title.trim();
    const cleanBody = body.trim();
    if (cleanTitle.length < 2 || cleanBody.length < 2) return;
    persist([
      {
        id: `aviso-${Date.now()}`,
        title: cleanTitle,
        body: cleanBody,
        createdAt: new Date().toISOString(),
        read: false,
      },
      ...items,
    ]);
    setTitle("");
    setBody("");
  }

  function removeNotice(id: string) {
    persist(items.filter((item) => item.id !== id));
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-[#081a2e] p-5">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          <BellRing size={16} /> Novo aviso rápido
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Aparece no sininho da área de membros, no estilo Instagram.
        </p>
        <div className="mt-4 grid gap-3">
          <Field label="Título" value={title} onChange={setTitle} />
          <label className="block text-xs text-slate-400">
            Mensagem
            <textarea
              value={body}
              onChange={(event) => setBody(event.target.value)}
              rows={3}
              className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#061222] px-3 py-2.5 text-sm text-white outline-none focus:border-accent"
              placeholder="Texto curto para o membro"
            />
          </label>
          <button
            type="button"
            onClick={sendNotice}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-ink"
          >
            Enviar aviso
          </button>
        </div>
        {saved ? (
          <p className="mt-3 text-sm text-emerald-200">
            Aviso enviado neste navegador (demo).
          </p>
        ) : null}
      </div>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-start justify-between gap-3 rounded-2xl border border-white/10 bg-[#081a2e] px-4 py-3.5"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm text-slate-400">{item.body}</p>
              <p className="mt-2 text-[11px] text-slate-500">
                {new Date(item.createdAt).toLocaleString("pt-BR")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => removeNotice(item.id)}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-slate-400 hover:text-red-300"
              aria-label="Remover aviso"
            >
              <Trash2 size={14} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-xs text-slate-400">
      {label}
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#061222] px-3 py-2.5 text-sm text-white outline-none focus:border-accent"
      />
    </label>
  );
}
