"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Bell } from "lucide-react";

import {
  NOTICES_STORAGE_KEY,
  defaultNotices,
  formatNoticeTime,
  parseNotices,
  type MemberNotice,
} from "@/lib/membros/comms";

export function MemberNotificationsBell() {
  const [open, setOpen] = useState(false);
  const [notices, setNotices] = useState<MemberNotice[]>(defaultNotices);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);

  const unread = notices.filter((notice) => !notice.read).length;

  useEffect(() => {
    const sync = () => {
      setNotices(
        parseNotices(window.localStorage.getItem(NOTICES_STORAGE_KEY)),
      );
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("cs-notices-updated", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("cs-notices-updated", sync);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function persist(next: MemberNotice[]) {
    setNotices(next);
    window.localStorage.setItem(NOTICES_STORAGE_KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("cs-notices-updated"));
  }

  function markAllRead() {
    persist(notices.map((notice) => ({ ...notice, read: true })));
  }

  function markOneRead(id: string) {
    persist(
      notices.map((notice) =>
        notice.id === id ? { ...notice, read: true } : notice,
      ),
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label={
          unread > 0 ? `Avisos, ${unread} não lidos` : "Avisos"
        }
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-accent/40 hover:text-accent"
      >
        <Bell size={18} />
        {unread > 0 ? (
          <span className="absolute right-1.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#ff3040] px-1 text-[10px] font-bold leading-none text-white">
            {unread > 9 ? "9+" : unread}
          </span>
        ) : null}
      </button>

      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-label="Avisos"
          className="absolute right-0 z-50 mt-2 w-[min(92vw,22rem)] overflow-hidden rounded-2xl border border-white/15 bg-[#0b1c30] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="text-sm font-semibold text-white">Avisos</p>
            {unread > 0 ? (
              <button
                type="button"
                onClick={markAllRead}
                className="text-xs font-semibold text-accent hover:underline"
              >
                Marcar tudo como lido
              </button>
            ) : null}
          </div>
          <ul className="max-h-[22rem] overflow-y-auto">
            {notices.length === 0 ? (
              <li className="px-4 py-8 text-center text-sm text-slate-400">
                Nenhum aviso por agora.
              </li>
            ) : (
              notices.map((notice) => (
                <li key={notice.id} className="border-b border-white/5 last:border-0">
                  <button
                    type="button"
                    onClick={() => markOneRead(notice.id)}
                    className="flex w-full gap-3 px-4 py-3.5 text-left transition hover:bg-white/[0.04]"
                  >
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                        notice.read ? "bg-transparent" : "bg-[#ff3040]"
                      }`}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-3">
                        <span
                          className={`text-sm font-semibold ${
                            notice.read ? "text-slate-300" : "text-white"
                          }`}
                        >
                          {notice.title}
                        </span>
                        <span className="shrink-0 text-[11px] text-slate-500">
                          {formatNoticeTime(notice.createdAt)}
                        </span>
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-slate-400">
                        {notice.body}
                      </span>
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
